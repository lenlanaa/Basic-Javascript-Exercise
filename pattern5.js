//Q14.

function pattern(x){
    for(let i= 0; i< x; i++){
        var arr=[];
        for(let j= x-1; j >= 0; j--){
            if(i===j){
                arr += "1 ";
            }
            else{
                arr += " ";
            }
        }
        console.log(arr);
    }
}
pattern(4);