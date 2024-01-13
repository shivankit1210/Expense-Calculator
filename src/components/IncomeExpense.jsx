import React from "react";

export const IncomeExpense = () => {
  return (
    <div className="inc-exp-container">
      <div className="income">
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +$0.00
        </p>
      </div>
      <div className="expenses">
        <h4>Expenses</h4>
        <p id="money-minus" className="money minus">
          $0.00
        </p>
      </div>
    </div>
  );
};
