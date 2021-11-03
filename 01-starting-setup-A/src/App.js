import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { 
    title: '100 Cats', 
    amount: 0.00, 
    date: new Date(2021,1,28),
  },{ 
    title: 'Cat Insurance', 
    amount: 138.00, 
    date: new Date(2021,0,28),
  },{ 
    title: '1 Car', 
    amount: 1000.00, 
    date: new Date(2021,2,28),
  },{ 
    title: 'Car Insurance', 
    amount: 394.67, 
    date: new Date(2021,3,28),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Lets get started!"),
  //   React.createElement(Expenses, {exp: expenses}),
  // );

  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )

}

export default App;

/*
<ExpenseItem 
title={props.expenses[1].title}
amount={props.expenses[1].amount}
date={props.expenses[1].date}
/>
<ExpenseItem 
title={props.expenses[2].title}
amount={props.expenses[2].amount}
date={props.expenses[2].date}
/>
<ExpenseItem 
title={props.expenses[3].title}
amount={props.expenses[3].amount}
date={props.expenses[3].date}
/>
*/