let faq = document.getElementsByClassName('question');
let i;

for(i = 0; i < faq.length; i++) {
    faq[i].addEventListener('click', function() {
        this.classList.toggle('active');

        let answer = this.nextElementSibling;
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
