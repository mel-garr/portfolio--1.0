const toggle = document.getElementById("darkmode-toggle");
document.body.classList.add('dark-mode');
toggle.checked = true;
//  document.body.classList.toggle("dark-mode")
toggle.addEventListener("change", () =>{
    document.body.classList.toggle("dark-mode")
});


const inovate = document.querySelector('.innovate');
const what_to_inovate = "CODE. CREATE. INNOVATE.";

function textTypingEffect(element, text, i = 0){
    if (i < text.length){
        element.textContent += text[i];
        setTimeout(() => {
            textTypingEffect(element, text, i + 1);
        }, 200)
    }
    else{
        setTimeout(() => {
            element.textContent = "";
            textTypingEffect(element, text, 0);
        }, 3000)
    }
}

textTypingEffect(inovate, what_to_inovate);


const jobs = document.querySelector('.innovate2');
const texts_to_write = ["Creative Web Developer", "Game Development Enthusiast", "Software Engineer"];

function textTypingEffect2(element, text, i = 0, j = 0){
    if (j === text.length)
        j = 0;
    if (i < text[j].length){
        element.textContent += text[j][i];
        setTimeout(() => {
            textTypingEffect2(element, text, i + 1, j);
        }, 200)
    }
    else if (i === text[j].length){
         setTimeout(() => {
            element.textContent = "";
            textTypingEffect2(element, text, 0, j + 1);
        }, 1000)
    }
}

textTypingEffect2(jobs, texts_to_write);


const swiperproject = new Swiper('.swiper', {

  loop: true,
    slidesPreView: 'auto',
    centeredSlides: 'auto',
    spaceBetween: 16,
    grabCursor: true,
    speed: 600,
    effect: 'coverflow',
    coverflowEffect:{
        // rotate: -90,
        depth: 600,
        modifier: .5,
        slideShadows: false,
    },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});


const copyButton = document.getElementById("copyEmail");
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText("mohamedelgarraoui13@gmail.com")
        .then(() => {
            alert("Email copied to clipboard!");
        })
        .catch(() => {
            alert("Failed to copy email.");
        });
});