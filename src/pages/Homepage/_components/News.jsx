import React from 'react';
import NewsImage from '../../../assets/News.png'
import NewsImage1 from '../../../assets/News1.png'
import NewsImage2 from '../../../assets/News2.png'
import DateIcon from '../../../assets/DateIcon';
import EyeIcon from '../../../assets/EyeIcon';


const News = () => {
  const newsItems = [
    {
      id: 1,
      image: NewsImage, 
     
    },
    {
      id: 2,
      title: 'Bugungi loyihamiz qahramonlari Yaponiyaning Nagoya shahrida istiqomat qilayotgan Avezovla...',
      date: '12.02.2023',
      image: NewsImage1,
      likes: 100,
    },
    {
      id: 3,
      title: 'Xorijdagi vatandoshlar ishtirokida "Navro’z" bayrami tantanaları boshlandi',
      date: '12.02.2023',
      image: NewsImage2,
      likes: 100,
    },
    {
      id: 4,
      title: 'Bugungi loyihamiz qahramonlari Yaponiyaning Nagoya shahrida istiqomat qilayotgan Avezovla...',
      date: '12.02.2023',
     image: NewsImage1,
      likes: 100,
    },
  ];

  return (
    <div className="p-0 mt-10 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-6">Yangiliklar</h2>

      {/* Main News Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BIRINCHI YANGILIK (katta) */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={newsItems[0].image}
            alt="Asosiy yangilik"
            className="w-full h-full "
          />
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-2">{newsItems[0].date}</p>
            <p className="text-base text-gray-800 leading-relaxed">
              {newsItems[0].title}
            </p>
          </div>
        </div>

        {/* QO'SHIMCHA YANGILIKLAR (3 ta) */}
        <div className="space-y-4">
          {newsItems.slice(1).map((item) => (
            <div
              key={item.id}
              className="flex bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Rasm qismi */}
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 md:w-50 md:h-36 object-cover flex-shrink-0"
              />
              {/* Matn qismi */}
              <div className="flex-1 p-2 md:p-4 flex flex-col justify-between">
                <h3 className="font-bold text-[12px] md:text-[14px] leading-[155%] tracking-[0.2px] font-inter text-[#009688] line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                   <div className='flex items-center gap-1'>
                     <DateIcon />
                  <span>{item.date}</span>
                   </div>
                  <span className="flex gap-1 items-center">
                    <EyeIcon />
                    {item.likes}K
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;