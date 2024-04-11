//skills
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelectorAll('.group');
        content.forEach(c => {
            c.addEventListener("click", () => {
                c.classList.toggle("active");
            });
        });
});