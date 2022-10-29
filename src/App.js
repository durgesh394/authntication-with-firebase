import ValidationTextFields from './components/RegistrationForm';
import SigninForm from "./components/SigninForm"
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import  Home from "./components/Home"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SigninForm />} />
          <Route path="/signup" element={<ValidationTextFields />} />
          <Route path="/homepage" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}


export default App;