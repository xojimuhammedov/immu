import React from "react";
import VidioImage from "../../../assets/AboutImage/vidio.jpg";
import { Play } from "lucide-react";

const Vidio = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-5 py-8">
      {/* Video */}
      <div className="relative w-full max-w-7xl mb-8 overflow-hidden rounded-lg group">
        <img
          src={VidioImage}
          alt="Video"
          className="w-full h-124 object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
        />

        {/* Oynatish Tugmasi */}
        <button
          type="button"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-white/60 text-[#FFFFFF] rounded-full p-4 shadow-lg 
                     transition-all duration-300 hover:bg-[#009688] hover:text-white hover:scale-110 cursor-pointer"
        >
          <Play strokeWidth={3} size={28} />
        </button>
      </div>

      {/* Matn */}
      <div className="flex flex-col gap-6">
        <h2 className="text-[#009688] font-inter font-bold text-base sm:text-lg md:text-xl leading-[100%] tracking-[0]">
          Fondning tashkili topishi hamda tarixi haqida
        </h2>

        <p className="text-gray-600 font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.2px]">
          Xorijda istiqomat qilayotgan vandoshlarni tarixiy Vatani atrofida
          yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish
          tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar
          va ular tomoidan tuzilgan jamoat birlashmalari qiroll-quivvatlash,
          turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyati
          mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy
          maqsadlaridan biri hisoblanadi.
        </p>

        <p className="text-gray-600 font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.2px]">
          Xorijda istiqomat qilayotgan vandoshlarni tarixiy Vatani atrofida
          yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish
          tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar
          va ular tomoidan tuzilgan jamoat birlashmalari qiroll-quivvatlash,
          turli sohalarda faoliyat yuritayotgan vatandoshlarining salohiyatini
          mamlikatimiz taraqqiyo'tiga samarali yo'naltirish Fondning asosiy
          maqsadlaridan biri hisoblanadi.
        </p>
      </div>
    </section>
  );
};

export default Vidio;
