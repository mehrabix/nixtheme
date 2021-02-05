if(document.querySelector('.blog-post-title')){
    document.querySelector('.navbar').style.backgroundColor = "#fff";
    document.querySelector('.navbar').style.top = "-10px";
    document.querySelector('#context').style.margin = "70px 0 40px 0";
}

if(document.querySelector('.card-custom') || (document.querySelector('.blog-post-title'))){

    document.querySelector('.header').style.height = "0";
    document.querySelector('.header').style.minHeight = "0";
    document.querySelector('.navbar-toggler-custome').style.color = "#000";
    document.querySelector('.navbar').style.position = "fixed";
    document.querySelector('.menu__inner').style.position = "fixed";
}
document.querySelector("#req_a_call-side").addEventListener("click", function () {

    document.querySelector('#request-call').style.display = "block";


});

document.querySelector('.hallow').addEventListener("click",function(){

    document.querySelector("#menuIn").style.width = "0";
    document.querySelector('.sidebar-links').style.visibility = "hidden";
    document.getElementById("menuIn").style.width = "0";
    document.querySelector('.navbar-toggler-custome').style.display = "block";
    document.querySelector('.navbar-toggler-custome-close').style.display = "none";
    document.querySelector('.hallow').style.display = "none";


});
document.querySelector('#close-win-call').addEventListener("click", function () {
    document.querySelector('#request-call').style.display = "none";
});
document.querySelector('.menu-btn--secondary--close').addEventListener("click", function () {
    document.querySelector('#request-call').style.display = "none";
});
document.querySelector('#get-in-touch-side').addEventListener("click",function(){
    document.querySelector('.nav-link-custome-side').style.visibility = "hidden";
    document.querySelector("#menuIn").style.width = "0";
    document.querySelector('.sidebar-links').style.visibility = "hidden";
    document.getElementById("menuIn").style.width = "0";
    document.querySelector('.navbar-toggler-custome').style.display = "block";
    document.querySelector('.navbar-toggler-custome-close').style.display = "none";
    document.querySelector('.hallow').style.display = "none";
});


window.addEventListener("scroll", (event) => {
if(document.querySelector('.card-custom') || (document.querySelector('.blog-post-title'))){

}
else{
    if (this.scrollY > 700) {
        document.querySelector(".navbar").style.position = "fixed";
        document.querySelector(".navbar").style.margin = "0";
        document.querySelector(".navbar-toggler-custome").style.color = "#3a3a3a";
        document.querySelector(".navbar").style.boxShadow = "0 0 21px 0 rgba(0, 0, 0, .09)";
        document.querySelector("#menuIn").style.position = "fixed";

    } else {
        document.querySelector(".navbar").style.boxShadow = "none";
        document.querySelector(".navbar").style.backgroundColor = "transparent";
        document.querySelector(".navbar").style.zIndex = "40";
        document.querySelector(".navbar").style.position = "relative";
        document.querySelector(".navbar-toggler-custome").style.color = "#fff";
        document.querySelector("#menuIn").style.position = "absolute";

    }
}
});

document.querySelector("#req_a_call").addEventListener("click", function () {

    document.querySelector('#request-call').style.display = "block";


});

document.querySelector("#tabs-list-1").addEventListener("click", function (event) {


    if (document.getElementById("tabs-content-first").style.display === "none") {


        $('#tabs-content-first').fadeOut(700).fadeIn(700);
    }
    document.querySelector("#tabs-content-sec").style.display = "none";

    document.querySelector("#tabs-list-1").style.borderBottom = "4px solid #00ffd9";


    document.querySelector("#tabs-list-2").style.borderBottom = "none";
    event.preventDefault();


});

document.querySelector("#tabs-list-2").addEventListener("click", function (event) {


    if (document.getElementById("tabs-content-sec").style.display === "none") {


        $('#tabs-content-sec').fadeOut(700).fadeIn(700);

    }


    document.querySelector("#tabs-content-first").style.display = "none";
    document.querySelector("#tabs-list-2").style.borderBottom = "4px solid #00ffd9";
    document.querySelector("#tabs-list-1").style.borderBottom = "none";


    event.preventDefault();

});






function openNav(){
    document.querySelector('.nav-link-custome-side').style.visibility = "visible";
    document.querySelector("#menuIn").style.width = "100%";
    document.querySelector('.sidebar-links').style.visibility = "visible";
    document.querySelector('.navbar-toggler-custome-close').style.color = "#000";
    document.querySelector('.navbar-toggler-custome').style.display = "none";
    document.querySelector('.navbar-toggler-custome-close').style.display = "block";
    document.querySelector('.navbar').style.display = "block";
    document.querySelector('.hallow').style.display = "block";
    document.querySelector('.sidebar-links').style.display = "block";

}
function closeNav(){

    document.querySelector('.nav-link-custome-side').style.visibility = "hidden";
    document.querySelector('.sidebar-links').style.visibility = "hidden";
    document.querySelector("#menuIn").style.width = "0";
    document.getElementById("menuIn").style.width = "0";
    document.querySelector('.navbar-toggler-custome').style.display = "block";
    document.querySelector('.navbar-toggler-custome-close').style.display = "none";
    document.querySelector('.hallow').style.display = "none";


}



document.querySelector('#get-in-touch').addEventListener("click", function(){
    document.querySelector("#menuIn").style.width = "0";
    document.querySelector('.sidebar-links').style.visibility = "hidden";
    document.getElementById("menuIn").style.width = "0";
    document.querySelector('.navbar-toggler-custome').style.display = "block";
    document.querySelector('.navbar-toggler-custome-close').style.display = "none";
    document.querySelector('.hallow').style.display = "none";
});


