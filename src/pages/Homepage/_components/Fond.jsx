import React from "react";
import FondImage from "../../../assets/islom-moliyasi.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Fond = () => {
  const {t} = useTranslation()
  return (
    <div className="py-6 mt-10">
      {/* Birinchi qism: Rasm + Matn + Tugma */}
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Rasm */}
          <div className="w-full md:w-1/2 relative">
            <img
              src={FondImage}
              alt="Team Working Together"
              className="w-full h-full object-cover rounded-lg shadow-md"
            /> 
          </div>

          {/* Matn va Tugma */}
          <div className="w-full md:w-1/2 h-full  flex flex-col gap-8">
            <h2 className="text-[#009688] font-bold text-[24px] leading-[100%] tracking-[0%] font-inter " >
                {t("Islom moliyasining vazifasi va maqsadi")}
            </h2>
            <p className="text-gray-600 leading-relaxed font-normal text-[16px]  tracking-[0.2px] font-inter ">
                {t("font_text")}
             <br /><br />
                {t("font_text1")}
            </p>
            <Link to={'/about'} className="bg-[#009688] flex items-center justify-center text-white w-[170px] h-[48px] rounded-[16px] hover:bg-[#00796b] transition duration-300">
                {t("Batafsil")}
            </Link>
          </div>
        </div>
      </div>

      {/* Ikkinchi qism: Statistika */}
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap">
      {/* Item 1 */}
        {/* <div className="w-1/2 lg:w-1/4 h-[107px] border-x border-[#2B2B2B99] mb-4">
          <h2 className="font-bold text-[40px] sm:text-[48px] lg:text-[60px] leading-[75px] tracking-[1%] text-center font-inter">
            12<span className="text-[#009688] font-medium">+</span>
          </h2>
          <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[100%] tracking-[1%] text-center font-inter">
            Year Services
          </h3>
        </div> */}

      {/* Item 2 */}
        {/* <div className="w-1/2 lg:w-1/4 h-[107px] border-x border-[#2B2B2B99] mb-4">
          <h2 className="font-bold text-[40px] sm:text-[48px] lg:text-[60px] leading-[75px] tracking-[1%] text-center font-inter">
            <span className="text-[#009688] font-medium">+</span>20K
          </h2>
          <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[100%] tracking-[1%] text-center font-inter">
            Cargo Delivered
          </h3>
        </div> */}

      {/* Item 3 */}
        {/* <div className="w-1/2 lg:w-1/4 h-[107px] border-x border-[#2B2B2B99] mb-4 lg:mb-0">
          <h2 className="font-bold text-[40px] sm:text-[48px] lg:text-[60px] leading-[75px] tracking-[1%] text-center font-inter">
            <span className="text-[#009688] font-medium">+</span>20K
          </h2>
          <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[100%] tracking-[1%] text-center font-inter">
            Cargo Delivered
          </h3>
        </div> */}

      {/* Item 4 */}
        {/* <div className="w-1/2 lg:w-1/4 h-[107px] border-x border-[#2B2B2B99]">
          <h2 className="font-bold text-[40px] sm:text-[48px] lg:text-[60px] leading-[75px] tracking-[1%] text-center font-inter">
            500
          </h2>
          <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[100%] tracking-[1%] text-center font-inter">
            Total Cargo
          </h3>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default Fond;