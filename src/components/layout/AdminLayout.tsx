import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <h1>this is navbar</h1>
      <Outlet />
    </>
  );
};

export default AdminLayout;
