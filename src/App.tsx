import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { InfoPage } from "./InfoPage";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { SideNav } from "./components/SideNav";
import { SmallProjectsPage } from "./pages/SmallProjectsPage";

function App() {
  return (
    <div className="fullPage">
      <Routes>
        <Route path="/info" element={<InfoPage />} />
        <Route path="/" element={<LayoutWithHeader />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="small-projects" element={<SmallProjectsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

function LayoutWithHeader() {
  return (
    <>
      <SideNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
