import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => setFilteredYear(selectedYear);

    const filteredExpense = props.expenses.filter(
        expense => (expense.date.getFullYear().toString() === filteredYear)
    );
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}/>
                <ExpensesList filteredExpense={filteredExpense}/>
                {/* {
                    (!filteredExpense.length && <p>No expenses find</p>) || filteredExpense.map(expense =>
                        <ExpenseItem
                            key={expense.id}
                            expenseDate={expense.date}
                            expenseTitle={expense.title}
                            expenseAmount={expense.amount}
                        />
                    )
                } */}
            </Card>
        </div>
    )
}

export default Expenses;