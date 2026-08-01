import Header from "../components/Header";
import ChatInput from "../components/ChatInput";
import MessageBubble from "../components/MessageBubble";
import Loading from "../components/Loading";
import useChat from "../hooks/useChat";
import QuickQuestions from "../components/QuickQuestions";

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

                        <QuickQuestions

                        onSelect={send}

                        />

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
                />

            </div>

        </div>

    );

}