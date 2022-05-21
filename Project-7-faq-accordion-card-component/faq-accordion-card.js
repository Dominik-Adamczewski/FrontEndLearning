function closeOtherAccordions() {
    let activeAnswers = document.querySelectorAll('.answer_active');
    let activeQuestions = document.querySelectorAll('.question.active');
    let arrowsActive = document.querySelectorAll('.arrow.arrow-active');
        activeAnswers.forEach( function (element) {
            if(element.classList.contains('answer_active')) {
                element.classList.remove('answer_active');
            }
        activeQuestions.forEach(function (active_q) {
            active_q.classList.remove('active');
        })
        arrowsActive.forEach(function (arrAc) {
            arrAc.classList.remove('arrow-active');
        })    
        });
}

let questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        let arrow = this.firstElementChild;


        if(!this.classList.contains('active')) {
            closeOtherAccordions();
            answer.classList.add('answer_active');
            arrow.classList.add('arrow-active');
            question.classList.toggle('active');
        } else {
            answer.classList.remove('answer_active');
            this.classList.remove('active');
            arrow.classList.remove('arrow-active');
        }
    })
});