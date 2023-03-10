import styled from "styled-components"
import GithubImg from "../assets/Github.png"
import LinkedinImg from "../assets/Linkedin.png"

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  gap: 3rem;
  margin-top: 100px;
  margin-bottom: 20px;
`

function Footer() {
  return (
    <FooterWrapper>
      <a href="/">
        <img src={GithubImg} width={30} alt="github" />
      </a>
      <a href="/">
        <img src={LinkedinImg} width={30} alt="github" />
      </a>
    </FooterWrapper>
  )
}

export default Footer
