import { Link } from 'react-router-dom';
import { Icons } from '@assets/icons';
import '@styles/components/header.css';
function Header() {
    return (
        <header className="header sticky-top">
            <div className="header-top">
                <div className="container">
                    <div className="header-contact">
                        <a href="tel:+569xxxxxxx" className="header-contact-link">
                            <Icons.Phone />
                            <span>+56 9 XXXXXXXX</span>
                        </a>
                    </div>
                    <div className="header-social">
                        <a href="https://wa.me/569xxxxxxx"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp">
                            <Icons.Whatsapp />
                        </a>
                        <a href="https://www.instagram.com/yourprofile"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram">
                            <Icons.Instagram />
                        </a>
                        <a href="https://www.facebook.com/yourpage"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook">
                            <Icons.Facebook />
                        </a>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-white shadow-sm">
                <div className="container">
                    <Link className="navbar-brand header-logo"
                        to="/">
                        Nombre de la Empresa
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarContent"
                    >
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nosotros">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/servicios">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li>
                            <li className="nav-item ms-lg-3">
                                <Link className="btn btn-success appointment-btn" to="/agendar">Agendar Hora</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;