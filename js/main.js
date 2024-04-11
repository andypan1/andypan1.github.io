//skills
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.skills-content');

    content.addEventListener('click', (e) => {
        const header = e.target.closest('.skills-header');
        
        if(!header) return;

        const group = header.parentElement;
        const body = group.querySelector('.group-body');
        const icon = header.querySelector('i');

        //toggling 
        icon.classList.toggle('fa-caret-up');
        icon.classList.toggle('fa-caret-down');
    });
});