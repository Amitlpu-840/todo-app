import React, { useState, useEffect } from 'react'
//import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Form from "./component/Form"
import TodoList from './component/TodoList';
import Footer from './component/Footer';

function App() {

  const initailState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initailState);
  const [editTodos, setEditTodos] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div className='footer-cont'>
          <Footer />
        </div>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodos={editTodos}
            setEditTodos={setEditTodos}

          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodos={setEditTodos}
          />
        </div>


      </div>

    </div>
  );
}

export default App;
