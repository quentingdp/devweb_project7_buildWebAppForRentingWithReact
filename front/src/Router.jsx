//Imports of external libraries
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Internal dependancies
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Lodging from "./pages/Lodging"
import E404 from "./pages/E404"

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/lodging/:lodging" element={<Lodging />} />
                <Route path="*" element={<E404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
