import "../css/APropos.css"
import styled from "styled-components"

import Header from "../utils/HeadearWrapper"

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
`

const SkillImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
`

function APropos() {
  return (
    <div className="A-propos">
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

      <div className="description-container" id="description-container">
        <div className="description-text">
          <p>Je m’appelle Alexys LAURENT, j’ai 19 ans et je suis passionné d’informatique, du développement web, des mangas/animes et des sneakers !Actuellement en deuxième année de BTS SIO à l’école IRIS à Paris je suis des études pour devenir développeur web</p>
        </div>
        <Button href="/docs/CV-Alexys-LAURENT.pdf" target="_blank">
          TÉLÉCHARGER MON CV
        </Button>
      </div>

      <div className="competences-container">
        <h3>Mes compétences</h3>
        <div className="rirst-row row">
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
    </div>
  )
}

export default APropos
