let currentIndex = 0;
const totalImages = document.querySelectorAll('.slider input[type="radio"]').length;
const slidesContainer = document.querySelector('.slides');

function showImage(index) {
    const translateValue = -index * 100 + '%';
    slidesContainer.style.transform = 'translateX(' + translateValue + ')';
}

document.querySelectorAll('.slider input[type="radio"]').forEach((radio, index) => {
    radio.addEventListener('change', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});
