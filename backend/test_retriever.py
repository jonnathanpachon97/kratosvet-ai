from app.rag.retriever.retriever_service import RetrieverService

retriever = RetrieverService()

docs = retriever.retrieve(
    "¿Qué puede comer un bulldog francés?"
)

print("=" * 60)

print(f"Resultados encontrados: {len(docs)}")

print("=" * 60)

for i, doc in enumerate(docs):

    print(f"\nDocumento {i+1}")

    print("-" * 40)

    print(doc.page_content[:700])