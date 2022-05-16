import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
    //Catches if form is being edited or not
    const [isEditing, setIsEditing] = useState(false); 

    //This function actually SAVES the data
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {

            //Grabbing obj that was created in ExpenseForm.js
            ...enteredExpenseData,
            id: Math.random().toString() //Generates random id
        }
        props.onAddExpense(expenseData); //Adds expense (function passed from App.js)
        setIsEditing(false); //Closes after submitting
    }

    function startEditingHandler() {
        setIsEditing(true);
    }

    function stoptEditingHandler() {
        setIsEditing(false);
    }

    //&& acts as a return statement (ex: if isEditing isn't true, return this.)

    //onCancel passes props to ExpenseForm.js
    return (<div className="new-expense">

    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stoptEditingHandler}/> }
    </div>)

}

export default NewExpense;