document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const foodForm = document.getElementById('food-form');
    const suggestionsDiv = document.getElementById('suggestions');
    const trackingDiv = document.getElementById('tracking');
    const loginRegisterDiv = document.getElementById('login-register');

const dbUrl = ' https://my-json-server.typicode.com/peter-atonga/jsondb-test/users';

// Register user
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // create a new date object



    fetch(dbUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername, password: newPassword })
    })
    .then(response => response.json())
    .then(data => {
        alert('Registration successful! Please log in.');
        registerForm.reset();
    })
    .catch(error => console.error('Error:', error));
});

// Login user
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(dbUrl)
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                alert('Login successful!');
                loginRegisterDiv.style.display = 'none';
                trackingDiv.style.display = 'block';
            } else {
                alert('Invalid username or password.');
            }
        })
        .catch(error => console.error('Error:', error));
});

// Track food intake
foodForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const meal = document.getElementById('meal').value;
    const greens = document.getElementById('greens').checked;
    const water = document.getElementById('water').checked;

    let suggestions = `Meal: ${meal}\n`;
    suggestions += greens ? 'Greens: Yes\n' : 'Greens: No\n';
    suggestions += water ? 'Water: Yes\n' : 'Water: No\n';

           // create a new date object

    let today = new Date();
    let formattedDateTime = today.toISOString().substring(0, 16);
    dateTimeInput.value = formattedDateTime; 

    if (!greens) {
        suggestions += 'Suggestion: Include more greens in your diet.\n';
    }
    if (!water) {
        suggestions += 'Suggestion: Drink more water.\n';
    }

    suggestions += 'Suggestion: You need to take a lot of fruits.';

    suggestionsDiv.textContent = suggestions;
});
});