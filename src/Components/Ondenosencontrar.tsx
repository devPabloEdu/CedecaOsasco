import React from "react";
import Munhozfoto from "../Assets/munhoz.PNG"
import Recantofoto from "../Assets/Recantodasrosas.PNG"
import Centrofoto from "../Assets/centro.PNG"
import Casperfoto from "../Assets/casperlibero.png"

function Ondenosencontrar() {
    return <div>
        <div className="Backgroundlugares" id="Ondenosencontrar">
            <h2 className="ondenosencontrartitle">ONDE NOS ENCONTRAR</h2>
            <hr />
            <div className="Boxlugares">

                <div className="ContainerLugares">
                    <h2>Cedeca Unidade <br />Munhoz Junior</h2>
                    <img src={Munhozfoto} alt="" />
                    <p>Rua Professor Sud Menucci no 1056/1101<br />
                    Munhoz Junior Osasco/SP</p>
                </div>

                <div className="ContainerLugares">
                    <h2>Cedeca Unidade <br />Recanto Das Rosas</h2>
                    <img src={Recantofoto} alt="" />
                    <p>Estrada das Margaridas n°212<br />
                    Recanto das Rosas/ Sul – Osasco/SP</p>
                </div>

                <div className="ContainerLugares">
                     <h2>Cedeca Unidade <br />Centro</h2>
                    <img src={Centrofoto} alt="" />
                    <p>Av. Dionysia Alves Barreto n°18<br />
                    Centro - Osasco/SP</p>
                </div>

                <div className="ContainerLugares">
                    <h2>Cedeca Unidade <br />Casper Libero</h2>
                    <img src={Casperfoto} alt="" />
                    <p>Av. Cásper Líbero n°163<br />
                    Cipava – Osasco/SP</p>
                </div>

            </div>
        </div>
    </div>
}

export default Ondenosencontrar;