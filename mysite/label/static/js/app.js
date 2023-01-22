const chatBody = document.querySelector(".chat-body");
const txtinput = document.querySelector("#txtinput");
const send = document.querySelector(".send");
const loadingEle =document.querySelector(".loading");


var pageArray = [1,2,3,4]

function getRandomGroup () {
    const random = Math.floor(Math.random() * pageArray.length);
    return pageArray[random];

}


// Change URL !
var myURL = 'http://127.0.0.1:8000/label/' + getRandomGroup();
document.getElementById('myUniqueLinkId').href = myURL;


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
    return responseObj[userInput] == undefined?"Please try again":responseObj[userInput];
}

const setScrollPosition = () => {
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

const toggleLoading = (show) => loadingEle.classList.toggle("hide", show)



// Cookie Progress

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}



// Update Function 

const setCookie = () => {
    createCookie("ExperimentCounter",1,7)
}

const updateCookie = () => {
    cookieStatus = readCookie("ExperimentCounter")
    if(cookieStatus == null) {
        setCookie()
        console.log(readCookie("ExperimentCounter"))
    }
    else {
        cookieStatus = readCookie("ExperimentCounter")
        newCookieValue = cookieStatus + 1 
        createCookie("ExperimentCounter",newCookieValue,7)
        console.log(readCookie("ExperimentCounter"))
    }
}