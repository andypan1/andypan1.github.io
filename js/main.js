//skills
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelectorAll('.group');
        content.forEach(c => {
            c.addEventListener("click", () => {
                c.classList.toggle("active");
            });
        });
});
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

//navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const offset = 150; // Adjust this value as needed

        const target = document.querySelector(this.getAttribute('href'));
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetTop - offset,
            behavior: 'smooth'
        });
    });
});

