import React, { Component } from 'react';
import Navigation from './containers/Navigation/navigation';
import Accounts from './containers/Accounts/accounts';
import BudgetBar from './containers/budgetBar/budgetBar'
import Transactions from './containers/transactions/Transactions';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 90
    }
  }
  render() {
    return (
      <div>
        <Navigation />
        <Accounts />
        <BudgetBar percentage={this.state.percentage}/>
        <Transactions />
      </div>
    );
  }
}

export default App;
