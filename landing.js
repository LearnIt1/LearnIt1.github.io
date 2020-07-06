const tellMeMore = document.querySelector(".a")
setTimeout(function(){
    tellMeMore.style.opacity = 0.1;
}, 7300 );

setTimeout(function(){
    tellMeMore.style.opacity = 0.2;
}, 7500 );
setTimeout(function(){
    tellMeMore.style.opacity = 0.3;
}, 7700 );
setTimeout(function(){
    tellMeMore.style.opacity = 0.4;
}, 7800 );
setTimeout(function(){
    tellMeMore.style.opacity = 0.5;
}, 7900 );
setTimeout(function(){
    tellMeMore.style.opacity = 0.6;
}, 8100 );
setTimeout(function(){
    tellMeMore.style.opacity = 0.7;
}, 8300 );
setTimeout(function(){
    tellMeMore.style.opacity = 0.8;
}, 8500 );
setTimeout(function(){
    tellMeMore.style.opacity = 0.9;
}, 8700 );
setTimeout(function(){
    tellMeMore.style.opacity = 1;
    tellMeMore.style.pointerEvents = "all";
}, 8900 );


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
    // loaderInner.classList.add("hide");
})



        