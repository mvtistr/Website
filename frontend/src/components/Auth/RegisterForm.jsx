import { Link } from 'react-router-dom';
import '@styles/auth/auth.css';

function RegisterForm() {
    return (
        <section className="auth-page">
            <div className="container">
                <div className="auth-card">
                    <div className="auth-banner">
                        <h2>Únete a Nosotros</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="auth-form">
                        <h3>Crear Cuenta</h3>
                        <form>
                            <div className="mb-3">
                                <label className='form-label'>
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label className='form-label'>
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-4">
                                <label className='form-label'>
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-success w-100"
                            >
                                Registrarse
                            </button>
                        </form>
                        <p className="auth-link">
                            ¿Ya tienes cuenta?
                            <Link to="/login">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterForm;