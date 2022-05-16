import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";


function Chart(props) {

    // console.log(props.dataPoints); //This is an array of objects

    //Turns the dataPoints objects into an array of numbers
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); 
    const totalMaximum = Math.max(...dataPointValues);
    // console.log(totalMaximum) //Passes in every number as a single argument and
    //returns the totalMaximum of a month. 
    //Ex: March of 2021's maximum is 1094.16, which is the NewTV and Car Insurance 
    //added together

return <div className="chart">
   {props.dataPoints.map((dataPoint) => ( //Maps dataPoints Objects and passing props to ChartBar.js
    <ChartBar key={dataPoint.label}
    value={dataPoint.value}
    maxValue={totalMaximum} //exporting totalMaximum in custom value
    label={dataPoint.label} />  
    ))}
</div>

};

export default Chart;