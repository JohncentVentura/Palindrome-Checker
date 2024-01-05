const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result')

checkBtn.addEventListener("click", event => {
    event.preventDefault();

    if (!textInput.value) {
        alert("Please input a value");
    } else {
        //let regex matches any (global) non-word character & spaces
        let regex = /[\W_]/g;
        let str = textInput.value;

        //Change str to be same case, lower case in this case,
        //Replace regex into "" that basically means nothing
        let lowerCaseStr = textInput.value.toLowerCase().replace(regex, "");

        //Make lowerCaseStr into an array, sort it in reverse, and assign it as a string
        let reversedStr = lowerCaseStr.split("").reverse().join("");

        //return true if reversedStr is the same with lowerCaseStr, else return false
        if (reversedStr === lowerCaseStr) {
            result.innerText = `${str} is a palindrome`;
        } else {
            result.innerText = `${str} is not a palindrome`;
        }
    }
});