import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => <ul className="expenses-list">
    {(
        (!props.filteredExpense.length && <p className="expenses-list__fallback">Found no expenses</p>)
        || props.filteredExpense.map(expense =>
            <ExpenseItem
                key={expense.id}
                expenseDate={expense.date}
                expenseTitle={expense.title}
                expenseAmount={expense.amount}
            />
    ))}
</ul>;

export default ExpensesList;