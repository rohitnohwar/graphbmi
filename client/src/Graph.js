import axios from "axios";
import "./graph.css";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Line} from "react-chartjs-2";

function Graph(){
    const [data, setData]=useState({
        labels:[],
        datasets:[
            {
                label:"Graph",
                data:[]
            }
        ]
    });

    useEffect(()=>{
        axios.post("/graphdata"
        ).then((response)=>{
            setData(prevValue=>{
                return{
                    labels:response.data.foundHeight,
                    datasets:[{
                        label:"Graph",
                        data:response.data.foundWeight
                    }]
                }
            })
        });
    },[])
    
    return <div class="graph">
    <div class="link"><Link to="/">GO CHECK YOUR OWN BMI</Link></div>
    <div class="important"><Line data={data} /></div>
    </div>
}

export default Graph;