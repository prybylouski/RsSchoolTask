// DOM Elements
const time = document.getElementById("time"),
  dayOfMonth = document.getElementById("date"),
  greeting = document.getElementById("greeting"),
  yourName = document.getElementById("name"),
  focusOnDay = document.getElementById("focus");

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    year = today.getFullYear(),
    day = today.getDate(),
    month = today.getMonth(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}  ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
  // Output Day
  dayOfMonth.innerHTML = `<p>What Is Your Focus For Today (${addZero(
    day
  )}<span>.</span>${addZero(month + 1)}<span>.</span>${year}) ?</p>`;
}

// Add Zero
let addZero = (n) => (parseInt(n, 10) < 10 ? "0" : "") + n;

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 6) {
    // Night
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = "Good Night";
    document.body.style.color = "white";
  } else if (hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = "Good Afternoon:";
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    yourName.getAttribute("data-placeholder");
  } else {
    yourName.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      yourName.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focusOnDay.getAttribute("data-placeholder");
  } else {
    focusOnDay.textContent = localStorage.getItem("focus");
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focusOnDay.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

// yourName.addEventListener("focus", function () {    // Clear when you write new text
//   yourName.textContent = "";
// });

yourName.addEventListener("keypress", setName);
yourName.addEventListener("blur", setName);

// focusOnDay.addEventListener("focus", function () {    // Clear when you write new text
//   focusOnDay.textContent = "-";
// });

focusOnDay.addEventListener("keypress", setFocus);
focusOnDay.addEventListener("blur", setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
