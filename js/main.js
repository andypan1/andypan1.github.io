//education
const acc = document.getElementsByClassName('contentbx');
for(i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle("active")
    });
};

//travel
const travel = document.querySelector('.carousel')
const arrowbts = document.querySelectorAll(".wrapper i");
const firstCardwidth = travel.querySelector(".tcard").offsetWidth;


arrowbts.forEach(btn => {
    btn.addEventListener("click", () => {
        travel.scrollLeft += btn.id === "left" ? -firstCardwidth : firstCardwidth;
    });
});

//projects
const navLinks = document.querySelectorAll('.slider-nav a');
const slider = document.querySelector('.slider');

navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const slideWidth = slider.offsetWidth;
        slider.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth',
        });
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

//navbar
document.querySelectorAll('.navbar-type a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});