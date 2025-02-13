import React from "react";
import Navbar from "../navpar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className=" bg-primary-400 h-screen ">
        <Navbar />
        <Outlet></Outlet>
      </div>
    </>
  );
}
