let faq = document.querySelectorAll('.question');

for(let i = 0; i < faq.length; i++) {
    faq[i].addEventListener('click', function() {
        this.classList.toggle('active');

        const answer = this.nextElementSibling;
        let arrow = this.firstElementChild;
        if (answer.style.display === "block") {
            answer.style.display = "none";
            arrow.classList.remove('arrow-active');
        } else {
            answer.style.display = "block";
            arrow.classList.add('arrow-active');
        }
    });
}
