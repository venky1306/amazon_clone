import './App.css';
import Home from "./Home"
import Header from "./Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><Header/><Home/></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
