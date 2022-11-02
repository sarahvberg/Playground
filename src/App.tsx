import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { InfoPage } from './InfoPage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { SideNav } from './components/SideNav';
import { SmallProjectsPage } from './pages/SmallProjectsPage';
import { TodoList } from './pages/TodoList';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="fullPage">
      <Routes>
        <Route path="/info" element={<InfoPage />} />
        <Route path="/" element={<LayoutWithHeader/>}>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="todo-list" element={<TodoList />} />
          <Route path="small-projects" element={<SmallProjectsPage />} />
        </Route>
      </Routes>
      <Footer />
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
