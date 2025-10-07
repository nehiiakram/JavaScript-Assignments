

function checkPalindrome() {
      let word = document.getElementById("word").value.toLowerCase();
      let reversed = word.split("").reverse().join("");

      if (word === "") {
        document.getElementById("result").innerText = "Please enter a word!";
      } 
      else if (word === reversed) {
        document.getElementById("result").innerText = word + " is a Palindrome ✅";
      } 
      else {
        document.getElementById("result").innerText = word + " is NOT a Palindrome ❌";
      }
    }