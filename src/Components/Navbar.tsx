import React from "react";
import Logocedeca from "../Assets/Logocedeca.png";

function Navbar() {
    return <div>
        <div className="navbarbox" id="iniciodapaginaid">
            <div className="logocedecanav">
                <img src={Logocedeca} alt="Logo Cedeca" />
            </div>
            <div className="navbarItens">
                <a href="#Quemsomosid">Quem somos</a>
                <a href="#Ondenosencontrarid">Onde nos encontrar</a>
                <a href="#linhadotempoid">Linha do Tempo</a>
                <a href="">Nossa Atuação</a>
                <a href="">Doe</a>
                <a href="">Redes Sociais</a>
            </div>
        </div>

        <div className="voltaroaotopobutton">
            <a href="#iniciodapaginaid"><button>^</button></a>
        </div>
    </div>
}

export default Navbar;