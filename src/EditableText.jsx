import React, { useRef, useState, useEffect } from 'react';

function EditableText() {
  const [visible, setVisible] = useState(false);       // Tracks input visibility
  const inputRef = useRef(null);                        // Reference to the input element

  // Focus the input when it becomes visible
  useEffect(() => {
    if (visible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [visible]);

  const toggleVisibility = () => {
    setVisible(prev => !prev);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <button onClick={toggleVisibility} style={{ marginBottom: '10px' }}>
        {visible ? 'Hide' : 'Edit Text'}
      </button>

      {visible && (
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter some text"
          style={{ display: 'block', padding: '8px', marginTop: '10px' }}
        />
      )}
    </div>
  );
}

export default EditableText;
