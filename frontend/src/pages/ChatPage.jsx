import Header from "../components/Header";
import ChatInput from "../components/ChatInput";
import MessageBubble from "../components/MessageBubble";
import Loading from "../components/Loading";
import useChat from "../hooks/useChat";
import QuickQuestions from "../components/QuickQuestions";
import Footer from "../components/Footer";

export default function ChatPage() {

    const {
        messages,
        loading,
        send,
        bottomRef
    } = useChat();

    return (

        <div className="min-h-screen bg-slate-900 text-white">

            <Header />

            <div className="max-w-5xl mx-auto p-6">

                <div className="min-h-[500px]">

                    {

                        messages.length === 0 && (

                            <>

                                <div className="mb-8 rounded-2xl bg-slate-800 p-6 shadow-lg">

                                    <h2 className="text-2xl font-bold text-cyan-400">

                                        👋 Hola, soy KratosVet AI

                                    </h2>

                                    <p className="mt-3 text-slate-300">

                                        Soy un asistente veterinario basado en Inteligencia Artificial
                                        Generativa y RAG.

                                    </p>

                                    <p className="mt-2 text-slate-400">

                                        Puedes preguntarme sobre alimentación, vacunas,
                                        enfermedades, primeros auxilios y cuidados del Bulldog Francés.

                                    </p>

                                </div>

                                <QuickQuestions
                                    onSelect={send}
                                />

                            </>

                        )

                    }

                    {

                        messages.map((message, index) => (

                            <MessageBubble
                                key={index}
                                message={message}
                            />

                        ))

                    }

                    {

                        loading &&

                        <Loading />

                    }

                </div>

                <div ref={bottomRef}></div>

                <ChatInput
                    onSend={send}
                    loading={loading}
                />
            <Footer />
            
            </div>

        </div>

    );

}