import React from "react";

const ExpenseButton = ({ children, onExpandChanged }) => {
    return <button onClick={onExpandChanged}>{children}</button>;
};

export default ExpenseButton;
