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
