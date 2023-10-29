let hamburgerMenu = document.getElementById("hamburger");
let navBar = document.getElementById("NavBar");

hamburgerMenu.addEventListener("click", function () {
  console.log("active");
  navBar.classList.toggle("active-nav");
});

const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navBar.contains(e.target)) {
    navBar.classList.remove("active-nav");
  }
});

const tabs = document.querySelectorAll(".tab_btn");
const allContent = document.querySelectorAll(".tab_content");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
    });
    tab.classList.add("tab-active");

    allContent.forEach((content) => {
      content.classList.remove("active-content");
    });
    allContent[index].classList.add("active-content");
  });
});

AOS.init();

//Google Sheets Apps
const scriptURL =
  "https://script.google.com/macros/s/AKfycby1axCTjHMWIDI0-htLMl8L6s_LZg0Yzfnk9NgTnn81sfYYD-F6RYWe5v0HaQeTd3LvEQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      swal({
        icon: "success",
        title: "Pesan berhasil di kirim",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-KQXML9LL9M");
