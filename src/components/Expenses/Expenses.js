import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
                <ExpensesChart expenses={filteredExpense}/>
                <ExpensesList filteredExpense={filteredExpense}/>
            </Card>
        </div>
    )
}

export default Expenses;