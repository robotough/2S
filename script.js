const launchDate = new Date(2017, 7, 1);
const today = new Date();

const diffTime = today - launchDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("dayCounter").textContent = diffDays;
