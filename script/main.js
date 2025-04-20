/*==========  toggle icon navbar  ========*/


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


/*==========  scroll section active link  ========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

/*==========  sticky navbar  ========*/


let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


/*==========  remove toggle icon and remove  ========*/

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};




/*==========  scroll reveal  ========*/

ScrollReveal({
    distance: '80px', 
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact from', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==========  typed js  ========*/

const typed = new Typed('.multiple-text', {
    strings: ['Fronted Developer', 'Web Designer', 'Influencer' ],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*==========  Download Resume Button   ========*/
const downloadBtn = document.querySelector(".btn");
// Google drive link
const fileLink = "https://drive.google.com/file/d/1Z_zx-Yvk9Cs8CiEzZmmgtNzYUFs6wruM/view?usp=sharing";

const initTimer = () => {

// if download contains disable-timer cllass then only if conditional code will run
   if(downloadBtn.classList.contains("disable-timer")) {
    return(location.href = fileLink);
   }

// getting data-timer attribute from HTML
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;

//creating initCouter variable with setInterval function
const initCounter = setInterval(() => {
    if(timer > 0){
    timer--;
    return downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;       
    }

    clearInterval(initCounter);
    location.href = fileLink;
    downloadBtn.textContent ="Your file is downloading...";


    setTimeout(() => {
        downloadBtn.classList.replace("timer", "disable-timer");
        downloadBtn.innerHTML =`<a href="#" class="btn" data-timer="5">Download Again CV/Resume</a>`;
    },2000);

}, 1000); //1000 milliseconds = 1s

};

downloadBtn.addEventListener("click", initTimer);