import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css"

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2021");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // The ternary(s) act as a return statement; if true, return this (&&)
    return (
     <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>

    </Card>
    </div>
    )
}

export default Expenses;