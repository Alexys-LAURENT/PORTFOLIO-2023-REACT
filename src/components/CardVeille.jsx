import styled from "styled-components"

const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  width: 100%;
  height: 250px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: scale(1.02);
    cursor: pointer;
  }
`

const CardTitle = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 0;
`

const CardDesc = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: start;
  padding-top: 10px;
  padding-bottom: 25px;
  height: 200px;
  overflow: hidden;

  p {
    font-weight: 400 !important;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

function CardVeille({ setIdVeilleModal, id, titreMin, contents }) {
  return (
    <CardContainer className="Card" data-bs-toggle="modal" data-bs-target="#VeilleModal" onClick={() => setIdVeilleModal(id)}>
      <CardTitle>
        <p className="m-0">{titreMin}</p>
      </CardTitle>
      <CardDesc>
        <p className="m-0">{contents.map((content) => content.texte + " ")}</p>
      </CardDesc>
    </CardContainer>
  )
}

export default CardVeille
