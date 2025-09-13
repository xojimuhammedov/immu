import React from 'react';
import Amerikan from "../../../assets/AmericanExpress.png";
import WesternUnion from "../../../assets/westernunion.png";
import Klarna from "../../../assets/klarna.png";
import Skrill from "../../../assets/Skrill.png";
import Stripe from "../../../assets/Stripe.png";

const  Partners = () => {
  const partners = [
    Amerikan,
    WesternUnion,
    Klarna,
    Skrill,
    Stripe,
  ];

  // Uzluksiz ko‘rinish uchun ikki marta takrorlanadi
  const repeatedPartners = [...partners, ...partners];

  return (
    <div className="max-w-8xl m-auto bg-white py-6 md:py-12 overflow-hidden">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 mb-6 md:mb-12 text-center">
        Our Partners and Clients
      </h2>

      <div className="relative w-full overflow-hidden group">
        {/* First row */}
        <div className="flex whitespace-nowrap animate-scroll group-hover:[animation-play-state:paused]">
          {repeatedPartners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[150px] md:w-[280px] h-[70px] md:h-[139px] mx-1 md:mx-2 bg-white border border-gray-200 rounded-[8px] md:rounded-[10px] flex items-center justify-center opacity-100"
            >
              <img
                src={partner}
                alt={`partner-${index}`}
                className="object-contain w-[50%] h-[50%]"
              />
            </div>
          ))}
        </div>

        {/* Second row (reverse) */}
        <div className="flex whitespace-nowrap mt-4 md:mt-8 animate-scroll-reverse group-hover:[animation-play-state:paused]">
          {repeatedPartners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[150px] md:w-[280px] h-[70px] md:h-[139px] mx-1 md:mx-2 bg-white border border-gray-200 rounded-[8px] md:rounded-[10px] flex items-center justify-center opacity-100"
            >
              <img
                src={partner}
                alt={`partner-${index}`}
                className="object-contain w-[50%] h-[50%]"
              />
            </div>
          ))}
        </div>
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

export default Partners;