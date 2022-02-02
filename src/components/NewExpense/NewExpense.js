import React, { useState } from "react";
import ExpenseButton from "./ExpenseButton";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
    const [formExpand, setFormExpand] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const newExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        onAddExpense(newExpenseData);
    };

    const expandChangeHandler = () => {
        setFormExpand((prevExpand) => !prevExpand);
    };

    let expenseContent = (
        <ExpenseButton onExpandChanged={expandChangeHandler}>
            Add New Expense
        </ExpenseButton>
    );

    if (formExpand)
        expenseContent = (
            <ExpenseForm
                onExpandChanged={expandChangeHandler}
                onSaveExpenseData={saveExpenseDataHandler}
            />
        );

    return <div className="new-expense">{expenseContent}</div>;
};

export default NewExpense;
