import { useTranslation } from "react-i18next";
import { members } from "../../data";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { CountryFilter } from "../../filter/country-filter";
import { countryList } from "../../lib/data";
import NoData from "../../components/NoData";

function TeamMemberModal({ member, isOpen, onClose }) {
  const { i18n } = useTranslation();

  if (!isOpen) return null;

  return (
    <div
      className="
      fixed inset-0 z-[999999999] bg-black/50 backdrop-blur-sm
      flex items-start lg:items-center justify-center
      p-0 lg:p-4
      top-[10px] lg:top-0
  "
      onClick={onClose}
    >
      <div
        className="
        relative bg-white shadow-2xl overflow-hidden
        w-full
        h-[calc(100svh-10px)] lg:h-auto
        rounded-none lg:rounded-2xl
        max-w-none lg:max-w-6xl
    "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Left - Image */}
          <div className="w-full md:w-1/3 flex-shrink-0 p-4 md:p-8">
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name_uz}
              className="
              w-full object-cover rounded-lg lg:object-top
              h-[420px] sm:h-[320px] md:h-[450px]"
            />
          </div>

          {/* Right - Info (SCROLL) */}
          <div className="w-full md:w-3/5 px-4 pb-6 md:p-8 flex flex-col min-h-0">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              {member[`name_${i18n?.language}`] || member.name_uz}
            </h2>

            <h3 className="text-xl font-medium text-slate-900 mb-4">
              {member[`job_${i18n?.language}`] || member.job_uz}
            </h3>

            {/* shu div scroll bo'ladi */}
            <div className="min-h-0 flex-1 overflow-y-auto pr-1">
              <p className="text-slate-600 leading-relaxed text-base md:text-xs whitespace-pre-line">
                {member[`description_${i18n?.language}`] ||
                  member.description_uz ||
                  "Bu mutaxassis haqida batafsil ma'lumot mavjud emas."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMemberCard({ member, onClick }) {
  const { t, i18n } = useTranslation();
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center ] bg-[rgb(242,242,248)] shadow-[0px_9px_18px_0px_rgba(144,173,248,0.25)]"
    >
      <img
        src={member.image}
        alt={member.name_uz}
        fill
        className="object-cover lg:object-top h-[250px] lg:h-[300px] w-full"
      />
      <div className="text-center px-2">
        <h3 className="font-semibold text-slate-800 my-2 text-base  mb-1 group-hover:text-emerald-700 transition-colors duration-300">
          {member[`name_${i18n?.language}`]}
        </h3>
      </div>
    </div>
  );
}

export function TeamSection() {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filteredMembers = useMemo(() => {
    if (selectedCountry === "all") return members;
    return members.filter((m) => m.code === selectedCountry);
  }, [selectedCountry]);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t("Islomiy moliya mutaxassislari")}
          </h2>
        </div>

        <CountryFilter
          countryList={countryList}
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
          totalCount={members.length}
          filteredCount={filteredMembers.length}
        />

        {filteredMembers.length === 0 && <NoData />}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:gap-8 mb-8">
          {filteredMembers &&
            filteredMembers?.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onClick={() => handleCardClick(member)}
              />
            ))}
        </div>
      </div>
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
