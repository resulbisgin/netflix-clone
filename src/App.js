import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Singup from "./pages/Singup";

function App() {
  return (
    <>
    <AuthContextProvider>

      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/singup" element={<Singup/>}/>
          <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}/>
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
