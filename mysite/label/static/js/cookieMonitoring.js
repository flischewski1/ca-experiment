let taskTimestamps = {};
let taskResultsItems = {};
let taskResultsTerrain = {};
const counterMask = {
  "0" : "Timestamp1",
  "1": "Timestamp2",
  "11": "Timestamp3",
  "111" : "Timestamp4", 
  "1111" : "Timestamp5", 
  "11111" : "Timestamp6"
}

function setInitTimestamp() {
    let currentDate = new Date(); 
    taskTimestamps["0"] = currentDate
    value = JSON.stringify(taskTimestamps)
    createCookie("timestamps",value,7 )
}



// get data from the labelform

function getData(form) {
    var formData = new FormData(form);
    itemname = "LabelItemType_labeled";
    terrainname = "LabelTerrain_labeled";
    taskResultsItems = getTrackingCookie(itemname);
    taskResultsTerrain = getTrackingCookie(terrainname);
    taskTimestamps = getTrackingCookie("timestamps");
    
    for (var pair of formData.entries()) {

      if(pair[0] === "imageid"){
        imageid=pair[1]

      }

      if(pair[0] === itemname){
        taskResultsItems["Item"+imageid] = pair[1]
      }
      if(pair[0] === terrainname){
        taskResultsTerrain["Terrain"+imageid] = pair[1]
      }
      
    }
    
    let currentDate = new Date(); 
    taskTimestamps[counterMask[readCookie("ExperimentCounter")]] = currentDate;
    let cookieStatus = readCookie("ExperimentCounter")
    appendCookie(terrainname,taskResultsTerrain);
    appendCookie(itemname, taskResultsItems);
    appendCookie("timestamps",taskTimestamps);

    if(cookieStatus === "11111"){
      const group = readCookie("group"); 
      // UPDATE LINK
      let surveylink = "https://bildungsportal.sachsen.de/umfragen/limesurvey/index.php/171198?newtest=Y&lang=de"
      let linkString = "&Group=" + '"' + group + '"'; 
      linkString = iterateCookie(taskResultsTerrain, linkString);
      linkString = iterateCookie(taskResultsItems, linkString);
      linkString = iterateCookie(taskTimestamps, linkString);
      surveylink = surveylink+ linkString;
      createCookie("survey-link", surveylink, 7)
      
    }
    
   
  }
  
  document.getElementById("labelform").addEventListener("submit", function (e) {
    getData(e.target);
  });

function iterateCookie(json, link) {
  for (key in json) {
    link = link + '&' + key + '="' + json[key] + '"'; 
  }
  return link
}

