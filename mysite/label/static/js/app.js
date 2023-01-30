const chatBody = document.querySelector(".chat-body");
const txtinput = document.querySelector("#txtinput");
const send = document.querySelector(".send");
const loadingEle =document.querySelector(".loading");


 

// Messages
const startmessagelauraWelcome =  "Hallo! Ich bin Laura und helfe dir dich in dieser Studie zurecht zu finden :)"
const messageTutorial = 'In dieser Studie ist es deine Aufgabe die Bilder zu klassifizieren. Wähle dazu die passende Option in den Kategorien Terrain und Gegenstand (Art des Mülls) aus und klicke anschließend auf "Weiter".'

const messageLauraStart = "Du hast die Aufgabe gestartet! Klassifiziere jetzt bitte die ersten 5 Bilder :)"
const messageBotStart = "Die Aufgabe ist gestartet. Bitte klassifiziere die Bilder."

const messageLauraProgressstart = "Du hast bereits "
const messageLauraProgressend = " geschafft."
const messageLauraProgres = "Klassifiziere jetzt bitte die nächsten 5 Bilder :)"

const messageLauraNonProgress = "Diese Bilder wären geschafft. Klassifiziere jetzt bitte die nächsten 5 Bilder :)"

const messageLBotProgressstart = "Fortschritt: "
const messageLBotProgressend = " "
const messageLBotProgress = "Klassifiziere jetzt bitte die nächsten 5 Bilder."
const messageBotNonProgress = "Klassifiziere jetzt bitte die nächsten 5 Bilder."   


// Chatbot functions 
send.addEventListener("click", ()=> renderUserMessage());

txtinput.addEventListener("keyup", (event) => {
    if(event.keyCode === 13) {
        renderUserMessage();
    }
});

const renderUserMessage = () => {

    const userInput = txtinput.value ; 
    renderMessageEle(userInput, "user");
    txtinput.value = "";
  
    toggleLoading(false);
    setScrollPosition();
     
    setTimeout(() => {
        
        renderChatbotResponse(userInput)
        setScrollPosition();
        toggleLoading(true);
    }
    , 1200);
    
}

const renderMessageEle = (txt, type) => {
    let className = "user-message";
    if(type !== 'user') {
        className = "chatbot-message";
    }
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className); 
    messageEle.append(txtNode); 
    chatBody.insertBefore(messageEle, loadingEle);

}

const renderChatbotResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
    renderMessageEle(res);
}


// dialogeflow here:

const getChatbotResponse = (userInput) => {
    return responseObj[userInput] == undefined?"Ich verstehe dich leider nicht":responseObj[userInput];
}

const setScrollPosition = () => {
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

const toggleLoading = (show) => loadingEle.classList.toggle("hide", show)

function renderChatbotmessage(id) {
   
    toggleLoading(false);
    setScrollPosition();
    setTimeout(() => {   
        messagetree(id)
        setScrollPosition();
        toggleLoading(true);
    }
    , 1800);
}

function renderNext() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "submit");
    x.setAttribute("form", "labelform");
    x.setAttribute("value", "Weiter");
    x.setAttribute("class", "chatbot-message");
    chatBody.append(x); 

}


function messagetree(id) {
    menuMessages[id]()
}

function messagetree(id) {
    menuMessages[id]()
}

var menuMessages = {};
menuMessages["TutorialHumanLike"] = tutorialHumanLike;
menuMessages["TutorialBot"] = tutorialBot;
menuMessages["HumanLikeStart"] = humanLikeStart;
menuMessages["BotStart"] = botStart;
menuMessages["ProgressHumanLike"] = progressHumanLike;
menuMessages["ProgressBot"] = progressBot; nonProgressHumanLike
menuMessages["NonProgressHumanLike"] = nonProgressHumanLike;
menuMessages["NonProgressBot"] = nonProgressBot;

// dialogflow functions

// guide
function tutorialHumanLike() {
    renderMessageEle(startmessagelauraWelcome, "Bot");
    renderMessageEle(messageTutorial, "Bot");
    renderNext();
}

function tutorialBot() {
    renderMessageEle(messageTutorial, "Bot");
    renderNext();
}

function humanLikeStart(){
    renderMessageEle(messageLauraStart, "Bot");
    renderNext();
}

function botStart(){
    renderMessageEle(messageBotStart, "Bot");
    renderNext();
}



function progressHumanLike() {
    cookieStatus = readCookie("ExperimentCounter")
    n = cookieStatus.length * 5;
    progressString = n + "/25 Bilder";
    message = messageLauraProgressstart + progressString + messageLauraProgressend
    renderMessageEle(message, "Bot");
    renderMessageEle(messageLauraProgres,"Bot");
    renderNext();
}

function progressBot() {
    cookieStatus = readCookie("ExperimentCounter");
    n = cookieStatus.length * 5;
    progressString = n + "/25 Bilder";
    message = messageLBotProgressstart + progressString + messageLBotProgressend
    renderMessageEle(message, "Bot");
    renderMessageEle(messageLBotProgress,"Bot");
    renderNext();

}

function nonProgressHumanLike() {

    renderMessageEle(messageLauraNonProgress,"Bot");
    renderNext();
}

function nonProgressBot() {

    renderMessageEle(messageBotNonProgress,"Bot");
    renderNext();

}

// progress monitoring

function progressMessage(treatmentHuman, treatmentProgress) {
    cookieStatus = readCookie("ExperimentCounter")
    if(cookieStatus == null) {
        if(treatmentHuman){
            renderChatbotmessage("HumanLikeStart")
        }
        else {
            renderChatbotmessage("BotStart")
        }
        // message 1 human like or bot
    }
    else {
         // progress messages 

        if(treatmentHuman && treatmentProgress) {
            renderChatbotmessage("ProgressHumanLike")
        }

        if(treatmentHuman === false && treatmentProgress) {
            renderChatbotmessage("ProgressBot")
        }

    // no progress messages
        if(treatmentHuman && treatmentProgress === false) {
        renderChatbotmessage("NonProgressHumanLike")
        }

        if(treatmentHuman === false && treatmentProgress === false) {
        renderChatbotmessage("NonProgressBot")
        }

    }
    
}
    
