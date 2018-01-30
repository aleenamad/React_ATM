import React, { Component } from 'react';

export default class Account extends Component {
  constructor (props) {
    super(props)
    this.state = {
      balance: 0
    }
  }
  handleDepositClick(e) {
   // It is good practice to still prevent default behavior
   e.preventDefault();
   // set a local variable to the amount entered in the text box.
   let amount = parseInt(this.inputBox.value);
   // set a local variable to the new balance based off of the original balance + amount
   let newBalance = this.state.balance + amount;
   // set the balance to the newBalance using the setState method (necessary)
   this.setState({
     balance: newBalance
   })
   // empty out the text box in this component
   this.inputBox.value = '';
 }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />

        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />

        <input type="button" value="Withdraw" />

      </div>
    )
  }
}
