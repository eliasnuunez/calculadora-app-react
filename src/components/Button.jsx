import React from 'react';
import '../styles/Button.css';

const Button = (props) => {
  
  const isOperator = (value) => {
    return isNaN(value) && (value !== '.' && (value !== '=')); 
  }

  return (
    <div 
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.useClick(props.children)}
    >
      {props.children}
    </div>
  )
}

export default Button;