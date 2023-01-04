let speech = new SpeechSynthesisUtterance();
speech.lang = 'en';

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    let voiceSelect = document.querySelector("#voice");
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};
document.querySelector("#voice").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voice").value];
});

document.querySelector("#sp").addEventListener("click", () => {
    let s = document.querySelector("#tt").value;
    speech.pitch = 1;
    speech.volume = 1;
    speech.rate = 1;
    speech.text = s;
    speechSynthesis.speak(speech);
});

document.querySelector("#pa").addEventListener("click", () => {
    speechSynthesis.pause();
});

document.querySelector("#re").addEventListener("click", () => {
    speechSynthesis.resume();
});

document.querySelector("#ca").addEventListener("click", () => {
    speechSynthesis.cancel();
});