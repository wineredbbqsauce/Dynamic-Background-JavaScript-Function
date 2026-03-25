const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const VIBES = {
  0: "Caffeine",
  1: "Caffeine",
  2: "Caffeine",
  3: "Caffeine",
  4: "Monster",
  5: "Redbull",
  6: "Caffeine",
  7: "Maybe Caffeine",
  8: "Definitely Caffeine",
  9: "Still Caffeine",
  10: "Pre-Lunch Caffeine",
  11: "Lunch",
  12: "Post-Lunch Coma",
  13: "Coffee #3",
  14: "Staring at Screen",
  15: "Almost Done",
  16: "Freedom Loading",
  17: "Off the Clock",
  18: "Dinner",
  19: "Netflix",
  20: "Netflix",
  21: "Should Sleep",
  22: "Why are you awake",
  23: "Should probs sleep",
  24: "zzzzzzzzzzzzz...",
};

function pad(n) {
  return String(n).padStart(2, "0");
}

function tick() {
  const d = new Date();
  const h = d.getHours();
  document.getElementById("year").textContent = d.getFullYear();
  document.getElementById("month").textContent = pad(d.getMonth() + 1);
  document.getElementById("week").textContent = getWeekNumber(d);
  document.getElementById("date").textContent = pad(d.getDate());
  document.getElementById("day").textContent = DAYS[d.getDay()];
  document.getElementById("hour").textContent = pad(h);
  document.getElementById("minute").textContent = pad(d.getMinutes());
  document.getElementById("second").textContent = pad(d.getSeconds());
  document.getElementById("occupation").textContent = VIBES[h] ?? "Caffeine";
}

function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

tick();
setInterval(tick, 1000);
