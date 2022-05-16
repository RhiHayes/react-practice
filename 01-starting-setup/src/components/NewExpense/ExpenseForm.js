import React, {useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {

   //States to use user input
   const [enteredTitle, setEnteredTitle] = useState("");
   const [enteredAmount, setEnteredAmount] = useState(""); 
   const [enteredDate, setEnteredDate] = useState(""); 

//Another way to use state by using an object instead of 3 seperate states

        // const [userInput, setUserInput] = useState({
        //     enteredTitle: "",
        //     enteredAmount: "",
        //     enteredDate: ""
        // });

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // });
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value}
        // });
    }

    function submitHandler(event) {
        event.preventDefault(); //Keeps page from refreshing

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount, //Forces this value to be a number
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData); //Custom value in NewExpense.js passes in expenseData

        //Clearing Data in form after submit
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }


    //onCancel points to a function (which activates it) passed from NewExpense.js 
    //through props
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
             <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;