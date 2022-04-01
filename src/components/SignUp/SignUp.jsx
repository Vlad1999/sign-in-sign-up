import React, { useState } from "react";
import { Link, Navigate} from "react-router-dom";
import { auth, createUserWithEmailAndPassword, updateProfile } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/user/userSlice";
import { selectUser } from "../../features/user/userSlice";

function SignUp() {
  const user = useSelector(selectUser);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const dispatch = useDispatch();

  const register = () => {
    if (!name || !email || !password) {
      return alert("Please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) =>{
        updateProfile(userAuth.user, {
            displayName: name,
          })
          .then(
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
              })
            )
          )
          .catch((error) => {
            console.log("user not updated");
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (user) return <Navigate to='/' /> 

  return (
    <div className="signup">
      <h2 className="formTitle">Sign Up</h2>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          type="text"
        />
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
        <button type="submit" onClick={register}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link className="login__register" to="/login">
          Log In
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
