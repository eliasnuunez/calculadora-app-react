import './App.css';
import Button from './components/Button.jsx';
import Screen from './components/Screen.jsx';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

import UserPerfil from './components/UserSocial';

function App() {

  const [ input, setInput ] = useState('');

  const handleInput = (v) => {
    setInput(input + v);
  };

  const handleResult = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert("Faltan datos!"); 
    }
  }

  return (
    <div className="App">
      
      <UserPerfil/>

      <div className='container-calculator'>
        <Screen input={input} />
        <div className='row'>
          <Button useClick={handleInput}>1</Button>
          <Button useClick={handleInput}>2</Button>
          <Button useClick={handleInput}>3</Button>
          <Button useClick={handleInput}>+</Button>
        </div>
        <div className='row'>
          <Button useClick={handleInput}>4</Button>
          <Button useClick={handleInput}>5</Button>
          <Button useClick={handleInput}>6</Button>
          <Button useClick={handleInput}>-</Button>
        </div>
        <div className='row'>
          <Button useClick={handleInput}>7</Button>
          <Button useClick={handleInput}>8</Button>
          <Button useClick={handleInput}>9</Button>
          <Button useClick={handleInput}>*</Button>
        </div>
        <div className='row'>
          <Button useClick={handleResult}>=</Button>
          <Button useClick={handleInput}>0</Button>
          <Button useClick={handleInput}>.</Button>
          <Button useClick={handleInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear useClear={() => setInput('')}>
            BORRAR
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
