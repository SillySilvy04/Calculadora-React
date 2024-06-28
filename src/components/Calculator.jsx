import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

var clearVar = false;

export default function Calculator() {
    const [num,setNum] = useState(0);
    const [oldNum,setOldNum] = useState(0);
    const [operator,setOperator] = useState(null);
    
    function inputNum(e){
        var input = e.target.value;
        if((num === 0 || num === '0') || clearVar){
            setNum(input);
            clearVar = false;
        }else{
            setNum(num + input);
        }
    }

    function clear(){
        setNum("0");
        setOperator(null);
        setOldNum("0");
    }

    function percentage(){
        setNum((num / 100).toString().replace(".",","));
    }

    function changeSign(){
        console.log(num);
        setNum((parseFloat(num.replace(",","."))*-1).toString().replace(".",","));
        console.log(num);
    }

    function operatorHandler(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum("0");     
    }

    function calculate(){
        if(!operator) return;
       if(operator === "+"){
           setNum((parseFloat(oldNum) + parseFloat(num)).toString().replace(".",","));
       }else if(operator === "-"){
           setNum((parseFloat(oldNum) - parseFloat(num)).toString().replace(".",","));
       }else if(operator === "X"){
           setNum((parseFloat(oldNum) * parseFloat(num)).toString().replace(".",","));
       }else if(operator === "/"){
           setNum((parseFloat(oldNum) / parseFloat(num)).toString().replace(".",","));
       }
       clearVar = true;
    }

    return (
        <Box m={5}>
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={12}/>
                        <h1 className='result'>{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={percentage}>%</button>
                    <button className='orange' onClick={operatorHandler} value={"/"}>/</button>
                    <button className='grey' onClick={inputNum} value={7}>7</button>
                    <button className='grey' onClick={inputNum} value={8}>8</button>
                    <button className='grey' onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operatorHandler} value={"X"}>X</button>
                    <button className='grey' onClick={inputNum} value={4}>4</button>
                    <button className='grey' onClick={inputNum} value={5}>5</button>
                    <button className='grey' onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operatorHandler} value={"-"}>-</button>
                    <button className='grey' onClick={inputNum} value={1}>1</button>
                    <button className='grey' onClick={inputNum} value={2}>2</button>
                    <button className='grey' onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operatorHandler} value={"+"}>+</button>
                    <button className='grey' onClick={inputNum} value={0}>0</button>
                    <button className='grey' onClick={inputNum} value={","}>,</button>
                    <button className='grey' style={{ visibility: "hidden" }}>,</button>
                    <button className='orange' onClick={calculate}>=</button>

                </div>
            </Container>
        </Box>
    )
}
