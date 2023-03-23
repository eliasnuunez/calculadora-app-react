import React from 'react';
import '../styles/ButtonClear.css';

const ButtonClear = (props) => {
  return (
    <button 
      className='button-clear'
      onClick={props.useClear}
    >
      {props.children}
    </button>
  )
}

export default ButtonClear;