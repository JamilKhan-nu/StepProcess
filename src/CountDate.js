import React, { useState } from "react";

function CountDate() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handleIncreaseStep() {
    setStep(step + 1);
  }
  function handleDecreaseStep() {
    setStep(step - 1);
  }
  function handleIncreaseCount() {
    setCount(count + step);
  }
  function handleDecreaseCount() {
    setCount(count - step);
  }
  return (
    <>
      <div>
        <button onClick={handleDecreaseStep}>-</button>Step: {step}
        <button onClick={handleIncreaseStep}>+</button>
        <br />
        <button onClick={handleDecreaseCount}>-</button>Count: {count}
        <button onClick={handleIncreaseCount}>+</button>
      </div>
    </>
  );
}

export default CountDate;
