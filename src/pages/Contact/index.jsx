import React from "react";
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const ContactPage = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500 flex gap-2 justify-end">
        <a
          href="/"
          className="hover:underline font-inter font-bold text-[14px] tracking-[0.2px] text-[#5D6B8A]"
        >
          {t("Bosh sahifa")}
        </a>{" "}
        ›{" "}
        <span className="text-[#009688] font-inter font-bold text-[14px] tracking-[0.2px]">
        {t("Bog'lanish")}
        </span>
      </div>

      {/* Title and description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="font-inter font-bold text-[32px] leading-[100%] tracking-[0] text-[#009688] mb-4">
          {t("Bog'lanish")}
        </h1>
        {/* <p className="text-[#5D6B8A] max-w-3xl font-inter font-normal text-[14px] tracking-[0.2px] mb-8">
          Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida
          yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish
          tuyg‘usini yuksaltirish, milliy o‘zligini saqlab qolish.
        </p> */}
      </div>

      {/* Main section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 mt-10 px-4 sm:px-6">
        {/* Form */}
        <div className="flex-1">
          <h2 className="text-[#161616] mb-6 font-inter font-bold text-[24px] leading-[100%] tracking-[0]">
              {t("Biz bilan bog'lanish")} 
          </h2>
          <form className="space-y-4 w-full sm:w-[400px]">
            <input
              type="text"
              placeholder={t("Ismingiz")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
            />
            <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
              <span className="text-gray-500 mr-2">+998</span>
              <input
                type="tel"
                className="flex-1 outline-none"
                placeholder=""
              />
            </div>
            <textarea
              placeholder={t("Qo‘shimcha ma’lumot")}
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
            />
            <button
              type="submit"
              className="bg-[#009688] text-white px-6 py-2 rounded-[16px] hover:bg-green-800 transition w-full sm:w-auto"
            >
                {t("Yuborish")}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-80">
          <div className="mb-6">
            <h3 className="text-[#5D6B8A] font-inter font-normal text-[18px] leading-[210%] tracking-[0]">
              {t("Manzil")}
            </h3>
            <p className="text-[#062A49] font-inter font-bold text-[18px] leading-[130%] tracking-[0]">
               {t("Tashkent city, Mirzo Ulugbek district, Lashkarbegi MFY, 59 Independence")}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-[#5D6B8A] font-inter font-normal text-[18px] leading-[210%] tracking-[0]">
               {t("Ish vaqti")}
            </h3>
            <p className="text-[#062A49] font-inter font-bold text-[18px] leading-[130%] tracking-[0]">
                {t("Dushanba - Juma 09:00 - 18:00 Shanba 09:00 - 13:00")}
            </p>
          </div>
          <div>
            <h3 className="text-[#5D6B8A] font-inter font-normal text-[18px] leading-[210%] tracking-[0]">
               {t("Bog'lanish uchun ma'lumot")}
            </h3>
            <p className="text-[#062A49] font-inter font-bold text-[18px] leading-[130%] tracking-[0]">
              +998 99 051 18 81
            </p>
            {/* <p className="text-[#062A49] mt-2 font-inter font-bold text-[18px] leading-[130%] tracking-[0]">
              info@immuuz.com
            </p> */}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-8xl m-auto mt-10 ">
      <YMaps>
          <Map defaultState={{ center: [41.320159, 69.294864], zoom: 18 }} width="100%" height="400px">
              <Placemark geometry={[41.320159, 69.294864]} />
          </Map>
      </YMaps>
      </div>
    </div>
  );
};

export default ContactPage;
