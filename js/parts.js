let headerDiv = document.getElementById('headDiv');
let sideBarDiv = document.getElementById('myNav');
let footerDiv = document.getElementById('webBtm')
const header = () =>{
  let headerAnchor = document.createElement('span');
      headerAnchor.innerHTML =  `
      <!--topnav for web-->
      <span class="web_nav"> 
      <div class="sub-side-bar">
        <img class="logo" src="logo.png" alt="logo"/>
         <a class="web_btn" href="#" style="cursor:pointer" onclick="toggleNav()">
           <i class="fa fa-fw fa-bars nav-icon "></i> <b class="lab-name">Your Laboratory Name</b>
         </a>
      </div>
    </span>
     
    <!--topnav for mobile-->
      <span class="sub-side-bar mobile_nav">
         <img class="logo" src="logo.png" alt="logo"/>
         <b class="lab-name">Your Laboratory Name</b>
      </span>
     
      <div class="sub-top-nav">
        <a onclick="dropNotify()" href="#">
          <i class="fa fa-fw fa-bell nav-icon"></i><sup class="notify">1</sup> 
        </a>
        <!--notification dropdown-->
        <div  id="noticeMenu" style="visibility:hidden;" class="noticeMenu">
         
          <div class="noticeMenuitem">
            <span class="drop-icon"><i class="fa fa-fw fa-user "></i></span> 
            <a href="#"><b>User Record Update</b></a><br/>
            <small class="info">new user created</small>
          </div>
    
          <div class="noticeMenuitem">
            <span class="drop-icon"><i class="fa fa-fw fa-cogs"></i></span> 
            <a href="#"><b>Help & Support</b></a><br/>
            <small class="info">Contact & FAC</small>
          </div>
    
          <div class="noticeMenuitem"> 
            <span class="drop-icon"><i class="fa fa-fw fa-microphone"></i></span> 
            <a href="#"><b>Complain</b></a><br/>
            <small class="info">Report an Issue</small>
          </div>
        
        </div>
    
        <a href="#" class="user-name">
          <i class="fa fa-fw fa-user-circle nav-icon"></i> <b >David Godbless</b>
        </a>
        <a href="#">
           <span class="web_btn" onclick="drop()"><i class="fa fa-fw fa-arrow-down"></i></span>
        </a>
        <a href="#">
           <span class="mobile_btn"  onclick="drop()"><i class="fa fa-fw fa-bars"></i></span>
        </a>
      </div>
    
      <!--topnav links-->
        <div id="dropMenu" style="visibility: hidden;" class="menu-drop">
         
          <div class="menu-drop-item">
            <span class="drop-icon"><i class="fa fa-fw fa-user "></i></span> 
            <a href="#"><b>Profile</b></a><br/>
            <small class="info">Update & Manage</small>
          </div>
    
          <div class="menu-drop-item">
            <span class="drop-icon"><i class="fa fa-fw fa-cogs"></i></span> 
            <a href="#"><b>Help & Support</b></a><br/>
            <small class="info">Contact & FAC</small>
          </div>
    
          <div class="menu-drop-item"> 
            <span class="drop-icon"><i class="fa fa-fw fa-microphone"></i></span> 
            <a href="#"><b>Complain</b></a><br/>
            <small class="info">Report an Issue</small>
          </div>
            
          <div class="menu-drop-item">
            <button class="logout-btn">
              <i class="fa fa-fw fa-sign-out-alt"></i> <b>Logout</b>
            </button>
          </div>
    
        </div>`;
headerDiv.appendChild(headerAnchor);
}

