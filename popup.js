const button = document.querySelector('.pickerbtn');

button.addEventListener('click', async() => {
    
let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

chrome.scripting.executeScript({ 
    target: { tabId: tab.id },  
    function: pickColor,

});

});

function pickColor() {
    let color = document.body.style.backgroundColor;
    alert(color);
}