import React , {Suspense} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NewPassword from "./views/NewPassword/NewPassword";
import Navbar from "./views/Navbar/Navbar";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage/LandingPage";
import LandingDetailPage from "./views/LandingDetailPage/LandingDetailPage";
import About from "./views/About/About";


function App() {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{paddingTop: "69px"}}></div>
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element = {<LoginPage />} />
                <Route path = "/register" element = {<RegisterPage />} />
                <Route path = "/newpass" element = {<NewPassword />} />
                <Route path = "/study" element = {<LandingPage />} />
                <Route path = "/study/:id" element={<LandingDetailPage />} />
            </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
