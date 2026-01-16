import SideBar from "./components/shared/SideBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
const App = () => {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar/>}>
          <Route index element={<HomePage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App