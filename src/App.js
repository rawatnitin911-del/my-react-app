import './App.css';
import Header from './MyComponents/Header';
import { Todos } from "./MyComponents/Todos";
import { Addtodo } from "./MyComponents/Addtodo";
import { Footer } from "./MyComponents/Footer";
import About from "./MyComponents/About";
  // <-- yahi About chalega
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const initialTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState(initialTodos);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addtodo = (title, desc) => {
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const mytodo = { sno, title, desc };
    setTodos([...todos, mytodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="SHIVI Nitin" searchBar={false} />

        <Routes>

          {/* About Page */}
          <Route exact path="/about" element={<About />} />

          {/* Home Page */}
          <Route exact path="/" element={
            <>
              <Addtodo addtodo={addtodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;





  

