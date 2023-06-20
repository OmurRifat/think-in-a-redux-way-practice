//select the dom element
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

//initialize the state
const initialState = {
    value: 0
}

//create the reducer function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                value: state.value + 1,
            }
        case "DECREMENT":
            return {
                ...state,
                value: state.value - 1,
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
    store.dispatch({
        type: "INCREMENT"
    });
});

decrementEl.addEventListener('click', () => {
    store.dispatch({
        type: "DECREMENT"
    });
}
);