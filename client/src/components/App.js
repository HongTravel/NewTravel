import React , {Suspense} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NewPassword from "./views/NewPassword/NewPassword";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>

        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element = {<LoginPage />} />
                <Route path = "/register" element = {<RegisterPage />} />
                <Route path = "/newpass" element = {<NewPassword />} />
                <Route path = "/travel" element = {<LandingPage />} /> 
            </Routes>
        </div>
          <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
