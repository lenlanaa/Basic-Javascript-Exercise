//Q6.

function greatest(arr){
    var greater;
    for(let i=1; i<arr.length; i++){
    if(arr[i] > arr[i-1]){
       greater=arr[i];
  }  
//   else{
//     greater=arr[i-1];
//   }

}
return greater;
}
console.log(greatest([12,4,57,8,86,5,657,868]));

//second way

// function greatest(arr){
//   var sortedArray =arr.sort((a,b) => b-a);
//   return sortedArray[0];
// }
// console.log(greatest([30,90,202,088,0098]));