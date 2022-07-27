import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const balance = useSelector((state) => state.amount);
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 my-5 position-absolute top-0 start-50 translate-middle">
            
            <button type="button" disabled={true} className="btn btn-info mx-3">
            Your Balance : {balance}
            </button>
          </span>
        </div>
      </nav>
    </>
  );
}
