const button = document.querySelector('.pickerbtn');

button.addEventListener('click', async() => {
    
let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

chrome.scripting.executeScript({ 
    target: { tabId: tab.id },  
    function: pickColor,

});

});

async function pickColor() {

    try {  

        const eyeDropper = new EyeDropper();
        const color = await eyeDropper.open();
        console.log(color);

     }
    catch(err) { 
        console.log(err);
    }




}