import React, {useState} from "react";
import styles from "./register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      setIsSuccess(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage(" Passwords do not match.");
      setIsSuccess(false);
      return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setMessage("This email is already registered. Please log in.");
      setIsSuccess(false);
      return;
    }

    // Save new user
    const newUser = {name, email, password};
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Registration successful! You can now log in.");
    setIsSuccess(true);

    // Clear fields
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <h2 className={styles.registerBoxTitle}>Create Account</h2>

        <form onSubmit={handleRegister}>
          <div className={styles.formGroup}>
            <label className={styles.formGroupLabel}>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={styles.formGroupInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formGroupLabel}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={styles.formGroupInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formGroupLabel}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={styles.formGroupInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formGroupLabel}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className={styles.formGroupInput}
            />
          </div>

          <button type="submit" className={styles.registerBtn}>
            Register
          </button>

          {/* ✅ Message below button */}
          {message && (
            <p
              className={`${styles.registerMessage} ${
                isSuccess ? styles.registerMessageSuccess : styles.registerMessageError
              }`}
              style={{marginTop: "12px"}}>
              {message}
            </p>
          )}
        </form>

        <p className={styles.loginLink}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
