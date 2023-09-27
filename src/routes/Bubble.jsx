import { Link } from "react-router-dom";
import "../css/bubble.scss";

export default function Bubble({ children }) {
  return (
    <div className="container-all">
    <div>
    <img src="../src/images/logo.png" alt="Logo" className="logo-image" />
      </div>
    <div className="container-login-signup">
      <header>
        <nav>
          <ul className="nav-list">
            <li className="nav-list1">
              <div className="link-container-register">
                <Link to="/" className="login" >Login</Link>
                <Link to="/Signup" className="register">Register</Link>
              </div>
              <div className="link-container-others">
                <Link to= "/SobreNosotros" className="AboutUs">Sobre Nosotros</Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
    </div>
  );
}
