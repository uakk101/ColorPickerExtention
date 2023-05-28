const button = document.querySelector('.pickerbtn');
const colorGrid = document.querySelector('.colorGrid');
const colorValue = document.querySelector('.colorValue');
const copied = document.querySelector('.copied');

button.addEventListener('click', async() => {
    
let [tab] = await chrome.tabs.query({active: true, currentWindow: true});


   


chrome.scripting.executeScript({ 
    target: { tabId: tab.id },  
    function: pickColor,

}, async (injectionResults) => {
    // console.log(injectionResults);
    const [data] = injectionResults;
   
    if (data.result) { 
        const color = data.result.sRGBHex;
        colorGrid.style.backgroundColor = color;
        colorValue.innerText = color;
        copied.innerText = "copied to clipboard";
        //alert("copied to clipboard")
        try{

            await navigator.clipboard.writeText(color);
            

        }catch(err){
            console.e(err);
        }

       
        
       
    }
});

});

async function pickColor() {

    try {  

        const eyeDropper = new EyeDropper();
        return await  eyeDropper.open();
    

     }
    catch(err) { 
        console.log(err);
    }



}