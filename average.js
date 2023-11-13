//Q8.


function myArray(array){
    let sum = 0;
    let average = 0;
    for(let i= 0; i < array.length;  i++){
        sum += array[i];
        average = sum / array.length;
    }
    return average;
}
console.log(myArray([2,4,3,2,8,4]));