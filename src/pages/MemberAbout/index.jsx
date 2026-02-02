import { useTranslation } from "react-i18next";
import { members } from "../../data";


function TeamMemberCard({ member }) {
  return (
    <div className="flex flex-col items-center ] bg-[rgb(242,242,248)] shadow-[0px_9px_18px_0px_rgba(144,173,248,0.25)]">
      {/* Image Container */}
      <img
        src={member.image}
        alt={member.name}
        fill
        className="object-cover object-top h-[250px]"
      />

      {/* Text Content */}
      <div className="text-center px-2">
        <h3 className="font-semibold text-slate-800 my-2 text-base md:text-lg mb-1 group-hover:text-emerald-700 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {member.position}
        </p>
      </div>
    </div>
  );
}

export function TeamSection() {
  const { t } = useTranslation()
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          {/* <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full mb-4">
            Bizning Jamoa
          </span> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t("A'zolar kengashi")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {members.slice(0, 5).map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Team Grid - Second Row (4 members, centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {members.slice(5).map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
