import { Link } from 'react-router-dom';
import '@styles/auth/auth.css';

function LoginForm() {
    return (
        <section className="auth-page">
            <div className="container">
                <div className="auth-card">
                    <div className="auth-banner">
                        <h2>Bienvenido</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="auth-form">
                        <h3>Iniciar Sesión</h3>
                        <form>
                            <div className="mb-3">
                                <label className='form-label'>
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="correo@ejemplo.com"
                                />
                            </div>
                            <div className="mb-4">
                                <label className='form-label'>
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="********"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-success w-100"
                            >
                                Ingresar
                            </button>
                        </form>
                        <p className="auth-link">
                            ¿No tienes una cuenta?
                            <Link to="/register">
                            Crear cuenta
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;