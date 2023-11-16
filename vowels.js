//Q35.

function countVowels(vowel){
    var vow = ['a','e','u','o','i'];

    var lcase = vowel.toLowerCase();

    var vowl = 0;
    for(var i=0; i < lcase.length; i++){
        if(vow.includes(lcase[i])){
            vowl++;
        }
    }

    return vowl;
}

console.log(countVowels("Laena"));