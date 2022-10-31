import { useState } from 'react';
import './increase.css';

const IncreaseButton = () => {
  const [counter, setCounter] = useState(1);
  const incrementCount = () => {
    setCounter(counter + 1);
  };
  const decrementCount = () => {
    setCounter((c) => Math.max(c - 1, 0));
  };

  return (
    <div className="btn-group">
      <button className="btn btn-left" onClick={decrementCount}>
        <img src="images/icon-minus.svg" alt="minus" />
      </button>
      <button className="btn btn-center" onClick={decrementCount}>
        {counter}
      </button>
      <button className="btn btn-right" onClick={incrementCount}>
        <img src="images/icon-plus.svg" alt="minus" />
      </button>
    </div>
  );
};

export default IncreaseButton;
