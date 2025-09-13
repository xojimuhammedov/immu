import React from 'react';
import RightImage from "../../../assets/AboutImage/heroimg.png"; // O'ng tomon rasm
import LeftImage from "../../../assets/AboutImage/heroimg.png";   // Chap tomon rasm

const LeadershipSection = () => {
  return (
    <section className="bg-[#009688] text-white py-16 px-4 sm:px-8 lg:px-24 overflow-hidden relative">
      {/* Rasmni o'ng tomoniga joylashtirish */}
     <div className='flex items-center'>
         <img 
        src={RightImage} 
        alt="O'ng tomon pattern"
        className='w-[331px] h-[493px] absolute mt-0 left-0 '
      />

     </div>
      {/* Rasmni chap tomoniga joylashtirish */}
      <img 
        src={LeftImage} 
        alt="Chap tomon pattern"
        className='hidden md:block rotate-210 w-[291px] h-[393px] absolute right-0'
      />

      {/* Header */}
      <div className="flex justify-end mb-8">
        <nav aria-label="Breadcrumb" className="text-sm font-medium">
          <ol role="list" className="flex items-center space-x-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Asosiy sahifa
              </a>
            </li>
            <li>
              <span aria-hidden="true">•</span>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Yangiliklar
              </a>
            </li>
            <li>
              <span aria-hidden="true">•</span>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                batafsil
              </a>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pr-5 md:pr-40 2xl:pr-80">
        <h1 className="font-inter font-bold text-[20px] sm:text-[24px] md:text-[32px] leading-[100%] tracking-[0] mb-4">Rahbariyat</h1>
        <p className="font-inter font-normal text-[14px] leading-[180%] tracking-[0.2px]">
          Xorida istiqomat qilayotgan vatanadoslarini tarixiy Vatanimiz yonida jipslashtirish, ularning qabiliyati va ongida yurt bilan faksiyalash tuzgusini yuksaltirish, milliy ozrlarini saqlab qolish, vatanadoslar va ular tomonidan tuzilgan jamoat turfashlanmalari qobiliq-quvvatlashtirish, turli oholarda faoliyat yuritadigan vatanadoslarimizning salohiyatini muhimlikdanimiz tarqiqiyotiga kamerali yoqtirish Fondining aszay maqsadlardan bir hisoblanadi.
        </p>
      </div>
    </section>
  );
};

export default LeadershipSection;