import React,{useState} from "react";
import axios from "axios";
import "./main.css";
import {Link} from "react-router-dom";

function Main(){
    const [info, setInfo]=useState({
        weight:0,
        height:0
    });

    const [result, setResult]=useState(0);

    
    function handleChange(event){
        const{name, value}=event.target;
        setInfo(prevValue=>{
            return{
                ...prevValue,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const numbers={
            weight:info.weight,
            height:info.height
        }

        axios.post("/entry", numbers
        ).then((response)=>{
            setResult(response.data.result);
        });
    }


    return <div class="main-div">
    <form action="/entry" method="POST" class="main">
    <div class="link-main"><Link to="/graph">SEE THE LINE CHART</Link></div>
    <div>BMI CALCULATOR</div>
    <div>Enter weight(in kg of range 0kg to 500kg)</div>
    <div><input name="weight" type="number" step="any" onChange={handleChange} placeholder="0" min="0" max="500" required></input></div>
    <div>Enter height(in m of range 0m to 3m)</div>
    <div><input name="height" type="number" step="any" onChange={handleChange} placeholder="0" min="0" max="3" required></input></div>
    <div><button type="submit" class="reg-button" onClick={handleClick}>CALCULATE</button></div>
    <div>Result: {result}</div>
    </form>
    </div>
}

export default Main;