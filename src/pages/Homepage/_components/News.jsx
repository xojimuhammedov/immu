import React, { useEffect, useState } from 'react';
import DateIcon from '../../../assets/DateIcon';
import EyeIcon from '../../../assets/EyeIcon';
import axios from 'axios';
import { posts } from '../../../data';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const News = () => {

  const {t, i18n} = useTranslation()

  return (
    <div className="p-0 mt-10 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-6">{t("Yangiliklar")}</h2>

      {/* Main News Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BIRINCHI YANGILIK (katta) */}
        
        {
          posts?.slice(0, 1)?.map((item) => (
            <div key={item?.id} className="bg-white rounded-lg relative shadow-lg overflow-hidden">
              <img
                src={item?.image}
                alt="Asosiy yangilik"
                className="w-full h-full"
              />
              <div className="p-5">
                <p className="text-base lg:text-2xl text-white font-bold absolute z-[9999] top-[65%] lg:top-[70%]">
                  {item[`title_${i18n.language}`]}
                </p>
                <Link to={`/news/${item?.id}`} className="bg-[#009688] flex items-center absolute z-[9999] top-[84%] lg:top-[87%] justify-center text-white w-[120px] h-[35px] rounded-[16px] text-sm hover:bg-[#00796b] transition duration-300">
                  {t("Batafsil")}
                </Link>
              </div>
            </div>
          ))
        }

        {/* QO'SHIMCHA YANGILIKLAR (3 ta) */}
        <div className="space-y-4">
          {posts.slice(1).map((item) => (
            <div
              key={item.id}
              className="flex bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Rasm qismi */}
              <img
                src={item?.image}
                alt={item?.title_uz}
                className="w-28 h-28 md:w-50 md:h-36 object-cover flex-shrink-0"
              />
              {/* Matn qismi */}
              <div className="flex-1 p-2 md:p-4 flex flex-col justify-between">
                <h3 className="font-bold text-base md:text-lg leading-[155%] tracking-[0.2px] font-inter text-[#009688] line-clamp-2">
                  {item[`title_${i18n.language}`]}
                </h3>
                <Link to={`/news/${item?.id}`} className="bg-[#009688] flex items-center justify-center text-white w-[120px] h-[35px] rounded-[16px] text-sm hover:bg-[#00796b] transition duration-300">
                  {t("Batafsil")}
                </Link>
                {/* <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                   <div className='flex items-center gap-1'>
                     <DateIcon />
                  <span>{item?.date}</span>
                   </div>
                  <span className="flex gap-1 items-center">
                    <EyeIcon />
                    {item?.likes}K
                  </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;