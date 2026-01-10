"use client"

import { InputBox } from '@/components/InputBox'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import emailjs from "@emailjs/browser"
import { LoaderCircle, Send } from 'lucide-react'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import Talk from '../Talk'

const ContactForm = () => {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [sending, setSending] = useState(false);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setSending(true);

        emailjs
            .send(
                "service_k9gvekn",
                "template_b7fsnly",
                { ...message },
                "vMuEGIiT3GcaIzOWR"
            )
            .then(
                (response) => {
                    console.log("Email sent successfully:", response);
                    toast.success("Message sent");
                    setMessage({ name: "", email: "", message: "" }); // Clear form after success
                    setSending(false);
                },
                (error) => {
                    console.error("Error sending email:", error);
                    toast.error("Error sending message");
                    setSending(false);
                }
            );
    };

    useEffect(() => {
        if (textareaRef.current) {
            const target = textareaRef.current;
            target.style.height = "auto";
            target.style.height = `${Math.min(target.scrollHeight, 100)}px`;
        }
    }, [message]);

    const handleTalkResult = (newMessage: string) => {
        setMessage((prev) => ({
            ...prev,
            message: prev.message.trim()
                ? `${prev.message.trim()} ${newMessage.trim()}`
                : newMessage.trim(),
        }));
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4 text-sm md:text-base"
        >
            <InputBox
                title="Name"
                placeholder="Your name"
                name="name"
                value={message.name}
                onChange={(e) =>
                    setMessage({ ...message, name: e.target.value })
                }
                id="name"
                required
                type="text"
            />

            <InputBox
                title="Email"
                placeholder="Your email"
                name="email"
                value={message.email}
                onChange={(e) =>
                    setMessage({ ...message, email: e.target.value })
                }
                id="email"
                required
                type="email"
            />

            <div className="grid w-full items-center gap-2">

                <Label htmlFor={'message'}>
                    Message
                    <span className="ml-1 font-bold text-primary/50">*</span>
                </Label>

                <div className="border p-2 rounded-md">
                    <Textarea
                        ref={textareaRef}
                        id="message"
                        className="min-h-12 shadow-none max-h-44 px-2 py-0 bg-background placeholder:text-muted-foreground w-full flex items-center h-auto border-none resize-none overflow-y-auto focus-visible:ring-0 font-medium"
                        value={message.message}
                        onChange={(e) =>
                            setMessage({ ...message, message: e.target.value })
                        }
                        rows={1}
                        placeholder="Lazy to type? Record your message."
                    />

                    <div className="w-full flex justify-end">
                        <div className="scale-90">
                            <Talk
                                isGettingAns={false}
                                setResult={handleTalkResult}
                            />
                        </div>
                    </div>

                </div>

            </div>

            <Button
                type="submit"
                className="w-full text-base py-3 px-3 md:py-3 md:px-4 transition duration-300"
                variant={"default"}
            >
                {sending ? (
                    <div>
                        <LoaderCircle className="animate-spin inline-block mr-3 md:mr-4 w-5 h-5 md:w-6 md:h-6" />
                        Sending...
                    </div>
                ) : (
                    <div>
                        <Send className="inline-block mr-3 md:mr-4 w-5 h-5 md:w-6 md:h-6" />
                        Send Message
                    </div>
                )}
            </Button>
        </form>
    )
}

export default ContactForm