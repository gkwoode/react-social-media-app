// import React from 'react';
import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authAPI";
// import background from "../../assets/background.jpg";

const Login = () => {
    const {login} = useContext(AuthContext);

    // Login function: remove event handler and call login function directly
    const handleLogin = (e) => {
        login();
    }

    return (
        <div className="login">
            {/* <img src={background} alt="" /> */}
            <div className="card">
                <div className="left">
                    <h1>WELCOME to GKsocial</h1>
                    <span>
                        Connect with family, friends and the world around you on GKsocial.
                    </span>
                    <p>Don't you have an account?</p>
                    <Link to="/register">
                        <button type="submit">Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="">
                        <input type="email" placeholder="Email" />
                        <input type="passworrd" placeholder="Password" />
                        <button type="submit" onClick={handleLogin}>Login</button>
                        <span>Forget Password</span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;