import { FaCut, FaChild } from 'react-icons/fa';
import { GiBeard, GiRazor } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

const services = [
  {
    icon: <FaCut className="text-5xl mb-4" />,
    titleKey: 'home.services.haircut',
  },
  {
    icon: <GiBeard className="text-5xl mb-4" />,
    titleKey: 'home.services.facial',
  },
  {
    icon: <GiRazor className="text-5xl mb-4" />,
    titleKey: 'home.services.shave',
  },
  {
    icon: <FaChild className="text-5xl mb-4" />,
    titleKey: 'home.services.kids',
  },
];

function Services() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            {service.icon}
            <h3 className="text-lg font-semibold mb-4">{t(service.titleKey)}</h3>
            <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
              {t('common.more')}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;
