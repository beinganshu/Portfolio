import "./App.css";
import Startpage from "./Pages/Startpage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Startpage />}></Route>
          <Route exact path="/about" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
