import projets from "../data/projets"
import styled from "styled-components"
import Carrousel from "./Carrousel"

import { useEffect } from "react"

const BlackText = styled.div`
  * {
    color: rgba(0, 0, 0, 0.8);
  }
`
const Choices = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
`
const Choice = styled.div`
  width: fit-content;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 0.5s ease-in-out;

  p {
    margin: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    scale: 1.02;
  }
`
const Section = styled.div`
  width: 90%;
  //   background-color: rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  * {
    font-weight: 400 !important;
  }

  ${(props) =>
    props.id === "techno" &&
    `
   display: none;
   justify-content: space-around;
   flex-wrap: wrap;
   gap: 20px;
  `}

  ${(props) =>
    props.id === "competences" &&
    `
   display: none;
   flex-direction: column;
  `}
`

const TechnoColonne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: fit-content;
  background-color: red;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;

  p {
    font-weight: 500 !important;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center;
  }
`

const Competence = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 10px;
`

function swapSection(e, id) {
  const section = document.getElementById(id)
  const sections = document.querySelectorAll(".section")

  const choices = document.querySelectorAll(".choice")

  sections.forEach((section) => {
    section.style.display = "none"
    section.classList.remove("section-active")
  })

  choices.forEach((choice) => {
    choice.classList.remove("choice-active")
  })

  section.style.display = "flex"
  section.classList.add("section-active")
  const choice = e.target.closest(".choice")
  choice.classList.add("choice-active")
}

function Modal({ id }) {
  const leProjet = projets.find((projet) => projet.id === id) || {}

  useEffect(() => {
    swapSection({ target: { closest: () => document.getElementById("choice-presentation") } }, "presentation")
  }, [leProjet])

  return (
    <BlackText className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {leProjet.titre}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <Choices>
              <Choice className="choice choice-active" id="choice-presentation" onClick={(e) => swapSection(e, "presentation")}>
                <p>Présentation</p>
              </Choice>
              <Choice className="choice" onClick={(e) => swapSection(e, "techno")}>
                <p>Techno utilisées</p>
              </Choice>
              <Choice className="choice" onClick={(e) => swapSection(e, "competences")}>
                <p>Compétences acquises</p>
              </Choice>
              <Choice className="choice" onClick={(e) => swapSection(e, "images")}>
                <p>Images</p>
              </Choice>
            </Choices>
            <Section id="presentation" className="section">
              <p>{leProjet.description}</p>
            </Section>
            <Section id="techno" className="section">
              {leProjet.technos.map((techno) => (
                <TechnoColonne>
                  <p key={`${techno.titreTechno} - ${leProjet.technos.indexOf(techno)}`}>{techno.titreTechno}</p>

                  {techno.nomTechno.map((nom) => (
                    <span key={`${nom} - ${techno.nomTechno.indexOf(nom)}`}>-{nom}</span>
                  ))}
                </TechnoColonne>
              ))}
            </Section>
            <Section id="competences" className="section">
              {leProjet.competencesAcquises.map((competence) => (
                <Competence key={`${leProjet.competencesAcquises.indexOf(competence)} - ${competence.substring(0, 10)}`}>{competence}</Competence>
              ))}
            </Section>
            <Section id="images" className="section">
              <Carrousel id={id} />
            </Section>
          </div>
        </div>
      </div>
    </BlackText>
  )
}

export default Modal
