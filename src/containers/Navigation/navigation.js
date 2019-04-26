import React from 'react'


const Navigation = ( {onRouteChange} ) => {
    return (
    <nav className="flex f3 pb6 items-center">
        <p className="pa2 mh4 ba bw1 .br4 pointer">Home</p>
        <p className="pa2 mh4 ba bw1 .br4 pointer">Report</p>
        <p className="pa2 mh4 ba bw1 .br4 pointer">Budget</p>
        <p onClick={() => onRouteChange('Signin')} className="pa2 mh4 ba bw1 .br4 pointer">Sign out</p>
    </nav>
    )
}

export default Navigation;