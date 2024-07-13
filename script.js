

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


document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cardCount = 8; // Total number of cards
    let index = 0;

    // Create 8 cards dynamically
    for (let i = 0; i < cardCount; i++) {
        const card = document.createElement('div');
        card.className = 'cart';
        card.innerHTML = `
            <img src="quatation.png" alt="img">
            <p>It starts with an understanding of your business problem and goals. If you have existing code.</p>
            <div class="customer">
                <div class="c-desc">
                    <img src="customer.png" alt="pic">
                    <p>MD Arsalan<br> <span>Mentor at Design School</span></p>
                </div>
                <button class="read-more">
                    <span>Read More</span>
                    <span class="arrow">➔</span>
                </button>
            </div>
        `;
        cardsContainer.appendChild(card);
    }

    // Update button state
    const updateButtons = () => {
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === cardCount - 1;
    };

    // Slide to the next card
    nextBtn.addEventListener('click', () => {
        if (index < cardCount - 1) {
            index++;
            cardsContainer.style.transform = `translateX(-${index * 415}px)`; // Adjust according to card width
        }
        updateButtons();
    });

    // Slide to the previous card
    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            cardsContainer.style.transform = `translateX(-${index * 415}px)`; // Adjust according to card width
        }
        updateButtons();
    });

    // Initialize the button state
    updateButtons();
});





