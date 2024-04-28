const questions = document.querySelectorAll('.ab-question');

const answers = new Map();
let result = "";

const oneResult = document.querySelector('[data-result-one]');
const noResult = document.querySelector('[data-result-no]');
const tieResult = document.querySelector('[data-result-equal]');
const fw = document.querySelector('[data-fw]');
const additionalA = document.querySelector('[data-additional-a]');
const additionalB = document.querySelector('[data-additional-b]');

function onAnswerChange(event) {
    console.log("Answer changed", event.target.name, event.target.value);

    answers.set(event.target.name, event.target.value);

    console.log("Answers", answers);

    result = calculateResult();

    if (result === 'tie') {
        oneResult.hidden = true;
        noResult.hidden = true;
        tieResult.hidden = false;
    } else {
        oneResult.hidden = false;
        noResult.hidden = true;
        tieResult.hidden = true;
    }

    const [a, b] = fw.getAttribute('data-fw').split('|');

    if (result === 'a') {
        fw.innerHTML = a;
        additionalA.hidden = false;
        additionalB.hidden = true;
    } else if (result === 'b') {
        fw.innerHTML = b;
        additionalA.hidden = true;
        additionalB.hidden = false;
    }
}

function calculateResult() {
    const results = {
        a: 0,
        b: 0,
    };

    answers.forEach((value, key) => {
        results[value]++;
    });

    console.log("Results", results);

    const result = results.a === results.b ? 'tie' : results.a > results.b ? 'a' : 'b';

    console.log("Result", result);

    return result;

}

questions.forEach((question) => {
    // get data attributes
    const questionText = question.getAttribute('data-question');
    const answerA = question.getAttribute('data-a');
    const answerB = question.getAttribute('data-b');
    const slug = question.getAttribute('data-slug');

    const html = `
    <h3>${questionText}</h3>
    <div class="ab-answers">
      <div class="ab-answer">
        <input type="radio" name="${slug}" id="${slug}-a" value="a">
        <label for="${slug}-a">${answerA}</label>
      </div>

      <div class="ab-answer">
        <input type="radio" name="${slug}" id="${slug}-b" value="b">
        <label for="${slug}-b">${answerB}</label>
      </div>
    </div>
    `;

    question.innerHTML = html;

    // register event listeners
    document.querySelectorAll(`input[name="${slug}"]`).forEach((input) => {
        input.addEventListener('change', onAnswerChange);
    });
});

console.log("Initialized", questions.length, "questions");