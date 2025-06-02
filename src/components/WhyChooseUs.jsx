import { useTranslation } from 'react-i18next';

function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-black rounded-3xl bg-cover bg-center text-white py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
        {/* LEFT: Text List */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.why.title') || 'Why choose us?'}
          </h2>
          <p className="text-sm md:text-base text-gray-200 mb-4">
            {t('home.why.subtitle') || 'In addition, there are 5 more reasons why men prefer us:'}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-200">
            <li>{t('home.why.points.1') || 'Always welcoming environment'}</li>
            <li>{t('home.why.points.2') || 'Our masters focus on the quality'}</li>
            <li>{t('home.why.points.3') || 'We value both the time and the money of our clients'}</li>
            <li>{t('home.why.points.4') || 'We work only with high-quality, hypoallergenic premium products'}</li>
            <li>{t('home.why.points.5') || 'All surfaces and tools are cleaned, disinfected before and after using'}</li>
          </ul>
        </div>

        {/* RIGHT: Working Hours */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-full md:w-[320px]">
          <h3 className="text-xl font-bold text-center mb-4 text-gray-700">
            {t('home.why.hoursTitle') || 'WORKING HOURS'}
          </h3>
          <ul className="text-center text-sm space-y-1">
            <li>{t("home.why.days.sun")} {t("common.close")}</li>
            <li>{t("home.why.days.mon")} 9:00 – 19:00</li>
            <li>{t("home.why.days.tue")} 9:00 – 19:00</li>
            <li>{t("home.why.days.wed")} 9:00 – 19:00</li>
            <li>{t("home.why.days.thu")} 9:00 – 19:00</li>
            <li>{t('home.why.days.fri')} 9:00 – 19:00</li>
            <li>{t('home.why.days.sat')} 9:00 – 18:00</li>
          </ul>
          <button className="mt-5 w-full py-2 border border-black rounded-md font-semibold hover:bg-black hover:text-white transition">
            {t('home.why.book') || 'Book Online'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
