let speech = new SpeechSynthesisUtterance();
speech.pitch = 1;
speech.lang = 'en';
speech.volume = 1;
speech.rate = 1;
let voices = [];
voices = speechSynthesis.getVoices();
speech.voice = voices[0];

function x(){
    let s = document.querySelector("#tt").value;
    speech.text = s;
    speechSynthesis.speak(speech);
}
function p(){
    speechSynthesis.pause();
}
function r(){
    speechSynthesis.resume();
}
function c(){
    speechSynthesis.cancel();
}