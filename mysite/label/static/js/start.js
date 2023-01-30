
var pageArray = [1,2,3,4]

function getRandomGroup () {
    const random = Math.floor(Math.random() * pageArray.length);
    createCookie("group",pageArray[random],7);
    return pageArray[random];

};

// Change URL !
var myURL = 'https://trashclassification.azurewebsites.netlabel/guide' + getRandomGroup();
document.getElementById('myUniqueLinkId').href = myURL;

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
