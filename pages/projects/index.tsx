import React from "react";
import ContentPage from "@/components/layouts/contentPage";
import { customFCProps } from "@/types/globals";

const Projects: React.FC & customFCProps = (): JSX.Element => {
  return <ContentPage></ContentPage>;
};

// Projects.customProps = {
//   displayNavBar: false,
//   navbarTheme: "light",
// };
Projects.customProps = {
  navbarTheme: "light",
};

export default Projects;
