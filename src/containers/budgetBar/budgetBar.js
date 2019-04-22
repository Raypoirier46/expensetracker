import React from 'react'
import './budgetBar.css'




const Filler = (props) => {
    return (
        <div className='filler' style={{ width: `${props.percentage}%` }} />
    )
}


const BudgetBar = (props) => {
    return (
        <div>
            <h1>Budget</h1>
            <p>Amount Left</p>
            <div className='bar'>
                <Filler percentage={props.percentage} />
            </div>
        </div>
    )
}

export default BudgetBar;