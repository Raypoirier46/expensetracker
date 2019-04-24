import React from 'react'


const Navigation = ( {onRouteChange} ) => {
    return (
    <nav className="flex f3 pb6 items-center">
        <p className="pa2 mh4 ba bw1 .br4">Home</p>
        <p className="pa2 mh4 ba bw1 .br4">Report</p>
        <p className="pa2 mh4 ba bw1 .br4">Budget</p>
        <p onClick={() => onRouteChange('Signin')} className="pa2 mh4 ba bw1 .br4 self-start">Sign out</p>
    </nav>
    )
}

export default Navigation;