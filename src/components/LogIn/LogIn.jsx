import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/user/userSlice";
import { Link, Navigate } from "react-router-dom";
import { selectUser } from "../../features/user/userSlice";

function LogIn() {
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName
          })
        );
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };

  if (user) return <Navigate to='/' /> 

  return (
    <div className="login">
      <h2 className="formTitle">Log In</h2>
      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Log In
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link className="login__register" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default LogIn;
