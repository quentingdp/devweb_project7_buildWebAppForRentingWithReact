//Imports of external libraries
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

//Internal dependancies
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Lodging } from "./pages/Lodging"
import { E404 } from "./pages/E404"

const Router = () => {
    const [currentPage, updateCurrentPage] = useState(window.location.pathname)

    return (
        <BrowserRouter>
            <Header
                currentPage={currentPage}
                updateCurrentPage={updateCurrentPage}
            />
            <Routes>
                <Route
                    path="/"
                    element={<Home updateCurrentPage={updateCurrentPage} />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/lodging/:lodging" element={<Lodging />} />
                <Route
                    path="*"
                    element={<E404 updateCurrentPage={updateCurrentPage} />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
