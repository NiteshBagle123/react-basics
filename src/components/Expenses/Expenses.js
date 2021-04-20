import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        console.log(selectedYear);
        setFilteredYear(selectedYear)
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}/>
                {
                    props.expenses.map(expense => <ExpenseItem
                        key={expense.id}
                        expenseDate={expense.date}
                        expenseTitle={expense.title}
                        expenseAmount={expense.amount}
                        />
                    )
                }
            </Card>
        </div>
    )
}

export default Expenses;