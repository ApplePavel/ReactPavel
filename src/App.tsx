import React, { useState } from 'react';
import Button from './components/Button.tsx';
import Display from './components/Display.tsx';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (buttonValue: string) => {
    setValue((prevValue) => prevValue + buttonValue);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleDelete = () => {
    setValue(prevValue => {
      if (prevValue.length > 0) {
        return prevValue.slice(0, -1);
      } else {
        return '';
      }
    });
  };
  
  
  
  

  const handleCalculate = () => {
      const result = Function('return (' + value + ')')();
      setValue(result.toString());
  };
  

  return (
    <div className="container">
      <div className="calculator">
        <form className="formCalc">
          <div className="display">
            <Display value={value} />
          </div>
          <div>
            <Button value="Clear" onClick={handleClear} />
            <Button value="Delete" onClick={handleDelete} />
            <Button value="." onClick={() => handleButtonClick('.')} />
            <Button value="/" onClick={() => handleButtonClick('/')} />
          </div>
          
          <div>
            <Button value="7" onClick={() => handleButtonClick('7')} />
            <Button value="8" onClick={() => handleButtonClick('8')} />
            <Button value="9" onClick={() => handleButtonClick('9')} />
            <Button value="*" onClick={() => handleButtonClick('*')} />
          </div>
          
          <div>
            <Button value="4" onClick={() => handleButtonClick('4')} />
            <Button value="5" onClick={() => handleButtonClick('5')} />
            <Button value="6" onClick={() => handleButtonClick('6')} />
            <Button value="+" onClick={() => handleButtonClick('+')} />
          </div>
          
          <div>
            <Button value="1" onClick={() => handleButtonClick('1')} />
            <Button value="2" onClick={() => handleButtonClick('2')} />
            <Button value="3" onClick={() => handleButtonClick('3')} />
            <Button value="-" onClick={() => handleButtonClick('-')} />
          </div>
        
          <div>
            <Button value="00" onClick={() => handleButtonClick('00')} />
            <Button value="0" onClick={() => handleButtonClick('0')} />
            <Button value="="  onClick={handleCalculate} />
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default App;
