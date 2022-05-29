import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Medicine from "./components/Medicine";
import Calendar from "./components/Calendar";
import Export from "./components/Export";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Export" caseSensitive={false} element={<Export />} />
        <Route
          path="/Calendario"
          caseSensitive={false}
          element={<Calendar />}
        />
        <Route path="/Medicina" caseSensitive={false} element={<Medicine />} />
        <Route path="/User" caseSensitive={false} element={<User />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;
