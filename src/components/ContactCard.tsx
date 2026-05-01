import { socialLinks } from "@/app/(constants)/socialLinks";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ContactCard = () => {
    return (
        <div
            className="flex items-start flex-col md:relative w-full text-primary">
            <div
                className={`bg-gradient-to-br from-transparent to-secondary border rounded-3xl w-full p-4 md:p-6 flex justify-between items-center gap-3 text-sm md:text-base`}
            >
                <div className="w-full flex flex-col gap-2">
                    <div>
                        <p className="text-xl md:text-3xl font-semibold">Siddharth Srinivasan</p>
                        <span className="text-sm">Industrial AI | Optimization | AI Infra | FDE</span>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 w-full">
                        <Phone strokeWidth={1.7} className="w-5 h-5" />
                        <Link href="tel:+919866558963">

                        +91 9866558963
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4 w-full">
                        <Mail strokeWidth={1.7} className="w-5 h-5" />
                        <Link href="mailto:siddharthsrinivasan2002@gmail.com">
                            siddharthsrinivasan2002@gmail.com
                        </Link>
                    </div>
                </div>

                <div className="w-fit flex flex-col items-center justify-center gap-4">
                    {socialLinks.map((social, index) => (
                        <Link href={social.link} key={index} className="w-fit">
                            <Image
                                src={social.icon}
                                alt={social.icon}
                                className="w-6 h-6"
                                width={44}
                                height={44}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactCard;