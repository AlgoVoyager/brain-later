import SideBar from "./components/shared/SideBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"
const App = () => {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar/>}>
          <Route index element={<HomePage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App