// myscript.jss
function Animal(name) {                                         // get the Animal name and display messages and image
    ResetButtons();
    document.getElementById(name).style.backgroundColor = "green";
    var inputField = document.getElementById('userclicks');
    inputField.value = 'User clicks ' + name;
    var newMessage = document.getElementById('message');
    newMessage.value = name + ' is clicked';
    DisplayImage(name);
}
function ResetButtons() {                                       // reset all the buttons
    document.getElementById("Cat").style.backgroundColor = "";
    document.getElementById("Dog").style.backgroundColor = "";
    document.getElementById("Frog").style.backgroundColor = "";
}

function DisplayImage(picture){								    //function to display the lion image 
    var image = document.getElementById("showimage");           //get the span element from id = showimage
    var imageElement = document.createElement("img");           //create a temporary img element variable
    imageElement.width = 320;                                   //define the width of the image 
    imageElement.height = 240;                                  //define image height  
    imageElement.src = picture + ".jpg";                        //set reference to the relevant animal image
    imageElement.alt = picture + " image";				        //provide alternate text if image does not load			
    image.innerHTML = "";							            //clear the content of the <span>
    image.appendChild(imageElement);				            //dynamically append image to the imageElement variable
    console.log("The image has been displayed.");               //log the successful output to console for debugging purposes
    }
    function openNewTab() {
        window.open("COMP804 - Assignment 1 - Task 5.docx", "_blank")
    }