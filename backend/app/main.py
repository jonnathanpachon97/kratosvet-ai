from fastapi import FastAPI

from app.api.health import router as health_router
from app.core.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Asistente Veterinario Inteligente basado en IA Generativa y RAG"
)

app.include_router(health_router)

@app.get("/")
def root():
    return {
        "message": "Bienvenido a KratosVet AI 🐶"
    }