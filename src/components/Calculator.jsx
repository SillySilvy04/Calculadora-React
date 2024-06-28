import React from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';

export default function calculator() {
  return (
    <Container>
        <div className="calculator">
            <div className="display">0</div>
            <div className="buttons">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>+</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
            <button>/</button>
            </div>
        </div>
    </Container>
  )
}
