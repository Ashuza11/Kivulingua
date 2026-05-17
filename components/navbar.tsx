"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
    const t = useTranslations("Navbar");

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#F8F5F0]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                <a
                    href="/"
                    className="flex items-center gap-3"
                >
                    <Image
                        src="/logo.png"
                        alt="KivuLingua Logo"
                        width={42}
                        height={42}
                        className="object-contain"
                    />

                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-[#1E4D3A]">
                            KivuLingua
                        </h1>

                        <p className="text-xs text-black/50">
                            African Language AI
                        </p>
                    </div>
                </a>

                <div className="hidden items-center gap-8 text-sm font-medium md:flex">

                    <a
                        href="#languages"
                        className="transition hover:text-[#1E4D3A]"
                    >
                        {t("languages")}
                    </a>

                    <a
                        href="#research"
                        className="transition hover:text-[#1E4D3A]"
                    >
                        {t("research")}
                    </a>

                    <a
                        href="#community"
                        className="transition hover:text-[#1E4D3A]"
                    >
                        {t("community")}
                    </a>

                    <a
                        href="#roadmap"
                        className="transition hover:text-[#1E4D3A]"
                    >
                        {t("roadmap")}
                    </a>
                </div>

                <LanguageSwitcher />
            </div>
        </nav>
    );
}