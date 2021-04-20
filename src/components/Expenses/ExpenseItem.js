import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const { expenseDate, expenseTitle, expenseAmount } = props;
  const [ title, setTitle] = useState(expenseTitle);
  const onTitleChangeHandler = () => setTitle('updated');

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={onTitleChangeHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
