import React from "react";
import { useDispatch } from "react-redux";
import { depositBalance, withdrawBalance } from "../action/index";

export default function Body() {
  const dispatch = useDispatch();
  
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={() => {dispatch(withdrawBalance(100))}}
        >
          -
        </button>
        <button type="button" disabled={true} className="btn btn-light">
          withdraw/deposit
        </button>
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={() => dispatch(depositBalance(100))}
        >
          +
        </button>
      </div>
    </div>
  );
}
