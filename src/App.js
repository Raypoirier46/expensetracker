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
      route: 'Signin'
    }
  }

  onRouteChange =(route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div>
        { this.state.route === 'Home' 
        ? <div>
          <Navigation onRouteChange={this.onRouteChange}/>
          <Accounts />
          <BudgetBar percentage={this.state.percentage}/>
          <Transactions />
        </div>
          : (
            this.state.route === 'Signin'
          ? <Signin onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
