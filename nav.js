
function loadHtml() {
    let newelem = document.getElementById("navbar");
    let text = '<div class="topnav">' + 
        '<a id="Home" href="index.html">Home</a>' +
        '<div class="dropdown"><a id="Jobs" href="jobs.html" class="dropbtn">Jobs</a>' +
            '<div class="dropdown-content"><a href="softwareEngineer.html">Software Engineer</a>' +
            '<a href="cyberSecuritySpecialist.html">Cyber Security</a>' +
            '<a href="gameDeveloper.html">Game Developer</a>' +
            '<a href="mobileAppDeveloper.html">Mobile App Developer</a>' +
            '</div>' +
        '</div>' +
        '<a id="Learn" href="learn.html">Learn</a>' +
        '<a id="Prepare" href="prepare.html">Prepare</a>' +
        '<a id="Why" href="why.html">Why</a>' +
        '<a id="csDescription" href="csDescription.html">CS Description</a>' +
    '</div>'
    newelem.innerHTML = text;
}
function setActive(active){
    let element = document.getElementById(active);
    element.classList.add("active");
}
loadHtml()


