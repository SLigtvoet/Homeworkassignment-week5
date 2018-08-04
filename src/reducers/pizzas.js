const calculatePrice = (state) => {
  return (state.base.price + state.sauce.price + state.toppings.reduce((acc , topping) => {
    return acc + topping.price 
  }, 0)) * state.delivery

}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case 'SELECT_BASE':
      return {
        ...state,
        base: action.payload,
      }
      case 'SELECT_SAUCE':
      return {
        ...state,
        sauce: action.payload,
      }
      case 'SELECT_TOPPING':
      const index = state.toppings.findIndex(topping => {
        return topping.type === action.payload.type
      })
      if(index > -1) {
        return {
          ...state,
          toppings: state.toppings.filter(topping => {
            return topping.type !== action.payload.type
          }),
        }
      }
      return {
        ...state,
        toppings: state.toppings.concat([action.payload]),
      
      }
      case 'CALCULATE_PRICE':
      return {
        ...state,
        price: calculatePrice(state)
      }
      case 'DELIVERY_OPTION':
      return {
        ...state,
        delivery: action.payload
      }
    }

    return state
  }



  const initialState = {
    
      base: { price : 0 },
      sauce: { price : 0 },
      toppings: [],
      price: 0,
      delivery: 1
    
  }
  