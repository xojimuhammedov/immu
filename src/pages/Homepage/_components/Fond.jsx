import { Users, BookOpen, Building2, Handshake } from "lucide-react"
import React from "react"
import MapImage from '../../../assets/map.jpg'
import { useTranslation } from "react-i18next"


export function CommunitySection() {
  const { t } = useTranslation()

  const tasks = [
    {
      icon: Users,
      title: t("Professional hamkorlik"),
      description: t("Islomiy moliya sohasida faoliyat yuritayotgan malakali mutaxassislar o'rtasida samarali hamkorlikni yo'lga qo'yish hamda bilim va amaliy tajriba almashinuvini rivojlantirish"),
    },
    {
      icon: BookOpen,
      title: t("Ta'lim tadbirlari"),
      description: t("Islomiy moliyaga oid seminarlar, treninglar, forumlar, ilmiy-amaliy konferensiyalar va davra suhbatlarini tashkil etish hamda o'tkazish"),
    },
    {
      icon: Building2,
      title: t("Ilmiy tadqiqotlar"),
      description: t("Islomiy moliyaviy mahsulotlar va xizmatlar, shuningdek, tegishli qonunchilikni takomillashtirish bo'yicha ilmiy-tahliliy tadqiqotlar olib borish"),
    },
    {
      icon: Handshake,
      title: t("Xalqaro hamkorlik"),
      description: t("Davlat idoralari, moliyaviy institutlar, ta'lim muassasalari va xalqaro tashkilotlar bilan o'zaro manfaatli hamkorlik aloqalarini rivojlantirish"),
    },
  ]
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
             {t("Hamjamiyat haqida")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 text-balance">
             {t("Islomiy Moliya Mutaxassislari Hamjamiyati")}
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
            {t("Islomiy moliya sohasida faoliyat yuritayotgan hamda ushbu yo'nalishga qiziqish bildirayotgan mutaxassislarni birlashtirib, bilim va tajriba almashish hamda professional hamkorlikni rivojlantirishga xizmat qiluvchi professional platformadir.")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4 md:p-6">
              <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={MapImage}
                  alt="Global tarmoq - Islomiy moliya hamjamiyati"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center shadow-lg border border-slate-100">
                    <p className="text-emerald-600 text-xl md:text-2xl lg:text-3xl font-bold">50+</p>
                    <p className="text-slate-600 text-xs md:text-sm">{t("Mutaxassislar")}</p>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center shadow-lg border border-slate-100">
                    <p className="text-emerald-600 text-xl md:text-2xl lg:text-3xl font-bold">20+</p>
                    <p className="text-slate-600 text-xs md:text-sm">{t("Tadbirlar")}</p>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center shadow-lg border border-slate-100">
                    <p className="text-emerald-600 text-xl md:text-2xl lg:text-3xl font-bold">10+</p>
                    <p className="text-slate-600 text-xs md:text-sm">{t("Hamkorlar")}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-emerald-200 rounded-full opacity-50 blur-2xl" />
            <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-emerald-300 rounded-full opacity-40 blur-2xl" />
          </div>

          {/* Tasks Side */}
          <div className="order-1 lg:order-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8">
               {t("Hamjamiyatning asosiy vazifalari")}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-4 md:p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                      <task.icon className="w-6 h-6 md:w-7 md:h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold text-base md:text-lg mb-1">
                      {task.title}
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {task.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
