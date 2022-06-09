var SpeechRecognition = window.webkitSpeechRecognition;

var Content;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML ="";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "selfie")
    {
        console.log("Taking your selfie");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data  = "Taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 camera = document.getElementById("camera");

 function take_snapshot()
 {
     Webcam.snap(function(data_uri){
         document.getElementById("resultShow").innerHTML='<img id="save_image" src="'+data_uri+'">';
     });
 }

 function save()
 {
     link = document.getElementById("link");
     image = document.getElementById("save_image");
     link = image;
     link;
 }