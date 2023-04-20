import React from "react";

interface LayoutType {
  heading: string;
}

const HomeSections = ({ heading }: LayoutType) => {
  return (
    <>
      {/* head tags */}

      {/* body */}
      <section className="layout-screen">
        <h1>{heading}</h1>
      </section>
    </>
  );
};

export default HomeSections;
