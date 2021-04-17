import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const { expenseDate } = props;
    const month = expenseDate.toLocaleString('en-US', { month: 'long'});
    const day = expenseDate.toLocaleString('en-US', { day: '2-digit' });
    const year = expenseDate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{year}</div>
            <div className="expense-date__year">{day}</div>
        </div>
    );
}

export default ExpenseDate;