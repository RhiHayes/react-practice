import React from "react";
import "./ChartBar.css";

function ChartBar(props) { //Getting props from Chart.js

    let barFillHeight = "0%"; //Initial CSS property value

    if (props.maxValue > 0) {
        //This sets the height of the chart bar fill by getting the initial value
        //and dividing it by the max value; you * it by 100 to give you a 
        //usable percent fill
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    //For the chart-bar__fill height, pass in barFillHeight which was just calculated
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: barFillHeight}}></div> 
        </div>
        <div className="cart-bar__label">{props.label}</div>
    </div>
}

export default ChartBar;