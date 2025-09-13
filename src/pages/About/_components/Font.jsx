import React from "react";
import FondImage from "../../../assets/Font.png";

const Font = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        {/* Rasm */}
        <div className="w-full lg:w-1/2">
          <img
            src={FondImage}
            alt="Team Working Together"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Matn */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-[#009688] font-inter font-bold text-[22px] sm:text-[26px] md:text-[28px] leading-[100%] tracking-[0]">
            Fondning vazifasi va maqsadi
          </h2>

          <p className="text-gray-600 font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed tracking-[0.2px]">
            Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida
            yanada jipslashtirish, ularning qalbi va ongida yurt bilan
            faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish,
            vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini
            qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan
            vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga
            samarali yo‘naltirish Fondning asosiy maqsadlaridan biri
            hisoblanadi.
          </p>

          {/* Statistika */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            <div>
              <h3 className="font-inter font-bold text-[18px] sm:text-[22px] md:text-[24px] text-[#009688] leading-[100%]">
                105{" "}
                <span className="font-inter font-bold text-[14px] sm:text-[16px] md:text-[18px] text-[#5D6B8A]">
                  Mamlakatda
                </span>
              </h3>
            </div>
            <div>
              <h3 className="font-inter font-bold text-[18px] sm:text-[22px] md:text-[24px] text-[#009688] leading-[100%]">
                2.4 mln{" "}
                <span className="font-inter font-bold text-[14px] sm:text-[16px] md:text-[18px] text-[#5D6B8A]">
                  Yurtdoshimiz
                </span>
              </h3>
            </div>
          </div>

          <p className="text-gray-600 font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed tracking-[0.2px]">
            Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida
            yanada jipslashtirish, ularning qalbi va ongida yurt bilan
            faxrlanish tuyg‘usini yuksaltirish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Font;
