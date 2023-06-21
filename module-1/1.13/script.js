const addMatch = document.getElementById('add-another-match');
const matchContainer = document.getElementById('all-match-container');

let matchCounter = 2;

addMatch.addEventListener('click', () => {
    const match = document.createElement('div');
    match.classList.add('match');
    match.innerHTML = `
                <div class="wrapper">
                    <button class="lws-delete">
                        <img src="./image/delete.svg" alt="" />
                    </button>
                    <h3 class="lws-matchName">Match ${matchCounter}</h3>
                </div>
                <div class="inc-dec">
                    <form class="incrementForm">
                        <h4>Increment</h4>
                        <input type="number" name="increment${matchCounter}" class="lws-increment" />
                    </form>
                    <form class="decrementForm">
                        <h4>Decrement</h4>
                        <input type="number" name="decrement${matchCounter}" class="lws-decrement" />
                    </form>
                </div>
                <div class="numbers">
                    <h2 class="lws-singleResult">120</h2>
                </div>
                `;
    matchContainer.appendChild(match);
    matchCounter++;
});
