import "../css/APropos.css"
import styled from "styled-components"
import { useEffect } from "react"
import Header from "../utils/HeadearWrapper"
import { createPopper } from "@popperjs/core"
import Footer from "../components/Footer"

import htmlImg from "../assets/html.png"
import cssImg from "../assets/css.png"
import jsImg from "../assets/js.png"
import phpImg from "../assets/php.png"
import mysqlImg from "../assets/mysql.png"
import bootstrapImg from "../assets/bootstrap.png"
import ejsImg from "../assets/ejs.png"
import reactImg from "../assets/react.png"
import expressImg from "../assets/express.png"
import nodeImg from "../assets/node.png"
import chartjsImg from "../assets/chartjs.png"
import apacheImg from "../assets/apache.png"
import gitImg from "../assets/git.png"
import figmaImg from "../assets/figma.png"

const Button = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #26724d;
  border-radius: 5px;
  padding: 10px 20px;
  height: fit-content;
  -webkit-box-shadow: 0px 0px 39px 6px rgba(38, 114, 77, 0.86);
  box-shadow: 0px 0px 39px 6px rgba(38, 114, 77, 0.86);

  ${(props) =>
    props.cv &&
    `
    transition: 0.5s;
    &:hover {
      scale: 1.1;
    }`}
`

const SkillImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
`

const Timeline = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: white;

  @media (max-width: 840px) {
    rotate: 90deg;
    transform: translateY(-50%);
  }
`

const TimelineItem = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  top: -7px;

  ${(props) =>
    props.ordre === 1 &&
    `
    left: 5%;
    `}

  ${(props) =>
    props.ordre === 2 &&
    `
    left: 25%;
    `}
  ${(props) =>
    props.ordre === 3 &&
    `
      left: 45%;
      `}
      ${(props) =>
    props.ordre === 4 &&
    `
        left: 60%;
        `}
        ${(props) =>
    props.ordre === 5 &&
    `
          left: 85%;
          `}
`

