import ExpenseList from "./components/ExpenseList";

function App() {
  const expenseData=[
    {
      id:0,
      name: "house rent",
      date: new Date(29,1,2022)

    },
    {
      id:1,
      name: "car insurance",
      date: new Date(29,1,2022)

    },
    {
      id:2,
      name: "gold loan",
      date: new Date(29,1,2022)

    }
  ]
  return (
    <div>
      <ExpenseList items={expenseData}/>
    </div>
  );
}

export default App;
