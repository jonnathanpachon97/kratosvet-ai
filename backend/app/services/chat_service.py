from app.schemas.chat import ChatResponse, Source


class ChatService:

    def ask(self, question: str) -> ChatResponse:

        answer = (
            f"Recibí tu pregunta: '{question}'. "
            "Por ahora esta es una respuesta simulada. "
            "En el siguiente sprint será respondida mediante un sistema RAG."
        )

        return ChatResponse(
            answer=answer,
            sources=[
                Source(
                    document="Respuesta simulada",
                    page=1
                )
            ]
        )