import React from "react";

export default function Body() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-danger mx-2">
          -
        </button>
        <button type="button" disabled="true" className="btn btn-light">
          withdraw/deposit
        </button>
        <button type="button" className="btn btn-success mx-2">
          +
        </button>
      </div>
    </div>
  );
}
