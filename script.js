const outputText = document.getElementById('output');
const startBtn = document.getElementById('start');
const endBtn = document.getElementById('end');

const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.lang = 'en-US';
recognition.continuous = true;
recognition.interimResults = true;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    endBtn.style.display = 'block'; // Show end button
    recognition.start();
    outputText.textContent = '';
});

// Remove the click event listener for the end button
// endBtn.addEventListener('click', () => {
//     recognition.stop();
//     startBtn.disabled = false;
//     endBtn.style.display = 'none'; // Hide end button again
//     outputText.textContent = '';
// });

recognition.onresult = function(event) {
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript;
    outputText.textContent = `${transcript}`;
};

recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

recognition.onend = function() {
    // Do not reset start button and hide end button
    // startBtn.disabled = false;
    // endBtn.style.display = 'none'; // Hide end button when recognition ends
    // outputText.textContent = 'Click "Start" to begin.';
};

