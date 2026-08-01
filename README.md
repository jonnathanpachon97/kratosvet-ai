# 🐶 KratosVet AI

Asistente Veterinario Inteligente basado en IA Generativa y RAG para propietarios de perros, con enfoque inicial en Bulldogs Franceses.

Proyecto Final del Diplomado en Inteligencia Artificial Generativa.

---

# 🚀 Tecnologías utilizadas

- Python 3.14
- FastAPI
- LangChain 1.x
- OpenAI API
- ChromaDB
- Pydantic Settings
- Git & GitHub

---

# 📂 Arquitectura

```
KratosVetAI/

│

├── backend/

│   ├── app/

│   │   ├── api/

│   │   ├── core/

│   │   ├── prompts/

│   │   ├── rag/

│   │   │      ├── embeddings/

│   │   │      ├── loaders/

│   │   │      ├── retriever/

│   │   │      ├── splitter/

│   │   │      └── vectorstore/

│   │   ├── schemas/

│   │   └── services/

│   │

│   ├── data/

│   │      ├── chroma_db/

│   │      └── documents/

│   │

│   ├── scripts/

│   │      build_vector_db.py

│   │

│   ├── .env

│   ├── requirements.txt

│   └── main.py

│

├── frontend/

│

└── docs/
```

---

# 🧠 Arquitectura RAG

```
Usuario

↓

FastAPI

↓

Retriever

↓

ChromaDB

↓

Embeddings OpenAI

↓

GPT-4.1-mini

↓

Respuesta fundamentada
```

---

# 📚 Base de conocimiento

Actualmente el sistema indexa documentación relacionada con:

- Bulldog Francés
- Enfermedades comunes
- Alimentación canina
- Primeros auxilios
- Vacunación
- Síndrome braquicefálico
- Cuidados básicos
- Problemas digestivos

---

# ⚙️ Instalación

Crear entorno virtual

```bash
python -m venv .venv
```

Activar entorno

Windows

```bash
source .venv/Scripts/activate
```

Instalar dependencias

```bash
pip install -r requirements.txt
```

---

# Variables de entorno

Crear un archivo `.env`

```env
APP_NAME=KratosVet AI
APP_VERSION=1.0.0
ENVIRONMENT=development
DEBUG=True

OPENAI_API_KEY=YOUR_API_KEY

CHAT_MODEL=gpt-4.1-mini
EMBEDDING_MODEL=text-embedding-3-small
```

---

# Ejecutar la API

```bash
uvicorn app.main:app --reload
```

Swagger

http://127.0.0.1:8000/docs

---

# Construir la base vectorial

```bash
python -m scripts.build_vector_db
```

Este proceso:

- Lee todos los PDFs
- Divide los documentos en chunks
- Genera embeddings mediante OpenAI
- Almacena los vectores en ChromaDB


# Autor

**Jonnathan Pachón**

Proyecto Final - Diplomado IA Generativa