import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function InicioAdmin(autenticacion) {
  return (
    <main>
      <div className="flex">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
    </main>
  );
}
