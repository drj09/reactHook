import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function increase() {
    //count++;
    setCount(count + 1);
    console.log(count);
  }

  function decrease() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
}
