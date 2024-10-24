import "./Footer.css";

function Footer() {
  return (
    <div className="footer-bar">
      <ul className={`footer-links`}>
        <li>
          <a href="#impressum">Impressum</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Crack Contacts</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
