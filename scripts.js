document.addEventListener('DOMContentLoaded', () => {
    const jokesContainer = document.getElementById('jokes-container');

    async function fetchJokes() {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/jokes/random/25');
            if (!response.ok) {
                console.error('Failed to fetch jokes');
                return;
            }

            const jokes = await response.json();
            renderJokes(jokes);
        } catch (error) {
            console.error('Error fetching jokes:', error);
        }
    }

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

    fetchJokes().catch(error => {
        console.error('Unexpected error:', error);
        showError();
    });
});