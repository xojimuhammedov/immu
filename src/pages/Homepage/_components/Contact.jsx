import React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  Phone,
  Building2,
  User,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import FinanceBanner from "../../../assets/finance-banner.jpg";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const countryCodes = [
  { code: "+998", country: "O'zbekiston", flag: "🇺🇿" },
  { code: "+7", country: "Rossiya", flag: "🇷🇺" },
  { code: "+7", country: "Qozog'iston", flag: "🇰🇿" },
  { code: "+992", country: "Tojikiston", flag: "🇹🇯" },
  { code: "+996", country: "Qirg'iziston", flag: "🇰🇬" },
  { code: "+993", country: "Turkmaniston", flag: "🇹🇲" },
  { code: "+994", country: "Ozarbayjon", flag: "🇦🇿" },
  { code: "+90", country: "Turkiya", flag: "🇹🇷" },
  { code: "+971", country: "BAA", flag: "🇦🇪" },
  { code: "+966", country: "Saudiya Arabistoni", flag: "🇸🇦" },
  { code: "+60", country: "Malayziya", flag: "🇲🇾" },
  { code: "+62", country: "Indoneziya", flag: "🇮🇩" },
  { code: "+44", country: "Buyuk Britaniya", flag: "🇬🇧" },
  { code: "+49", country: "Germaniya", flag: "🇩🇪" },
  { code: "+1", country: "AQSH", flag: "🇺🇸" },
  { code: "+82", country: "Janubiy Koreya", flag: "🇰🇷" },
  { code: "+81", country: "Yaponiya", flag: "🇯🇵" },
  { code: "+86", country: "Xitoy", flag: "🇨🇳" },
  { code: "+91", country: "Hindiston", flag: "🇮🇳" },
  { code: "+33", country: "Fransiya", flag: "🇫🇷" },
];

export function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    phone: "",
    message: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef(null);

  // Dropdown tashqarisiga bosilganda yopish
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let bot = {
    TOKEN: "7385237559:AAFQNt7JRcDq_MVKNIiffjEDjqYZn8NdK8Y",
    chatID: "-1003770480875",
    message: `
              Assalomu alaykum, sizga yangi xabar keldi!
              Ismi 👤: ${formData.name}; 
              Telefon raqami ☎: ${formData.phone};
              Tashkiloti: ${formData.organization};
              Xabar: ${formData.message};
              `,
  };
  const encodedMessage = encodeURIComponent(bot.message);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodedMessage} `,
      {
        method: "GET",
      },
    ).then(
      () => {
        // handleClear();
        setIsSubmitting(false);
        setFormData({ name: "", organization: "", phone: "", message: "" });
        toast.success(t("Sizning xabaringiz muvaffaqiyatli yuborildi!"));
      },
      (error) => {
        console.log(error);
      },
    );
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="container">
        <div className="absolute inset-0">
          <img
            src={FinanceBanner}
            alt="Moliya markazi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full mb-6">
                {t("Bog'lanish")}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
                {t("Ma'lumotlaringizni qoldiring")}
              </h2>
              <p className="text-base text-slate-300 mb-8 leading-relaxed">
                {t(
                  "Biz siz bilan bog'lanamiz. Islomiy moliya xizmatlari bo'yicha savollaringizga javob berishdan mamnun bo'lamiz.",
                )}
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{t("Manzil")}</p>
                    <p className="text-white font-medium">
                      {t(
                        "Toshkent sh., Mirzo Ulug'bek tumani, Lashkarbegi MFY, Mustaqillik shoh ko'chasi 59-uy",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-slate-700 font-medium flex items-center gap-2 text-sm"
                  >
                    <User className="w-4 h-4 text-emerald-600" />
                    {t("Ismingiz")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t("Ismingiz")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                {/* Organization Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="organization"
                    className="text-slate-700 font-medium flex items-center gap-2 text-sm"
                  >
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    {t("Tashkilotingiz")}
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder={t("Tashkilotingiz")}
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                {/* Phone Field with Country Code Dropdown */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-slate-700 font-medium flex items-center gap-2 text-sm"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    {t("Sizning raqamingiz")}
                  </label>
                  <div className="flex gap-2">
                    {/* Custom Country Code Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 h-12 px-3 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all min-w-[130px]"
                      >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="text-slate-900 font-medium">
                          {selectedCountry.code}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-64 max-h-72 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-lg z-50">
                          {countryCodes.map((country, index) => (
                            <button
                              key={`${country.code}-${country.country}-${index}`}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-emerald-50 transition-colors ${
                                selectedCountry.code === country.code &&
                                selectedCountry.country === country.country
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "text-slate-700"
                              }`}
                            >
                              <span className="text-lg">{country.flag}</span>
                              <span className="font-medium">
                                {country.code}
                              </span>
                              <span className="text-slate-500 text-sm">
                                {country.country}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Phone Input */}
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder=""
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 h-12 px-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-slate-700 font-medium flex items-center gap-2 text-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    {t("Xabar")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder=""
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {"Yuborilmoqda..."}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t("Yuborish")}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
