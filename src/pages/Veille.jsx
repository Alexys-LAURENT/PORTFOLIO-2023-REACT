import "../css/Veille.css"
import Header from "../utils/HeadearWrapper"
import styled from "styled-components"

import { useState } from "react"
import veilles from "../data/veilles"

import CardVeille from "../components/CardVeille"

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

const VeillesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 25px;
  width: 90%;
`

function Veille({ setIdVeilleModal }) {
  const [categorieVeilleDisplayed, setCategorieDisplayed] = useState("")
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="veille">
      <Header>
        <h2>Veilles informatiques et juridiques</h2>
        <div className="btn-anim-container-alternance mt-5">
          <div className="btn-anim-alternance"></div>
          <Button href="#VeillesWrapper" className="greenLink mb-4" id="greenLink">
            Découvrir
          </Button>
        </div>
      </Header>
      <FilterDiv data-aos="fade-down" data-aos-duration="1500">
        <select name="" id="" onChange={(e) => setCategorieDisplayed(e.target.value)}>
          <option value="" selected>
            Tous
          </option>
          <option value="informatique">Informatique</option>
          <option value="juridique">Juridique</option>
        </select>
      </FilterDiv>
      <VeillesWrapper data-aos="fade-down" data-aos-duration="1500" id="VeillesWrapper" className="VeillesWrapper">
        {veilles.map(({ id, categorie, titreMin, contents, sources }) => (!categorieVeilleDisplayed || categorieVeilleDisplayed === categorie ? <CardVeille key={id} id={id} titreMin={titreMin} contents={contents} setIdVeilleModal={setIdVeilleModal}></CardVeille> : null))}
      </VeillesWrapper>
    </div>
  )
}

export default Veille