function APropos() {
  useEffect(() => {
    var placementTop = ""
    var placementBottom = ""
    const timeLineItem1 = document.querySelector("#timeLineItem1")
    const tooltip1 = document.querySelector("#tooltip1")
    const timeLineItem2 = document.querySelector("#timeLineItem2")
    const tooltip2 = document.querySelector("#tooltip2")
    const timeLineItem3 = document.querySelector("#timeLineItem3")
    const tooltip3 = document.querySelector("#tooltip3")
    const timeLineItem4 = document.querySelector("#timeLineItem4")
    const tooltip4 = document.querySelector("#tooltip4")
    const timeLineItem5 = document.querySelector("#timeLineItem5")
    const tooltip5 = document.querySelector("#tooltip5")
    const tooltip6 = document.querySelector("#tooltip6")

    //create popper instance with offset using popper-lite
    const option = {
      name: "offset",
      options: {
        offset: [0, 8],
      },
    }

    const popperInstance1 = createPopper(timeLineItem1, tooltip1, {
      modifiers: [option],
    })

    const popperInstance2 = createPopper(timeLineItem2, tooltip2, {
      modifiers: [option],
    })

    const popperInstance3 = createPopper(timeLineItem3, tooltip3, {
      modifiers: [option],
    })

    const popperInstance4 = createPopper(timeLineItem4, tooltip4, {
      modifiers: [option],
    })

    const popperInstance5 = createPopper(timeLineItem5, tooltip5, {
      modifiers: [option],
    })

    const popperInstance6 = createPopper(timeLineItem5, tooltip6, {
      modifiers: [option],
    })

    function updatePopperPlacement() {
      const mq = window.matchMedia("(max-width: 840px)")
      if (mq.matches) {
        placementTop = "right"
        placementBottom = "left"
      } else {
        placementTop = "top"
        placementBottom = "bottom"
      }
      popperInstance1.setOptions({
        placement: placementTop,
      })
      popperInstance2.setOptions({
        placement: placementBottom,
      })
      popperInstance3.setOptions({
        placement: placementTop,
      })
      popperInstance4.setOptions({
        placement: placementBottom,
      })
      popperInstance5.setOptions({
        placement: placementTop,
      })
      popperInstance6.setOptions({
        placement: placementBottom,
      })
    }
    updatePopperPlacement()
    window.addEventListener("resize", updatePopperPlacement)
  }, [])

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="A-propos">
      <Header>
        <h1>Alexys LAURENT</h1>
        <h2>Développeur web junior</h2>
        <div className="btn-anim-container mt-5">
          <div className="btn-anim"></div>
          <Button href={"#description-container"} className="greenLink" id="greenLink">
            Qui suis-je ?
          </Button>
        </div>
      </Header>

      <div data-aos="fade-down" data-aos-duration="1500" className="description-container" id="description-container">
        <div className="description-text">
          <p>Je m’appelle Alexys LAURENT, j’ai 19 ans et je suis passionné d’informatique, du développement web, des mangas/animes et des sneakers !Actuellement en deuxième année de BTS SIO à l’école IRIS à Paris je suis des études pour devenir développeur web</p>
        </div>
        <Button href="/docs/CV-Alexys-LAURENT.pdf" target="_blank" cv={true}>
          TÉLÉCHARGER MON CV
        </Button>
      </div>

      <div data-aos="fade-down" data-aos-duration="1500" className="competences-container">
        <h3>Mes compétences</h3>
        <div className="row">
          <div className="skill">
            <SkillImage image={htmlImg} className="skill-image"></SkillImage>
            <h4>HTML</h4>
          </div>
          <div className="skill">
            <SkillImage image={cssImg} className="skill-image"></SkillImage>
            <h4>CSS</h4>
          </div>
          <div className="skill">
            <SkillImage image={jsImg} className="skill-image"></SkillImage>
            <h4>JS</h4>
          </div>
          <div className="skill">
            <SkillImage image={phpImg} className="skill-image"></SkillImage>
            <h4>PHP</h4>
          </div>
          <div className="skill">
            <SkillImage image={mysqlImg} className="skill-image"></SkillImage>
            <h4>MYSQL</h4>
          </div>
          <div className="skill">
            <SkillImage image={bootstrapImg} className="skill-image"></SkillImage>
            <h4>BOOTSTRAP</h4>
          </div>
          <div className="skill">
            <SkillImage image={ejsImg} className="skill-image"></SkillImage>
            <h4>EJS</h4>
          </div>
          <div className="skill">
            <SkillImage image={reactImg} className="skill-image"></SkillImage>
            <h4>REACT</h4>
          </div>
          <div className="skill">
            <SkillImage image={expressImg} className="skill-image"></SkillImage>
            <h4>EXPRESS</h4>
          </div>
          <div className="skill">
            <SkillImage image={nodeImg} className="skill-image"></SkillImage>
            <h4>NODE</h4>
          </div>
          <div className="skill">
            <SkillImage image={chartjsImg} className="skill-image"></SkillImage>
            <h4>CHART JS</h4>
          </div>
          <div className="skill">
            <SkillImage image={apacheImg} className="skill-image"></SkillImage>
            <h4>APACHE</h4>
          </div>
          <div className="skill">
            <SkillImage image={gitImg} className="skill-image"></SkillImage>
            <h4>GIT</h4>
          </div>
          <div className="skill">
            <SkillImage image={figmaImg} className="skill-image"></SkillImage>
            <h4>FIGMA</h4>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="1500" className="experienceContainer">
        <h3>Mes exprériences</h3>
        <Timeline>
          <TimelineItem id="timeLineItem1" aria-describedby="tooltip" ordre={1}></TimelineItem>
          <TimelineItem id="timeLineItem2" aria-describedby="tooltip" ordre={2}></TimelineItem>
          <TimelineItem id="timeLineItem3" aria-describedby="tooltip" ordre={3}></TimelineItem>
          <TimelineItem id="timeLineItem4" aria-describedby="tooltip" ordre={4}></TimelineItem>
          <TimelineItem id="timeLineItem5" aria-describedby="tooltip" ordre={5}></TimelineItem>
        </Timeline>
        <div id="tooltip1" className="Tooltip" role="tooltip">
          <h1>2020</h1>
          <p>Découverte du développement web avec un cours de HTML/CSS sur Openclassrooms</p>
          <div id="arrow" data-popper-arrow></div>
        </div>

        <div id="tooltip2" className="Tooltip" role="tooltip">
          <h1>2021</h1>
          <p>Obtention du Baccalauréat Général options SES et NSI avec mention assez bien</p>
          <div id="arrow" data-popper-arrow></div>
        </div>

        <div id="tooltip3" className="Tooltip" role="tooltip">
          <h1>Sept 2021</h1>
          <p>Entrée à l'école IRIS pour un BTS SIO</p>
          <div id="arrow" data-popper-arrow></div>
        </div>

        <div id="tooltip4" className="Tooltip" role="tooltip">
          <h1>Juin 2022</h1>
          <p>Stage de 1ère année au sein de l'entreprise OpenValue</p>
          <div id="arrow" data-popper-arrow></div>
        </div>

        <div id="tooltip5" className="Tooltip" role="tooltip">
          <h1>Sept 2022</h1>
          <p>Début de la 2ème année de BTS SIO</p>
          <div id="arrow" data-popper-arrow></div>
        </div>

        <div id="tooltip6" className="Tooltip" role="tooltip">
          <h1>Sept 2022</h1>
          <p>Début de mon alternance au sein de l'association CD2R</p>
          <div id="arrow" data-popper-arrow></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default APropos
