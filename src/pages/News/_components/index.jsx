import React from "react";
import CardImage from '../../../assets/News/card.png'
import { CalendarDays, Eye } from "lucide-react";

const Card = ({ image, title, description, date, views }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={CardImage}
        alt="Card Image"
        className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover"
      />
      <div className="p-3">
        <h2 className="font-inter font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-[130%] tracking-[0.2px] text-[#10131B]">{title}</h2>
        <p className="text-[#5D6B8A] font-inter font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[120%] tracking-[0.2px] mt-3">{description}</p>
      </div>
      <div className='flex gap-5 p-3 justify-between text-[12px] sm:text-[14px] md:text-[16px]'>
        <div className="flex items-center gap-1 font-inter font-normal leading-[100%] tracking-[0.2px] text-[#5D6B8A]">
          <CalendarDays className='w-4 h-4' />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1 font-inter font-normal leading-[100%] tracking-[0.2px] text-[#5D6B8A]">
          <Eye className='w-4 h-4' />
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const cards = [
    {
      image: "https://via.placeholder.com/300",
      title: "Qirg'iziston Respublikasi o'zbek milliy madaniyat markazi bilan birgalikda otказlanган тадбир аjoyib ruhийатда отиди",
      description: "Tashrif davomida Qozogiston Respublikasining Otandastar notijorat aksiyadorlik fondi bilan uchrashuv tashkil...",
      date: "12.02.2023",
      views: "100K",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Qirg'iziston Respublikasi o'zbek milliy madaniyat markazi bilan birgalikda otказланган тадбир аjoyib ruhийатда отиди",
      description: "Tashrif davomida Qozogiston Respublikasining Otandastar notijorat aksiyadorlik fondi bilan uchrashuv tashkil...",
      date: "12.02.2023",
      views: "100K",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Qirg'iziston Respublikasi o'zbek milliy madaniyat markazi bilan birgalikda otказланган тадбир аjoyib ruhийатда отиди",
      description: "Tashrif davomida Qozogiston Respublikasining Otandastar notijorat aksiyadorlik fondi bilan uchrashuv tashkil...",
      date: "12.02.2023",
      views: "100K",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-2">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 sm:gap-0">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800">Sizni qiziqtiradi</h1>
        <div className="flex space-x-2">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 rounded-full p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 rounded-full p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
