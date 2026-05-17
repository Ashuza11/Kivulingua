"use client";

import { useTranslations } from "next-intl";
import { Mic, Database, Languages, Users } from "lucide-react";

export default function Hero() {
    const t = useTranslations("Hero");

    return (
        <section className="relative overflow-hidden pt-40 pb-28">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#1E4D3A]/10 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

                {/* LEFT CONTENT */}
                <div>
                    <div className="mb-6 inline-flex rounded-full border border-[#1E4D3A]/10 bg-[#1E4D3A]/10 px-4 py-2 text-sm font-medium text-[#1E4D3A]">
                        {t("badge")}
                    </div>

                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#111111] md:text-6xl">
                        {t("title")}
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70">
                        {t("description")}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="rounded-full bg-[#1E4D3A] px-7 py-4 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-[#163829]">
                            {t("primaryButton")}
                        </button>

                        <button className="rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-medium transition hover:border-[#1E4D3A]">
                            {t("secondaryButton")}
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE STATS */}
                {/* RIGHT SIDE STATS */}
                <div className="grid gap-5 sm:grid-cols-2">

                    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E4D3A]/10 text-[#1E4D3A]">
                            <Users size={24} />
                        </div>

                        <h3 className="text-3xl font-bold">
                            {t("stats.community.value")}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-black/60">
                            {t("stats.community.description")}
                        </p>
                    </div>

                    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7A4E2D]/10 text-[#7A4E2D]">
                            <Languages size={24} />
                        </div>

                        <h3 className="text-3xl font-bold">
                            {t("stats.languages.value")}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-black/60">
                            {t("stats.languages.description")}
                        </p>
                    </div>

                    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2D6A8A]/10 text-[#2D6A8A]">
                            <Mic size={24} />
                        </div>

                        <h3 className="text-3xl font-bold">
                            {t("stats.audio.value")}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-black/60">
                            {t("stats.audio.description")}
                        </p>
                    </div>

                    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B08968]/10 text-[#7A4E2D]">
                            <Database size={24} />
                        </div>

                        <h3 className="text-3xl font-bold">
                            {t("stats.open.value")}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-black/60">
                            {t("stats.open.description")}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}