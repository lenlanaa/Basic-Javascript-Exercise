//Q36.

function consonantstring(word){

    var consto = ['b','c','d','f','g','h','j','k','l','m','p','n','w','t','v','r','s','q','y','z','x'];

    var lcase = word.toLowerCase();
    var con = 0;
    for(var i=0; i < lcase.length; i++){
        if(consto.includes(lcase[i])){
            con++;
        }
    }

    return con;
}

console.log(consonantstring("Laena"));