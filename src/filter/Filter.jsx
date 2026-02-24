import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect, useState } from "react";

export function CountriesFilter({
  selectedCountry,
  onCountryChange,
  totalCount,
  filteredCount,
}) {
  const { t } = useTranslation();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get("https://api.ifpc.uz/countries").then((res) => {
      setCountry(res?.data);
    });
  }, []);
  if (!country) return <div>Loading...</div>;
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

          {country?.data?.slice()?.reverse()?.map((country) => (
            <SelectItem key={country?.id} value={country?.id}>
              <div className="flex items-center gap-2 pr-6">
                <img className="w-4.5 h-4.5 object-cover" src={`https://api.ifpc.uz/files/${country?.icon}`} alt="" />
                <span className="font-medium">{country?.name_uz}</span>
                <span className="text-muted-foreground">
                  ({country?.name_en})
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
