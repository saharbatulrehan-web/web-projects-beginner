

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(reversedStr);
    return cleanStr === reversedStr;
}

function palindromeChecker() {
    const inputText = document.getElementById('inputText').value;
    const result =  document.getElementById('result');
    if (isPalindrome(inputText)) {
        result.textContent = `"${inputText}" is a palindrome!`;
        result.style.color = 'green';
    } else {
        result.textContent = `"${inputText}" is not a palindrome.`;
        result.style.color = 'red';
    }
}

document.getElementById('checkButton').addEventListener('click', palindromeChecker);
