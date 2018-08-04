export function selectBase(base) {
    return {
        type: 'SELECT_BASE',
        payload: base
    }
}

export function selectSauce(sauce) {
    return {
        type: 'SELECT_SAUCE',
        payload: sauce
    }
}

export function selectTopping(topping){
    return {
        type: 'SELECT_TOPPING',
        payload: topping
    }
}

export function calculatePrice(){
    return {
        type: 'CALCULATE_PRICE'
    }
}

export function deliveryOption(quantifier){
    return {
        type: 'DELIVERY_OPTION',
        payload: quantifier
    }
}

export function resetSelection(){
    return {
        type: 'RESET_SELECTION'
    }
}