import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(prev => prev + 1);
        }}>
        count
      </button>
    </div>
  );
};

export default Counter;
