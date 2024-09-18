import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input placeholder="username" /><br />
            <input placeholder="password" type="password" /><br />
            <input placeholder="verify password" type="password" /><br />
            <Link id="wd-signin-btn"
                to="/Accounts/SignIn"> Sign in </Link><br />
            <Link id="wd-signup-link"
                to="/Accounts/SignUp">Sign up</Link>
        </div>
    );
}
