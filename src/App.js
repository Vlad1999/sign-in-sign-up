import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice";
import { auth, onAuthStateChanged } from "./firebase";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/Layout/MainLayout";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setLoading(false);
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        setLoading(false);
        dispatch(logout());
      }
    });
  }, []);

  //const [projects, setProjects] = useState([]);
  //const projectsCollectionRef = collection(db, "projects");

  /*if (loading) {
    return (
      <div className="loadingContainer">
        <div className="loader">Loading...</div>
      </div>
    );
  }*/

  if (loading) {
    return (
      <div className="loadingContainer">
        {" "}
        <div className="loader">Loading...</div>{" "}
      </div>
    );
  }
  return (
    <div className="App">
      
        <Routes>
          <Route exact path="/" element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      

      {/* <Header />
      {!user ? (
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      ) : (
        <div className="app__body">
          <div>
            <h1>Hello {user.displayName}!</h1>
            <p>{user.email}</p>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default App;
