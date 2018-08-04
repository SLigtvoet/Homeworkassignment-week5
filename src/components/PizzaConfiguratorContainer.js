import * as React from 'react'
import PizzaConfiguratorPresenter from './PizzaConfiguratorPresenter'
import { connect } from 'react-redux'
import { selectBase, selectSauce, selectTopping, calculatePrice, deliveryOption } from '../actions/selectBase'

class PizzaConfiguratorContainer extends React.PureComponent {

  handleBaseChange = (base) => {
    this.props.selectBase(base)
    this.props.calculatePrice()
  }

  handleSauceChange= (sauce) => {
    this.props.selectSauce(sauce)
    this.props.calculatePrice()
  }

  handleToppingChange = (topping) => {
    this.props.selectTopping(topping)
    this.props.calculatePrice()
  }

  handleDeliveryChange = (quantifier) => {
    this.props.deliveryOption(quantifier)
    this.props.calculatePrice()
  }

  render() {
    return <PizzaConfiguratorPresenter currentPizza={this.props.currentPizza}
     handleBaseChange={this.handleBaseChange}
     handleSauceChange={this.handleSauceChange} 
     handleToppingChange={this.handleToppingChange}
     handleDeliveryChange={this.handleDeliveryChange} />
  }
}

const mapStateToProps = (state) => {
    return {
      currentPizza: state.currentPizza
    }
  }

export default connect(mapStateToProps, { selectBase, selectSauce, selectTopping, calculatePrice, deliveryOption })(PizzaConfiguratorContainer)