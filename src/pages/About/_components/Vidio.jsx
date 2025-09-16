import React from "react";
import VidioImage from "../../../assets/about-banner.webp";
import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";

const Vidio = () => {
  const {t} = useTranslation()
  return (
    <section className="sm:w-full lg:w-7xl mx-auto px-4 sm:px-6 lg:px-5 py-8">
      {/* Video */}
      <div className="relative w-full mb-8 overflow-hidden rounded-lg group">
        <img
          src={VidioImage}
          alt="Video"
          className="w-full h-128 object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
        />

        {/* Oynatish Tugmasi */}
        {/* <button
          type="button"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-white/60 text-[#FFFFFF] rounded-full p-4 shadow-lg 
          transition-all duration-300 hover:bg-[#009688] hover:text-white hover:scale-110 cursor-pointer"
        >
          <Play strokeWidth={3} size={28} />
        </button> */}
      </div>

      {/* Matn */}
      <div className="flex flex-col">
        <h2 className="text-[#009688] font-inter font-bold text-base mb-4 sm:text-lg md:text-xl leading-[100%] tracking-[0]">
          {t("Asosiy vazifalar")}:
        </h2>

        <p className="text-gray-600 font-inter mb-1 font-normal text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.2px]">
          {t("Islomiy moliya bo‘yicha malakali mutaxassislar o‘rtasida hamkorlik va tajriba almashinuvini yo‘lga qo‘yish;")}
        </p>
        <p className="text-gray-600 font-inter font-normal mb-1 text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.2px]">
          {t("Islomiy moliyaga oid seminarlar, treninglar, forumlar, ilmiy-amaliy tadbirlar va davra suhbatlarini tashkil etish;")}
        </p>
        <p className="text-gray-600 font-inter font-normal mb-1 text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.2px]">
          {t("Islomiy moliyaviy mahsulotlar, xizmatlar va qonunchilik bo‘yicha ilmiy-tahliliy tadqiqotlar olib borish;")}
        </p>
        <p className="text-gray-600 font-inter font-normal mb-1 text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.2px]">
          {t("Davlat idoralari, moliyaviy institutlar va xalqaro tashkilotlar bilan hamkorlikni yo‘lga qo‘yish;")}
        </p>
        <p className="text-gray-600 font-inter font-normal mb-1 text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.2px]">   
          {t("Soha mutaxassislarining kasbiy manfaatlarini himoya qilish, ularga axborot, maslahat va yuridik ko‘mak ko‘rsatish;")}
        </p>
        <p className="text-gray-600 font-inter font-normal mb-1 text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.2px]">
          {t("Islomiy moliyaga oid shariat prinsiplari, xalqaro standartlar va ilg‘or tajribalarni targ‘ib qilish;")}
        </p>
        <p className="text-gray-600 font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.2px]">
          {t("Islomiy moliyaviy mahsulotlar, islomiy fintech va blockchain yechimlarini ishlab chiqish va rivojlantirish ustida ishlash;")}
        </p>
      </div>
    </section>
  );
};

export default Vidio;
