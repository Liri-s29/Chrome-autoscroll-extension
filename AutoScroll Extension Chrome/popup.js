const downCode = "var height = window.scrollY;var interval = .05;var initial = 0;var scrollDown = setInterval(() => { window.scrollTo({top: initial,behavior: 'smooth'}, (height));inital = height;height += 1.5;}, interval);document.addEventListener('scroll', (e)=>{height = Math.round(window.scrollY);initial = height});;";
const stopCode = "window.clearInterval(scrollDown); initial = height";

let downBool = false;

var down = document.getElementById('down');

document.addEventListener("keydown", (key)=>{
    if(key.key == " "){
        if(downBool == false){
            downBool = true;
        }else{
            downBool = false;
        }
    }
})

down.addEventListener('click', (e)=>{
    if(downBool == false){
        downBool = true;
    }else{
        downBool = false;
    }
});

document.addEventListener("click", (e)=>{
    if(downBool){
        chrome.tabs.executeScript(null,
            {code: downCode});
    }else{
        chrome.tabs.executeScript(null,
            {code: stopCode});
    }
})

document.addEventListener("keydown", (e)=>{
    if(e.key == " "){
        if(downBool){
            chrome.tabs.executeScript(null,
                {code: downCode});
        }else{
            chrome.tabs.executeScript(null,
                {code: stopCode});
        }
    }
})



