let questions = (
  `<section class="question-section replaceable">
    <form role="form" action="#" id='quiz-form'>
      <h2 class='question'>
        How Big is Texas Really?
        </h2>
      <fieldset>
        <label class="answer-option">
          <input  required type="radio" name="answer" value='Not So Big' class="question-btn">
            <span class="answerOptionText">
              Not So Big
            </span>
          </label>
        </fieldset>
        <fieldset>
          <label class="answer-option">
            <input required type="radio" name="answer" value='Pretty Big' class="question-btn">
              <span class="answerOptionText">
                Pretty Big
            </span>
          </label>
        </fieldset>
          <fieldset>
            <label class="answer-option">
              <input required type="radio" name="answer" value='Really Big' class="question-btn">
                <span class="answerOptionText">
                  Really Big
            </span>
          </label>
        </fieldset>
            <fieldset>
              <label class="answer-option">
                <input required type="radio" name="answer" value='Not So Big' class="question-btn">
                  <span class="answerOptionText">
                    Smaller Than California
            </span>
          </label>
        </fieldset>
              <button type='submit' class="submitBtn">Submit</button>
      </form>
    </section>`
);

let correctIncorrect = (`
  <form role="form" action="#" class="replaceable" id='quiz-form'>
      <h2 class="feedback-h2">Your Answer Was <span>Correct</span>...</h2>
      <button class="next-btn" type="button" role="submit" autofocus>Next Question</button>
  </form>
`);