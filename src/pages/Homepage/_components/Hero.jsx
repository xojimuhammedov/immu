import React, { useState, useEffect } from "react";
import Image1 from "../../../assets/hero.png";
import Image2 from "../../../assets/News/velo2.png";
import Image3 from "../../../assets/News/sec.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: Image1,
    title: "Janubiy Koreyadagi vatandoshlarimiz bilan muloqot",
    buttonText: "Batafsil",
  },
  {
    image: Image2,
    title: "Kolumbiyada o‘tgan jahon chempionatida hamyurtimiz ilk medalni qo‘lga kiritdi",
    buttonText: "Batafsil",
  },
  {
    image: Image3,
    title: "Oʻzbekiston diplomatlari Janubiy Koreyaning Kvanju",
    buttonText: "Batafsil",
  },
];

const EventBanner = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 soniya
    return () => clearInterval(interval);
  }, [current]);

  const currentSlide = slides[current];

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] max-w-7xl mx-auto mt-5 overflow-hidden rounded-2xl">
      {/* Background Image */}
      <img
        src={currentSlide.image}
        alt="Event Banner"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
      />

      {/* Kontent */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end md:items-end p-5 sm:p-6 h-full text-white">
        {/* Chap tomon: Sarlavha va Batafsil tugmasi */}
        <div className="flex-1 flex flex-col justify-end space-y-3 sm:space-y-4 w-full md:w-1/2">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="font-extrabold text-[20px] sm:text-[20px] lg:text-[24px] sm:w-full lg:w-[480px] leading-tight tracking-[0%] font-inter">
              {currentSlide.title}
            </h1>
            <button className="bg-white w-fit hover:bg-[#009688] text-[#009688] hover:text-white px-5 sm:px-10 py-2 sm:py-3 rounded-[16px] transition duration-300 shadow-md font-bold text-[14px] sm:text-[15px] text-center font-inter self-start cursor-pointer">
              {currentSlide.buttonText}
            </button>
          </div>
        </div>

        {/* O'ng tomon: Tugmalar (faqat md va undan kattalarda ko'rinadi) */}
        <div className="hidden md:flex space-x-3 mt-6 md:mt-0">
          <button
            onClick={prevSlide}
            className="bg-white bg-opacity-20 cursor-pointer backdrop-blur-sm hover:bg-opacity-30 text-[#009688] border border-white border-opacity-30 w-[48px] h-[48px] flex justify-center items-center hover:bg-[#009688] hover:text-white rounded-full transition duration-300 shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white bg-opacity-20 cursor-pointer backdrop-blur-sm hover:bg-opacity-30 text-[#009688] border border-white border-opacity-30 w-[48px] h-[48px] flex justify-center items-center hover:bg-[#009688] hover:text-white rounded-full transition duration-300 shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
