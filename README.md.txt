# 🐶 KratosVet AI

## Asistente Veterinario Inteligente basado en IA Generativa y RAG

KratosVet AI es un asistente inteligente especializado en perros de raza Bulldog Francés. El proyecto utiliza Inteligencia Artificial Generativa y la técnica de Retrieval-Augmented Generation (RAG) para responder preguntas apoyándose en documentación veterinaria confiable.

---

## Objetivo

Desarrollar un asistente capaz de brindar orientación sobre:

- Alimentación
- Primeros auxilios
- Vacunación
- Enfermedades comunes
- Cuidados generales
- Comportamiento

Las respuestas estarán respaldadas por documentos veterinarios previamente indexados.

---

# Arquitectura

```
                React
                  │
                  ▼
            FastAPI Backend
                  │
      ┌───────────┴───────────┐
      ▼                       ▼
 Prompt Builder          RAG Service
                              │
                              ▼
                          ChromaDB
                              │
                              ▼
                   Documentación PDF
                              │
                              ▼
                          OpenAI GPT
```

---

# Tecnologías

## Backend

- Python 3.14
- FastAPI
- Uvicorn
- Pydantic

## IA

- OpenAI
- LangChain

## Vector Database

- ChromaDB

## Frontend

- React
- Vite
- TailwindCSS

---

# Estado del Proyecto

| Módulo | Estado |
|---------|--------|
| Arquitectura | ✅ |
| FastAPI | ✅ |
| Swagger | ✅ |
| Health API | ✅ |
| Chat API | ⏳ |
| Prompt Modular | ⏳ |
| LangChain | ⏳ |
| OpenAI | ⏳ |
| ChromaDB | ⏳ |
| React | ⏳ |
| RAG | ⏳ |
| Carga de PDFs | ⏳ |
| Análisis de imágenes | ⏳ |

---

# Estructura

```
backend/

frontend/

docs/
```

---

# Cómo ejecutar

## Backend

```bash
cd backend

source .venv/Scripts/activate

uvicorn app.main:app --reload
```

Swagger:

http://127.0.0.1:8000/docs

---

# Autor

Jonnathan Pachón

Proyecto Final

Diplomado en Inteligencia Artificial Generativa