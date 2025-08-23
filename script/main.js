const toggle = document.getElementById("darkmode-toggle");
toggle.addEventListener("change", () =>{
    document.body.classList.toggle("dark-mode")
});


const inovate = document.querySelector('.innovate');
const what_to_inovate = "CODE. CREATE. INNOVATE.";

function textTypingEffect(element, text, i = 0){
    element.textContent += text[i];
    if (i === text.length - 1)
        return;
    textTypingEffect(element, text, i+1);
}

textTypingEffect(inovate, what_to_inovate);