import './App.css';
import React, { useState } from 'react';

function App() {
  const [operand1, setOperand1] = useState("0")
  const [operand2, setOperand2] = useState("0")
  const [operation, setOperation] = useState(false)
  const [type, setType] = useState('')

  const handleAdd = () => {
    setOperation(true)
    setType('add')
  }

  const handleSubtract = () => {
    setOperation(true)
    setType('subtract')
  }

  const handleMultiply = () => {
    setOperation(true)
    setType('multiply')
  }

  const handleDivide = () => {
    setOperation(true)
    setType('divide')
  }

  const handleClear = () => {
    setOperand1("0")
    setOperand2("0")
    setOperation(false)
  }

  const handleInput = (num) => {
    if (!operation) {
      setOperand1((operand1 === "0") ? num : operand1.concat(num))
    } else {
      setOperand2((operand2 === "0") ? num : operand2.concat(num))
    }
  }

  const handleCalculation = () => {
    let op1 = parseInt(operand1)
    let op2 = parseInt(operand2)
    switch(type) {
      case 'add':
        setOperand1((op1+op2).toString())
        setOperand2("0")
        setOperation(false)
        break;
      case 'subtract':
        setOperand1((op1-op2).toString())
        setOperand2("0")
        setOperation(false)
        break;
      case 'multiply':
        setOperand1((op1*op2).toString())
        setOperand2("0")
        setOperation(false)
        break;
      case 'divide':
        setOperand1((op1/op2).toString())
        setOperand2("0")
        setOperation(false)
        break;
      default:
        console.log('nothing')
    }
  }

  return (
    <div className="App" style={{marginTop: '30%'}}>
      <div style={{textAlign: 'right', width: '57%'}}>
        {!operation ? (<span>{operand1}</span>) :
        (<span>{operand2}</span>)
        }
      </div>
      <div>
        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={handleDivide}>/</button>
      </div>
      <div>
        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={handleMultiply}>x</button>
      </div>
      <div>
        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={handleSubtract}>-</button>
      </div>
      <div>
        <button onClick={handleClear}>clear</button>
        <button onClick={handleCalculation}>=</button>
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  );
}

export default App;
