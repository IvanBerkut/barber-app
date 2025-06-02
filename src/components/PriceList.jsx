import { useTranslation } from 'react-i18next';

function PriceList() {
  const { t } = useTranslation();

  const services = [
    { nameKey: 'home.prices.service1', price: '17€' },
    { nameKey: 'home.prices.service2', price: '27€' },
    { nameKey: 'home.prices.service3', price: '12€' },
    { nameKey: 'home.prices.service4', price: '15€' },
    { nameKey: 'home.prices.service5', price: '5€' },
    { nameKey: 'home.prices.service6', price: '5€' },
    { nameKey: 'home.prices.service7', price: '5€' },
    { nameKey: 'home.prices.service8', price: '3€' },
    { nameKey: 'home.prices.service9', price: '12€' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{t('home.prices.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between gap-4 items-center bg-white px-6 py-4 rounded-lg shadow text-left"
            >
              <span className="text-lg">{t(item.nameKey)}</span>
              <span className="text-lg font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PriceList;
