document.addEventListener('DOMContentLoaded', () => {
    const jokesContainer = document.getElementById('jokes-container');


    function renderJokes(jokes) {
        jokesContainer.innerHTML = '';

        const jokesList = document.createElement('ul');
        jokesList.className = 'jokes-list';
        jokes.forEach(joke => {
            const jokeItem = document.createElement('li');
            jokeItem.className = 'joke';
            jokeItem.innerHTML = `
                <p class="setup">${joke.setup}</p>
                <p class="punchline">${joke.punchline}</p>
            `;
            jokesList.appendChild(jokeItem);
        });
        jokesContainer.appendChild(jokesList);
    }
});