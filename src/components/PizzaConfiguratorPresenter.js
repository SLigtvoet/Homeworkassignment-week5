import * as React from 'react'
import { pizzaBase, pizzaSauce, pizzaToppings } from './pizzaModel'

export default function PizzaConfiguratorPresenter(props) {
  return (<div>
        <div className="header">
            <h1>Pizza Configurator</h1>
        </div>
            <div className="baseSelector">
                <h2>Select your base</h2>
                <form>
                    <ul>
                        { 
                            pizzaBase.map((base) => {
                              return <li><input type="radio" name="pizzabase" onClick={() => props.handleBaseChange(base)} />{base.size}{base.price}</li>
                            } ) 
                        }
                    </ul>
                </form>
            </div>
            <div className="sauceSelector">
                 <h2>Select your sauce</h2>
                 <form>
                    <ul>
                    { 
                            pizzaSauce.map((sauce) => {
                              return <li><input type="radio" name="pizzasauce" onClick={() => props.handleSauceChange(sauce)} />{sauce.type}{sauce.price}</li>
                            } ) 
                        }
                    </ul>
                </form>
            </div>
            <div className="toppingSelector">
                 <h2>Select your topping (3 max)</h2>
                 <form id="world" name="world">
                    <ul>
                    { 
                            pizzaToppings.map((topping, index) => {
                              return <li><input type="checkbox" disabled={props.currentPizza.toppings.length === 3 && !props.currentPizza.toppings.find(stateTopping => {
                                return stateTopping.type === topping.type
                              })} name={index} onChange={() => props.handleToppingChange(topping)} />{topping.type}{topping.price}</li>
                            } ) 
                        }
                    </ul>
                </form>
            </div>
            <div className="delivery">
            <h2>Select your preferred delivery option</h2>
            <form>
                <ul>
                    <li><input  type="radio" name="sauce" onChange={() => props.handleDeliveryChange(1)}/>Regular scooter delivery</li>
                    <li><input  type="radio" name="sauce" onChange={() => props.handleDeliveryChange(1.1)} />Turbo drone delivery (+10%)</li>
                    </ul>
                </form>
            </div>
            <div className="pizzaPrice">
            <h4>Total pizza price: &euro;{props.currentPizza.price.toFixed(2)}</h4>
            </div>
  </div>)
}
