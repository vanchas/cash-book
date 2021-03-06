import React, { Component } from 'react';
import './main.scss';
import ItemOfListTransaction from './ItemOfListTransaction';
import moment from 'moment';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeSum: '',
      incomeComment: '',
      filterValue: ''
    };
  }

  incomeSumInput = input => {
    this.setState({
      incomeSum: input.value
    })
  }

  incomeCommentInput = input => {
    this.setState({
      incomeComment: input.value
    })
  }

  onIncomeAdding = () => {
    this.props.loadIncome(
      this.state.incomeSum,
      this.state.incomeComment,
      moment().format("MMM Do YY")
    );
    this.setState({
      incomeSum: '',
      incomeComment: ''
    })
  }

  updateList = () => {
    if (!this.state.filterValue.length) {
      return this.props.incomes.map(inc => {
        return <ItemOfListTransaction key={Math.random()} transaction={inc} />
      })
    } else {
      let newIncomes = this.props.incomes;
      newIncomes = newIncomes.filter(inc => {
        return inc.comment.toLowerCase().search(this.state.filterValue.toLowerCase()) !== -1;
      });
      return newIncomes.map(inc => {
        return <ItemOfListTransaction key={Math.random()} transaction={inc} />
      })
    }
  }

  setFilterValue = (value) => {
    this.setState({ filterValue: value })
  }

  render() {
    return (
      <div className="income_block">
        <div className="label-inc-block">Incomes</div>
        <div className="income_input">
          <input
            className="income_sum_input form-control"
            onChange={e => this.incomeSumInput(e.target)}
            value={this.state.incomeSum}
            type="number"
            placeholder="income sum$"
          />
          <button className="add btn-add-income btn btn-secondary font-weight-bold"
            onClick={this.onIncomeAdding}>
            add
          </button>
          <input
            className="income_comment form-control"
            type="text"
            onChange={e => this.incomeCommentInput(e.target)}
            value={this.state.incomeComment}
            placeholder="commentary"
          />
          <input type="text"
            onChange={e => this.setFilterValue(e.target.value)}
            title="filter by commentary"
            className="income_filter form-control" placeholder="filter..." />
        </div>
        <div className="income_list">
          {this.updateList()}
        </div>
      </div>
    )
  }
}
