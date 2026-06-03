import { Link } from "react-router-dom";
import { Icons } from "@assets/icons";
import "@styles/components/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <h4 className="footer-title">Centro de Podología</h4>
                        <p>
                            Atención profesional para el cuidado de tus pies. Servicios de podología,
                            tratamientos personalizados y asesoramiento experto.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="footer-subtitle">Navegación</h5>
                        <ul className="footer-links">
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/nosotros">Nosotros</Link>
                            </li>
                            <li>
                                <Link to="/servicios">Servicios</Link>
                            </li>
                            <li>
                                <Link to="/contacto">Contacto</Link>
                            </li>
                            <li>
                                <Link to="/mapa">Mapa</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <h5 className="footer-subtitle">Contacto</h5>
                        <div className="footer-contact">
                            <p>
                                <Icons.Phone />
                                <span>+56 9 XXXXXXXX</span>
                            </p>
                            <p>
                                <Icons.Email />
                                <span>info@centrodepodologia.cl</span>
                            </p>
                            <p>
                                <Icons.Location />
                                <span>Calle Falsa 123, Ciudad</span>
                            </p>
                            <p>
                                <Icons.Schedule />
                                <span>Lunes a Viernes: 9:00 - 18:00</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5>Ubicación</h5>
                        <div className="footer-map">
                            <iframe 
                                title="Ubicación del Centro de Podología"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13335.133436175964!2d-70.75906696429448!3d-33.3244787750293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662bf798d685cf9%3A0x8e7f15ff3d2bd921!2sValle%20Grande%2C%20Lampa%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1780500003842!5m2!1ses-419!2scl"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <hr className="footer-divider" />
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Centro de Podología. Todos los derechos reservados.</p>
                    <div className="footer-social">
                        <a href="#" aria-label="WhatsApp" className="social-icon whatsapp">
                            <Icons.Whatsapp />
                        </a>
                        <a href="#" aria-label="Instagram" className="social-icon instagram">
                            <Icons.Instagram />
                        </a>
                        <a href="#" aria-label="Facebook" className="social-icon facebook">
                            <Icons.Facebook />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;