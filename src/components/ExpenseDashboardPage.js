import React from "react";
import ExpenseList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
