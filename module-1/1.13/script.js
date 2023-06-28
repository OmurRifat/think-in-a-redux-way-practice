const addMatch = document.getElementById('add-another-match');
const matchContainer = document.getElementById('all-match-container');
const deleteMatch = document.querySelectorAll('.lws-delete');
const totalScore = document.getElementById('total-score1');
const incrementForm = document.getElementById('incrementForm1');
const decrementForm = document.getElementById('decrementForm1');

let matchCounter = 1;
let matchArray = new Array(matchCounter);

const initialState = [{
    id: 0,
    value: 0
}]

function scoreReducer(state = initialState, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                value: state.value + action.payload >= 0 ? state.value + action.payload : 0,
            }
        case 'decrement':
            return {
                ...state,
                value: state.value - action.payload >= 0 ? state.value - action.payload : 0,
            }
        default:
            return state;
    }
}

const store = Redux.createStore(scoreReducer);

const render = () => {
    const state = store.getState();
    totalScore.innerHTML = state.value;
    console.log(state);
}

render();
store.subscribe(render);

addMatch.addEventListener('click', () => {
    matchCounter++;
    const match = document.createElement('div');
    match.classList.add('match');
    match.setAttribute('id', `match${matchCounter}`);
    match.innerHTML = `
                <div class="wrapper">
                    <button id="delete-match${matchCounter}" class="lws-delete">
                        <img src="./image/delete.svg" alt="" />
                    </button>
                    <h3 class="lws-matchName">Match ${matchCounter}</h3>
                </div>
                <div class="inc-dec">
                    <form id="incrementForm${matchCounter}" class="incrementForm">
                        <h4>Increment</h4>
                        <input type="number" name="increment${matchCounter}" class="lws-increment" />
                    </form>
                    <form id="decrementForm${matchCounter}" class="decrementForm">
                        <h4>Decrement</h4>
                        <input type="number" name="decrement${matchCounter}" class="lws-decrement" />
                    </form>
                </div>
                <div class="numbers">
                    <h2 id="total-score${matchCounter}"  class="lws-singleResult">120</h2>
                </div>
                `;
    matchContainer.appendChild(match);
});


incrementForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const incrementValue = parseInt(e.target.increment1.value);
    store.dispatch({ type: 'increment', payload: incrementValue });
    e.target.increment1.value = '';
});

decrementForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const decrementValue = parseInt(e.target.decrement1.value);
    store.dispatch({ type: 'decrement', payload: decrementValue });
    e.target.decrement1.value = '';
});