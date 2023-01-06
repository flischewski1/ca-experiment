const chatBody = document.querySelector(".chat-body");
const txtinput = document.querySelector("#txtinput");
const send = document.querySelector(".send");
const loadingEle =document.querySelector(".loading");

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
    setScrollPosition();
    toggleLoading(false);
     
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
    chatBody.append(messageEle);

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