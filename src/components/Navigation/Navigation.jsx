import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import SignOutLinks from "./SignOutLinks";
import SignInLinks from "./SignInLinks";

export default function Navigation() {
  const user = useSelector(selectUser);

  const links = user ? <SignInLinks /> : <SignOutLinks />;

  return (
    <nav>
      <Link to="/home">Home</Link> | {" "}
      <Link to="/products">Products</Link> | {" "}
      <Link to="/">Favorites</Link> | {links}
    </nav>
  );
}
