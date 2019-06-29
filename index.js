let questionNumber = 0, pointsTotal = 0;

function letsDoThis() {

  $('main').on('click', '.start-quiz-btn', function () {
    $('h1').remove();
    $('.replaceable')
      .replaceWith(questionsHTML);
    questionNumber = 1;
    $('.question-num-span').replaceWith(`<span class="question-num-span">${questionNumber}</span>`);
  })
  $(submitAnswer);
  $('#logo').on('click', function () { location.reload();})
}


function submitAnswer() {

  //show correct/incorrect on submit
  $('main').on('click', '.submitBtn', function (event) {
  if( $('input:checked').val() ===undefined ){
    return;
  }
    let correct = 'Correct';
    if ($("input:checked").hasClass('btn1')) {
      pointsTotal++;
      $('.score').replaceWith(`<span class="score" role="log">${pointsTotal} Point<span>${pointsTotal > 1 ? 's' : ''}</span></span>`);
    } else {
      correct = 'Incorrect';
      $('.score').replaceWith(`<span class="score" role="log">${pointsTotal} Point<span>${pointsTotal > 1 ? 's' : ''}</span></span>`);
    }
    //hererere
    $('.replaceable').replaceWith(`
  <form role="form" action="#" class="replaceable" id='quiz-form'>
      <h2 class="feedback-h2">You are <span>
      ${correct} </span>... The Correct Answer was: ${ $('.btn1').val()}</h2>
      <button class="next-btn" type="button" role="submit" autofocus>Next Question</button>
  </form>
`);


  });
  nextQuestion();
}

function nextQuestion() {
  //load next question
  $('main').on('click', '.next-btn', function () {
    if (questionNumber === 5) {
      results();
    } else {
      $('.replaceable')
        .replaceWith(`<section class="question-section replaceable">
  <div class="container">
    <form role="form" action="#" id='quiz-form'>
      <h2 class='question'> ${questionNumber + 1 === 1 ? data[0].Q1 : questionNumber + 1 === 2 ? data[1].Q2 : questionNumber + 1 === 3 ? data[2].Q3 : questionNumber + 1 === 4 ? data[3].Q4 : questionNumber + 1 === 5 ? data[4].Q5 : ''}
        </h2>
      <fieldset>
        <label class="answer-option">
          <input  required type="radio" name="answer" value=' ${questionNumber + 1 === 2 ? data[1].Option1 : questionNumber + 1 === 3 ? data[2].Option1 : questionNumber + 1 === 4 ? data[3].Option1 : questionNumber + 1 === 5 ? data[4].Option1 : 'Broken'}' class="input1 question-btn btn1 " />
            <span class="aa answerOptionText">
              ${questionNumber + 1 === 2 ? data[1].Option1 : questionNumber + 1 === 3 ? data[2].Option1 : questionNumber + 1 === 4 ? data[3].Option1 : questionNumber + 1 === 5 ? data[4].Option1 : 'Broken'}
            </span>
          </label>
        </fieldset>
        <fieldset>
          <label class="answer-option">
            <input required type="radio" name="answer" value='${questionNumber + 1 === 2 ? data[1].Option2 : questionNumber + 1 === 3 ? data[2].Option2 : questionNumber + 1 === 4 ? data[3].Option2 : questionNumber + 1 === 5 ? data[4].Option2 : 'Broken'}' class="question-btn btn2">
              <span class="answerOptionText">
                ${questionNumber + 1 === 2 ? data[1].Option2 : questionNumber + 1 === 3 ? data[2].Option2 : questionNumber + 1 === 4 ? data[3].Option2 : questionNumber + 1 === 5 ? data[4].Option2 : 'Broken'}
            </span>
          </label>
        </fieldset>
          <fieldset>
            <label class="answer-option">
              <input required type="radio" name="answer" value='${questionNumber + 1 === 2 ? data[1].Option3 : questionNumber + 1 === 3 ? data[2].Option3 : questionNumber + 1 === 4 ? data[3].Option3 : questionNumber + 1 === 5 ? data[4].Option3 : 'Broken'}' class="question-btn btn3">
                <span class="answerOptionText">
                  ${questionNumber + 1 === 2 ? data[1].Option3 : questionNumber + 1 === 3 ? data[2].Option3 : questionNumber + 1 === 4 ? data[3].Option3 : questionNumber + 1 === 5 ? data[4].Option3 : 'Broken'}
            </span>
          </label>
        </fieldset>
            <fieldset>
              <label class="answer-option">
                <input required type="radio" name="answer" value=' ${questionNumber + 1 === 2 ? data[1].Option4 : questionNumber + 1 === 3 ? data[2].Option4 : questionNumber + 1 === 4 ? data[3].Option4 : questionNumber + 1 === 5 ? data[4].Option4 : 'Broken'}' class="question-btn btn4">
                  <span class="answerOptionText">
                  ${questionNumber + 1 === 2 ? data[1].Option4 : questionNumber + 1 === 3 ? data[2].Option4 : questionNumber + 1 === 4 ? data[3].Option4 : questionNumber + 1 === 5 ? data[4].Option4 : 'Broken'}
            </span>
          </label>
        </fieldset>
        <button type='submit' class="submitBtn">Submit</button>
       </form>
      </div>
    </section>`);
      questionNumber++;
      $('.question-num-span').replaceWith(`<span class="question-num-span">${questionNumber}</span>`);
    }
  })
}

function results() {
  $('.replaceable').replaceWith(`
    <form role = "form" action = "#" class= "replaceable" id = 'quiz-form' >
    <h2 class="feedback-h2">Congrats! You got <span>${pointsTotal} </span>out of 5 Correct...</h2>
    <button class="restart" type="button" role="submit" autofocus>Retry?</button>
  </form> `);
  pointsTotal = 0;
  $('.restart').on('click', function () {
    $('.replaceable')
      .replaceWith(questionsHTML);
    questionNumber = 1;
    $('.score').replaceWith(`<span class="score" role="log">0 Points</span>`)
    $('.question-num-span').replaceWith(`<span class="question-num-span">${questionNumber}</span>`);
  })
}
$(letsDoThis);
