//Q28.

function palindrome(word){
    var rslt;
    var arr=word.split("");
    var rev= arr.reverse().join("");

    if(word===rev){
        rslt = "palindrome";
        
    }
    else{
        rslt = "not a palindrome";
    }

    return rslt;
}

console.log(palindrome("2002"));