import { useTranslation } from "react-i18next";
import { members } from "../../data";
import { useState } from "react";
import { X } from "lucide-react";

function TeamMemberModal({ member, isOpen, onClose }) {
  const { i18n } = useTranslation();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex top-[60px] lg:top-0 items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
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
        <div className="flex flex-col md:flex-row">
          {/* Left - Image */}
          <div className="w-full md:w-1/3 flex-shrink-0 p-8  ">
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name_uz}
              className="w-full h-84 md:h-[450px] object-cover rounded-lg lg:object-top"
            />
          </div>

          {/* Right - Info */}
          <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {member[`name_${i18n?.language}`] || member.name_uz}
            </h2>
            <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">
              {member?.certificate}
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs line-clamp-10 lg:line-clamp-14">
              {member[`description_${i18n?.language}`] ||
                member.description_uz ||
                "Bu mutaxassis haqida batafsil ma'lumot mavjud emas."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


function TeamMemberCard({ member, onClick }) {
  const { t, i18n } = useTranslation()
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center ] bg-[rgb(242,242,248)] shadow-[0px_9px_18px_0px_rgba(144,173,248,0.25)]">
      <img
        src={member.image}
        alt={member.name_uz}
        fill
        className="object-cover lg:object-top h-[250px] lg:h-[300px] w-full"
      />
      <div className="text-center px-2">
        <h3 className="font-semibold text-slate-800 my-2 text-base md:text-lg mb-1 group-hover:text-emerald-700 transition-colors duration-300">
          {member[`name_${i18n?.language}`]}
        </h3>
      </div>
    </div>
  );
}

export function TeamSection() {
  const { t } = useTranslation()
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t("Islomiy moliya mutaxassislari")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {members?.map((member) => (
            <TeamMemberCard key={member.id} member={member} onClick={() => handleCardClick(member)} />
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
