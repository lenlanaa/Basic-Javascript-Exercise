//Q7.

function smallest(arr){
    var smaller;
    for(let i=1; i<arr.length; i++){
    if(arr[i] < arr[i-1]){
       smaller=arr[i];
  }  


}
return smaller;
}
console.log(smallest([12,4,57]));
