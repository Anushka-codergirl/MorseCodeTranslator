/*
var username = prompt("What's your name?");
var greetingMsg = "Welcome! " + username;
alert(greetingMsg);
*/

var submitButton = document.querySelector("#submit-btn");

var resetButton = document.querySelector("#reset-btn");

var translateInput = document.querySelector("#tt-input");

var translateOutput = document.querySelector("#tt-output");

//console.log(textInput);

var serverUrl = "https://api.funtranslations.com/translate/morse.json";

function getTranslationURL(input){
    return serverUrl + "?" + "text=" + input
}

//Error Handling
function errorHandler(error){
    console.log("Error occured!",error);
    alert("Please check the server connection or try again after an hour.");
}

//Click Handler
function clickHandler(){
   // textOutput.innerText = "Hey There!" + textInput.value;
   console.log("Button clicked!");

   //read input
   var inputText = translateInput.value;
    
   // Fetch the URL

   fetch(getTranslationURL(inputText)).then(response => response.json()).then(json => 
     translateOutput.innerText = json.contents.translated).catch(errorHandler)
}

submitButton.addEventListener("click",clickHandler);

resetButton.addEventListener("click",() =>{
  translateInput.value = "";
  translateOutput.innerText = "";
});