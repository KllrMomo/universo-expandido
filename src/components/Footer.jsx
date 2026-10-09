import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/footers.css";

const links = ['Home', 'Works', 'Blog', 'About'];

export default function Footer({ name = 'Nadia Islas' }) {
  return (
    <footer className="footer">

      <div className="footer__inner">
        <ul className="footer__social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </ul>

        <nav className="footer__nav">
          <ul>
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <h1 className="footer__title">{name}</h1>
      </div>
    </footer>
  );
}