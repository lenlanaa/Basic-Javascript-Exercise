//Q12.

function pattern(x){
    for(let j = 0; j < x; j++){
        var arr=[];
        for(let i = x; i >= 0; i--){
            if(i >= j){
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