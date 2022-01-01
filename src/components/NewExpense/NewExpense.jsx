import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  let expenseData = {};
  const addExpenseHandler = (formdata) => {
    expenseData = {
      ...formdata,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    //from NewExpense to AppComponent
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpenseData={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
