import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";

import YouViewSection from "../components/YouViewSection";
import HeroImages from "../components/HeroImages";
import TrendingNow from "../components/TrendingNow";
import Ourfeature from "../components/Ourfeature";
import DeliverySection from "../components/DeliverySection";
import FourComSection from "../components/FourComSection";
import Footer from "../components/Footer";
import DealSection from "../components/DealSection";

import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <MainSection />
        <YouViewSection />
        <HeroImages />
        <TrendingNow />
        <Ourfeature />
        <DeliverySection />
        <TrendingNow />
        <FourComSection />
        <DealSection />
        <Footer />
      </div>
      
    </>
  );
};

export default Home;
