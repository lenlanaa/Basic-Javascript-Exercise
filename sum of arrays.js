//Q5.

function myArray(array){
    let sum = 0;
    for(let i= 0; i < array.length;  i++){
        sum+=array[i];
    }
    return sum;
}
console.log(myArray([1,5,2,3,4]));