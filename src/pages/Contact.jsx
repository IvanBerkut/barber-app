import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return <h1>{t('contact')}</h1>;
}
export default Contact;