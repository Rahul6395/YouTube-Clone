import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import Container from 'react-bootstrap/Container';
import LoginScreen from "./screens/loginScreen/LoginScreen"
import "./_app.scss";
import { Routes, Route, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';


function Layout({children}) {
  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(!sidebar)
  return (
    <div>
       <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
       {children}
        </Container>
      </div>  
    </div>
  )
}


function App() {
  const {accessToken,loading} = useSelector(state=>state.auth)
 const navigate = useNavigate();
  useEffect(()=>{
 if(!loading && !accessToken){
   navigate("/auth")
 }
 },[accessToken,loading,navigate])
 
 
 
  return (
    <>
 
    <Routes>
    <Route path="/" element={<Layout children={<HomeScreen/>}/>}/>
    <Route path="/auth" element={<LoginScreen/>}/>
    <Route path="/search" element={<Layout/>}/>
    <Route path="*" element={<Layout children={<HomeScreen/>}/>} />
    </Routes>

    </>
  )
}

export default App