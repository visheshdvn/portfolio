import React from "react";
import { Home as HomeSection, Intro } from "src/components/PrimarySections";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden pt-[60px] text-white">
        <div id="home-sections-container" className="">
          {/* <HomeSection /> */}
          <Intro />
          {/* <div className="text-red-600">ABCDEFG</div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
