import React from "react";
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="/Img/avion.png" alt="avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Id ea deserunt sint consectetur aliquip anim qui minim pariatur ut eu. Non nostrud non
                        nostrud occaecat enim commodo adipisicing irure esse velit.
                        Minim magna eu occaecat nulla. Consequat sunt sint do occaecat nisi.
                        Tempor elit ea nisi commodo et.</p>
                    <p>Id ea deserunt sint consectetur aliquip anim qui minim pariatur ut eu. Non nostrud non
                        nostrud occaecat enim commodo adipisicing irure esse velit.
                        Minim magna eu occaecat nulla. Consequat sunt sint do occaecat nisi.
                        Tempor elit ea nisi commodo et.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimono">
                        <span className="cita"> Simplemente excelente - </span>
                        <span className="autor">Juan Perez</span>
                     </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;