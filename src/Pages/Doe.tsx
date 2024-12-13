import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DoeFoto from "../Assets/pageImages/Doemain-removebg-preview.png";
import TampinhaLegal from "../Assets/pageImages/TampinhaLegal.PNG"

function Doe() {
    return <div>

        <div className="bannerdoeBox">
            <div className="sejaparceirobox">
                <h1>SEJA <br />PARCEIRO</h1>
                <p>Esta apresentação é um CONVITE e uma ótima oportunidade de todos participarem da construção e gestão deste grande projeto. Ajude a “CRIAR MAIS OPORTUNIDADES TRANSFORMADORAS” que farão toda diferença na vida social das Crianças e Adolescentes atendidas.</p>
            </div>
        </div>

        <p className="pintroDoe">Assim propomos diversas formas de parcerias com empresas pequenas, médias e de grande porte, <br />comerciantes, pessoa física e jurídica, através das seguintes formas de participação:</p>

        <div className="DoeMainBox">
            <div>
                <img src={DoeFoto} alt="" />
            </div>

            <div className="Lista1doacoesbox">

                <div className="doacaobox">
                <h3>1 - Doação e dedução de 1% de imposto de renda</h3>
                <p>na fonte em favor deste (CNPJ 24.068.451/0001-29) através do setor contábil;</p>
                </div>

                <div className="doacaobox">
                <h3>2 - Doações Diversas:</h3>
                <p>· Materiais de escritório e pedagógico · Alimentação, Roupa e Limpeza · Através do PIX CNPJ 24.068.451/0001-29</p>                
                </div>

                <div className="doacaobox">
                <h3>3 - Nota Fiscal Paulista</h3>
                <p>Inscrição como: “DOADOR AUTOMÁTICO” · Arrecadação e doação do Cupom Fiscal</p>
                </div>

                <div className="doacaobox">
                <h3>4 - Apadrinhamento nas Datas Comemorativas</h3>
                <p>· Páscoa · Arraiá Beneficente · Dia das Crianças · Festa de Natal</p>
                </div>

            </div>
        </div>
        
    </div>
}

export default Doe;