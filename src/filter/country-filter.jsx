import { Globe } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { useTranslation } from "react-i18next"

export function CountryFilter({
  countryList,
  selectedCountry,
  onCountryChange,
  totalCount,
  filteredCount,
}) {
    const {t} = useTranslation()
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 cursor-pointer">
          <Globe className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            {t("A'zolar ro'yxati")}
          </h2>
          <p className="text-sm text-muted-foreground">
            {selectedCountry === "all"
              ? `${t("Jami")} ${totalCount} ${t("ta a'zo")}`
              : `${filteredCount} / ${totalCount} ${t("ta a'zo")}`}
          </p>
        </div>
      </div>

      <Select value={selectedCountry} onValueChange={onCountryChange}>
        <SelectTrigger className="w-[260px]">
          <SelectValue placeholder={t("Davlat tanlang")} />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">
            <div className="flex items-center gap-2 pr-6">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span>{t("Barcha davlatlar")}</span>
            </div>
          </SelectItem>

          {countryList.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <div className="flex items-center gap-2 pr-6">
                <span className="text-base leading-none">{country.flag}</span>
                <span className="font-medium">{country.name_uz}</span>
                <span className="text-muted-foreground">
                  ({country.name_en})
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
