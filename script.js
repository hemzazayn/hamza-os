const dayDate = document.getElementById('todayDate');
const message = document.getElementById('greetingMessage');
const currentTime = document.getElementById('currentTime');
const currentDay = document.getElementById('currentDay');

const progressPercentage =
    document.getElementById('progressPercentage');

const dayProgressBar =
    document.getElementById('dayProgressBar');

const missionStatus =
    document.getElementById('missionStatus');

const completeMissionButton =
    document.getElementById('completeMissionButton');

function updateTime() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedHours =
        hours.toString().padStart(2, '0');

    const formattedMinutes =
        minutes.toString().padStart(2, '0');

    const formattedSeconds =
        seconds.toString().padStart(2, '0');

    currentTime.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function updateGreeting() {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 6 && currentHour < 12) {
        message.textContent =
            'Good Morning Hamza ☀️';
    } else if (currentHour >= 12 && currentHour < 18) {
        message.textContent =
            'Good Afternoon Hamza 🌤️';
    } else {
        message.textContent =
            'Good Evening Hamza 🌙';
    }
}

function updateCurrentDate() {
    const now = new Date();

    dayDate.textContent =
        now.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
}

function updateCurrentDay() {
    const now = new Date();

    currentDay.textContent =
        now.toLocaleDateString('en-US', {
            weekday: 'long'
        });
}

function updateDayProgress() {
    const now = new Date();

    const startOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
    );

    const elapsedTime = now - startOfDay;
    const totalDayTime = endOfDay - startOfDay;

    const progress =
        (elapsedTime / totalDayTime) * 100;

    const roundedProgress =
        Math.round(progress);

    progressPercentage.textContent =
        `${roundedProgress}%`;

    dayProgressBar.style.width =
        `${progress}%`;
}

function completeMission() {
    missionStatus.textContent =
        '✅ Mission Completed';

    completeMissionButton.textContent =
        'Completed';

    completeMissionButton.disabled = true;
}

completeMissionButton.addEventListener(
    'click',
    completeMission
);

updateTime();
updateGreeting();
updateCurrentDate();
updateCurrentDay();
updateDayProgress();

setInterval(updateTime, 1000);
setInterval(updateGreeting, 60000);
setInterval(updateCurrentDate, 60000);
setInterval(updateCurrentDay, 60000);
setInterval(updateDayProgress, 1000);