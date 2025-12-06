import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

export default function CreateAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();

    const handleNext = () => {
        if (firstName.trim()) {
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
        }
    };

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="create-container">
            <div className="create-content">
                {/* Left Section */}
                <div className="logincreate-left">
                    <div className="google-logo">
                        <svg xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48" aria-hidden="true" jsname="jjf7Ff"><path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path><path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path><path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path><path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path></svg>
                    </div>
                    <h1 className="create-title">Create a Google Account</h1>
                    <p className="create-subtitle">Enter your name</p>
                </div>

                {/* Right Section */}
                <div className="create-right">
                    <div className="form-group">
                        <label className="form-label">First name</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder=""
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Last name (optional)</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder=""
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="button-group-create">
                        <button className="back-button" onClick={handleBack}>Back</button>
                        <button className="next-button-create" onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="login-footer position-fixed bottom-0 w-100">
                <select className="language-select">
                    <option>English (United States)</option>
                    <option>Español</option>
                    <option>Français</option>
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