import ValidationTextFields from "./components/RegistrationForm";
import SigninForm from "./components/SigninForm";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import AuthProviver from "./app/modules/auth/context/authProviver";
import { Provider, useSelector } from "react-redux";
import { store } from "./app/store";
import Home from "./pages/Home";
import Places from "./pages/places";
function App() {
  const { user } = useSelector((state) => state.auth);
  console.log("🚀 ~ App ~ user:", user);

  return (
    <>
      <BrowserRouter>
        <AuthProviver>
          {user?.email && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places-list" element={<Places />} />
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<ValidationTextFields />} />
          </Routes>
        </AuthProviver>
      </BrowserRouter>
    </>
  );
}

export default App;
