//Q13.

function pattern(x){
    for(let j = 0; j < x; j++){
        var arr=[];
        for(let i = 0; i < x; i++){
            if(i=== 0 || i===x-1 || j===0 || j===x-1){
                arr += "1 ";
            }
            else{
                arr += "0 ";
            }
        }
        console.log(arr);
    }
}
pattern(5);