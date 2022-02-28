import { Routes, Route } from "react-router-dom"

import SignupPage from "./../pages/SignupPage"
import LoginPage from "./../pages/LoginPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/inicio-sesion" element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoutes