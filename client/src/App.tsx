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

const App = () => {
  const { data: user, isLoading, error } = useGetUserQuery();
  const dispatch = useDispatch();

  // Sync RTK Query data to userSlice for components that use the slice
  useEffect(() => {
    if (user) {
      dispatch(setUserDetails(user));
    }
  }, [user, dispatch]);

  // if (isLoading) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       Loading user data...
  //     </div>
  //   );
  // }

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