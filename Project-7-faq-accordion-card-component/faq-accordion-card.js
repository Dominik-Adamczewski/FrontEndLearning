let questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    question.addEventListener('click', function() {
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
    })
})
