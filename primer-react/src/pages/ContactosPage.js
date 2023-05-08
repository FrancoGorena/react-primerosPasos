import React from "react";
import '../styles/components/pages/ContactosPage.css'

const ContactosPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="number" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div calss="datos">
                <h2>Otras vias de comunicación</h2>
                <p>También puedes contactarte con nosotros usando los siguientes
                    medios</p>
                    <ul>
                        <li>Teléfono: +54 9 3885137680</li>
                        <li>Email: francogorena14@gmail.com</li>
                        <li>Facebook:</li>
                        <li>Instagram:</li>
                        <li>Skype:</li>
                    </ul>

            </div>
        </main>
    );
}

export default ContactosPage;