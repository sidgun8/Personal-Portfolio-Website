"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import * as React from "react"

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Button } from "./ui/button"
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import Image from "next/image"


export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    const path = usePathname();
    const router = useRouter()

    const onOpenChange = React.useCallback(
        (open: boolean) => {
            setOpen(open)
        },
        []
    )

    const mobileNavLinks = [
        // { name: "About", link: "/about" },
        { name: "Skills", link: "/skills" },
        { name: "Experience", link: "/experience" },
        { name: "Education", link: "/education" },
        { name: "Research", link: "/research" },
        { name: "Awards", link: "/awards" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
    ]

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerTrigger asChild>
                <Button
                    variant="ghost"
                    className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="!size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="min-h-[50vh] max-h-[60svh] p-0">
                <DrawerTitle>
                    <VisuallyHidden>

                    </VisuallyHidden>
                </DrawerTitle>
                <div className="overflow-auto p-10">
                    <div className="flex flex-col justify-center items-center gap-6">
                        {mobileNavLinks.map(({ name, link }, index) => (
                            <Link
                                key={index}
                                href={link}
                                onClick={() => {
                                    router.push(link.toString())
                                    onOpenChange?.(false)
                                }}
                                className={`${path.includes(link) ? 'underline decoration-dotted' : ""}`}
                            >
                                {name}
                            </Link>
                        ))
                        }

                        <Image
                            src={"/images/signature.svg"}
                            alt="signature"
                            className=" mt-4 rotate-[5deg]"
                            height={150}
                            width={150}
                        />
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}