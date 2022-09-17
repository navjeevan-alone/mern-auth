import { useState } from 'react' 
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

function App() { 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1> } />
        <Route path="/auth">
          <Route path="login" element={ <Login/>  } ></Route>
          <Route path="signup" element={ <Signup/> } ></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
