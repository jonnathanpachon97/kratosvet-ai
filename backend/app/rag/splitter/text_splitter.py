from langchain_text_splitters import RecursiveCharacterTextSplitter


class TextSplitterService:

    def __init__(self):
        self.splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )

    def split_documents(self, documents):
        return self.splitter.split_documents(documents)