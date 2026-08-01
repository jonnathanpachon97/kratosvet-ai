from app.schemas.chat import ChatResponse, Source
from app.services.rag_service import RAGService


class ChatService:

    def __init__(self):
        self.rag_service = RAGService()

    def ask(self, question: str) -> ChatResponse:

        result = self.rag_service.ask(question)

        return ChatResponse(
            answer=result["answer"],
            sources=[
                Source(
                    document=source["document"],
                    page=source["page"],
                )
                for source in result["sources"]
            ],
        )

        return {
            "answer": response.content,
            "sources": [
                {
                    "document": doc.metadata.get("source", "Desconocido"),
                    "page": doc.metadata.get("page", 1),
                }
                for doc in docs
            ],
        }