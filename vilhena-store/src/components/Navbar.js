import { Link } from "react-router-dom";
import logo300pxBrilho from "../img/logo300pxBrilho.png";
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo300pxBrilho} alt="Vilhena" className="logonav" />
      </Link>
      <ul className="list">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/Professores">Professores</Link>
        </li>
        <li className="item">
          <Link to="/loja">Loja</Link>
        </li>
        <li className="item">
          <Link to="/about">Sobre</Link>
        </li>
        <li className="item">
          <Link to="/affiliate">Seja um Filiado</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
