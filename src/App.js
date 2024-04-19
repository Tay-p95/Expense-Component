import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { 
    id: 'e1',
    title: "Pet Food", 
    amount: 50, 
    date: new Date(2022, 5, 28) },
  { 
    id: 'e2',
    title: "Car Insurance",
    amount: 294.67, 
    date: new Date(2022, 1, 2) },
  { 
    id: 'e3',
    title: "Clothes", 
    amount: 150, 
    date: new Date(2021, 9, 12) },
  {
    id: 'e4',
    title: "Groceries (Top Up)",
    amount: 135.88,
    date: new Date(2021, 10, 31),
  },
];


const App = () => {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
 
// This is triggered whenever a new expense is addded
  const addExpenseHandler = (expense) => {
   setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
