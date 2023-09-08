//tabs project
function openProject(evt, projectName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("project-nav");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeNav", "");
  }
  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.className += " activeNav";
}
document.getElementById("default").click();
<<<<<<< HEAD
=======

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
document.getElementById("chandani").addEventListener("click", function () {
  var websiteURL = "https://batikchandani.com";
  window.open(websiteURL, "_blank");
});
document.getElementById("vandel").addEventListener("click", function () {
  var websiteURL = "https://griyavandel.com";
  window.open(websiteURL, "_blank");
});
document.getElementById("btn-project").addEventListener("click", function () {
  var websiteURL = "../page/project.html";
  window.open(websiteURL, "_blank");
});
>>>>>>> e51f4b0f6a6cda0fb222963b29af9ea87f64e42f
