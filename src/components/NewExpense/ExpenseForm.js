import React, { useState } from "react";
import ExpenseButton from "./ExpenseButton";
import "./ExpenseForm.css";

const ExpenseForm = ({ onExpandChanged, onSaveExpenseData }) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (e) => setEnteredTitle(e.target.value);
    const amountChangeHandler = (e) => setEnteredAmount(e.target.value);
    const dateChangeHandler = (e) => setEnteredDate(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        onExpandChanged();
        onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="e.g. Toilet Paper"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        min="0.01"
                        step="0.01"
                        placeholder="e.g. 12.99"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <ExpenseButton onExpandChanged={onExpandChanged}>
                    Cancel
                </ExpenseButton>
                <button>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
