var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function back()
{
    window.location = "index2.html";
}

speak();




function speak()
{

 

    var synth = window.speechSynthesis;

    speak_data = "Thank You we have received your Feedback";

    var utterThis = new SpeechSynthesisUtterance(speak_data);


    synth.speak(utterThis);
}