import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/HomeScreen";
import User from "./screens/UserScreen";
import Medicine from "./screens/MedicineScreen";
import Calendar from "./screens/CalendarScreen";
import Export from "./screens/ExportScreen";
import Login from "./screens/LoginScreen";
import Register from "./screens/RegisterScreen";
import { AuthProvider, HideIfLoggedOut, RequireAuth, RequireNotAuth } from "./components/AuthContext";

function App() {
  return (
      <AuthProvider>
        <Router>
          <Routes>
            
            <Route path="/login" element={<RequireNotAuth><Login /></RequireNotAuth>} />
            <Route path="/register" element={<RequireNotAuth><Register /></RequireNotAuth>} />

            <Route path="/export"  element={<RequireAuth><Export /></RequireAuth>} />
            <Route path ="/calendario" element={<RequireAuth><Calendar /></RequireAuth>}/>
            <Route path="/medicina" element={<RequireAuth><Medicine /></RequireAuth>} />
            <Route path="/usario" element={<RequireAuth><User /></RequireAuth>} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/*" element={<RequireAuth><Home /></RequireAuth>} />

          </Routes>
          <HideIfLoggedOut><NavBar /></HideIfLoggedOut>
        </Router>
      </AuthProvider>
  );
}

export default App;
