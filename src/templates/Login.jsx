import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const [showCreateMenu, setShowCreateMenu] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleCreateClick = (e) => {
        e.preventDefault();
        setShowCreateMenu(!showCreateMenu);
    };

    const handleForgotEmail = (e) => {
        e.preventDefault();
        navigate("/forgot-email");
    };
    const handleNext = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setError("Enter an email or phone number");
            return;
        }

        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(email)) {
            setError("Enter a valid email");
            return;
        }

        localStorage.setItem("loginEmail", email);
        setError("");
        navigate("/password");
    };
    return (
        <div className="login-container">
            <div className="login-content">
                {/* Left Section */}
                <div className="login-left mb-md-5 pb-md-4">
                    <div className="mb-3">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 40 48" aria-hidden="true" jsname="jjf7Ff"><path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path><path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path><path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path><path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path></svg>
                    </div>
                    <h1 className="signin-title">Sign in</h1>
                    <p className="signin-subtitle">to continue to Gmail</p>
                </div>

                {/* Right Section */}
                <div className="login-right mt-5">
                    <div className="form-group floating-group">
                        <input
                            type="text"
                            className={`email-input floating-input ${error ? "input-error" : ""}`}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError("");
                            }} required />

                        <label className={`floating-label ${email ? "active" : ""}`}>Email or phone</label>

                        {error && <p className="error-text">{error}</p>}
                    </div>
                    <a href="#" className="forgot-link pb-4" onClick={handleForgotEmail}>Forgot email?</a>

                    <p className="guest-text">
                        Not your computer? Use Guest mode to sign in privately.
                        <a href="#" className="learn-more"> Learn more about using Guest mode</a>
                    </p>

                    <div className="button-group">
                        <div className="create-account-wrapper">
                            <a href="#" className="create-account" onClick={handleCreateClick}>
                                Create account
                            </a>
                            {showCreateMenu && (
                                <div className="create-menu">
                                    <a href="/create-account" className="menu-item">For myself</a>
                                    <a href="/create-child" className="menu-item">For my Child</a>
                                    <a href="/create-business" className="menu-item">To manage my business</a>
                                </div>
                            )}
                        </div>
                        {/* <button className="">Next</button> */}
                        <button className="next-button text-decoration-none" onClick={handleNext}>
                            Next
                        </button>
                    </div>
                </div>
            </div >

            {/* Footer */}
            <footer className="login-footer position-fixed bottom-0 w-100" >
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
        </div >
    );
}