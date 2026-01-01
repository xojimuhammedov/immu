import React from 'react';
import { CalendarDays, Copy, Eye, Facebook, Instagram,  Twitter } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { posts } from '../../data';
import { useTranslation } from 'react-i18next';
const NewsArticle = () => {
  const {t, i18n} = useTranslation()
  const {id} = useParams()
  const aboutData = posts?.find((item) => item?.id === Number(id))

  return (
    <div className="max-w-7xl mx-auto p-4 mt-4">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Left Column */}
        <div className="w-full md:w-2/3">
          <h1 className="font-inter font-bold text-[32px] leading-[120%] tracking-[0] mb-4 text-[#062A49]">
            {aboutData[`title_${i18n.language}`]}
          </h1>
          <img
            src={aboutData?.image}
            alt="Athlete"
            className="w-full h-[480px] object-cover rounded-lg shadow-md mb-4"
          />
          <div className='flex gap-5'>
            <div className="flex items-center gap-1 font-inter font-normal text-[16px] leading-[100%] tracking-[0.2px] align-middle text-[#5D6B8A]">
              <CalendarDays className='w-4 h-4' />
              <span>17.09.2025</span>
            </div>
            {/* <div className="flex items-center gap-1 font-inter font-normal text-[16px] leading-[100%] tracking-[0.2px] align-middle text-[#5D6B8A]">
              <Eye className='w-4 h-4' />
              <span>100 K</span>
            </div> */}
          </div>
          <p className="font-inter font-normal text-base text-justify text-[#5D6B8A] mt-3" 
            dangerouslySetInnerHTML={{
              __html: aboutData[`description_${i18n.language}`]
            }}
            />

          {/* Rasm va galeriya */}
          <div className="mt-8">

            {/* Social media ulash */}
            {/* <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mt-4">
              <div className="flex space-x-2">
                <button className="bg-[#D1FAD1] hover:bg-[#b3f0b3] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
                  <Copy className="text-[#009688] w-5 h-5" />
                </button>
                <button className="bg-[#D1FAD1] hover:bg-[#b3f0b3] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
                  <Facebook className="text-[#009688] w-5 h-5" />
                </button>
                <button className="bg-[#D1FAD1] hover:bg-[#b3f0b3] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
                  <Twitter className="text-[#009688] w-5 h-5" />
                </button>
                <button className="bg-[#D1FAD1] hover:bg-[#b3f0b3] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
                  <Instagram className="text-[#009688] w-5 h-5" />
                </button>
              </div>
              <p className="font-inter text-sm sm:text-[16px] leading-[100%] tracking-[0.2px] text-[#161616]">
                Do'stlaringizga ulashing
              </p>
            </div> */}
          </div>

        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 bg-white p-2 rounded-lg shadow-md self-start  mt-5 md:mt-20 sticky top-20">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">{t("So‘nggi yangiliklar")}</h2>
          <div className="space-y-4">
            {/* Yangilik 1 */}
             {
              posts.map((item) => (
                <div className="flex items-start space-x-4">
                <img
                  src={item?.image}
                  alt="Yangilik rasmi"
                  className="w-[95px] h-[75px] rounded-lg"
                />
                <div className='flex flex-col gap-5 '>
                  <p className="font-inter font-bold text-[13px] leading-[125%] tracking-[0.2px] text-[#10131B]">
                    {item[`title_${i18n.language}`]}
                  </p>
                  <div className='flex justify-between'>
                    <div className="flex items-center space-x-2 text-xs text-[#5D6B8A]">
                      <CalendarDays className='w-4 h-4' />
                      <span>17.09.2025</span>
                    </div>
                    {/* <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Eye className='w-4 h-4' />
                      <span>100 K</span>
                    </div> */}
                  </div>
                </div>
            </div>
              ))
             }
          </div>
        </div>
      </div>
      {/* <Interisniy/> */}
    </div>
  );
};

export default NewsArticle;