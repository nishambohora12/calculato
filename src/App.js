import {useState} from 'react';
import './App.css';

function App() {
  const [operation, setOperation] = useState("");
  const [result , setResult ] = useState("");

  const operators = ['+', '-', '/', '*', '.' ];

  const updateCal = value =>
  {
    if(
      operators.includes(value) && operation == ' ' ||
      operators.includes(value) && operators.includes(operation.slice(-1))
    )
    {
      return;
    }
    setOperation(operation + value);
  }

  const windowclose = () =>
  {
    
    window.close();

  }

  const createdig = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={ () => updateCal(i.toString())}key={i}>{i}</button>
      )
    }
    return digits;
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="calculatorname">
        <div className="caltitle"><p >  Welcome to calculator </p></div>
          
          <div>
           <button>-</button>
           <button>+</button>
           <button onClick={windowclose}>X</button> 
           </div>
            
        
        
        </div>
        <div className="display">
          { result ? <span>(0)</span>: ' '}{ operation || "0"}
        </div>
        <div className="operator">
          <button onClick={ () => updateCal('+')}>+</button>
          <button onClick={ () => updateCal('-')}>-</button>
          <button onClick={ () => updateCal('/')}>/</button>
          <button onClick={ () => updateCal('*')}>*</button>

          <button> Clr</button>
        </div>

      
      <div className="digits">
        {createdig()}
        <button onClick={ () => updateCal('0')}>0</button>
        <button onClick={ () => updateCal('.')}>.</button>
        <button >=</button>
      </div>
    </div>
    </div>
  );
}

export default App;
