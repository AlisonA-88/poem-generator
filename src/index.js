function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-prompt");
  let apiKey = "2da524bt368f04d046ed72d4c1o50bad";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are an AI assistant that has an extensive knowledge of poems and creates your own 5 line short poems that always rhyme based on the topic given. Each line ends with the HTML < br />. Sign the poem with 'SheCodes AI' at the end of the poem in a <strong><i></i></strong> elements.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">  Generating your poem about ${instructionsInput.value} ✍️ </div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
