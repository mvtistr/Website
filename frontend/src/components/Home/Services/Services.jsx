import '@styles/home/services.css';

function Services() {
    return (
        <section className="services-section">
            <div className="container">
                <h2>Nuestros Servicios</h2>
                <div className="row g-4">
                    {[1, 2, 3].map((item) => (
                        <div className="col-md-4" key={item}>
                            <div className="service-card">
                                <h4>Servicio {item}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, inventore labore! Sit harum officia labore, tempore nihil qui ipsa quo? Reprehenderit doloremque repellendus nisi possimus exercitationem, eaque laudantium molestiae temporibus?</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;