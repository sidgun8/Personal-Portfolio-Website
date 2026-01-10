import ContactCard from "@/components/ContactCard";
import { Metadata } from "next";
import Heading from "../../components/Heading";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Connect With Me",
    description: "Connect With Me",
};

function Contact() {
    return (
        <section className="text-primary py-8 md:py-16 relative" id="contact">
            <div className="container mx-auto w-[90%] md:w-8/12">
                <Heading name={"CONTACT ME!"} heading_desc={"Connect With Me"} />

                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-14">
                    <ContactCard />
                    <div className="w-full border p-6 rounded-xl">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                            Get in Touch
                        </h3>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;