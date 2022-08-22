const tellMeMore = document.querySelector(".a")

// //function startShowing() {
//     setTimeout(function(){
//         tellMeMore.style.opacity = 0.1;
//     }, 7400 );
    
//     setTimeout(function(){
//         tellMeMore.style.opacity = 0.2;
//     }, 7600 );
//     setTimeout(function(){
//         tellMeMore.style.opacity = 0.3;
//     }, 8000 );
//     setTimeout(function(){
//         tellMeMore.style.opacity = 0.4;
//     }, 8300 );
//     setTimeout(function(){
//         tellMeMore.style.opacity = 0.5;
//     }, 8500 );
//     setTimeout(function(){
//         tellMeMore.style.opacity = 0.6;
//     }, 8700 );
//     setTimeout(function(){
//         tellMeMore.style.opacity = 0.7;
//     }, 8900 );
//     setTimeout(function(){
//         tellMeMore.style.opacity = 0.8;
//     }, 9000 );
//     setTimeout(function(){
//         tellMeMore.style.opacity = 0.9;
//     }, 9100 );
//     setTimeout(function(){
//         tellMeMore.style.opacity = 1;
//         tellMeMore.style.pointerEvents = "all";
//     }, 9100 );
// }



const pages = document.querySelectorAll(".page");
const body = document.getElementById("body");


// tellMeMore.addEventListener("click", () => {
//     pages.forEach(page => {
//         if (page.getAttribute("id") == "landing") {
//             page.classList.remove("active");
//         }
//         else {
//             page.classList.add("active");
//         }
//     });
// });

const loader = document.querySelector(".loader");
const loaderWrapper = document.querySelector(".loader-wrapper");
const loaderInner = document.querySelector(".loader-inner");

window.addEventListener("load", () => {
    // loader.classList.add("hide");
    loaderWrapper.classList.add("hide");
    //startShowing();
    // loaderInner.classList.add("hide");
})



        