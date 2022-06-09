const shareIcon = document.querySelector('.share-icon');
const socialIcons = document.querySelector('.social-icons-container');

shareIcon.addEventListener('click', () => {
    socialIcons.classList.toggle('not-active');
})