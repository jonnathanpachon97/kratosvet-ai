from langchain_chroma import Chroma

from app.rag.embeddings.embedding_service import EmbeddingService


class ChromaService:

    def __init__(self):
        self.embedding_function = EmbeddingService().get_embeddings()

    def create_vectorstore(self, documents):

        vectorstore = Chroma.from_documents(
            documents=documents,
            embedding=self.embedding_function,
            persist_directory="data/chroma_db",
        )

        return vectorstore