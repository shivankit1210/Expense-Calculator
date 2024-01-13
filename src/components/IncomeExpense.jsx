import React from "react";

export const IncomeExpense = () => {
  return (
    <div className="inc-exp-container">
      <div className="income">
        <h4>Income</h4>
        <p className="money plus">
          +$0.00
        </p>
      </div>
      <div className="expenses">
        <h4>Expenses</h4>
        <p className="money minus">
          $0.00
        </p>
      </div>
    </div>
  );
};
