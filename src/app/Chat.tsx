"use client";

import { Button } from "@/components/ui/button";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import {
  ExpandableChat,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/chat/expandable-chat";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import Message from "./Message";
import Talk from "./Talk";
import { getAnswer } from "./(actions)/actions";

interface MessageType {
  message: string;
  sent: boolean;
  thinking?: boolean;
}

export const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [isGettingAns, setIsGettingAns] = useState<boolean>(false);

  const [allMessages, setAllMessages] = useState<MessageType[]>([
    { sent: false, message: "Hey There! I am AI Bot." },
    { sent: false, message: "You can ask me anything about Arjun! I’ve been provided with his resume and key details, so I can answer your questions based on the information I know about him." },
  ]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const maxCharacters = 500;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMessages = localStorage.getItem("chatMessages");
      if (savedMessages) {
        setAllMessages(JSON.parse(savedMessages));
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    setAllMessages((prev) => [
      ...prev,
      { sent: true, message: message.trim() },
    ]);

    setMessage("");

    try {
      setIsGettingAns(true);

      setAllMessages((prev) => [
        ...prev,
        { sent: false, message: "thinking...", thinking: true },
      ]);

      const data = await getAnswer(message.trim());

      setAllMessages((prev) => {
        const updatedMessages = [...prev];
        const lastMessageIndex = updatedMessages.length - 1;

        updatedMessages[lastMessageIndex] = {
          ...updatedMessages[lastMessageIndex],
          message: data.message as string,
          thinking: false,
        };

        if (typeof window !== "undefined") {
          localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        }

        return updatedMessages;
      });
    } catch (error) {
      console.error("Error during transcription:", error);
      alert("Failed to get the answer. Please try again.");
    } finally {
      setIsGettingAns(false);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      const target = textareaRef.current;
      target.style.height = "auto";
      target.style.height = `${Math.min(target.scrollHeight, 320)}px`;
      textareaRef.current.focus();
    }
  }, [message]);

  return (
    <ExpandableChat
      size="xl"
      position="bottom-right"
      className="shadow-2xl shadow-gray-200/20"
    >
      <ExpandableChatBody>
        <ChatMessageList className="dark:bg-muted/40">
          {allMessages.map(({ message, sent, thinking }, index) => (
            <Message
              key={index}
              variant={sent ? "sent" : "received"}
              message={message}
              thinking={thinking}
            />
          ))}
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter className="p-2">
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && !isGettingAns) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          className="flex flex-col relative gap-2 border rounded-xl p-2"
        >
          <Textarea
            ref={textareaRef}
            className="min-h-12 shadow-none max-h-44 px-2 py-0 bg-background placeholder:text-muted-foreground w-full flex items-center h-auto border-none resize-none overflow-y-auto focus-visible:ring-0 font-medium"
            value={message}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= maxCharacters) {
                setMessage(input);
              }
            }}
            rows={1}
            placeholder="Type your question, or use mic to record..."
          />

          <div className="w-full flex justify-between items-end">
            <p
              className={`text-xs font-medium text-primary/50`}
            >
              {message.length}/{maxCharacters}
            </p>
            <div className="flex items-center gap-2">
              <Talk
                setResult={(newMessage: string) =>
                  setMessage((prev) =>
                    prev.length + newMessage.length <= maxCharacters
                      ? `${prev.trim()} ${newMessage.trim()}`
                      : prev
                  )
                }
                isGettingAns={isGettingAns}
              />
              <Button
                className="transform rounded-full"
                size="icon"
                type="submit"
                disabled={isGettingAns || message.trim().length === 0}
              >
                <Send className="size-5" />
              </Button>
            </div>
          </div>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
};