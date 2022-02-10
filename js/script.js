/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
let arrowUp = document.getElementById("arup");
let arrowDn = document.getElementById("ardn");
var i;
let navName = document.getElementById('navName');
var sideIcon = document.getElementById("sydIcon");

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  arrowDn.style.display = "block";
  arrowUp.style.display = "none";
  navName.classList.toggle('navName_active');
  sideIcon.classList.toggle('side-icon');
  } else {
  dropdownContent.style.display = "block";
  arrowDn.style.display = "none";
  arrowUp.style.display = "block";
  navName.classList.toggle('navName_active');
  sideIcon.classList.toggle('side-icon');
  }
  });
}

const drop = () => {
  let dropMenu = document.getElementById('dropMenu');
	if(dropMenu.style.visibility == "hidden"){
     dropMenu.style.visibility = "visible";
	}else{
		dropMenu.style.visibility = "hidden";
	}
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}