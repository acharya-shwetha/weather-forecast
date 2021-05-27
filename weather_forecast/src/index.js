import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import SearchPage from './components/searchpage.js';

function App() {
  return (
    <div className="App">
      <SearchPage />
    </div>
  );
}

const mainNode = document.getElementById("root");
ReactDOM.render(<App />,mainNode);
