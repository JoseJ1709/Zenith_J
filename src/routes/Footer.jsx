import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
     <div className="footer-section-logo">
        <div className="logo-and-name">
          <img src="../src/images/logo.png" alt="Logo" className="logo" />
          <h4>ZenithSW</h4>
        </div>
      </div>
      <div className="footer-section-suggestions">
        <h4>Envianos tus sugerencias</h4>
        <div className="input-container">
          <input type="text" placeholder="Escribe algo..." />
          <button>
          <img src="../src/images/send_icon.png" alt="Enviar" />
          </button>
        </div>
      </div>
      <div className="footer-section-company">
        <h4>Compañia</h4>
        <a href="/SobreNosotros" className="footer-link">Sobre Nosotros</a>
        <a href="#" className="footer-link">Nuestra Historia</a>
      </div>
      <div className="footer-section-contact">
        <h4>Contactanos</h4>
        <div className="contact-info">
            <div className="contact-item">
            <img src="../src/images/phone.png" alt="Teléfono" />
            <a href="tel:+573229393939" className="footer-link">+57 322 939 3939</a>
        </div>
        <div className="contact-item">
            <img src="../src/images/mail.png" alt="Correo Electrónico" />
            <a href="mailto:zenithpoint@gmail.com" className="footer-link">zenithpoint@gmail.com</a>
        </div>
        </div>
        </div>
      <div className="footer-section-social">
        <div className="image-link">
          <a href="#">
          <img src="../src/images/facebook_social.png" alt="facebook" />
          </a>
        </div>
        <div className="image-link">
          <a href="#">
             <img src="../src/images/twitter_social.png" alt="twitter" />
          </a>
        </div>
        <div className="image-link">
          <a href="#">
            <img src="../src/images/linke_social.png" alt="linkedin" />  
          </a>
        </div>
        <div className="image-link">
          <a href="#">
          <img src="../src/images/insta_social.png" alt="intagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;