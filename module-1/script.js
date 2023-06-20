//select the dom element
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

//initialize the state
const initialState = {
    value: 0
}

//action idennitifier
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//action creator 
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}


//create the reducer function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            }
        default:
            return state;
    }

}

//create the store
const store = Redux.createStore(counterReducer);

// create the render function
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}

//update the ui based on the initial state
render();

store.subscribe(render);

//dispatch the action
incrementEl.addEventListener('click', () => {
    store.dispatch(increment(2));
});

decrementEl.addEventListener('click', () => {
    store.dispatch(decrement(1));
}
);