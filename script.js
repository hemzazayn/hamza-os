const button = document.getElementById('startButton');
const dayDate = document.getElementById('todayDate');
const message = document.getElementById('greetingMessage');
const currentTime = document.getElementById('currentTime');

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

function updateTime() {

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    currentTime.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

updateTime();

setInterval(updateTime, 1000);