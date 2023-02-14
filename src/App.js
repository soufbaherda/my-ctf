import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './Home/Home';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
    </Routes>
   
  );
}

export default App;
