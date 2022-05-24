function closeOtherAccordions() {
    let activeAnswers = document.querySelectorAll('.answer_active');
    let activeQuestions = document.querySelectorAll('.question.active');
        activeAnswers.forEach( function (element) {
            if(element.classList.contains('answer_active')) {
                element.classList.remove('answer_active');
            }
        activeQuestions.forEach(function (active_q) {
            active_q.classList.remove('active');
        })  
    });
}

let questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;


        if(!this.classList.contains('active')) {
            closeOtherAccordions();
            answer.classList.add('answer_active');
            question.classList.toggle('active');
        } else {
            answer.classList.remove('answer_active');
            this.classList.remove('active');
        }
    })
});