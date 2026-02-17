import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginForm } from "./auth/login/LoginForm";
import { SignUp } from "./auth/signup/SignUp";
import { Dashboard } from "./components/Dashboard";
import { WelcomeCard } from "./components/WelcomeCard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeCard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
