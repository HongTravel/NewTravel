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
import Navigation from "./views/Navigation/Navigation";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage/LandingPage";
import About from "./views/About/About";

import Seoul from "./views/Locations/Seoul/Seoul";
import Incheon from "./views/Locations/Incheon/Incheon";
import Daejeon from "./views/Locations/Daejeon/Daejeon";
import Gwangju from "./views/Locations/Gwangju/Gwangju";
import Daegu from "./views/Locations/Daegu/Daegu";
import Ulsan from "./views/Locations/Ulsan/Ulsan";
import Busan from "./views/Locations/Busan/Busan";
import Jeju from "./views/Locations/Jeju/Jeju";
import Gyeonggi from "./views/Locations/Gyeonggi/Gyeonggi";
import Gangwon from "./views/Locations/Gangwon/Gangwon";
import ChoongChung from "./views/Locations/ChoongChung/ChoongChung";
import JeonRa from "./views/Locations/JeonRa/JeonRa";
import GyeongSang from "./views/Locations/GyeongSang/GyeongSang";

function App() {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div style={{paddingTop: "150px"}}></div>
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element = {<LoginPage />} />
                <Route path = "/register" element = {<RegisterPage />} />
                <Route path = "/newpass" element = {<NewPassword />} />
                <Route path = "/travel" element = {<LandingPage />} />
                <Route path = "/navi" element = {<Navigation />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/seoul" element = {<Seoul />} /> 
                <Route path = "/incheon" element = {<Incheon />} />
                <Route path = "/daejeon" element = {<Daejeon />} />
                <Route path = "/gwangju" element = {<Gwangju />} />
                <Route path = "/daegu" element = {<Daegu />} />
                <Route path = "/ulsan" element = {<Ulsan />} />
                <Route path = "/busan" element = {<Busan />} />
                <Route path = "/jeju" element = {<Jeju />} /> 
                <Route path = "/gyeonggi" element ={<Gyeonggi />} />
                <Route path = "/gangwon" element = {<Gangwon /> }/>
                <Route path = "/choongchung" element = {<ChoongChung />} />
                <Route path = "/jeonra" element = {<JeonRa />} />
                <Route path = "/gyeongsang" element = {<GyeongSang />} />
            </Routes>
        </div>
          <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
