import "../css/Alternance.css"
import styled from "styled-components"

import Header from "../utils/HeadearWrapper"
import Footer from "../components/Footer"

import Cd2riImg from "../assets/cd2ri.png"
import TchileeWhiteImg from "../assets/tchilee-white.png"

const Button = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #26724d;
  border-radius: 5px;
  padding: 10px 20px;
  height: fit-content;
  -webkit-box-shadow: 0px 0px 39px 6px rgba(38, 114, 77, 0.86);
  box-shadow: 0px 0px 39px 6px rgba(38, 114, 77, 0.86);
`

const DivImg = styled.div`
  background-image: url(${(props) => props.img});
  background-size: 110%;
  background-position: center;
  background-repeat: no-repeat;
  width: 210px;
  height: 210px;
  ${(props) => props.img === Cd2riImg && "background-color:white; "}
  ${(props) => props.img === Cd2riImg && "background-size: 141%; "}
  ${(props) => props.img === Cd2riImg && "width: 180px; "}
  ${(props) => props.img === Cd2riImg && "height: 180px; "}
  // background-color: orange;
  border-radius: 50%;
`

function Alternance() {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="Alternance">
      <Header>
        <h2>Mon alternance actuelle</h2>
        <div className="btn-anim-container-alternance mt-5">
          <div className="btn-anim-alternance"></div>
          <Button href={"#cd2ri-container"} className="greenLink" id="greenLink">
            Découvrir
          </Button>
        </div>
      </Header>
      <div data-aos="fade-down" data-aos-duration="1500" className="cd2ri-container" id="cd2ri-container">
        <DivImg className="cd2ri-image" img={Cd2riImg}></DivImg>
        <div className="cd2ri-text-container">
          <p>Durant cette deuxième année en BTS SIO j’ai la chance de pouvoir effectuer une alternance au sein de l’association CD2RI.</p>
          <p>CD2RI propose à ses adhérents de rejoindre un réseau de contacts professionnels répartis en France et à l'étranger. Leurs services ont été pensés pour aider les membres de la communauté à atteindre leurs objectifs de croissance économique et/ou de se réaliser professionnellement. CD2RI propose de nombreux services allant de l’aide pour les jeunes ou personnes en difficultés afin de trouver un stage ou un emploi mais aussi la création de site internet et la mise en relation avec leur réseau interne.</p>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="1700" className="tchilee-container">
        <DivImg className="tchilee-image" img={TchileeWhiteImg}></DivImg>
        <div className="tchilee-text-container">
          <p>CD2RI possède aussi une marque nommée Tchilee qui est une agence de voyages en ligne</p>
          <p>Tchilee propose de nombreuses destinations accompagnées de plusieurs offres qui constitues des parcours différents, accompagnés et personnalisables !</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Alternance
