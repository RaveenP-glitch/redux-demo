const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

const initialState = {
    numOfCakes: 10,
}




