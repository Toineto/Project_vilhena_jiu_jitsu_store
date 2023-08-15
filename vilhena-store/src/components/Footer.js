import React from "react";
import logo300pxBrilho from "../img/logo300pxBrilho.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="/"> <img src={ logo300pxBrilho} alt="logo Equipe Vilhena Jiu-Jitsu" /></a>
        </div>
        <div className="footer-links">
          <h4>Links úteis:</h4>
          <br />
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre nós</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Siga-nos nas redes sociais:</h4>
          <br />
          <ul>
            <li><a href="https://facebook.com/equipevilhena">Facebook</a></li>
            <li><a href="https://www.instagram.com/vilhenajiujitsu/">Instagram</a></li>
            <li><a href="https://twitter.com/equipevilhena">whatsapp</a></li>
          </ul>
        </div>
      </div>
      <br />
      <div className="footer-credits">
        <p>Equipe Vilhena Jiu-Jitsu &copy; 2023 - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;