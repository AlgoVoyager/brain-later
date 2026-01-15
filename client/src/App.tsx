import SideBar from "./components/shared/SideBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
const App = () => {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar/>}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App