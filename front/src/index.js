import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Survey from "./pages/Survey"
import Inexistent from "./pages/Inexistent"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey" element={<Survey />} />
                <Route path="*" element={<Inexistent />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
