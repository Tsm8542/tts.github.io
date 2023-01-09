function vo(){
    speech.voice = voices[document.querySelector("#voice").value];
}
function sp(){
    let s = document.querySelector("#tt").value;
    speech.text = s;
    speechSynthesis.speak(speech);
}
function pa(){
    speechSynthesis.pause();
}
function re(){
    speechSynthesis.resume();
}
function ca(){
    speechSynthesis.cancel();
}