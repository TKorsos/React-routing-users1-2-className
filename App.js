import React from "react";
import './App.css';
import Home from './Home';
import Users1 from './Users1';
import Users2 from './Users2';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (
    <div className="App">
      <header className="select-header">
        <BrowserRouter>

          <nav className="nav">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/1">User-1</Link></div>
            <div><Link to="/2">User-2</Link></div>
          </nav>

          <hr />

          <Routes>
            <Route index element={<Home />} />
            <Route path="/1" element={<Users1 />} />
            <Route path="/2" element={<Users2 />} />
          </Routes>

        </BrowserRouter>
      </header>
    </div>
  );
};