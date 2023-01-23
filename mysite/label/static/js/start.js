
var pageArray = [1,2,3,4]

function getRandomGroup () {
    const random = Math.floor(Math.random() * pageArray.length);
    return pageArray[random];

};

// Change URL !
var myURL = 'http://127.0.0.1:8000/label/guide' + getRandomGroup();
document.getElementById('myUniqueLinkId').href = myURL;
