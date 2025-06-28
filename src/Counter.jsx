import React, { useState, useRef, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null); // Holds the previous count value

  // Update prevCountRef after each render
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Counter</h2>
      <p>Current Count: <strong>{count}</strong></p>
      <p>Previous Count: <strong>{prevCountRef.current}</strong></p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
