const inputText = document.querySelector(".inputs input");
const checkButton = document.querySelector(".inputs button");
const infoText = document.querySelector(".info-text");
let userInput;
checkButton.addEventListener("click", () =>{
  //splitting and reversing userinput, and then joining them into a single word
  let reverseInput = userInput.split("").reverse().join("");
  infoText.style.display = "block";
  if(reverseInput !== userInput){
    return infoText.innerHTML = `No, <span>'${inputText.value}'</span> isn't a palindrome!`;
  }else{
    return infoText.innerHTML = `Yes, <span>'${inputText.value}'</span> is a palindrome!`;
  }
});
inputText.addEventListener("keyup", ()=> {
  //removing spaces and all special characters from the entered value
  userInput = inputText.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  if(userInput){
    return checkButton.classList.add("active");
  }else{
    checkButton.classList.remove("active");
  }
});