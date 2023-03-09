import "../css/Projets.css"
import { useState } from "react"
import styled from "styled-components"
import projets from "../data/projets"
import certifs from "../data/certifs.json"

import Header from "../utils/HeadearWrapper"
import Card from "../components/Card"

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

const ProjetsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 25px;
  width: 90%;
`

const FilterDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin-bottom: 20px;
  select {
    padding: 7px 10px;
    border-radius: 5px;
    border: none;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    cursor: pointer;
  }

  option {
    background-color: #1a1e23 !important;
  }
`

const CertifWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
  margin-bottom: 100px;

  h3 {
    margin: 0 !important;
    margin-bottom: 20px !important;
  }

  p {
    margin: 0 !important;
    font-weight: 400 !important;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: white !important;
    background-color: #31a66d;
    padding: 5px 15px;
    border-radius: 2px;
    display: inline-block;
  }

  a:hover {
    background-color: #31a67d;
    scale: 1.05;
  }

  @media (max-width: 768px) {
    width: 100%;

    h3 {
      font-size: 1.5rem;
    }
  }
`

const Certif = styled.div`
  display: flex;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`

function Projets({ setIdProjetModal }) {
  const [categorieDisplayed, setCategorieDisplayed] = useState("")

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="projets">
      <Header>
        <h2>Mes différents projets</h2>
        <div className="btn-anim-container-projets mt-5">
          <div className="btn-anim-projets"></div>
          <Button href="https://github.com/Alexys-LAURENT" target="_blank" className="greenLink mb-4" id="greenLink">
            Mon github
          </Button>
        </div>
      </Header>
      <FilterDiv data-aos="fade-down" data-aos-duration="1500">
        <select name="" id="" onChange={(e) => setCategorieDisplayed(e.target.value)}>
          <option value="" selected>
            Tous
          </option>
          <option value="personnel">Personnel</option>
          <option value="entreprise">Entreprise</option>
          <option value="scolaire">Scolaire</option>
        </select>
      </FilterDiv>
      <ProjetsWrapper data-aos="fade-down" data-aos-duration="1500" className="mb-5 ProjetsWrapper">
        {projets.map(({ id, categorie, titre, description, stacks, Github }) => (!categorieDisplayed || categorie === categorieDisplayed ? <Card key={id} id={id} titre={titre} description={description} stacks={stacks} Github={Github} setIdProjetModal={setIdProjetModal} /> : null))}
      </ProjetsWrapper>
      <CertifWrapper data-aos="fade-down" data-aos-duration="1500">
        <h3>Mes certifications ✅</h3>
        {certifs.map(({ titre, path }) => (
          <Certif>
            <p>{titre}</p>
            <a href={"/docs/" + path} target="_blank" rel="noreferrer">
              voir
            </a>
          </Certif>
        ))}
      </CertifWrapper>
    </div>
  )
}

export default Projets
