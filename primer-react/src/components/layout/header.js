import React from "react";
import '../../styles/components/layout/Header.css'

 const Header = (props) => {
    return (
        <header>
        <div className="holder">
            <img src="img/logo.png" width="100px" alt="TransportesX" />
            <h1>TransportesX</h1>
        </div>
        </header>
    );
 }

 export default Header;