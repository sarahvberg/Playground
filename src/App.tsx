import React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import './App.css';
import { InfoPage } from './InfoPage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { SideNav } from './components/SideNav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/info" element={<InfoPage />} />
        <Route path="/" element={<LayoutWithHeader/>}>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<AboutPage />} />
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

/* function TestStuff () {
  const Heihei = {
    name: 'sarah',
    age: 1
  }
  const Test = [1,2,3];
  const [,, val2] = Test; //dekonstruere array

  const {name, age} = Heihei; //destrukturer høyre side
} */


export default App;
