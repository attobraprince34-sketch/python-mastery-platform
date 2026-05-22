from fastapi import APIRouter
from app.models.schemas import CodeExecutionRequest, CodeExecutionResponse
import subprocess
import tempfile
import time
import os

router = APIRouter()


@router.post("/execute")
async def execute_code(request: CodeExecutionRequest):
    if request.language != "python":
        return CodeExecutionResponse(
            output="",
            error=f"Language '{request.language}' not supported. Only Python is available.",
            execution_time=0.0,
        )

    with tempfile.NamedTemporaryFile(mode="w", suffix=".py", delete=False) as f:
        f.write(request.code)
        f.flush()
        temp_path = f.name

    try:
        start = time.time()
        result = subprocess.run(
            ["python3", temp_path],
            capture_output=True,
            text=True,
            timeout=10,
            env={**os.environ, "PYTHONDONTWRITEBYTECODE": "1"},
        )
        elapsed = time.time() - start

        return CodeExecutionResponse(
            output=result.stdout,
            error=result.stderr if result.returncode != 0 else None,
            execution_time=round(elapsed, 4),
        )
    except subprocess.TimeoutExpired:
        return CodeExecutionResponse(
            output="",
            error="Execution timed out (10s limit)",
            execution_time=10.0,
        )
    except Exception as e:
        return CodeExecutionResponse(
            output="",
            error=str(e),
            execution_time=0.0,
        )
    finally:
        os.unlink(temp_path)
