import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) =>{
    // eslint-disable-next-line
let setUserInput;

   const [enteredTitle, setEnteredTitle]  = useState('');
   const  [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setDate] = useState('');

//   const [userInput, setUserInput] = useState({
//         enteredTitle: ' ',
//         enteredAmount: ' ',
//         enteredDate: ' '
//     });

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     // This ensures that all the other values aren't throw away but rather considered with state
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // eslint-disable-next-line
       const setUserInput = ((prevState)=>{
            return {...prevState, enteredAmount: event.target.value};
        });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     // This ensures that all the other values aren't throw away but rather considered with state
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        // eslint-disable-next-line
      const setUserInput = ((prevState)=>{
            return {...prevState, enteredTitle: event.target.value};
        });
       
    };

    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
        // setUserInput({
        //     // This ensures that all the other values aren't throw away but rather considered with state
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        //IF STATE UPDATE DEPENDS ON PREVIUS STATE USE THIS FUNCTION FORM
        // eslint-disable-next-line
        const setUserInput = ((prevState)=>{
            return {...prevState, enteredDate: event.target.value};
        });

    };
    
    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setDate('');
    };


    return (
    <form onSubmit={submitHandler}>
        <div className="new=expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type= 'text'
                 value={enteredTitle} 
                 onChange={titleChangeHandler} 
                 />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type= 'number' 
                value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type= 'date' value={enteredDate} min="2019-01-01" max="2024-12-13" onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel} >Cancel</button>
            <button type="submit" >Add Expense</button>
        </div>
    </form>
    );       
};

export default ExpenseForm;
