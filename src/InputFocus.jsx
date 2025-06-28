import React, { useRef } from 'react';

function InputFocus() {
  // Step 1: Create a reference for the input element
  const inputRef = useRef(null);

  // Step 2: Focus the input when the button is clicked
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
