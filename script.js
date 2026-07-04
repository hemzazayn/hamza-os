const button = document.getElementById('startButton');
const dayDate = document.getElementById('todayDate');
const message = document.getElementById('greetingMessage');

const today = new Date();
const currentHour = today.getHours();

dayDate.textContent = today.toLocaleDateString();

button.addEventListener('click', function() {
    if (currentHour >= 6 && currentHour < 12) {
        message.textContent = 'Good Morning Hamza ☀️';
    } 
    else if (currentHour >= 12 && currentHour < 18) {
        message.textContent = 'Good Afternoon Hamza 🌤️';
    }
    else {
        message.textContent = 'Good Evening Hamza 🌙';
    }
});