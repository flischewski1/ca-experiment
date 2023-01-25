const responseObj = {
    hello: "Hey ! How are you doing ?",
    
}

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