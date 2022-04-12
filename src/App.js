import "./App.css";

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home";
import Todos from "./components/Todos/Todos";
import Photos from "./components/Photos/Photos";
import TodoDetails from "./components/Todos/TodoDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/photos" element={<Photos />}></Route>
            <Route path="/todos" element={<Todos />}></Route>
            <Route path="/todos/:id/:title" element={<TodoDetails />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
