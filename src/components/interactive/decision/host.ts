// Create custom dom events
// - interactive-decision:answer
// - interactive-decision:reset (Needed here)
// - interactive-decision:result (Needed here)


//             Wheigt name
//                 |    Wheigt value
//                 |        |
//                 V        V
type Answer = Map<string, number>;

type AnswerWQuestion = {
  question: string;
  answer: Answer;
};

function calculateResult(answers: Map<string, Answer>) {
  // Create a map for the result options
  const result = new Map<string, number>();

  // Loop through all answers
  answers.forEach((answer, question) => {
    // Sum up all wheigths
    answer.forEach((value, option) => {
      // Check if option already exists
      if (result.has(option)) {
        // Add value to option
        result.set(option, result.get(option)! + value);
      } else {
        // Add option to result
        result.set(option, value);
      }
    });
  });

  // Find the highest scored option
  let highestScore = 0;
  let highestScoreOptions = new Array<string>();

  result.forEach((value, option) => {
    if (value === highestScore) {
      highestScoreOptions.push(option);
    } else if (value > highestScore) {
      highestScore = value;
      highestScoreOptions = [option];
    }
  });

  return highestScoreOptions;
}

export function init() {
  // Create a map of all answers
  const answers = new Map<string, Answer>();

  // Add event listener for answer
  // @ts-expect-error
  document.addEventListener(
    "interactive-decision:answer",
    (e: { detail: AnswerWQuestion }) => {
      // Add answer to map
      answers.set(e.detail.question, e.detail.answer);

      const result = calculateResult(answers);

      // Fire event with result
      // @ts-expect-error
      document.dispatchEvent(new CustomEvent("interactive-decision:result", { detail: result }));
    }
  );

  // Log on result
  // @ts-expect-error
  document.addEventListener(
    "interactive-decision:result",
    (e: { detail: Array<string> }) => {
      console.log("result", e.detail);
    }
  );

  // // fire event with answer to test
  // const answer: AnswerWQuestion = {
  //   question: "test",
  //   answer: new Map<string, number>([
  //     ["test1", 1],
  //     ["test2", 5],
  //     ["test3", 5],
  //   ]),
  // };

  // document.dispatchEvent(
  //   new CustomEvent("interactive-decision:answer", { detail: answer })
  // );

  // Find all dataquestion elements
  const questions = document.querySelectorAll("[data-question]");
  // All of them contain two inputs. Add event listeners to them to fire the answer event
  questions.forEach((question) => {
    // Find all inputs
    const inputs = question.querySelectorAll("input");
    // Add event listeners to them
    inputs.forEach((input) => {
      input.addEventListener("change", () => {
        // Create answer
        const answer: AnswerWQuestion = {
          question: question.getAttribute("data-question")!,
          answer: new Map<string, number>(input.value! === "astro"?[
            ["astro", 1],
            ["nuxt", 0],
          ]:[
            ["astro", 0],
            ["nuxt", 1],
          ]),
        };

        // Fire event
        document.dispatchEvent(
          new CustomEvent("interactive-decision:answer", { detail: answer })
        );
      });
    });
  });

  // when a result is found, update the last paragraph
  // @ts-expect-error
  document.addEventListener(
    "interactive-decision:result",
    (e: { detail: Array<string> }) => {
      const result = e.detail;
      // There are 3 possible paragraphs
      // - `data-result-one` - Shown when there is only one result
      // - `data-result-equal` - Shown when there are multiple results with the same score
      // - `data-result-no` - Shown when there are no results
      if(result.length === 1) {
        const resultOne = document.querySelector("[data-result-one]");
        resultOne!.hidden = false;
        const resultEqual = document.querySelector("[data-result-equal]");
        resultEqual!.hidden = true;
        const resultNone = document.querySelector("[data-result-no]");
        resultNone!.hidden = true;

        // Display the result
        const resultText = document.querySelector("[data-fw]");
        resultText!.textContent = result[0];

        if(result[0] === "astro") {
          document.querySelector("[data-get-started]")!.innerHTML = `Aggregata wrote a nice introduction on how to <a href="https://aggregata.de/en/blog/astro/astro-an-introduction-to-your-next-project/"><strong>get started with Astro</strong></a>. <strong>They use Tailwind CSS</strong>, but you can also use UnoCSS. <a href="/post/unocss-tailwind"><strong>I explain why you should use UnoCSS</strong></a> in another article.`;
        } else {
          document.querySelector("[data-get-started]")!.innerHTML = `Nuxt has a great <a href="https://nuxt.com/docs/getting-started/installation">getting started guide</a>.`;
        }
      } else if(result.length > 1) {
        const resultOne = document.querySelector("[data-result-one]");
        resultOne!.hidden = true;
        const resultEqual = document.querySelector("[data-result-equal]");
        resultEqual!.hidden = false;
        const resultNone = document.querySelector("[data-result-no]");
        resultNone!.hidden = true;
      } else {
        const resultOne = document.querySelector("[data-result-one]");
        resultOne!.hidden = true;
        const resultEqual = document.querySelector("[data-result-equal]");
        resultEqual!.hidden = true;
        const resultNone = document.querySelector("[data-result-no]");
        resultNone!.hidden = false;
      }
    }
  );
}