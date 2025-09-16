import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SupportImage from '../../../assets/support.jpg'

const Workshop = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreed: false,
  });

  const {t} = useTranslation()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="max-w-6xl py-[36px] xl:max-w-7xl m-auto mt-10 flex flex-col rounded-lg bg-white overflow-hidden p-3 xl:p-0">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 flex flex-col justify-between">
          <img src={SupportImage} alt="" />
        </div>
        <div className="p-6 bg-[#F9F7F3] w-full md:w-2/5">
          <h2 className="font-inter font-medium text-[22px] leading-[32px] tracking-[0%] text-[#152032] mb-4">
             {t("Free consultation")}
          </h2>
          <p className="text-[#152032] font-inter font-medium text-[16px] leading-[20px] tracking-[0%] mb-6">
             {t("Leave your phone number, and we will reach out to provide you with complete information about our courses.")}
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder={t("Ismingiz")}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                required
              />
            </div>
            <div>
              <div className="flex">
                <select
                  className="w-20 px-3 py-2 border border-gray-300 rounded-l-md bg-white focus:outline-none"
                  defaultValue="+44"
                >
                  <option value="+44">+44 🇬🇧</option>
                  <option value="+1">+1 🇺🇸</option>
                  <option value="+90">+90 🇹🇷</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 w-4 px-4 py-2 border-t border-r border-b border-gray-300 rounded-r-md focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex items-start">
              <input
                id="agreement"
                name="agreed"
                type="checkbox"
                checked={formData.agreed}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded mt-1"
                required
              />
              <label htmlFor="agreement" className="ml-3 block text-sm text-gray-700">
                  {t("I agree to the use of my personal information for consultation purposes.")}
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#009688] hover:bg-[#26A69A] text-white font-medium py-2 px-4 rounded-md cursor-pointer"
            >
                {t("Yuborish")}
            </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Workshop;