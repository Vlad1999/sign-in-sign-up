import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/user/userSlice";
import { auth, onAuthStateChanged } from "./firebase";
import { getProducts } from "./features/products/productsSlice";
import { db, collection, getDocs } from "./firebase";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./components/Layout/MainLayout";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

import "./App.css";

function App() {
  const productsRef = collection(db, "products");
  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();

  useEffect(() => {
    getDocs(productsRef)
      .then((res) => {
        dispatch(getProducts(res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
      })
      .catch((err) => {
        console.log(err);
      });

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
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
