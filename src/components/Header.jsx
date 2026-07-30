import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          Universo Expandido
        </a>

        <nav className="header__nav">
          <a href="/">HOME</a>
          <a href="/works">WORKS</a>
          <a href="/blog">BLOG</a>
          <a href="/about">ABOUT</a>
        </nav>

        <div className="header__socials">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </header>
  );
}