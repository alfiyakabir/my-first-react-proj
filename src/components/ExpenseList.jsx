import React from 'react';
import ExpenseItem from './ExpenseItem';
const ExpenseList=(props)=>{
    return(
        <div>
            <ExpenseItem name={props.items[0].name} date={props.items[0].date}/>
            {/* <ExpenseItem name={props.items.name} date={props.items.date}/> */}
        </div>
    )
}
export default ExpenseList;