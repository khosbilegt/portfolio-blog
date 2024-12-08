import React, { useContext } from "react";
import { ThemeContext } from "../../app/ThemeContext";
import { Button } from "@nextui-org/button";

function PortfolioLayout() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <main
      className={`${theme} text-foreground bg-background w-screen h-full min-h-screen`}
    >
      <Button
        onPress={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Test
      </Button>
    </main>
  );
}

export default PortfolioLayout;
