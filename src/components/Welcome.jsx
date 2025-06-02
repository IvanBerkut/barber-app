import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function Welcome() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 pt-24 py-16 flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl">
      
      {/* Ліва частина — текст */}
      <div className="md:w-1/2">
        <p className="text-gray-500 text-sm uppercase mb-2">{t('home.welcome.welcome')}</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black mb-6">
          {t('home.welcome.title')}
        </h1>

        <div className="space-y-4 text-gray-700 text-base">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1" />
            <p>Pilgrimstein 7, 35037 Marburg</p>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="mt-1" />
            <a
              href="tel:+4964211669226"
              className="hover:underline"
            >
              +49 6421 1669226
            </a>
          </div>
        </div>

        <button className="mt-8 px-6 py-3 border border-black rounded-lg text-black font-medium hover:bg-black hover:text-white transition">
          {t('home.welcome.book')}
        </button>
      </div>

      {/* Права частина — фото */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/src/assets/owner.jfif"
          alt="Owner"
          className="rounded-3xl object-cover w-full max-w-[500px] h-auto"
        />
      </div>
    </section>
  );
}

export default Welcome;
