var questionsArr = [
    {
        question: 'True/False Quiz about Cats! \n Select "OK" for True and "Cancel" for False. \n\n Question One \n Cats’ ancestors first appeared in the Pliocene Epoch (5.3 to 3.6 million years ago).',
        answer: true
    },
    {
        question: 'Question Two \n There are no authentic records of the domestication of cats before 1500 BCE.',
        answer: true
    },
    {
        question: 'Question Three \n The ancestry of the Siamese cat breed is well known.',
        answer: false
    },
    {
        question: 'Question Four \n Seafood is not recommended for cats.',
        answer: true
    },
    {
        question: 'Question Five \n The house cat’s ancestors were social animals.',
        answer: false
    },
    {
        question: 'Question Six \n Cats were considered a sacred animal in ancient Egypt because they were domesticated.',
        answer: false
    },
    {
        question: 'Question Seven \n The earliest known association between cats and humans dates to about 9,500 years ago.',
        answer: true
    },
    {
        question: 'Question Eight \n The average size of cat’s litter is four.',
        answer: true
    },
    {
        question: 'Question Nine \n A mixed breed cat is always a happier and healthier pet than a pedigreed cat.',
        answer: false
    },
];
  

function runQuiz() {
    var correctAns = 0;

    for (var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i].question;
        var answer = questionsArr[i].answer;

        var userAns = confirm(question);

        if (userAns === answer) {
            correctAns++;
        }
    }

    var percentCorrect = (correctAns / questionsArr.length) * 100;
    alert('Thank you for taking this quiz! \nYou scored ' + percentCorrect + '%');
}