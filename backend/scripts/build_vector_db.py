from app.rag.loaders.pdf_loader import PDFLoaderService
from app.rag.splitter.text_splitter import TextSplitterService
from app.rag.vectorstore.chroma_service import ChromaService


def main():
    print("=" * 60)
    print("🐶 KRATOSVET AI - INDEXADOR DE DOCUMENTOS")
    print("=" * 60)

    # 1. Cargar documentos
    print("\n📚 Cargando PDFs...")
    loader = PDFLoaderService("data/documents")
    documents = loader.load_documents()
    print(f"✅ Documentos cargados: {len(documents)}")

    # 2. Dividir en chunks
    print("\n✂️ Dividiendo documentos...")
    splitter = TextSplitterService()
    chunks = splitter.split_documents(documents)
    print(f"✅ Chunks generados: {len(chunks)}")

    # 3. Crear base vectorial
    print("\n🧠 Generando embeddings y creando ChromaDB...")
    chroma = ChromaService()
    chroma.create_vectorstore(chunks)

    print("\n🎉 Base vectorial creada correctamente.")


if __name__ == "__main__":
    main()