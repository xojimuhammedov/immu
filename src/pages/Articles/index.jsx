// Articles.js
import React from 'react';
import Card1 from '../../assets/ArticlesImage/card1.png';
import Card2 from '../../assets/ArticlesImage/card2.png';
import Card3 from '../../assets/ArticlesImage/card3.png';
import DateIcon from '../../assets/DateIcon';
import EyeIcon from '../../assets/EyeIcon';
const articles = [
  {
    id: 1,
    title: `"Mening birinchi kitobim" ma'rifli loyiha`,
    image: Card1,
    date: '12.02.2023',
    views: '100 K',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 2,
    title: 'Eng yaxshi rasmlari loyihasi',
    image: Card2,
    date: '15.03.2023',
    views: '120 K',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: 3,
    title: 'Yangi texnologiyalar bilan kelajak',
    image: Card3,
    date: '05.04.2023',
    views: '200 K',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
  },
  {
    id: 4,
    title: "Talabalarga qo'llanma",
    image: Card1,
    date: '20.01.2023',
    views: '85 K',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 5,
    title: 'Fan yangiligi',
    image: Card2,
    date: '10.05.2023',
    views: '150 K',
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33.',
  },
  {
    id: 6,
    title: "O'qish orqali o'sish",
    image: Card3,
    date: '02.06.2023',
    views: '95 K',
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'.",
  },
];

const Articles = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h2 className="font-inter font-semibold text-[35px] leading-[100%] tracking-[0] text-gray-800 mb-6">
        Bizning maqolalarimiz
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg "
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[240px] object-cover hover:scale-110 duration-300"
            />
            <div className="p-5">
              <h3 className="font-inter font-bold text-[20px] leading-[100%] line-clamp-1 tracking-[0.2px] text-[#009688] mb-2">
                {article.title}
              </h3>
              <p className="text-[#5D6B8A] text-sm leading-relaxed line-clamp-3">
                {article.description}
              </p>
              <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <span className="flex gap-1 items-center">
                  <DateIcon />
                  {article.date}
                </span>
                <span className="flex gap-1 items-center">
                  <EyeIcon />
                  {article.views}
                </span>
              </div>
              <button className="mt-4 w-full bg-[#009688] hover:bg-[#00796B] text-white font-medium py-3 px-4 rounded-3xl transition-colors duration-200 cursor-pointer ">
                Batafsil ma'lumot
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
