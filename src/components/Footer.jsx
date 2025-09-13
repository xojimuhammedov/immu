import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-12">
      {/* Yuqori qism: Kontakt ma'lumotlari */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-end items-center mb-4 border-b border-teal-500 pb-4 gap-0 md:gap-7">
        <div className="flex items-center space-x-1 mb-2 sm:mb-0">
          <Phone size={16} strokeWidth={1.5} className="text-[#FFFFFF]" />
          <span className="text-sm">0800-120-55 55</span>
        </div>
        <div className="flex items-center space-x-1 ">
          <Mail size={16} strokeWidth={1.5} className="text-[#FFFFFF]" />
          <span className="text-sm">info@immu.uz</span>
        </div>
      </div>

      {/* Quyi qism: Menyu va Ijtimoiy tarmoqlar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Menyu havolalari */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-4 md:mb-0">
          <a href="#" className="text-sm hover:text-white/80 transition">HOME</a>
          <a href="#" className="text-sm hover:text-white/80 transition">ABOUT IMMU</a>
          <a href="#" className="text-sm hover:text-white/80 transition">ARTICLES</a>
          <a href="#" className="text-sm hover:text-white/80 transition">NEWS</a>
          <a href="#" className="text-sm hover:text-white/80 transition">CONTACT</a>
        </nav>

        {/* Ijtimoiy tarmoqlar */}
        <div className="flex space-x-6">
          <a href="#" className= "w-10 h-10 border flex items-center justify-center border-white rounded-full hover:text-white/80 transition">
            <Facebook size={20} strokeWidth={1.5} />
          </a>
          <a href="#" className=" w-10 h-10 border flex items-center justify-center border-white rounded-full hover:text-white/80 transition">
            <Twitter size={20} strokeWidth={1.5} />
            
          </a>
          <a href="#" className="w-10 h-10 border flex items-center justify-center border-white rounded-full  transition  ">
            <Instagram size={20} strokeWidth={1.5}  />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;