import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  let expenseData = {};
  const addExpenseHandler = (formdata) => {
    expenseData = {
      ...formdata,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    //from NewExpense to AppComponent
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(!isEditing);
  };
  const stopEditingHandler = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onAddExpenseData={addExpenseHandler}
          onStop={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
