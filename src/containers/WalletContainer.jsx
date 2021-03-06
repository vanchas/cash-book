import React, { Component } from 'react';
import Main from '../components/main/Main';
import { setNewExpense, setNewIncome } from '../store/actions';
import { connect } from 'react-redux';
import { loadIncome} from '../store/actions';

class WalletContainer extends Component {
  render() {
    return (
      <div>
        <Main
          incomes={this.props.incomes}
          expenses={this.props.expenses}
          incomesTotalSum={this.props.incomesTotalSum}
          expensesTotalSum={this.props.expensesTotalSum}
          setNewExpense={this.props.setNewExpense}
          setNewIncome={this.props.setNewIncome}
          loadIncome={this.props.loadIncome}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenseReducer.expenses,
    incomes: state.incomeReducer.incomes,
    expensesTotalSum: state.expenseReducer.expensesTotalSum,
    incomesTotalSum: state.incomeReducer.incomesTotalSum
  }
}

const mapDispatchToProps = {
  setNewExpense,
  setNewIncome,
  loadIncome
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletContainer);