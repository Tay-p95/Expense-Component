import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';


const Expenseitem = (props) => {
    //useState always returns an array with exactly two values
  //Is an example of a Hook and all hooks must be used within the component function
  //They can't be called outside of the functions or in nested functions.

   return ( //RETURNS JSX
   <li>
    <Card className="expense-item">
       <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default Expenseitem;
// A COMPONENT IN REACT IS JUST A JS FUNCTION