const sideBar = () =>{
    let sideBarAnchor = document.createElement('span');
    sideBarAnchor.innerHTML =  `<div id="webSyd"  class="sidebar  overlay-content">
    <div class="vertical-menu" >
      <!--sidebar link-->
      <a class=" dropdown-btn" href="javascript:void(0)">
        <i class="fa fa-fw fa-building sydIcon"></i> <span class="navName">Front Office</span>
        <span class="arrow">
          <i class="fa fa-fw fa-arrow-down arow"></i>
          <i style="display: none;" class="fa fa-fw fa-arrow-up"></i>
        </span>
      </a>
      <!--sidebar dropdown menu-->
      <div class="dropdown-container">
        <a href="javascript:void(0)">Option 1</a>
        <a href="javascript:void(0)">Option 2</a>
        <a href="javascript:void(0)">Option 3</a>
      </div>
  
      <!--sidebar link-->
      <a class=" dropdown-btn" href="javascript:void(0)">
        <i class="fa fa-fw fa-syringe sydIcon"></i> <span class="navName">Phlebotomy</span>
        <span class="arrow">
          <i class="fa fa-fw fa-arrow-down arow"></i>
          <i style="display: none;" class="fa fa-fw fa-arrow-up"></i>
        </span>
      </a>
      <!--sidebar dropdown menu-->
      <div class="dropdown-container">
        <a href="javascript:void(0)">Option 1</a>
        <a href="javascript:void(0)">Option 2</a>
        <a href="javascript:void(0)">Option 3</a>
      </div>
  
      <!--sidebar link-->
      <a class=" dropdown-btn" href="javascript:void(0)">
        <i class="fa fa-fw fa-flask sydIcon"></i> <span class="navName">Laboratory</span>
        <span class="arrow">
          <i class="fa fa-fw fa-arrow-down arow"></i>
          <i style="display: none;" class="fa fa-fw fa-arrow-up"></i>
        </span>
      </a>
      <!--sidebar dropdown menu-->
      <div class="dropdown-container">
        <a href="javascript:void(0)">Option 1</a>
        <a href="javascript:void(0)">Option 2</a>
        <a href="javascript:void(0)">Option 3</a>
      </div>
  
      <!--sidebar link-->
      <a class=" dropdown-btn" href="javascript:void(0)">
        <i class="fa fa-fw fa-book-open sydIcon"></i> <span class="navName">Admin</span>
        <span class="arrow">
          <i class="fa fa-fw fa-arrow-down arow"></i>
          <i style="display: none;" class="fa fa-fw fa-arrow-up"></i>
        </span>
      </a>
      <!--sidebar dropdown menu-->
      <div class="dropdown-container">
        <a href="javascript:void(0)">Option 1</a>
        <a href="javascript:void(0)">Option 2</a>
        <a href="javascript:void(0)">Option 3</a>
      </div>
  
      <!--sidebar link-->
      <a class=" dropdown-btn" href="javascript:void(0)">
        <i class="fa fa-fw fa-motorcycle sydIcon"></i> <span class="navName">Dispatch</span>
        <span class="arrow">
          <i class="fa fa-fw fa-arrow-down arow"></i>
          <i style="display: none;" class="fa fa-fw fa-arrow-up"></i>
        </span>
      </a>
      <!--sidebar dropdown menu-->
      <div class="dropdown-container">
        <a href="javascript:void(0)">Option 1</a>
        <a href="javascript:void(0)">Option 2</a>
        <a href="javascript:void(0)">Option 3</a>
      </div>
  
      <!--sidebar link-->
      <a class=" dropdown-btn" href="javascript:void(0)">
        <i class="fa fa-fw fa-microscope sydIcon"></i> <span class="navName">Analyzers</span>
        <span class="arrow">
          <i class="fa fa-fw fa-arrow-down arow"></i>
          <i style="display: none;" class="fa fa-fw fa-arrow-up"></i>
        </span>
      </a>
      <!--sidebar dropdown menu-->
      <div class="dropdown-container">
        <a href="javascript:void(0)">Option 1</a>
        <a href="javascript:void(0)">Option 2</a>
        <a href="javascript:void(0)">Option 3</a>
      </div>
  
      <!--sidebar link-->
      <a class=" dropdown-btn" href="javascript:void(0)">
        <i class="fa fa-fw fa-check-double sydIcon"></i> <span class="navName">Qc</span>
        <span class="arrow">
          <i class="fa fa-fw fa-arrow-down arow"></i>
          <i style="display: none;" class="fa fa-fw fa-arrow-up"></i>
        </span>
      </a>
      <!--sidebar dropdown menu-->
      <div class="dropdown-container">
        <a href="javascript:void(0)">Option 1</a>
        <a href="javascript:void(0)">Option 2</a>
        <a href="javascript:void(0)">Option 3</a>
      </div>
      
      <!--sidebar link-->
      <a class=" dropdown-btn" href="javascript:void(0)">
        <i class="fa fa-fw fa-money-bill sydIcon"></i> <span class="navName">Account</span>
        <span class="arrow">
          <i class="fa fa-fw fa-arrow-down arow"></i>
          <i style="display: none;" class="fa fa-fw fa-arrow-up"></i>
        </span>
      </a>
      <!--sidebar dropdown menu-->
      <div class="dropdown-container">
        <a href="javascript:void(0)">Option 1</a>
        <a href="javascript:void(0)">Option 2</a>
        <a href="javascript:void(0)">Option 3</a>
      </div>
      
      <!--sidebar link-->
      <a class="dropdown-btn" href="#contact">
        <i class="fa fa-fw fa-archive sydIcon"></i> <span class="navName"> Inventory</span>
         <span class="arrow">
           <i class="fa fa-fw fa-arrow-down arow"></i>
           <i style="display: none;" class="fa fa-fw fa-arrow-up"></i>
         </span>
      </a>
      <!--sidebar dropdown menu-->
      <div class="dropdown-container">
        <a href="javascript:void(0)">Option 1</a>
        <a href="javascript:void(0)">Option 2</a>
        <a href="javascript:void(0)">Option 3</a>
      </div>
        
    </div>
   </div>
`;
sideBarDiv.appendChild(sideBarAnchor);
}

const footer = () =>{
  let footerAnchor = document.createElement('span');
  footerAnchor.innerHTML =  `<small>
  <!--info text-->
  <div class="btm-info">
      e-Lab LIS by Netwalkers NG (c) 2022. All rights reserved
  </div>
  <!--footer links-->
  <div class="btm-link">
  <a href="#home" class="">About Us</a> |
  <a href="#news">Contact Us</a> |
  <a href="#contact">Terms of Service</a> |
  <a href="#contact">Privacy Policy</a>
  </div>
 </small>
`;
  footerDiv.appendChild(footerAnchor);
}


header();
sideBar();
footer();