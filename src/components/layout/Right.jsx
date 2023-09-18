import React, { useState } from "react";
import Products from "../right/Products";
import './Right.css'
import CreateOrder from "../right/CreateOrder";

export default function Right() {
  return (
    <div className="right">
        <CreateOrder />
        <Products />
    </div>
  );
}
