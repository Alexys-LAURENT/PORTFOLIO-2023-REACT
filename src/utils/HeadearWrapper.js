import styled from "styled-components"
import { useEffect } from "react"

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 92vh;
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

const SrollIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #26724d !important;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  cursor: none;
  user-select: none;
  align-items: center;
  justify-content: center;
  animation: scroll 1s infinite;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-down-circle'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='8 12 12 16 16 12'%3E%3C/polyline%3E%3Cline x1='12' y1='8' x2='12' y2='16'%3E%3C/line%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease-in-out !important;
  @keyframes scroll {
    0% {
      transform: translateX(-50%) translateY(0px);
    }
    50% {
      transform: translateX(-50%) translateY(10px);
    }
    100% {
      transform: translateX(-50%) translateY(0px);
    }
  }
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

    window.addEventListener("scroll", () => {
      const scrollIcon = document.getElementById("ScrollIcon")
      if (window.scrollY > 0) {
        scrollIcon.style.opacity = "0.01"
      } else {
        scrollIcon.style.opacity = "1"
      }
    })
  }, [])

  return (
    <>
      <GreenBubble top={200} left={0} className="bubble-left" id="left-green-bubble"></GreenBubble>
      <LightBubble top={450} left={-100} className="bubble-left" id="left-light-bubble"></LightBubble>
      <GreenBubble top={100} right={20} className="bubble-right" id="right-green-bubble"></GreenBubble>
      <LightBubble top={350} right={-100} className="bubble-right" id="right-light-bubble"></LightBubble>
      <div className="position-relative">
        <HeaderWrapper>{children}</HeaderWrapper>
        <SrollIcon id="ScrollIcon"> </SrollIcon>
      </div>
    </>
  )
}

export default Header
