window.addEventListener("scroll", () => {
  let nav = document.getElementById("nav");
  let buttonTop = document.getElementById("buttonTop");
  nav.classList.toggle("active", scrollY > 0);
  buttonTop.classList.toggle("active", scrollY > 100);
});

let section = document.querySelectorAll(".section");
let navLink = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top > offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active-nav");
        document
          .querySelector(`header nav ul li a[href*=` + id + `]`)
          .classList.add("active-nav");
      });
    }
  });
};

var delay = 1;
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, delay);
});

document.getElementById("buttonTop").addEventListener("click", function () {
  let topContent = document.getElementById("Top");
  window.scrollTo({
    top: topContent,
    behavior: "smooth",
  });
});

// Button Config
document.getElementById("glatz").addEventListener("click", function () {
  var websiteURL = "https://glatzauto.com";
  window.open(websiteURL, "_blank");
});
document.getElementById("dai").addEventListener("click", function () {
  var websiteURL = "https://digitalakademiindonesia.com";
  window.open(websiteURL, "_blank");
});
document.getElementById("madani").addEventListener("click", function () {
  var websiteURL = "https://madaniplast.com";
  window.open(websiteURL, "_blank");
});
document.getElementById("ajak").addEventListener("click", function () {
  var websiteURL = "https://ajakonline.com/kelasmagang";
  window.open(websiteURL, "_blank");
});
document.getElementById("btn-project").addEventListener("click", function () {
  var websiteURL = "../page/project.html";
  window.open(websiteURL, "_blank");
});
//Google Sheets Apps
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyJdfxfpq9P18KPWJcxKl4cmnybM_UXohnEadcAXwZK3iG6IUVCClLJus3099IcCHgu/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      swal({
        icon: "success",
        title: "Your message was sent successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
