import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./templates/Login.jsx";
import CreateAccount from "./templates/CreateAccount.jsx";
import ForgotEmail from "./templates/ForgotEmail.jsx";
import Password from "./templates/Password.jsx";
import Users from "./templates/users.jsx";
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/create-child" element={<CreateAccount />} />
          <Route path="/create-business" element={<CreateAccount />} />
          <Route path="/forgot-email" element={<ForgotEmail />} />
          <Route path="/password" element={<Password />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;