const iframeContainer = document.getElementById('iframe-container');
const websiteIframe = document.getElementById('website-iframe');
const question = document.querySelector('.question');
const answer = document.getElementById('answer');

document.querySelector('#submit-button').addEventListener('click', function () {
  const userAnswer = answer.value.toLowerCase();
  processUserInput(userAnswer);
});

function processUserInput(input) {
  if (input.includes('counselor') || input.includes('friend') || input.includes('advice')) {
    question.textContent = 'Do you need biblical help or general counseling?';
    answer.value = ''; // Clear the answer input
    answer.placeholder = 'Type "biblical" or "general"';
  } else if (input.includes('biblical')) {
    question.textContent = 'Are you a teen or an adult?';
    answer.value = ''; // Clear the answer input
    answer.placeholder = 'Type "teen" or "adult"';
  } else if (input.includes('general')) {
    // Redirect to general counseling URL.
    loadWebsite('https://pi.ai/talk');
  } else if (input.includes('help')) {
    question.textContent = 'Do you need biblical help, tutor help, or advice?';
    answer.value = ''; // Clear the answer input
    answer.placeholder = 'Type "biblical", "tutor", or "advice"';
  } else if (input.includes('tutor')) {
    // Redirect to tutor URL.
    window.open('https://app.writesonic.com/');
  } else if (input.includes('advice')) {
    // Redirect to advice URL.
    window.open('https://www.therebelution.com/');
  } else if (input.includes('teen')) {
    // Redirect to teen URL.
    window.open('https://www.therebelution.com/');
  } else if (input.includes('adult')) {
    // Redirect to adult URL.
    loadWebsite('https://www.davidjeremiah.org/');
  } else {
    // Handle other cases or display a default message.
    question.textContent = 'What do you need?';
  }
}

function loadWebsite(url) {
  iframeContainer.style.display = 'block';
  websiteIframe.src = url;
}