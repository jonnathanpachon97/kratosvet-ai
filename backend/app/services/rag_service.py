from langchain_openai import ChatOpenAI

from app.core.config import settings
from app.rag.retriever.retriever_service import RetrieverService


class RAGService:

    def __init__(self):

        self.retriever = RetrieverService()

        self.llm = ChatOpenAI(
            model=settings.CHAT_MODEL,
            api_key=settings.OPENAI_API_KEY,
            temperature=0.2
        )

    def ask(self, question: str):

        docs = self.retriever.retrieve(question)

        context = "\n\n".join(
            doc.page_content
            for doc in docs
        )

        prompt = f"""
Eres KratosVet AI, un asistente veterinario especializado en perros.

Tu misión es responder utilizando EXCLUSIVAMENTE la información del contexto.

Puedes resumir, explicar e inferir únicamente aquello que esté claramente respaldado por el contexto.

No inventes información.

Si el contexto contiene información parcial, responde con esa información e indica que es la disponible.

Solo responde "No encontré información suficiente en la base documental." cuando el contexto no tenga relación con la pregunta.

===================

CONTEXTO

{context}

===================

PREGUNTA

{question}

===================

RESPUESTA:
"""

        response = self.llm.invoke(prompt)

        return {
            "answer": response.content,
            "sources": [
                {
                    "document": doc.metadata.get("source", "Desconocido"),
                    "page": doc.metadata.get("page", 1)
                }
                for doc in docs
            ]
        }