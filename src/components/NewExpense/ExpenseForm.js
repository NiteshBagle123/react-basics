import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [ enteredTitle, setEnteredTitle] = useState('');
    const [ enteredAmount, setEnteredAmount] = useState('');
    const [ enteredDate, setSelectedDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     selectedDate: ''
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value 
        // });
    }
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value 
        // });
        setEnteredAmount(event.target.value);
    }
    const selectedDateHandler = (event) =>  {
        // setUserInput({
        //     ...userInput,
        //     selectedDate: event.target.value 
        // });
        setSelectedDate(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         selectedDate: event.target.value
        //     }
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setSelectedDate('');
    };

    return (<form onSubmit={submitHandler}>
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
                    step="2022-12-31"
                    value={enteredDate} 
                    onChange={selectedDateHandler}
                />
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" onClick={props.onCancel}>Add Expense</button>
            </div>
        </div>
    </form>)
};

export default ExpenseForm;