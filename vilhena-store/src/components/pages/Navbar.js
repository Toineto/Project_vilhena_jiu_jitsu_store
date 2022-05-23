import { Link } from "react-router-dom";
import logo from "../../img/cropped-cabeçalho-2-1.png";
import "../../styles/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/">
          <img src={logo} alt="Vilhena" className="logonav"/>
        </Link>
        <ul className="list">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/schools">Escolas</Link>
          </li>
          <li className="item">
            <Link to="/kids">Kids</Link>
          </li>
          <li className="item">
            <Link to="/graduation">Sistema de graduação</Link>
          </li>
          <li className="item">
            <Link to="/affiliate">Seja um Filiado</Link>
          </li>
        </ul>
    </div>
  );
}

export default Navbar;
