import React, { useContext } from "react";
import { ThemeContext } from "../../app/ThemeContext";
import Topbar from "../../components/Topbar";

function PortfolioLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${theme} text-foreground bg-background w-screen h-full min-h-screen`}
    >
      <Topbar />
    </main>
  );
}

export default PortfolioLayout;
