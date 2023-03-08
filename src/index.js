import React from "react"
import ReactDOM from "react-dom/client"
import "./css/index.css"
import App from "./pages/APropos"
import Navbar from "./components/Navbar"

import { BrowserRouter as Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Alternance from "./pages/Alternance"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <div className="max-content">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/alternance" element={<Alternance />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
)
