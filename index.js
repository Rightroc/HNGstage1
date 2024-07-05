const currentDay = document.querySelector('[data-testid="currentDay"]');
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');

const updateDate = () => {
  const today = new Date();
  currentDay.textContent = today.toLocaleDateString('en-US', { weekday: 'long' });
  currentTimeUTC.textContent = today.toLocaleTimeString('en-US', { timeZone: 'UTC' });
};

updateDate();
setInterval(updateDate, 60000); // Update time every
