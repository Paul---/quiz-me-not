
let questionsHTML = (
  `<section class="question-section replaceable">
  <div class="container">
    <form role="form" action="#" id='quiz-form'>
      <h2 class='question'>${data[0].Q1}
        </h2>
      <fieldset>
        <label class="answer-option">
          <input  required type="radio" name="answer" value='${data[0].Option1}' class="input1 question-btn btn1">
            <span class="answerOptionText">
            ${data[0].Option1}
            </span>
          </label>
        </fieldset>
        <fieldset>
          <label class="answer-option">
            <input required type="radio" name="answer" value='${data[0].Option2}' class="question-btn btn2">
              <span class="answerOptionText">
                ${data[0].Option2}
            </span>
          </label>
        </fieldset>
          <fieldset>
            <label class="answer-option">
              <input required type="radio" name="answer" value='${data[0].Option3}' class="question-btn btn3">
                <span class="answerOptionText">
                  ${data[0].Option3}
            </span>
          </label>
        </fieldset>
            <fieldset>
              <label class="answer-option">
                <input required type="radio" name="answer" value='${data[0].Option4}' class="question-btn btn4">
                  <span class="answerOptionText">
                    ${data[0].Option4}
            </span>
          </label>
        </fieldset>
              <button type='submit' class="submitBtn">Submit</button>
      </form>
      </div>
    </section>`
);

let correctIncorrect = (`
  <form role="form" action="#" class="replaceable" id='quiz-form'>
      <h2 class="feedback-h2">Your Answer Was <span>${questionNumber + 1 === 1 ? 'Correct' : 'Wrong'}</span>...</h2>
      <button class="next-btn" type="button" role="submit" autofocus>Next Question</button>
  </form>
`);