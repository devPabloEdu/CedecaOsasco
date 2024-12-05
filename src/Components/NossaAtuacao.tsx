import React, { useState } from "react";
import TituloMunhoz from "../Assets/Atividades/Munhoz/Titulo.PNG";


function NossaAtuacao() {

    const [activeDiv, setActiveDiv] = useState(""); //controla a div ativa

    const handleButtonClick = (divName) => {
        setActiveDiv(divName); //atualiza a div ativa com base no botão clicado
    };



    return (<div id="Nossaatuacao">
        <div className="BotoesBox">
            <h1>NOSSA ATUAÇÃO</h1>
            <p>Clique em uma de nossas <br />unidades para mais informações</p>
            <div className="Boxbuttonsdisplay">
                <div>
                    <button 
                        onClick={() => handleButtonClick("MunhozJr")} 
                        className={activeDiv === "MunhozJr" ? "active" : ""}
                    >
                        Munhoz Júnior
                    </button>
                </div>
                <div>
                    <button 
                        onClick={() => handleButtonClick("RecantoRosas")} 
                        className={activeDiv === "RecantoRosas" ? "active" : ""}
                    >
                        Recanto das Rosas
                    </button>
                </div>
                <div>
                    <button 
                        onClick={() => handleButtonClick("Centro")} 
                        className={activeDiv === "Centro" ? "active" : ""}
                    >
                        Centro
                    </button>
                </div>
                <div>
                    <button 
                        onClick={() => handleButtonClick("Casperlibero")} 
                        className={activeDiv === "Casperlibero" ? "active" : ""}
                    >
                        Casper Libero
                    </button>
                </div>
            </div>
        </div>

        {/*Conteudo das divs*/}
        <div>

            {activeDiv === "MunhozJr" && 
            <div>
                <div className="backgroundbox">
                    <div>
                        <hr />
                        <div className="munhoztitulo">
                                <h2>UNIDADE <br />MUNHOZ <br />JÚNIOR</h2>
                                <img src={TituloMunhoz} alt="" />
                        </div>

                        <div className="Atividadesmunhoz1">
                            <div className="oferecidasmunhoz1">
                                <h3>ATIVIDADES OFERECIDAS</h3>
                                <ul>
                                <li>Oficina de Informática</li>
                                <li>Oficina de Recreação <br /> Atividade esportiva</li>
                                <li>Oficina de Grafite</li>
                                </ul>
                            </div>

                            <div>
                                <p>Estas atividades são realizadas como
                                estratégia de acolhimento e inclusão da
                                criança e adolescente no Serviço de
                                Convivência e Fortalecimento de Vínculos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }



            
        </div>
    </div> )
}

export default NossaAtuacao;