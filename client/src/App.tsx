import SideBar from "./components/shared/SideBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { useGetUserQuery } from "./redux/api/userApi"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUserDetails } from "./redux/features/userSlice"
import SharedBrainPage from "./pages/SharedBrainPage"
import { contentApi } from "./redux/api/contentApi"
import { setContents } from "./redux/features/contentsSlice"
import { useAppSelector } from "./utils/hooks"
import About from "./pages/About"

const App = () => {
  const { data: user, error } = useGetUserQuery();
  const dispatch = useDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const { data: contents } = contentApi.useFetchContentsQuery()

  useEffect(() => {
    contents && dispatch(setContents(contents));
    console.log(contents)
  }, [contents, dispatch]);
  useEffect(() => {
    user && dispatch(setUserDetails(user));
  }, [user, dispatch]);

  // Apply theme to document root
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  if (error) {
    console.log(error)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBar />}>
            <Route index element={<HomePage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/brain/:hash" element={<SharedBrainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App