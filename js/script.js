/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
let arrowUp = document.getElementById("arup");
let arrowDn = document.getElementById("ardn");
let wSyd = document.getElementById("webSyd");
let wMain = document.getElementById("webMain");
let wBtm = document.getElementById("webBtm");
let sidebar = document.getElementById("myNav");
var i, a;
let clerics = document.getElementById("clericals");

let miniTabs = document.getElementsByClassName("miniTabsLinks");
for (let b = 0; b < miniTabs.length; b++) {
 let clickedBtn = miniTabs[b];
 console.log(clickedBtn)
 clickedBtn.addEventListener('click', function() {
  clickedBtn.classList.add('active');
 });
}

function switch_tab(t){
 let selectedTab = document.getElementById(t);
//for each of the chile node of the cleric element set display to none to hide them
  for(let a = 0; a < clerics.children.length; a++){
    //if clicked button doesnot corresponds to the child node 
    //being displayed, hide the child node, else skip it
    if(clerics.children[a].getAttribute('id') != selectedTab.getAttribute('id')){
       clerics.children[a].style= 'display:none';
    }
  }
  //set selected node to display attribute to block
 selectedTab.setAttribute('style', 'display:block');
}

//code for sidebar dropdown menu
for (i = 0; i < dropdown.length; i++) {
  let clickedNode = dropdown[i];
  clickedNode.addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
    clickedNode.children[0].classList.remove('side-icon');
    clickedNode.children[1].classList.remove('navName_active');
    clickedNode.children[2].children[0].style.display = "block";
    clickedNode.children[2].children[1].style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  clickedNode.children[0].classList.add('side-icon');
  clickedNode.children[1].classList.add('navName_active');
  clickedNode.children[2].children[0].style.display = "none";
  clickedNode.children[2].children[1].style.display = "block";
  }
  });
}

//code to toggle topnav dropdown menu
const drop = () => {
  let dropMenu = document.getElementById('dropMenu');
	if(dropMenu.style.visibility == "hidden"){
     dropMenu.style.visibility = "visible";
	}else{
		dropMenu.style.visibility = "hidden";
	}
}
//code to hide or show sidebar in mobile view
function toggleSideBar() {
  //check if styl attribute is present and display is set to block
  if(sidebar.hasAttribute("style") && sidebar.getAttribute('style') == 'display: block'){
    //if present, set display to none
    sidebar.setAttribute('style', 'display: none');
  }else{
    //else if absent, set style display to block
    sidebar.setAttribute('style', 'display: block')
  } 
}

//javascript to toggle sidebar between just icons and icons with text
function toggleNav() { 
  if((wSyd.style.width != "2.65rem") && (window.innerWidth > "600") ){
    wSyd.style.width = "2.65rem";
    wMain.style.marginLeft = "3.2rem";
    wBtm.style.left = "3.2rem";
    let sideNames = document.getElementsByClassName("navName");
      for (let j = 0; j < sideNames.length; j++){
        sideNames[j].style.display = "none";
      }
    let sideArrows = document.getElementsByClassName("arow");
      for (let k = 0; k < sideNames.length; k++){
        sideArrows[k].style.display = "none";
      } 
    }else{
    wSyd.style.width = "12rem";
    wMain.style.marginLeft = "12.65rem";
    wBtm.style.left = "12.65rem";
    let sideNames = document.getElementsByClassName("navName");
      for (let j = 0; j < sideNames.length; j++){
        setTimeout(()=>{
        sideNames[j].style.display = "inline-block";
        },500);
      }
    let sideArrows = document.getElementsByClassName("arow");
      for (let k = 0; k < sideNames.length; k++){
        setTimeout(()=>{
        sideArrows[k].style.display = "inline-block";
      },500);
      }
    } 
      
}

//script to rearrange page elements on screen size change
const reshape = () =>{
  if(window.innerWidth <= 600){
  sidebar.style.display = "none";
  wSyd.style.width = "0";
  wMain.style.margin = "10px";
  wBtm.style.left = "0";
  let sideNames = document.getElementsByClassName("navName");
    for (let j = 0; j < sideNames.length; j++){
      setTimeout(()=>{
      sideNames[j].style.display = "inline-block";
      },500);
    }
  let sideArrows = document.getElementsByClassName("arow");
    for (let k = 0; k < sideNames.length; k++){
      setTimeout(()=>{
      sideArrows[k].style.display = "inline-block";
     },500);
    }
   }else{
    sidebar.style.display = "block";
    wSyd.style.width = "12rem";
    wMain.style.marginLeft = "12.65rem";
    wMain.style.margin = "";
    wBtm.style.left = "12.65rem";
    let sideNames = document.getElementsByClassName("navName");
      for (let j = 0; j < sideNames.length; j++){
        setTimeout(()=>{
        sideNames[j].style.display = "inline-block";
        },500);
      }
    let sideArrows = document.getElementsByClassName("arow");
      for (let k = 0; k < sideNames.length; k++){
        setTimeout(()=>{
        sideArrows[k].style.display = "inline-block";
      },500);
      }
   }
 }

 // Get the modal
var modal = document.getElementById('visitors_popup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}