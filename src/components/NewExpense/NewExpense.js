//Render a form so that users can add their own expenses
import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      /*Calling a function that we receive through props */
      /*We are lifting this data-expenseData up to  APP.js we are not keeping it here   */
      props.onAddExpense(expenseData);
      setIsEditing(false);
  };

const startEditingHandler = () => {
    setIsEditing(true);
}
const stopEditingHandler = () =>{
  setIsEditing(false);
}

  return (
    <div className="new-expense">
      {! isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && (
      <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler} 
        onCancel={stopEditingHandler}
      /> 
      )}
    </div>
  );
};

export default NewExpense;
