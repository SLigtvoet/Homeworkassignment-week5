import * as React from 'react'
import { pizzaBase, pizzaSauce, pizzaToppings } from './pizzaModel'
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


export default function PizzaConfiguratorPresenter(props) {
  return (<div>
        <div className="header">
            <h1>Pizza Configurator</h1>
        </div>
        <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
                <h2>Select your base</h2>
                <form>
                    <ul>
                        { 
                            pizzaBase.map((base, index) => {
                              return <li key={index}>
                                  <Radio
                                    checked={props.currentPizza.base.size === base.size}
                                    onClick={() => props.handleBaseChange(base)} />
                                    {base.size} &euro;{base.price.toFixed(2)}
                               </li>
                            } ) 
                        }
                    </ul>
                </form>
           </Grid>
           <Grid item xs={12} sm={6} md={4} lg={3}>
                 <h2>Select your sauce</h2>
                 <form>
                    <ul>
                    { 
                            pizzaSauce.map((sauce, index) => {
                              return <li key={index}>
                                  <Radio
                                    checked={props.currentPizza.sauce.type === sauce.type} 
                                    onClick={() => props.handleSauceChange(sauce)} />
                                    {sauce.type} &euro;{sauce.price.toFixed(2)}
                                </li>
                            } ) 
                        }
                    </ul>
                </form>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                 <h2>Select your topping (3 max)</h2>
                 <form id="world" name="world">
                    <ul>
                    { 
                            pizzaToppings.map((topping, index) => {
                              return <li key={index}>
                                  <Checkbox checked={props.currentPizza.toppings.findIndex(stateTopping => {
                                                return stateTopping.type === topping.type
                                            }) > -1}
                                            disabled={props.currentPizza.toppings.length === 3 && !props.currentPizza.toppings.find(stateTopping => {
                                                return stateTopping.type === topping.type
                                            })} 
                                            onChange={() => props.handleToppingChange(topping)} 
                                            />{topping.type} &euro;{topping.price.toFixed(2)}
                                    </li>
                            } ) 
                        }
                    </ul>
                </form>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
            <h2>Select your preferred delivery option</h2>
            <form>
                <ul>
                    <li><Radio
                            checked={props.currentPizza.delivery === 1} onChange={() => props.handleDeliveryChange(1)}/>Regular scooter delivery</li>
                    <li><Radio
                            checked={props.currentPizza.delivery === 1.1} onChange={() => props.handleDeliveryChange(1.1)} />Turbo drone delivery (+10%)</li>
                    </ul>
                </form>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
            <h4>Total pizza price: &euro;{props.currentPizza.price.toFixed(2)}</h4>
            </Grid>
            </Grid>
            <Button variant="contained" color="secondary" onClick={() => props.resetPizza()}>
                Reset
            </Button>
  </div>)
}
