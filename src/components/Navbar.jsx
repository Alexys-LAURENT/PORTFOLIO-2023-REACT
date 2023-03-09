import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import styled from "styled-components"

function Navbar() {
  const [pageTitle, setPageTitle] = useState("A propos")
  const [textSize, setTextSize] = useState(8)

  useEffect(() => {
    setTextSize(pageTitle.length)
  }, [pageTitle])

  const TextWritting = styled.div`
    width: ${(props) => props.size}ch;
    height: 1.7ch;
    animation: typing 6s steps(20) infinite alternate, blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 1.5em;
    position: relative;
    top: -3px;

    @keyframes typing {
      from {
        width: 1.6ch;
      }

      40% {
        width: ${(props) => props.size}ch;
      }

      to {
        width: ${(props) => props.size}ch;
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  `

  return (
    <nav className="navbar bg-transparent navbar-expand-lg pb-2" id="Navbar">
      <div className="container-fluid">
        <TextWritting size={textSize}>
          {"//"} {pageTitle}
        </TextWritting>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon aaa"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => {
                  setPageTitle("A propos")
                }}
                className="nav-link active text-white">
                A propos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/alternance"
                onClick={() => {
                  setPageTitle("Alternance")
                }}
                className="nav-link active text-white">
                Alternance
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projets"
                onClick={() => {
                  setPageTitle("Projets")
                }}
                className="nav-link active text-white">
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/veille"
                onClick={() => {
                  setPageTitle("Veille")
                }}
                className="nav-link active text-white">
                Veille
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                onClick={() => {
                  setPageTitle("Contact ")
                }}
                className="nav-link active text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
