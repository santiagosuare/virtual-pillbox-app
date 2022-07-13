import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Medicine from "./components/Medicine";
import Calendar from "./components/Calendar";
import Export from "./components/Export";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider, HideIfLoggedOut, RequireAuth, RequireNotAuth } from "./components/AuthContext";

function App() {
  return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/export"  element={<RequireAuth><Export /></RequireAuth>} />
            <Route path ="/calendario" element={<RequireAuth><Calendar /></RequireAuth>}/>
            <Route path="/medicina" element={<RequireAuth><Medicine /></RequireAuth>} />
            <Route path="/usario" element={<RequireAuth><User /></RequireAuth>} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/login" element={<RequireNotAuth><Login /></RequireNotAuth>} />
            <Route path="/register" element={<RequireNotAuth><Register /></RequireNotAuth>} />
          </Routes>
          <HideIfLoggedOut><NavBar /></HideIfLoggedOut>
        </Router>
      </AuthProvider>
  );
}

export default App;
