import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");

  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};
// export const ExpensesSummary = (props) => (
//   <div>
//     <h1>
//       {props.expenses.length === 0 ? (
//         <p>No expenses</p>
//       ) : (
//         <p>
//           Viewing {props.expenses.length} expenses{" "}
//           {numeral(getExpensesTotal(props.expenses) / 100).format("$0,0.00")}
//         </p>
//       )}
//     </h1>
//   </div>
// );

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
     expenseCount: visibleExpenses,
     expensesTotal: getExpensesTotal(visibleExpenses) 
   };
};

export default connect(mapStateToProps)(ExpensesSummary);
