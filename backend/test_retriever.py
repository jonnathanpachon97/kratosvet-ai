from app.rag.retriever.retriever_service import RetrieverService

retriever = RetrieverService()

docs = retriever.retrieve(
    "alimentación bulldog francés dieta nutrición comida"
)

print("=" * 80)

for i, doc in enumerate(docs):

    print(f"\nDOCUMENTO {i+1}")
    print("-" * 80)

    print("Metadata:")
    print(doc.metadata)

    print("\nContenido:")

    print(doc.page_content)