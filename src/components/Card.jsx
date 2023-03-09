import styled from "styled-components"
import GithubImg from "../assets/Github.png"

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
  height: 160px;
  overflow: hidden;

  p {
    font-weight: 400 !important;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

const CardStacks = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-right: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  position: relative;
  bottom: 0;

  p {
    font-weight: 500 !important;
    width: 70%;
    min-width: 50px;
    height: 100%;
    max-height: 100px !important;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

const GithubLink = styled.a`
  position: absolute;
  top: 4px;
  right: 10px;
`

function Card({ id, titre, description, stacks, Github, setIdProjetModal }) {
  const stackListed = stacks.reduce((acc, stack) => {
    return acc + ", " + stack
  })
  return (
    <CardContainer className="Card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setIdProjetModal(id)}>
      <CardTitle>
        <p className="m-0">{titre}</p>
      </CardTitle>
      <CardDesc>
        <p className="m-0">{description}</p>
      </CardDesc>
      <CardStacks>
        <p className="m-0">{stackListed}</p>
        {Github && (
          <GithubLink className="m-0" href={Github} target="_blank">
            <img src={GithubImg} width={24} alt="Github Alexys LAURENT"></img>
          </GithubLink>
        )}
      </CardStacks>
    </CardContainer>
  )
}

export default Card
