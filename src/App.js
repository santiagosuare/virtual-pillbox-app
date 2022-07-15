import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider, HideIfLoggedOut, RequireAuth, RequireNotAuth } from "./components/AuthContext";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import MedicineScreen from "./screens/MedicineScreen";
import EditMedicineScreen from "./screens/EditMedicineScreen";
import CalendarScreen from "./screens/CalendarScreen";
import ExportScreen from "./screens/ExportScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import NewMedicineScreen from "./screens/NewMedicineScreen";

function App() {
  return (
      <AuthProvider>
        <Router>
          <Routes>
            
            <Route path="/login" element={<RequireNotAuth><LoginScreen /></RequireNotAuth>} />
            <Route path="/register" element={<RequireNotAuth><RegisterScreen /></RequireNotAuth>} />

            <Route path="/export"  element={<RequireAuth><ExportScreen /></RequireAuth>} />
            <Route path ="/calendario" element={<RequireAuth><CalendarScreen /></RequireAuth>}/>
            <Route path="/medicina" element={<RequireAuth><MedicineScreen /></RequireAuth>} />
            <Route path="/medicina/:id_medicamento" element={<RequireAuth><EditMedicineScreen /></RequireAuth>} />
            <Route path="/medicina/new" element={<RequireAuth><NewMedicineScreen /></RequireAuth>} />
            <Route path="/usuario" element={<RequireAuth>=<UserScreen /></RequireAuth>} />
            <Route path="/home" element={<RequireAuth><HomeScreen /></RequireAuth>} />
            <Route path="/*" element={<RequireAuth><HomeScreen /></RequireAuth>} />

          </Routes>
        </Router>
      </AuthProvider>
  );
}

export default App;
