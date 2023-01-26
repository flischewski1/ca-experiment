let taskTimestampps = {};
let taskResults = {};

function initExperiment(sessionId, groupId) {
    // initialize experiment 
}

function setTimestamp(currentResults , n) {
    let currentDate = new Date(); 
    currentResults[n] = currentDate; 
}

function setSolution(imageid, labelterrain, labelitem) {
    // insert form content
}

// get data from the labelform

function getData(form) {
    var formData = new FormData(form);
    console.log(Object.fromEntries(formData.entries()));
    // iterate through entries...
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    
  
  }
  
  document.getElementById("labelform").addEventListener("submit", function (e) {
    getData(e.target);
  });

