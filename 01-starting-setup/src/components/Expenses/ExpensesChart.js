import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {

    //All 12 months of the year that initially start out with no values (expenses)
    const chartDataPoints = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0}
    ];

    //This loop is best to loop over iterable objects...

    //We get expenses from props (see ExpenseItem.js)
    for (const expense of props.expenses) {

        // console.log(props.expenses) //This is an array of objects (OG VALUE)
        // console.log(expense); //This returns an individual expense as an object (CONVERTED TO THIS)
    
        const expenseMonth = expense.date.getMonth(); //starting at 0... Jan = 0, Feb = 1, etc.

        //This says that the initital value is zero [expenseMonth].value, then we
        //add the expense.amount to the appropriate month.
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints}/> //Passing props (chartDataPoints) to Chart
}

export default ExpensesChart;