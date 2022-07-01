import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Medicine from "./components/Medicine";
import Calendar from "./components/Calendar";
import Export from "./components/Export";
import Login from "./components/Login";

function App() {
  const isLoggedIn = false;
  return (
    <Router>
      <Routes>
        {
          !isLoggedIn
          ? (
            <Route path="/" element={<Login />} />
          ) :
          (
            <>
              <Route path="/export"  element={<Export />} />
              <Route path ="/calendario" element={<Calendar />}/>
              <Route path="/medicina" element={<Medicine />} />
              <Route path="/usario" element={<User />} />
              <Route path="/" exact element={<Home />} />
            </>
          )
        }
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;
