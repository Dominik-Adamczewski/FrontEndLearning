const shareIcon = document.querySelector('.share-icon');
const socialIcons = document.querySelector('.social-icons-container');

shareIcon.addEventListener('click', () => {
    if(socialIcons.classList.contains('not-active')) {
        socialIcons.classList.remove('not-active');
    } else {
        socialIcons.classList.add('not-active');
    }
})