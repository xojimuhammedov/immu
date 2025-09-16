import React from 'react';
import { Phone,Mail } from 'lucide-react';
// import CallIcon from '../../../assets/CallIcon';
// import MailIcon from '../../../assets/MailIcon';
import { useTranslation } from 'react-i18next';
import { members } from '../../data';
const TeamMembers = () => {
  const {t, i18n} = useTranslation()

  return (
    <div className="mt-10 max-w-7xl mx-auto py-12">
      {/* Section Title */}
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">{t("Aʼzolar tarkibi")}</h2>
      {/* Member Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member?.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Member Image */}
            <img
              src={member?.image}
              alt={member?.name}
              className="w-full h-100 object-cover"
            />

            {/* Member Info */}
            <div className="p-4 ">
              <p className="font-normal text-[14px] leading-[100%] tracking-[0.2px] font-inter text-[#656B70] mb-3">{member.position}</p>
              <h3 className="font-bold text-2xl leading-[100%] tracking-[0%] font-inter text-[#009688] mb-4">{member.name}</h3>
              <p className='text-base font-inter font-normal line-clamp-5 overflow-hidden'>{member[`description_${i18n.language}`]}</p>

              {/* Contact Info */}
              {/* <div className=" flex items-center mt-5 text-xs text-[#656B70] font-bold text-[14px] leading-[100%] tracking-[0.2px] font-inter gap-1">
                <CallIcon />
                <span>{member?.phone}</span>
              </div>

              <div className="flex items-center mt-2 text-xs text-[#656B70] font-bold text-[14px] leading-[100%] tracking-[0.2px] font-inter gap-1">
                 <MailIcon />
                <span>{member?.email}</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;