import "../css/App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import APropos from "../pages/APropos"
import Alternance from "../pages/Alternance"
import Projets from "../pages/Projets"
import Veille from "../pages/Veille"
import Contact from "./Contact"
import Navbar from "../components/Navbar"
import Modal from "../components/Modal"
import ModalVeille from "../components/ModalVeille"

function App() {
  //background color on navbar when scrolling
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("Navbar")
      if (window.scrollY > 0) {
        navbar.classList.remove("bg-transparent")
        navbar.classList.add("navbar-background")
      } else {
        navbar.classList.remove("navbar-background")
      }
    })
    AOS.init()
  }, [])

  const [IdProjetModal, setIdProjetModal] = useState("4e5f6z4")
  const [IdVeilleModal, setIdVeilleModal] = useState("z5sd2")

  return (
    <div className="max-content mt-2">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<APropos />} />
          <Route path="/alternance" element={<Alternance />} />
          <Route path="/projets" element={<Projets setIdProjetModal={setIdProjetModal} />} />
          <Route path="/veille" element={<Veille setIdVeilleModal={setIdVeilleModal} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Modal id={IdProjetModal} />
      <ModalVeille id={IdVeilleModal} />
    </div>
  )
}

export default App
