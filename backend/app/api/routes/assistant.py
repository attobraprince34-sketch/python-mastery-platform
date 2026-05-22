from fastapi import APIRouter
from app.models.schemas import ChatRequest, ChatResponse

router = APIRouter()


def generate_response(message: str) -> str:
    msg = message.lower()

    if any(w in msg for w in ["bonjour", "hello", "salut", "hey"]):
        return (
            "Bonjour ! Je suis votre assistant Python Mastery. "
            "Comment puis-je vous aider aujourd'hui ?\n\n"
            "Je peux vous aider avec :\n"
            "- Concepts Python\n"
            "- Machine Learning & IA\n"
            "- Cybersécurité\n"
            "- Data Science\n"
            "- Et bien plus !"
        )

    if any(w in msg for w in ["décorateur", "decorator"]):
        return (
            "Les **décorateurs** en Python sont des fonctions qui modifient "
            "le comportement d'autres fonctions.\n\n"
            "```python\n"
            "def mon_decorateur(func):\n"
            "    def wrapper(*args, **kwargs):\n"
            '        print("Avant")\n'
            "        result = func(*args, **kwargs)\n"
            '        print("Après")\n'
            "        return result\n"
            "    return wrapper\n\n"
            "@mon_decorateur\n"
            "def saluer(nom):\n"
            '    print(f"Bonjour, {nom}!")\n'
            "```"
        )

    if any(w in msg for w in ["fastapi", "api"]):
        return (
            "**FastAPI** est un framework web moderne pour Python :\n\n"
            "```python\n"
            "from fastapi import FastAPI\n\n"
            "app = FastAPI()\n\n"
            '@app.get("/items/{item_id}")\n'
            "async def read_item(item_id: int):\n"
            '    return {"item_id": item_id}\n'
            "```\n\n"
            "Avantages : rapide, auto-docs, type hints, async natif."
        )

    if any(w in msg for w in ["machine learning", "ml", "ia", "ai"]):
        return (
            "Le **Machine Learning** avec Python utilise principalement :\n\n"
            "- **Scikit-learn** : ML classique\n"
            "- **PyTorch** : Deep Learning\n"
            "- **TensorFlow** : Production ML\n\n"
            "```python\n"
            "from sklearn.ensemble import RandomForestClassifier\n\n"
            "clf = RandomForestClassifier(n_estimators=100)\n"
            "clf.fit(X_train, y_train)\n"
            "accuracy = clf.score(X_test, y_test)\n"
            "```\n\n"
            "Consultez la section IA & ML pour des cours détaillés !"
        )

    return (
        "Excellente question ! Je suis là pour vous aider.\n\n"
        "Voici quelques conseils :\n"
        "1. Explorez les cours dans la section appropriée\n"
        "2. Pratiquez dans le Playground Python\n"
        "3. Consultez la bibliothèque d'outils\n\n"
        "N'hésitez pas à me poser des questions plus spécifiques !"
    )


@router.post("/chat")
async def chat(request: ChatRequest):
    response = generate_response(request.message)
    return ChatResponse(response=response)
