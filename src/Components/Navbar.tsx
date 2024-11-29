import React from "react";
import LogoCedeca from "../Assets/Logocedeca.png"

function Navbar(){
    return <div>
        <div className="BarraDeNavegacao">
            <div className="LogoCedeca"><img src={LogoCedeca} alt="Logo-cedeca"/></div>
            <div className="ItensNav">
                <a href="#Quemsomosbox">Quem Somos</a>
                <a href="#Ondenosencontrar">Onde nos encontrar</a>
                <a href="">Nossa Atuação</a>                
                <a href="">Doe</a>
                <a href="">Redes Sociais</a>
                <a href="">Projeto Tampinha Legal</a>
                <a href="">Sala Sensorial</a>
            </div>
        </div>
    </div>
}

export default Navbar;