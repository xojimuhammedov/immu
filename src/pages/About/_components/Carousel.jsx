import React from "react";
import CarouselPerson1 from "../../../assets/AboutImage/CarouselPerson1.png";
import CarouselPerson2 from "../../../assets/AboutImage/CarouselPerson2.png";
import CarouselPerson3 from "../../../assets/AboutImage/CarouselPerson3.png";
import CarouselPerson4 from "../../../assets/AboutImage/CarouselPerson4.png";
import CarouselPerson5 from "../../../assets/AboutImage/CarouselPerson5.png";

const Carousel = () => {
  const images = [
    CarouselPerson1,
    CarouselPerson2,
    CarouselPerson3,
    CarouselPerson4,
    CarouselPerson5,
  ];
  const repeatedPartners = [...images, ...images];
  return (
  <div className="flex  flex-col gap-5 py-3 md:py-10 " >
    <h1 className="font-inter p-5 max-w-7xl m-auto  font-bold text-[14px] md:text-[18px] lg:text-[24px] leading-[150%] tracking-[0] text-center align-middle text-[#009688]">Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish  tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish bizning oliy maqsadimizdir</h1>
      <div className="relative w-full overflow-hidden group">
        {/* First row */}
        <div className="flex whitespace-nowrap animate-scroll group-hover:[animation-play-state:paused]">
          {repeatedPartners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[150px] md:w-[320px] h-[120px] md:h-[230px] mx-1 md:mx-2 bg-white border border-gray-200 rounded-[8px] md:rounded-[10px] flex items-center justify-center opacity-100"
            >
              <img
                src={partner}
                alt={`partner-${index}`}
                className=" w-full h-full "
              />
            </div>
          ))}
        </div>

        {/* Second row (reverse) */}
       
      </div>

      {/* Animatsiyalar */}
      <style  jsx="true">{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 25s linear infinite;
        }

        /* Mobil uchun optimallashtirish */
        @media (max-width: 768px) {
          .animate-scroll, .animate-scroll-reverse {
            animation-duration: 15s; /* Tezroq aylanish */
          }
        }
      `}</style>
  </div>
  );
};

export default Carousel;