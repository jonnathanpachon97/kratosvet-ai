import { useEffect, useRef, useState } from "react";
import { askQuestion } from "../services/chatService";

export default function useChat() {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {

    bottomRef.current?.scrollIntoView({

        behavior: "smooth"

    });

    }, [messages]);

    async function send(question) {

        if (!question.trim()) return;

        setMessages(prev => [
            ...prev,
            {
                role: "user",
                content: question
            }
        ]);

        setLoading(true);

        try {

            const response = await askQuestion(question);

            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    content: response.answer,
                    sources: response.sources
                }
            ]);

        } catch {

            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    content: "Ocurrió un error."
                }
            ]);

        } finally {

            setLoading(false);

        }

    }

    return {

        messages,
        loading,
        send,
        bottomRef

    };

}