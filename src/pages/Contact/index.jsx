import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500 flex gap-2 justify-end">
        <a
          href="/"
          className="hover:underline font-inter font-bold text-[14px] tracking-[0.2px] text-[#5D6B8A]"
        >
          Asosiy sahifa
        </a>{" "}
        ›{" "}
        <span className="text-[#009688] font-inter font-bold text-[14px] tracking-[0.2px]">
          Bog'lanish
        </span>
      </div>

      {/* Title and description */}
      <div className="max-w-7xl mx-auto border-b border-[#EAEDF6] px-4 sm:px-6">
        <h1 className="font-inter font-bold text-[32px] leading-[100%] tracking-[0] text-[#009688] mb-4">
          Bog'lanish
        </h1>
        <p className="text-[#5D6B8A] max-w-3xl font-inter font-normal text-[14px] tracking-[0.2px] mb-8">
          Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida
          yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish
          tuyg‘usini yuksaltirish, milliy o‘zligini saqlab qolish.
        </p>
      </div>

      {/* Main section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 mt-10 px-4 sm:px-6">
        {/* Form */}
        <div className="flex-1">
          <h2 className="text-[#161616] mb-6 font-inter font-bold text-[24px] leading-[100%] tracking-[0]">
            Форма заявки для связи с нами
          </h2>
          <form className="space-y-4 w-full sm:w-[400px]">
            <input
              type="text"
              placeholder="Ваше имя"
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
              placeholder="Qo‘shimcha ma’lumot"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
            />
            <button
              type="submit"
              className="bg-[#009688] text-white px-6 py-2 rounded-[16px] hover:bg-green-800 transition w-full sm:w-auto"
            >
              Отправить
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-80">
          <div className="mb-6">
            <h3 className="text-[#5D6B8A] font-inter font-normal text-[18px] leading-[210%] tracking-[0]">
              Адрес
            </h3>
            <p className="text-[#062A49] font-inter font-bold text-[18px] leading-[130%] tracking-[0]">
              100096. Toshkent sh. Muqimiy ko`chasi 166
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-[#5D6B8A] font-inter font-normal text-[18px] leading-[210%] tracking-[0]">
              Часы работы
            </h3>
            <p className="text-[#062A49] font-inter font-bold text-[18px] leading-[130%] tracking-[0]">
              Понедельник - Пятница 09:00 - 18:00 Суббота 09:00 - 13:00
            </p>
          </div>
          <div>
            <h3 className="text-[#5D6B8A] font-inter font-normal text-[18px] leading-[210%] tracking-[0]">
              Контактная информация
            </h3>
            <p className="text-[#062A49] font-inter font-bold text-[18px] leading-[130%] tracking-[0]">
              +998 (55) 502-22-99
            </p>
            <p className="text-[#062A49] mt-2 font-inter font-bold text-[18px] leading-[130%] tracking-[0]">
              info@immuuz.com
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-8xl m-auto mt-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.248862374478!2d69.2273059766114!3d41.295495271313364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzQzLjgiTiA2OcKwMTMnNDAuMiJF!5e0!3m2!1sru!2s!4v1614516020174!5m2!1sru!2s"
          className="w-full"
          height="300"
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          allowFullScreen=""
          loading="lazy"
          title="Kampus manzili"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
