import './App.css';
import React from 'react';
import TodoContainer from './TodoContainer';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <TodoContainer />
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
