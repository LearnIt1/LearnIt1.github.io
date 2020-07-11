// grabbing page divs

const about_div = document.getElementById("about");
const howDoesItWork_div = document.getElementById("how-does-it-work");
const joinUs_div = document.getElementById("join-us");

const pages = [];
document.querySelectorAll(".page").forEach(page => {
    pages.push(page);
    page.setAttribute("dir", "rtl")
});

// some useful functions

function makeActive(element) {
    element.classList.add("active");
};

function removeActive(element) {
    element.classList.remove("active");
};

// toggeling which page is currently active

function togglePage(event) {
    let currentNavLink = event.target.getAttribute("data-target");

    pages.forEach(page => {
        if (currentNavLink === page.getAttribute("id")) {
            makeActive(page);
        }
        else {
            removeActive(page);
        }
    })
};


// setting the function as event listeners within all the nav-links

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", togglePage);
});


// back to top button

const aboutBackToTop = document.querySelector(".back-to-top");
const howDoesItWorkBackToTop = document.querySelector(".back-to-top1");

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 200) {
        aboutBackToTop.classList.add("active")
    } else {
        aboutBackToTop.classList.remove("active");
    }
})

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 200) {
        howDoesItWorkBackToTop.classList.add("active")
    } else {
        howDoesItWorkBackToTop.classList.remove("active");
    }
})

// refund policy pop-up info

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// landing page

const header = document.getElementById("header");
const landingPage = document.getElementById("landing");


//  faq stuff

const addButtons = document.querySelectorAll(".faq-icon.add")
const removeButtons = document.querySelectorAll(".faq-icon.remove");
const faqAnswers = document.querySelectorAll(".answer")

function showAnswer(event) {
  let questionNumber = event.target.classList[2][1];   // "1"
  let answerToShow = faqAnswers[questionNumber-1];
  answerToShow.classList.add("show-answer");
  event.target.style.display = "none";
  let removeButtonToShow = removeButtons[questionNumber-1];
  removeButtonToShow.style.display = "block";
}

function hideAnswer(event) {
  let questionNumber = event.target.classList[2][1];
  let answerToHide = faqAnswers[questionNumber-1];
  answerToHide.classList.remove("show-answer")
  event.target.style.display = "none";
  let addButtonToShow = addButtons[questionNumber-1];
  addButtonToShow.style.display = "block";
  
}

addButtons.forEach(button => {
    button.addEventListener("click", showAnswer);
});

removeButtons.forEach(button => {
  button.addEventListener("click", hideAnswer);
});
// removeQ1.addEventListener("click", () => {
//   answerQ1.classList.add('hide-answer');
//   removeQ1.style.display = "none";
//   addButtons[0].style.display = "block";
// })




