
function loadHtml() {
    let newelem = document.getElementById("navbar");
    let text = '<style>* {margin: 0;}.topnav {background-color: #333;overflow: hidden;display: flex;}.topnav a {float: left;color: #f2f2f2;text-align: center;padding: 14px 16px;text-decoration: none;font-size: 17px;}.topnav a:hover {background-color: #ddd;color: black;}.topnav a.active {background-color: #04AA6D;color: white;} button.active {background-color: #04AA6D !important;color: white !important;} .dropdown {float: left;overflow: hidden;}.dropdown .dropbtn {font-size: 16px;border: none;outline: none;color: white;padding: 14px 16px;background-color: inherit;}.navbar a:hover, .dropdown:hover .dropbtn {background-color: grey;}.dropdown-content {display: none;position: absolute;background-color: #f9f9f9;min-width: 160px;box-shadow: 0px 8px 16px 0px white;z-index: 1;}.dropdown-content a {float: none;color: black;padding: 12px 16px;text-decoration: none;display: block;text-align: left;}.dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}</style><div class="topnav"><a id="Home" href="/index.html">Home</a><div class="dropdown"><button id="Jobs" class="dropbtn">Jobs<i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a href="/Jobs/softwareEngineer.html">Software Engineer</a><a href="/jobs/cyberSecurity.html">Cyber Security</a><a href="#">Game Developer</a></div></div><a id="learn" href="learn.html">Learn</a><a id="prepare" href="prepare.html">Prepare</a><a id="why" href="why.html">Why</a></div>'
    newelem.innerHTML = text;
}
function setActive(active){
    let element = document.getElementById(active);
    element.classList.add("active");
}
loadHtml()


