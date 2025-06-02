import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer style={{ padding: '1em', background: '#222', color: '#fff', marginTop: '2em' }}>
      <small>&copy; {new Date().getFullYear()} {t('footer.text')}</small>
    </footer>
  );
}
export default Footer;