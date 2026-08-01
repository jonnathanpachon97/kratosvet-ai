from app.rag.loaders.pdf_loader import PDFLoaderService
from app.rag.splitter.text_splitter import TextSplitterService

loader = PDFLoaderService("data/documents")

documents = loader.load_documents()

print(f"Documentos cargados: {len(documents)}")

splitter = TextSplitterService()

chunks = splitter.split_documents(documents)

print(f"Chunks generados: {len(chunks)}")

print()

print(chunks[0].page_content[:500])