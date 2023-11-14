//Q16.

function sortArr(array){
    console.log("First 3 numbers before sorting",array.slice(0,3));
    console.log("Last 3 numbers before sorting",array.slice(-3));

    var sortArr= array.sort((a,b)=> a-b);

    var first3=sortArr.slice(0,3) ;
    console.log( "sorted array:",sortArr);
    console.log("first 3 elements of the sorted array:",first3);
}
sortArr([12,34,5,6,9,59,3,2]);