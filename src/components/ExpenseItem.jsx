import React from "react"
import './ExpenseItem.css'

function ExpenseItem(){
    return <div className="Expense-Item">
        <div>Date</div>
        <div className="expense-item__description">
            <h2 className="expense-item ">title</h2>
            <div className="expense-item__price"> price</div>
        </div>
    </div>

}

export default ExpenseItem 