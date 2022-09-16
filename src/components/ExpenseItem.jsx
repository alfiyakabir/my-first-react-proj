import React from 'react'
const ExpenseItem=(props)=>{
    return(
        <div>
            <h2>{props.name}</h2>
            <h3>{props.date}</h3>
        </div>
    )
}
export default ExpenseItem;