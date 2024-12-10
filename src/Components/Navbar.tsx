import React from "react";
import Logocedeca from "../Assets/Logocedeca.png";

function Navbar() {
    return <div>
        <div className="navbarbox">
            <div className="logocedecanav">
                <img src={Logocedeca} alt="Logo Cedeca" />
            </div>
            <div className="navbarItens">
                <a href="#Quemsomosid">Quem somos</a>
                <a href="#Ondenosencontrarid">Onde nos encontrar</a>
                <a href="">Nossa Atuação</a>
                <a href="">Doe</a>
                <a href="">Redes Sociais</a>
            </div>
        </div>
    </div>
}

export default Navbar;