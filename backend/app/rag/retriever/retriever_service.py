from langchain_chroma import Chroma

from app.rag.embeddings.embedding_service import EmbeddingService


class RetrieverService:

    def __init__(self):

        self.db = Chroma(
            persist_directory="data/chroma_db",
            embedding_function=EmbeddingService().get_embeddings()
        )

    def retrieve(self, query: str, k: int = 4):

        retriever = self.db.as_retriever(
            search_kwargs={"k": k}
        )

        return retriever.invoke(query)