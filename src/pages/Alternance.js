import styled from "styled-components"

import Header from "../utils/HeadearWrapper"

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

function Alternance() {
  return (
    <Header>
      <h2>Mon alternance actuelle</h2>
      <div className="btn-anim-container mt-5">
        <div className="btn-anim"></div>
        <Button href={"#description-container"} className="greenLink" id="greenLink">
          Découvrir
        </Button>
      </div>
    </Header>
  )
}

export default Alternance
