const textSamples = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing speed is an important skill in the digital age.",
    "Practice makes perfect when improving typing accuracy."
];

let chosenText = "";
let timer;
let timeLeft = 60;
let correctChars = 0;
let totalTyped = 0;

function startTest() {
    chosenText = textSamples[Math.floor(Math.random() * textSamples.length)];
    document.getElementById("textDisplay").innerText = chosenText;
    document.getElementById("textInput").value = "";
    document.getElementById("wpm").innerText = 0;
    document.getElementById("accuracy").innerText = 100;
    document.getElementById("timeLeft").innerText = timeLeft;
    correctChars = 0;
    totalTyped = 0;

    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("timeLeft").innerText = timeLeft;
    } else {
        clearInterval(timer);
        document.getElementById("textInput").disabled = true;
    }
}

function checkTyping() {
    let typedText = document.getElementById("textInput").value;
    totalTyped++;

    if (chosenText.startsWith(typedText)) {
        correctChars = typedText.length;
    }

    let accuracy = (correctChars / totalTyped) * 100;
    let wordsTyped = correctChars / 5;
    let wpm = Math.round((wordsTyped / (60 - timeLeft)) * 60);

    document.getElementById("accuracy").innerText = Math.round(accuracy);
    document.getElementById("wpm").innerText = wpm > 0 ? wpm : 0;
}

startTest();
