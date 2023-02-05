const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusText = document.querySelector(".status-text");

// stored all captcha character in a variable
let allCharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const getCaptcha = ()=>{
    for(let i=0; i<6; i++){ // getting 6 random character from the array
        let randomChar = allCharacter[Math.floor(Math.random() * allCharacter.length)];
        captcha.innerText += ` ${randomChar}`;    // passing 6 random character inside the captcha innerText
    }
}
reloadBtn.addEventListener("click",()=>{
    captcha.innerText = "";
    getCaptcha();
})
checkBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let inputVal = inputField.value.split('').join(' ');
    if(inputVal === captcha.innerText){
        statusText.innerHTML = `You get it right, You're not a robot`
        statusText.style.color = "#7ae0d8"
        statusText.classList.add("show");
        setTimeout(() => {
            captcha.innerText = "";
            getCaptcha();
            statusText.classList.remove("show");
            statusText.innerHTML = `Captcha not matched, Please try again`
            statusText.style.color = "#ff0000"
            inputField.value = "";
        }, 4000);
    }else{
        statusText.classList.add("show");
        statusText.innerHTML = `Captcha not matched, Please try again`;
        statusText.style.color = "#ff0000"
        setTimeout(()=>{
            statusText.classList.remove("show");
        },1000)
    }
})
getCaptcha();