window.onscroll = OnScroll;


function backToTop(){
    document.documentElement.scrollTop = 0;
}

function OnScroll(){
    var back_to_top_button = document.getElementById("back-to-top");
    if(back_to_top_button==null) return;
    back_to_top_button.style.opacity = document.documentElement.scrollTop / 200;
}

function HideSidebar() {
    console.log("clicked");
    var sidebar = document.getElementById("left-navi");
    sidebar.style.animation = "slideOutLeft";
    sidebar.style.animationDuration = "0.5s"
    var change_animate = setInterval(() => {
        sidebar.style.display="None";
        var showButton = document.getElementById("left-show-navi")
        showButton.style.display = "block";
        showButton.style.animation = "slideInLeft";
        showButton.style.animationDuration = "0.5s";
        clearInterval(change_animate);
    }, 450);
}

function ShowSidebar(){
    console.log("showsidebar");
    var showButton = document.getElementById("left-show-navi")
    showButton.style.animation = "slideOutLeft";
    showButton.style.animationDuration = "0.2s";
    var change_animate = setInterval(() => {
        showButton.style.display = "None";
        var sidebar = document.getElementById("left-navi");
        sidebar.style.display = "block";
        sidebar.style.animation = "slideInLeft";
        sidebar.style.animationDuration = "0.5s";
        clearInterval(change_animate);
    }, 150);
}