import React from "react";
import CriancasQuemsomos from "../Assets/CRIANCAS.PNG"

function Quemsomos() {
    return <div>
            <div className="QuemSomosBox" id="Quemsomosbox">
                <div className="Backgroundazul">
                    <div className="Textoquemsomos">
                        <h1>Quem Somos</h1>
                        <p>O Centro de Defesa dos Direitos da Criança e Adolescente -CEDECA é uma organização da sociedade civil, sem fins lucrativos que atua na defesa da garantia de direitos das crianças, adolescentes e seus familiares em situação devulnerabilidade social. Fundado em 07 de novembro de 2015, em sua formação inicial o CEDECA contou com ovoluntariado de grupos de agentes  de proteção infantojuvenil, engajados sobretudo nas pautas da Rede de Proteção Social Básica. Atualmente o CEDECA realizaatendimentos em três unidades distribuídas na região Norte, Sul e Centro de Osasco especificamente nos bairros Jardim Munhoz Júnior, Vila Osasco e Recanto das Rosas.</p>
                    </div>
                </div>

                <div className="imgquemsomos">
                    <img src= {CriancasQuemsomos} alt="" />
                </div>
            </div>
    </div>
}

export default Quemsomos;