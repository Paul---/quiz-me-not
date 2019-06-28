let questionNumber = 0, pointsTotal = 0;


function letsDoThis() {
  $('main').on('click', '.start-quiz-btn', function () {
    $('.replaceable')
      .replaceWith(questions);
    questionNumber = 1;
    $('.question-num-span').replaceWith(`<span class="question-num-span">${questionNumber}</span>`);
  })
  $(submitAnswer);
}


function submitAnswer() {
  //show correct/incorrect on submit
  $('main').on('click', '.submitBtn', function (event) {
    event.preventDefault();
    $('.replaceable').replaceWith(correctIncorrect);
    //if answer is correct  
    if (1) {
      pointsTotal++;
      $('.score').replaceWith(`<span class="score" role="log">${pointsTotal} Point<span>${pointsTotal > 1? 's': ''}</span></span>`);
    }

  });
  nextQuestion();
}

function nextQuestion() {
  //load next question
  $('main').on('click', '.next-btn', function () {
    if(questionNumber===5){
      results();
    }else {
      $('.replaceable')
        .replaceWith(questions);
      questionNumber++;
      $('.question-num-span').replaceWith(`<span class="question-num-span">${questionNumber}</span>`);
    }

  })

}

function results() {
  //final screen shows with button that launches 'letsDoThis'
  alert(`finished`);
}
$(letsDoThis);

// get selected input value $("input[name=answer]:checked").val()