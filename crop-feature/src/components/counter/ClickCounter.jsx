import React from 'react';
import {useState} from 'react';

const ClickCounter = () => {

const [count, setCount] = useState(0);

  return (
    // When clicked increment the value ot 'count'.
    <div>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <p>Clicked: {count}</p> 
    </div>
  );
}

export default ClickCounter