import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '@/components/ui/chat/chat-bubble';
import { BrainCircuit } from 'lucide-react';
import { useEffect, useState } from 'react';
import FormattedMessage from './FormattedMessage';

const Message = ({ variant, message, thinking = false }: { variant: 'sent' | 'received', message: string, thinking?: boolean }) => {
    const [dots, setDots] = useState<string>(".");

    useEffect(() => {
        const dotInterval = setInterval(() => {
            setDots((prevDots) => {
                if (prevDots === "...") {
                    return ".";
                }
                return prevDots + ".";
            });
        }, 500);

        return () => clearInterval(dotInterval);
    }, []);

    return (
        <>
            {thinking ?
                <ChatBubble variant={variant} className='w-full'>
                    <ChatBubbleAvatar fallback="Ai" className="font-bold" />
                    <ChatBubbleMessage className='w-1/2 flex items-center gap-2'>
                        <BrainCircuit strokeWidth={1.7} className='w-5 h-5' />
                        Thinking{dots}
                    </ChatBubbleMessage>
                </ChatBubble>

                :

                <ChatBubble variant={variant}>
                    <ChatBubbleAvatar fallback={variant === 'sent' ? "You" : "Ai"} className="font-bold" />
                    <ChatBubbleMessage>
                        <FormattedMessage message={message} />
                    </ChatBubbleMessage>
                </ChatBubble>
            }

        </>
    )
}

export default Message