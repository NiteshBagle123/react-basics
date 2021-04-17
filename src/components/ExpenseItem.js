import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const { expenseDate, expenseTitle, expenseAmount } = props;

  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={expenseDate}/>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
