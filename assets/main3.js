//SNACK 3
function reverseWord (word){
    var parola = "";
    for (var i = (word.length - 1); i>=0; i--){
        parola += word[i];
    }
    return parola
}

console.log(reverseWord("Hello"));


//ISSUE - this doesn't work