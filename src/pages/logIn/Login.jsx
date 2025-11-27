import React, {useState} from "react";
import styles from "./login.module.css";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // نقرأ كل المستخدمين المسجلين
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ندور على المستخدم اللي الإيميل والباسورد بتوعه مطابقين
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setMessage(`Welcome back, ${user.name}! 🎉`);
      setIsSuccess(true);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/");
    } else {
      setMessage("Incorrect email or password, please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.loginBoxTitle}>Welcome Back</h2>

        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label className={styles.formGroupLabel}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.formGroupInput}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formGroupLabel}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.formGroupInput}
              required
            />
          </div>

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
        </form>

        {message && (
          <p
            style={{
              color: isSuccess ? "green" : "#ff1100ff",
              marginTop: "10px",
              textAlign: "center",
              fontWeight: "500",
            }}>
            {message}
          </p>
        )}

        <p className={styles.registerLink}>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
