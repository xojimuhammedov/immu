import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/new-logo.jpg';
import UzFlag from '../assets/uzb.png';
import EnFlag from '../assets/eng.png';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const navigate = useNavigate();
  const [menuOchiq, setMenuOchiq] = useState(false);
  const [til, setTil] = useState("UZB");
  const [tilDropdownOchiq, setTilDropdownOchiq] = useState(false);
  const [programsDropdownOchiq, setProgramsDropdownOchiq] = useState(false);
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOchiq(false);
        setProgramsDropdownOchiq(false);
        setTilDropdownOchiq(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const tillar = [
    { kod: "en", nomi: "English", bayroq: EnFlag, value: "ENG" },
    { kod: "uz", nomi: "O'zbekcha", bayroq: UzFlag, value: "UZB" },
  ];

  const tanlanganTil = tillar.find(t => t.kod === til) || tillar[1];

  const tilTanlash = (yangiTil) => {
    setTil(yangiTil);
    setTilDropdownOchiq(false);
    setMenuOchiq(false);
    i18n.changeLanguage(yangiTil)
  };

  const toggleMobilePrograms = () => {
    setProgramsDropdownOchiq(!programsDropdownOchiq);
  };

  return (
    <header ref={menuRef} className="bg-white shadow-md py-3 px-4 sm:px-6 sticky top-0 z-[99999]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => navigate('/')}>
          <img src={Logo} alt="AL MUAMALAT" className="md:h-[50px] md:w-[102px] lg:h-[65px] lg:w-[165px] object-contain" />
        </div>

        <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">

          <Link to="/" className="text-gray-700 hover:text-[#009688] font-medium transition duration-200 px-2 py-1" >{t("Bosh sahifa")}</Link>
          <Link to="/member" className="text-gray-700 hover:text-[#009688] font-medium transition duration-200 px-2 py-1" >{t("A'zolar kengashi")}</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#009688] font-medium transition duration-200 px-2 py-1" >{t("Bog'lanish")}</Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4 lg:space-x-6">
          <div className="relative">
            <button onClick={() => setTilDropdownOchiq(!tilDropdownOchiq)} className="flex cursor-pointer items-center text-gray-700 hover:text-indigo-600 px-3 py-1 rounded-md hover:bg-gray-100 transition duration-200">
              <img src={tanlanganTil.bayroq} alt={tanlanganTil.value} className="w-[30px] h-5 mr-2" />
              <span className="hidden lg:inline text-[18px]">{tanlanganTil.value}</span>
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {tilDropdownOchiq && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                {tillar.map((t) => (
                  <button key={t.kod} onClick={() => tilTanlash(t.kod)} className={`flex items-center w-full px-4 py-2 text-gray-700 cursor-pointer hover:bg-indigo-50 ${til === t.kod ? 'bg-indigo-50 font-medium' : ''}`}>
                    <img src={t.bayroq} alt={t.value} className="w-[30px] h-5 mr-2" />
                    <span >{t.nomi}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        <div className="flex lg:hidden items-center space-x-3">
          <div className="relative">
            <button onClick={() => setTilDropdownOchiq(!tilDropdownOchiq)} className="flex cursor-pointer items-center p-1 rounded-full hover:bg-gray-100">
              <img src={tanlanganTil.bayroq} alt={tanlanganTil.value} className="w-[35px] h-6" />
            </button>
            {tilDropdownOchiq && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                {tillar.map((t) => (
                  <button key={t.kod} onClick={() => tilTanlash(t.kod)} className={`flex cursor-pointer items-center w-full px-4 py-2 text-gray-700 hover:bg-indigo-50 ${til === t.kod ? 'bg-indigo-50 font-medium' : ''}`}>
                    <img src={t.bayroq} alt={t.kod} className="w-[30px] h-5 mr-2" />
                    <span>{t.nomi}</span>
                  </button>
                ))}
              </div>
            )}
          </div>


          <button onClick={() => setMenuOchiq(!menuOchiq)} className="text-gray-700 p-1 rounded-full hover:bg-gray-100" aria-label="Menyu">
            {menuOchiq ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOchiq && (
        <div className="lg:hidden bg-white py-3 px-4 space-y-2 shadow-inner">
          <Link to="/" className="block py-2.5 px-3 text-gray-700 hover:text-[#009688] hover:bg-gray-50 rounded-md transition duration-200" onClick={() => setMenuOchiq(false)}>{t("Bosh sahifa")}</Link>
          <Link to="/member" className="block py-2.5 px-3 text-gray-700 hover:text-[#009688] hover:bg-gray-50 rounded-md transition duration-200" onClick={() => setMenuOchiq(false)}>{t("A'zolar kengashi")}</Link>
          <Link to="/contact" className="block py-2.5 px-3 text-gray-700 hover:text-[#009688] hover:bg-gray-50 rounded-md transition duration-200" onClick={() => setMenuOchiq(false)}>{t("Bog'lanish")}</Link>
        </div>
      )}
    </header>
  );
};

export default Header;