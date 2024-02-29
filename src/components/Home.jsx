
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import { Divider, Box, AbsoluteCenter } from "@chakra-ui/react";
import YouViewSection from "./YouViewSection";
import HeroImages from "./HeroImages";
import TrendingNow from "./TrendingNow";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <MainSection />
        <Box mt={"100px"} position="relative" padding="10">
          <Divider color={"black"} />
          <AbsoluteCenter bg="white" px="4">
           <h4 style={{fontSize:"20px", textDecoration:"underline"}}>You Viewed</h4>
          </AbsoluteCenter>
        </Box>
        <YouViewSection />
        <HeroImages/>
        <TrendingNow/>
      </div>
    </>
  );
};

export default Home;
