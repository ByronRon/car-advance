import React, { useContext, useState } from "react";
import LayoutNoHeader from "../components/layouts/LayoutNoHeader";
import styles from "../styles/Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    setError(false);
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleLogin}>
          <div className={styles.header}>Login</div>
          <div className={styles.content}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={styles.button}>
              Sign In
            </button>
            {error && (
              <span className={styles.error}>Wrong email or password</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
