//first import useSelector and useDispatch Hooks from "react-redux".

import { useSelector, useDispatch } from "react-redux";

//Secondly import increment and decrement function from counterSlice.js.

import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());

    // if (typeof addValue === "number") {
    //   console.log("number");
    // } else if (typeof addValue === "string") {
    //   console.log("string");
    // }
  };

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>

        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
