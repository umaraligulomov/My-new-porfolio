const elLoader = document.querySelector(".preloader");
const elToTop = document.querySelector(".back-to-top");
const elCursor = document.querySelector(".cursor");
const elCursorInner = document.querySelector(".cursor2");
const navbar = document.querySelector(".header");
const navbarList = document.querySelector(".sitenav");
const btn = document.querySelector(".nav-btn");

// PRELOADER
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    elLoader.style.opacity = "0";
    elLoader.style.pointerEvents = "none";
  }, 1000);
});

// TO TOP SCROLL
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    elToTop.classList.add("active");
  } else {
    elToTop.classList.remove("active");
  }
});

// NAVBAR
window.addEventListener("scroll", function () {
  navbar.classList.toggle("navbar-scroll", window.scrollY > 10);
});

// TYPING ANIMATION
var typed = new Typed("#element", {
  // Waits 1000ms after typing "First"
  strings: [
    "FrontEnd Developer",
    "Freelancer",
    "Graphic designer",
    "SMM menejer",
    "Bot maker",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

const navAnim = () => {
  btn.addEventListener("click", () => {
    navbarList.classList.toggle("nav-active");
    btn.classList.toggle("toggle");
  });
};

navAnim();


document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    var formData = new FormData(this);

    // Convert formData to JSON
    var jsonData = {};
    formData.forEach(function (value, key) {
      jsonData[key] = value;
    });

    // Send data to Telegram bot
    var telegramBotUrl =
      "https://api.telegram.org/bot6728511440:AAH-IPzSXMb2RzAHhPQB5CQOx5MUUemw98I/sendMessage";
    var telegramBotToken = "6728511440:AAH-IPzSXMb2RzAHhPQB5CQOx5MUUemw98I";
    var chatId = "930892735";
    var text =
      "Name: " +
      jsonData.name +
      "\nSurname: " +
      jsonData.surname +
      "\nEmail: " +
      jsonData.email +
      "\nPhone Number: " +
      jsonData.phone +
      "\nAddress: " +
      jsonData.address +
      "\nMessage: " +
      jsonData.message;
    var telegramRequestUrl =
      telegramBotUrl +
      "?chat_id=" +
      chatId +
      "&text=" +
      encodeURIComponent(text);

    fetch(telegramRequestUrl, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Your message has been sent successfully!");
        document.getElementById("contactForm").reset(); // Clear form after successful submission
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        alert("Oops! Something went wrong. Please try again later.");
      });
  });


