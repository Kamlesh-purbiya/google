import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./password.css";

export default function Password() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const savedEmail = localStorage.getItem("loginEmail");


    const handleNext = (e) => {
        e.preventDefault();

        if (!password.trim()) {
            setError("Password required");
            return;
        }

        const email = localStorage.getItem("loginEmail");
        if (!email) {
            setError("Email missing");
            return;
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const newUser = {
            id: users.length + 1,
            email: email,
            password: password
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        navigate("/");
    };

    return (
        <div className="login-container">
            <div className="login-content">

                {/* LEFT */}
                <div className="login-left mb-sm-0 pb-sm-0  mb-lg-5 pb-lg-4 ">
                    <div className="mb-3">
                        <svg xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48">
                            <path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path>
                            <path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path>
                            <path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path>
                            <path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path>
                        </svg>
                    </div>

                    <h1 className="signin-title">Welcome</h1>
                    {/* <div className="signin-subtitle" style={{ display: "inline-block" }}>
                        <p className="border border-1 rounded-4 px-3 mb-0 mt-2 w-auto">{savedEmail}</p>
                    </div> */}
                    <div className="account-card mt-3 mt-sm-0">
                        <div className="account-card-content px-3 rounded-2">
                            <span className="account-email">{savedEmail}</span>
                            <div className="account-dropdown pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M10 12L5 7h10z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="login-right mt-5">

                    <div className="form-group floating-group mb-2">
                        <input
                            type={showPassword ? "text" : "password"}
                            className={`email-input floating-input ${error ? "input-error" : ""}`}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError("");
                            }}
                            required
                        />

                        <label className={`floating-label ${password ? "active" : ""}`}>
                            Password
                        </label>

                        {error && <p className="error-text">{error}</p>}
                    </div>

                    <div className="d-flex align-items-center mb-4 mt-3">
                        <input
                            type="checkbox"
                            className="me-2"
                            id="showPwd"
                            onChange={() => setShowPassword((v) => !v)}
                        />
                        <label htmlFor="showPwd" className="ms-2 showpwd-text">
                            Show password
                        </label>
                    </div>

                    <div className="button-group mt-4 d-flex justify-content-end align-items-center">
                        <a href="#" className="forgot-link mb-0 text-decoration-none">Try another way</a>
                        <button className="next-button" onClick={handleNext}>
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="login-footer position-fixed bottom-0 w-100">
                <select className="language-select">
                    <option>English (United States)</option>
                </select>
                <div className="footer-links">
                    <a href="#">Help</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </footer>
        </div>
    );
}
