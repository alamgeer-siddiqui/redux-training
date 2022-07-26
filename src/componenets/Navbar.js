import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 my-5 position-absolute top-0 start-50 translate-middle">
            Updated Balance
            <button type="button" disabled="True" class="btn btn-info mx-3">
              0
            </button>
          </span>
        </div>
      </nav>
    </>
  );
}
