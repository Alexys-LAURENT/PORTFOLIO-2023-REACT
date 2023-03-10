import "../css/Contact.css"
import styled from "styled-components"
import Header from "../utils/HeadearWrapper"

import GithubImg from "../assets/Github.png"
import LinkedinImg from "../assets/Linkedin.png"
import MailImg from "../assets/Mail.png"

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

const ContactWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  justify-content: center;
  align-items: center;
`

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  gap: 2rem;
`

const ContactDiv = styled.a`
  display: flex;
  background-color: rgba(255, 255, 255, 0.2);
  width: fit-content;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none !important;

  p {
    margin: 0;
    color: white;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }

    img {
      width: 30px;
    }
  }
`

const MailDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none !important;

  p {
    margin: 0;
    color: white;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }

    img {
      width: 30px;
    }
  }
`

function Contact() {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="contact">
      <Header>
        <h2>Mes contacts / réseaux</h2>
        <div className="btn-anim-container-contact mt-5">
          <div className="btn-anim-contact"></div>
          <Button href="#ContactsContainer" className="greenLink mb-4" id="greenLink">
            Me contacter
          </Button>
        </div>
      </Header>
      <ContactWrapper>
        <ContactsContainer id="ContactsContainer">
          <MailDiv href="/" target="_blank">
            <img src={MailImg} alt="Github" width={50} />
            <p>alexyslaurent.442@gmail.com</p>
          </MailDiv>
          <ContactDiv href="https://github.com/Alexys-LAURENT" target="_blank">
            <img src={GithubImg} alt="Github" width={50} />
            <p>Github</p>
          </ContactDiv>
          <ContactDiv href="https://www.linkedin.com/in/alexys-laurent-363210231/" target="_blank">
            <img src={LinkedinImg} alt="Github" width={50} />
            <p>Linkedin</p>
          </ContactDiv>
        </ContactsContainer>
      </ContactWrapper>
    </div>
  )
}

export default Contact
