

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        button.addEventListener('click', () => {
            const content = dropdown.querySelector('.dropdown-content');
            const isVisible = content.style.display === 'block' || content.classList.contains('show');
            if (isVisible) {
                content.style.display = 'none';
                dropdown.classList.remove('show');
            } else {
                content.style.display = 'block';
                dropdown.classList.add('show');
            }
        });
    });
});
