
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function MainLayout() {
  return (
    <>
      <Navigation />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}