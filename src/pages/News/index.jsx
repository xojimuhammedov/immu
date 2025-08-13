import React from 'react';
import veloImg from '../../assets/News/velo.png';
import veloImg2 from '../../assets/News/velo2.png';
import SecondImg from '../../assets/News/sec.png';
import RightColumn1 from '../../assets/News/rc.png';
import RightColumn2 from '../../assets/News/img3.png';
import RightColumn3 from '../../assets/News/img2.png';
import RightColumn4 from '../../assets/News/img5.png';
import RightColumn5 from '../../assets/News/img4.png';
import Fote from '../../assets/News/Foto.png'
import Fote1 from '../../assets/News/Foto1.png'
import Fote3 from '../../assets/News/Foto3.png'
import Fote4 from '../../assets/News/Foto4.png'
import Fote5 from '../../assets/News/Foto5.png'
import { CalendarDays, Copy, Eye, Facebook, Instagram,  Twitter } from 'lucide-react';
import Interisniy from './_components/index'
const NewsArticle = () => {
    const images = [Fote, Fote1, Fote3, Fote4, Fote5];
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Left Column */}
        <div className="w-full md:w-2/3">
          <h1 className="font-inter font-bold text-[32px] leading-[120%] tracking-[0] mb-4 text-[#062A49]">
            Kolumbiyada oʻtgan jahon championatida hamyurtimiz ilk medalni qoʻlga kiritdi
          </h1>
          <img
            src={veloImg}
            alt="Athlete"
            className="w-full h-[480px] object-cover rounded-lg shadow-md mb-4"
          />
          <div className='flex gap-5'>
            <div className="flex items-center gap-1 font-inter font-normal text-[16px] leading-[100%] tracking-[0.2px] align-middle text-[#5D6B8A]">
              <CalendarDays className='w-4 h-4' />
              <span>12.02.2023</span>
            </div>
            <div className="flex items-center gap-1 font-inter font-normal text-[16px] leading-[100%] tracking-[0.2px] align-middle text-[#5D6B8A]">
              <Eye className='w-4 h-4' />
              <span>100 K</span>
            </div>
          </div>
          <p className="font-inter font-normal text-[16px] leading-[120%] tracking-[0.2px] text-justify text-[#5D6B8A] mt-3">
            TOSHKENT, 15-dekabr. /“Dunyo” IA/. Kolumbiyada og‘ir atletika bo‘yicha o‘tkazilgan jahon chempionatida 87 kilogramm vazn toifasida ishtirok etgan O‘zbekiston terma jamoasi a’zosi Tursunoy Jabborova kumush va bronza medallarini qo‘lga kiritdi, deb xabar bermoqda “Dunyo” axborot agentligi muxbiri.
          </p>
          <p className="font-inter font-normal text-[16px] leading-[120%] tracking-[0.2px] text-justify text-[#5D6B8A] mt-4">
            TOSHKENT, 15-dekabr. /“Dunyo” IA/. Kolumbiyada og‘ir atletika bo‘yicha o‘tkazilgan jahon chempionatida 87 kilogramm vazn toifasida ishtirok etgan O‘zbekiston terma jamoasi a’zosi Tursunoy Jabborova kumush va bronza medallarini qo‘lga kiritdi, deb xabar bermoqda “Dunyo” axborot agentligi muxbiri.
          </p>
          <img
            src={SecondImg}
            alt="Athlete"
            className="w-full h-[480px] object-cover rounded-lg shadow-md mb-4 mt-4"
          />
          <p className="font-inter font-normal text-[16px] leading-[110%] tracking-[0.2px] text-justify text-[#5D6B8A]">
            Yoshligimda boshqa bolalar kabi sho‘h bo‘lmaganman. Ulg‘ayganim sari kishilar o‘rtasidagi munosabatlarning yaxshi-yomon taraflariga e’tibor berar, nega bu vaziyatda unaqa, bunaqa? – degan savollarni ota-onamga ko‘p berardim. Bolaligimdan tarix kitoblarini o‘qish va sayohat qilishni yaxshi ko‘rar edim. Bundan tashqari, siyosatga va ijtimoiy psixologiyaga juda katta qiziqishim bo‘lgan. Uyimizda doim siyosiy mavzularda suhbatlar ko‘p bo‘lardi. Oilaviy muhitim bu yo‘nalishlarga qiziqishimni yanada oshirgan. Davlatlar, bir guruh shaxslar o‘rtasidagi munosabatlar, davlatlarning rivojlanish yoki qulashini sabab va konuniyatlarini tushinish va anglashni istab, shu yo‘nalishni tanlaganman.
          </p>
          <p className="font-inter font-normal text-[16px] leading-[110%] tracking-[0.2px] text-justify text-[#5D6B8A] mt-4">
            Ta’limning bakalavr bosqichini Toshkent davlat sharqshunoslik universitetining Jahon siyosati yunalishini tugatganman. Diplom ishim mavzusi Xitoy Xalk Respublikasi siyosatiga bag‘ishlangan.-Hozirda, Italiyaning Rim shahrida joylashgan Yevropaning eng katta, qadimgi va nufuzli oliy o‘quv yurtlaridan bo‘lgan “Sapienza University of Rome”da magistratura bosqichida “Rivojlanish va xalqaro hamkorlik”yo‘nalishida tahsil olmoqdaman.
          </p>

          {/* Rasm va galeriya */}
    <div className="mt-8">
  {/* Katta rasm */}
  <img
    src={veloImg2}
    alt="Main Image"
    className="w-full h-[200px] sm:h-[280px] md:h-[400px] object-cover rounded-lg shadow-md mb-4"
  />

  {/* Kichik rasmlar galereyasi */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
    {images.map((imgSrc, i) => (
      <img
        key={i}
        src={imgSrc}
        alt={`Image ${i + 1}`}
        className="w-full h-[80px] sm:h-[100px] object-cover rounded-lg shadow-md"
      />
    ))}
  </div>

  {/* Social media ulash */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mt-4">
    <div className="flex space-x-2">
      <button className="bg-[#D1FAD1] hover:bg-[#b3f0b3] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
        <Copy className="text-[#009688] w-5 h-5" />
      </button>
      <button className="bg-[#D1FAD1] hover:bg-[#b3f0b3] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
        <Facebook className="text-[#009688] w-5 h-5" />
      </button>
      <button className="bg-[#D1FAD1] hover:bg-[#b3f0b3] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
        <Twitter className="text-[#009688] w-5 h-5" />
      </button>
      <button className="bg-[#D1FAD1] hover:bg-[#b3f0b3] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
        <Instagram className="text-[#009688] w-5 h-5" />
      </button>
    </div>
    <p className="font-inter text-sm sm:text-[16px] leading-[100%] tracking-[0.2px] text-[#161616]">
      Do'stlaringizga ulashing
    </p>
  </div>
</div>

        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 bg-white p-2 rounded-lg shadow-md self-start  mt-5 md:mt-20 sticky top-20">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">So‘nggi yangiliklar</h2>
          <div className="space-y-4">
            {/* Yangilik 1 */}
            <div className="flex items-start space-x-4">
              <img
                src={RightColumn1}
                alt="Yangilik rasmi"
                className="w-[95px] h-[75px] rounded-lg"
              />
              <div className='flex flex-col gap-5 '>
                <p className="font-inter font-bold text-[13px] leading-[125%] tracking-[0.2px] text-[#10131B]">
                  1 daqiqa o‘qish Xorijda istiqomat qilayotgan vatandoshlarning nafaq...
                </p>
                <div className='flex justify-between'>
                  <div className="flex items-center space-x-2 text-xs text-[#5D6B8A]">
                    <CalendarDays className='w-4 h-4' />
                    <span>12.02.2023</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Eye className='w-4 h-4' />
                    <span>100 K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Yangilik 2 */}
            <div className="flex items-start space-x-4">
              <img
                src={RightColumn2}
                alt="Yangilik rasmi"
                className="w-[95px] h-[75px] rounded-lg"
              />
              <div className='flex flex-col gap-5'>
                <p className="font-inter font-bold text-[13px] leading-[125%] tracking-[0.2px] text-[#10131B]">
                  Oʻzbekiston diplomatlari Janubiy Koreyaning Kvanju
                </p>
                <div className='flex justify-between'>
                  <div className="flex items-center space-x-2 text-xs text-[#5D6B8A]">
                    <CalendarDays className='w-4 h-4' />
                    <span>12.02.2023</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Eye className='w-4 h-4' />
                    <span>100 K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Yangilik 3 */}
            <div className="flex items-start space-x-4">
              <img
                src={RightColumn3}
                alt="Yangilik rasmi"
                className="w-[95px] h-[75px] rounded-lg"
              />
              <div className='flex flex-col gap-5'>
                <p className="font-inter font-bold text-[13px] leading-[125%] tracking-[0.2px] text-[#10131B]">
                  Mamlakatimizning Vladivostokdagi Bosh vazir
                </p>
                <div className='flex justify-between'>
                  <div className="flex items-center space-x-2 text-xs text-[#5D6B8A]">
                    <CalendarDays className='w-4 h-4' />
                    <span>12.02.2023</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Eye className='w-4 h-4' />
                    <span>100 K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Yangilik 4 */}
            <div className="flex items-start space-x-4">
              <img
                src={RightColumn4}
                alt="Yangilik rasmi"
                className="w-[95px] h-[75px] rounded-lg"
              />
              <div className='flex flex-col gap-5'>
                <p className="font-inter font-bold text-[13px] leading-[125%] tracking-[0.2px] text-[#10131B]">
                  Polshada istiqomat qilayotgan vatandoshlar ishtirokida
                </p>
                <div className='flex justify-between'>
                  <div className="flex items-center space-x-2 text-xs text-[#5D6B8A]">
                    <CalendarDays className='w-4 h-4' />
                    <span>12.02.2023</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Eye className='w-4 h-4' />
                    <span>100 K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Yangilik 5 */}
            <div className="flex items-start space-x-4">
              <img
                src={RightColumn5}
                alt="Yangilik rasmi"
                className="w-[95px] h-[75px] rounded-lg"
              />
              <div className='flex flex-col gap-5'>
                <p className="font-inter font-bold text-[13px] leading-[125%] tracking-[0.2px] text-[#10131B]">
                  Oʻzbekistondan Buyuk Britaniyaga 24 nafar
                </p>
                <div className='flex justify-between'>
                  <div className="flex items-center space-x-2 text-xs text-[#5D6B8A]">
                    <CalendarDays className='w-4 h-4' />
                    <span>12.02.2023</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Eye className='w-4 h-4' />
                    <span>100 K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Interisniy/>
    </div>
  );
};

export default NewsArticle;