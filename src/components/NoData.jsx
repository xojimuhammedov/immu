import { useTranslation } from "react-i18next"
import { cn } from "../lib/utils"


function DefaultIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-24 w-24 rounded-full bg-muted/60" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative text-muted-foreground/60"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="17" x2="22" y1="8" y2="13" />
        <line x1="22" x2="17" y1="8" y2="13" />
      </svg>
    </div>
  )
}

export default function NoData({
  icon,
  className,
}) {
    const {t} = useTranslation()
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl shadow-lg mt-8 bg-card px-6 py-16 text-center",
        className
      )}
    >
      <div className="mb-4 bg-gray-100 p-6 flex items-center justify-center rounded-full">{icon || <DefaultIcon />}</div>

      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {t("Ma'lumot topilmadi")}
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        {t("Hozircha ushbu davlat bo'yicha a'zo ma'lumotlari mavjud emas.")}
      </p>
    </div>
  )
}
