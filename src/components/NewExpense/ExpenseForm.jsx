import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Option : 1 for updating the state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Option : 2 for updating the state

  // const [formInput, setFormInput] = useState({
  //   enteredTitle: "",
  //   enteredDate: "",
  //   enterdAmount: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // Mention the other properties of objects too
    // setFormInput({
    //   ...formInput,
    //   enteredTitle: event.target.value,
    // });
    // Safest way to update state which depends upon prev states snapshot
    // setFormInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setFormInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setFormInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // clearing the fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // send data child to parent component
    props.onAddExpenseData(formData);

    // console.log(formData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
