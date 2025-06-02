import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer style={{ padding: '1em', background: '#fff', color: '#4C4647', marginTop: '2em' }}>
      <small>&copy; {new Date().getFullYear()} {t('footer.text')}</small>
    </footer>
  );
}
export default Footer;