import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import PortfolioLayout from "../features/portfolio/PortfolioLayout";

function Router() {
  const routes = [
    {
      path: "*",
      element: <PortfolioLayout />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes?.map((route, index) => {
          return (
            <Route key={index} path={route?.path} element={route?.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
