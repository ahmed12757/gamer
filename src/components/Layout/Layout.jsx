import React from "react";
import Navbar from "../navpar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className=" bg-primary-400 min-h-screen ">
        <Navbar />
        <div className="container mx-auto mt-10">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
