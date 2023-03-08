import styled from "styled-components"
import { useEffect } from "react"

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

const GreenBubble = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #26724d;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  // z-index: -1;
  filter: blur(100px);
  opacity: 0.8;
`

const LightBubble = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  z-index: -1;
  filter: blur(100px);
  opacity: 0.3;
`

function Header({ children }) {
  useEffect(() => {
    //make bubbles moves randomly on the screen
    const bubbles = document.querySelectorAll(".bubble-left, .bubble-right")
    const randomMove = () => {
      bubbles.forEach((bubble) => {
        const x = Math.floor(Math.random() * 200)
        const y = Math.floor(Math.random() * 200)
        bubble.style.transform = `translate(${x}px, ${y}px) scale(${Math.random() + 0.5})`
      })
    }
    setInterval(randomMove, 2000)
    randomMove()
  }, [])

  return (
    <>
      <GreenBubble top={200} left={0} className="bubble-left" id="left-green-bubble"></GreenBubble>
      <LightBubble top={450} left={-100} className="bubble-left" id="left-light-bubble"></LightBubble>
      <GreenBubble top={100} right={20} className="bubble-right" id="right-green-bubble"></GreenBubble>
      <LightBubble top={350} right={-100} className="bubble-right" id="right-light-bubble"></LightBubble>
      <HeaderWrapper>{children}</HeaderWrapper>
    </>
  )
}

export default Header
