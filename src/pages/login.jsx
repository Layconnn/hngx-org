import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { app } from "../fireConfig";
import "react-toastify/dist/ReactToastify.css";
import Inputt from "../components/Inputt";
import "../styles/pages/login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const allowedEmail = "user@example.com";
  const allowedPassword = "1Password";

  const router = useNavigate();

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    if (email === allowedEmail && password === allowedPassword) {
      try {
        const auth = getAuth(app);
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login Successful! 💯");
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        toast.error("Registration error!!");
      } finally {
        setIsLoading(false);
        router("/Gallery");
      }
    } else {
      setEmailError("");
      setPasswordError("");

      if (email === "") {
        setEmailError("Email is required.");
      } else if (email !== allowedEmail) {
        setEmailError("Invalid Email Address.");
      }

      if (password === "") {
        setPasswordError("Password is required.");
      } else if (password !== allowedPassword) {
        setPasswordError("Invalid password.");
      }

      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="details">
        <h3 className="name">Gafar's Photo Gallery</h3>
        <h5 className="log">Log in to view the Gallery</h5>
        <form className="list" onSubmit={handleLogin}>
          <div className="err-input">
            <Inputt
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              h5="Email"
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          <br />
          <div className="err-input">
            <Inputt
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              h5="Password"
            />
            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}
          </div>
          <br />
          <button className="btn" type="submit">
            {isLoading ? <div className="loading"></div> : "Login"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
