function Footer() {
  return (
    <footer style={{ padding: '1em', background: '#222', color: '#fff', marginTop: '2em' }}>
      <small>&copy; {new Date().getFullYear()} My Site. All rights reserved.</small>
    </footer>
  );
}
export default Footer;