import { useTranslation } from 'react-i18next'
import HeroBannerImage from '../assets/hero-banner.jpg'
import React from 'react'

export function HeroBanner() {
    const { t } = useTranslation()
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
            <img
                src={HeroBannerImage}
                alt="Zamonaviy shahar manzarasi - Islomiy moliya xizmatlari"
                fill
                className="object-cover object-center"
                priority
            />

            <div className="absolute inset-0 bg-gradient-to-r" />

            <div className="absolute top-1/4 z-10 flex items-center px-4 md:px-8 lg:px-12">
                <div className="max-w-2xl">
                    <div className="bg-white/95 rounded-2xl p-6 md:p-8 border border-white/20">
                        <div className="mb-2">
                            <svg
                                className="w-10 h-10 md:w-12 md:h-12 text-emerald-600"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>

                        <blockquote className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium mb-4 text-balance">
                            {t("O'zbekistonda islomiy moliya xizmatlarini joriy etish bo'yicha huquqiy bazani yaratish vaqti-soati keldi. Bunga Islom taraqqiyot banki va boshqa xalqaro moliya tashkilotlari ekspertlari jalb etiladi.")}
                        </blockquote>

                        <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                            <div className="w-1 h-12 bg-emerald-600 rounded-full" />
                            <div>
                                <p className="text-gray-900 font-bold text-lg md:text-xl">
                                    Shavkat Mirziyoyev
                                </p>
                                <p className="text-emerald-700 font-medium text-sm md:text-base uppercase tracking-wide">
                                    {t("O'zbekiston Respublikasi Prezidenti")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    )
}
