import { Routes, Route, Outlet } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { SmallProjectsPage } from "./pages/SmallProjectsPage";

function App() {
  return (
    <div className="fullPage">
      <Routes>
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
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
