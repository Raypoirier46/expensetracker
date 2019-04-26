import React, { Component } from 'react';
import Navigation from './containers/Navigation/navigation';
import Signin from './containers/signin/Signin'
import Register from './containers/Register/Register'
import Accounts from './containers/Accounts/accounts';
import BudgetBar from './containers/budgetBar/budgetBar'
import Transactions from './containers/transactions/Transactions';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 90,
      route: 'Signin',
      isSignedIn: false
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001')
  //     .then(response => response.json())
  //     .then(console.log)
  // }

  onRouteChange =(route) => {
    if (route === 'Signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
   const { route } = this.state;
    return (
      <div>
        { route === 'Home' 
        ? <div>
          <Navigation onRouteChange={this.onRouteChange}/>
          <Accounts />
          <BudgetBar percentage={this.state.percentage}/>
          <Transactions />
        </div>
          : (
            route === 'Signin'
          ? <Signin onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
