//Q19.

function strlength(str){
    var splitStr=[];
    var splitStr=str.split("");
    var t=0;


    for(let i=0; i <splitStr.length; i++){
        if(splitStr[i]===" "){
            t++;
        }

    }
    var nbrOfChar =(splitStr.length)-t;
    return nbrOfChar;
    
}
console.log(strlength("Anhyeonghaseo"));
 