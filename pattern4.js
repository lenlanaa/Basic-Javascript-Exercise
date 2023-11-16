Q13.

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

// function pattern(size){
//     for( let i=size;i>=0;i--){
//         var arr = "";
//         for( let j=0;j<size;j++){
             
//              if(i===j){
//                 arr +="1 ";
//              }
//              else{
//                 arr +=" ";
//             }
//         }
        
//         console.log(arr);
//     }
   
// }
// pattern(5);