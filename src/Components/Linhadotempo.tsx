import React, { useState } from "react";

function Linhadotempo() {
  // Defina os itens da linha do tempo como divs
  const items = [
    <div className="item" key={1}>
      <h2>2015 - FUNDAÇÃO</h2>
      <p>Assembleia de Posse da Diretoria, Regimento e Estatuto</p>
    </div>,

    <div className="item" key={2}>
      <h2>2015 - FUNDAÇÃO 2016 - PARCERIAS P.P </h2>
      <p>Parceria com a rede CRAS, CREAS, CAPS, SAICA, CONSELHO TUTELAR para cadastro e atendimento de crianças, adolescentes e famílias de baixa renda </p>
    </div>,

    <div className="item" key={3}>
      <h2>2016 - SAÚDE MENTAL PAULISTA</h2>
      <p>Início das atividades de atendimento Psicológico em parceria com a Faculdade Anhanguera </p>
    </div>,

    <div className="item" key={4}>
      <h2>2017 - 18 DE MAIO</h2>
      <p>Realização de Evento Público para conscientização do Dia 18 de Maio, Dia Nacional de Combate ao Abuso e à Exploração Sexual Infantil</p>
    </div>,

    <div className="item" key={5}>
      <h2>2017 - CAMPANHA “DIGA NÃO AS DROGAS"</h2>
      <p>Curso de Capacitação de Agentes Multiplicadores Anti Drogas através do Dipe Denarc SP</p>
    </div>,

    <div className="item" key={6}>
      <h2>2018 - NOTA FISCAL 2016 - SAÚDE MENTAL PAULISTA</h2>
      <p>Aprovação do Cadastro pela Secretaria da Fazenda e Planejamento do Estado de São Paulo</p>
    </div>,

    <div className="item" key={7}>
      <h2>2018 - CEDECA UNIDADE MUNHOZ JR</h2>
      <p>Início das atividades recreativas, esportivas e culturais na Unidade Munhoz Junior</p>
    </div>,

    <div className="item" key={8}>
      <h2>2019 - PLANTÃO SOCIAL</h2>
      <p>Encaminhamento das famílias para inclusão CADÚNICO e acesso aos benéficos socioassistenciais 
      </p>
    </div>,

    <div className="item" key={9}>
      <h2>2020 - COVID-19</h2>
      <p>Atendimento com entrega de 1.250 cestas básicas, mascaras, álcool gel e materiais de higiene para famílias atendidas 
      </p>
    </div>,

    <div className="item" key={10}>
      <h2>2020 - CMAS</h2>
      <p>Inscrição no Conselho Municipal de Assistência Social e Cadastro Nacional de Entidades de Assistência Social - CNEAS 
      </p>
    </div>,

    <div className="item" key={11}>
      <h2>2020 - PROGRAMA TAMPINHA LEGAL</h2>
      <p>Inicio da parceria de coleta de tampinhas plásticas junto às escolas, empresas e órgãos públicos 
      </p>
    </div>,

    <div className="item" key={12}>
      <h2>2020 - TRIBUNAL DE JUSTIÇA DO ESTADO 2019 - PLANTÃO SOCIAL DE SÃO PAULO</h2>
      <p>Inicio da Parceria com a Corregedoria Geral de Justiça para Prestação da Pecuniária 
      </p>
    </div>,

    <div className="item" key={13}>
      <h2>2021 - PROJETO JOVENS CONECTADOS</h2>
      <p>Inicio do Curso de Informática para 80 crianças e adolescentes financiado pelo Termo de Fomento FUMCAD / CMDCA 
      </p>
    </div>,

    <div className="item" key={14}>
      <h2>2021 - PARCERIA SENAI/SEBRAE</h2>
      <p>Cursos de Capacitação, Qualificação Profissional e Empreenda Rápido 
      </p>
    </div>,

    <div className="item" key={15}>
      <h2>2022 - SCFV</h2>
      <p>Início do Serviço de Convivência e Fortalecimento de Vínculos financiado pelo Termo de Colaboração da Secretaria de Assistência Social – SAS 
      </p>
    </div>,

    <div className="item" key={16}>
      <h2> 2022 - NOVAS SEDES
      </h2>
      <p> Abertura das Unidades Centro e Sul
      </p>
    </div>,

    <div className="item" key={17}>
      <h2>2022 - CEDECA CENTRO</h2>
      <p>Endereço: Rua Antônia Bizarro nº 258 Bairro -Vila Osasco – Centro 
      </p>
    </div>,

    <div className="item" key={18}>
      <h2>2022 - CEDECA SUL</h2>
      <p>Endereço: Estrada das Margaridas nº 212 Bairro - Recanto das Rosas 
      </p>
    </div>,

    <div className="item" key={19}>
      <h2>2023 - CEBAS 
      </h2>
      <p>Ministério da Cidadania concedeu a esta OSC a Certificação de Entidade Beneficente de Assistência Socia        
      </p>
    </div>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 5 < items.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Exibe 5 itens por vez
  const visibleItems = items.slice(currentIndex, currentIndex + 5);

  return (
    <div>
        <div className="Carrosellinhadotempo">
            <div>
                <h1>LINHA DO TEMPO</h1>
            </div>
            <div className="carousel">
              <button onClick={prevSlide}>{"<"}</button>
              <div className="carousel-content">
                {visibleItems.map((item) => item)} {/* Renderiza 5 itens */}
              </div>
              <button onClick={nextSlide}>{">"}</button>
            </div>
        </div>
    </div>
  );
}

export default Linhadotempo;
