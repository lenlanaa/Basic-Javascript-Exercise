function pattern(rows){
    for(let b=0; b < rows; b++){
        var arr=[];
        for(let i = rows-1; i >= b; i--){
            arr += "1 ";
        }
        console.log(arr);
    }
}
pattern(5);