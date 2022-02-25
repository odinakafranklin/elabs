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
let forms = document.getElementById("forms");
  let notice = document.getElementById('noticeMenu');
  let dropMenu = document.getElementById('dropMenu'); 
  let postals = document.getElementById('postals_dropMenu'); 

   // When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if (e.target == wMain) {
    console.log("clicked body")
    notice.style.visibility = "hidden";
    dropMenu.style.visibility = "hidden";
    postals.style.visibility = "hidden";
  }
}

let miniTabs = document.getElementsByClassName("miniTabsLinks");
for (let b = 0; b < miniTabs.length; b++) {
   let clickedBtn = miniTabs[b];
   clickedBtn.classList.remove("m_active");
   clickedBtn.addEventListener("click", function() {
    let current = document.getElementsByClassName("m_active");
    
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" m_active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " m_active";
 });
}
//code to switch tabs in front office -> clericals
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
  //hide dropdwn of postals after a menu is selected
  if(t === "postals_tab"){
    dropPostals();
  }
  //or if any other tab button is selected
  else if(t !== "postals_tab"){
    postals.style.visibility = "hidden";
  }
  //set selected node to display attribute to block
 selectedTab.setAttribute('style', 'display:block');
}
//code to switch tabs in admin -> new account
function switch_form(t){
 let selectedTab = document.getElementById(t);
//for each of the child node of the cleric element set display to none to hide them
  for(let a = 0; a < forms.children.length; a++){
    //if clicked button doesnot corresponds to the child node 
    //being displayed, hide the child node, else skip it
    if(forms.children[a].getAttribute('id') != selectedTab.getAttribute('id')){
       forms.children[a].style= 'display:none';
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

//code to toggle notification dropdown menu
const dropNotify = () => {
	if(notice.style.visibility == "hidden"){
    notice.style.visibility = "visible";
	}else{
		notice.style.visibility = "hidden";
	}
}

//code to toggle topnav dropdown menu
const drop = () => {

	if(dropMenu.style.visibility == "hidden"){
     dropMenu.style.visibility = "visible";
	}else{
		dropMenu.style.visibility = "hidden";
	}
}

//code to toggle postals dropdown menu
const dropPostals = () => {

	if(postals.style.visibility == "hidden"){
    postals.style.visibility = "visible";
	}else{
		postals.style.visibility = "hidden";
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
    wBtm.style.marginLeft = "3.2rem";
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
    wBtm.style.marginLeft = "12.65rem";
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

//code to show modal popup
const showModal = (a) => {
  document.getElementById(a).style.display='block';
}

//set clicked butn to active
let adminTabs = document.getElementsByClassName("redBoxBtn");
for (let b = 0; b < adminTabs.length; b++) {
   let clickedBtn = adminTabs[b];
   clickedBtn.classList.remove("ad_active");
   clickedBtn.addEventListener("click", function() {
    let current = document.getElementsByClassName("ad_active");
    
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" ad_active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " ad_active";
 });
}
//
function nxt(i){
  let nxtSib = i.nextElementSibling;
  i.setAttribute('style', 'animation-name: slideOut'); 
  i.style.animationDuration = '1s';
  i.style.position = 'relative';
  i.style.animationIterationCount = '1';
  i.style.animationFillMode = 'both';
  if(i.hasAttribute('style', 'animation-name: slideOut')){
    setTimeout(()=>{
    i.setAttribute('style', 'display: none');
    nxtSib.setAttribute('style', 'display: ');
    nxtSib.setAttribute('style', 'animation-name: slideIn'); 
    nxtSib.style.animationDirection = 'reverse';  
    nxtSib.style.animationDuration = '1s'; 
    nxtSib.style.position = 'relative';
    nxtSib.style.animationFillMode = 'both';
    },1000);
  };
}

function prv(i){
  let prvSib = i.previousElementSibling;
  i.setAttribute('style', 'animation-name: slideOut'); 
  i.style.animationDuration = '0.75s';
  i.style.position = 'relative';
  i.style.animationIterationCount = '1';
  i.style.animationFillMode = 'both';
  if(i.hasAttribute('style', 'animation-name: slideOut')){
    setTimeout(()=>{
    i.setAttribute('style', 'display: none');
    prvSib.setAttribute('style', 'display: ');
    prvSib.setAttribute('style', 'animation-name: slideIn'); 
    prvSib.style.animationDirection = 'reverse';  
    prvSib.style.animationDuration = '0.75s'; 
    prvSib.style.position = 'relative';
    prvSib.style.animationFillMode = 'both';
    },1000);
  };
}
