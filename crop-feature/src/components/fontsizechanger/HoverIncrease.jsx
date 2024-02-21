import React from 'react';
import {useState} from 'react';
import withCounter from './withCounter.js';

const HoverIncrease = (props) => {
    const [fontSize, setFontSize] = useState(10);
  return (
    <div>
        <button onMouseOver={() => setFontSize((size) => size + 1)}>
            Increase on hover
        </button>
        <p style={{fontSize}}>
            Size of font in onMouseOver function: {fontSize}
        </p>
        <p>Value of 'name' in HoverIncrease: {props.name}</p>
    </div>
  );
}

export default withCounter(HoverIncrease);