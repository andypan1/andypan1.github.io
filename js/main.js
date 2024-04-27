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