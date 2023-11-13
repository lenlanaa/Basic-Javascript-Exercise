function combine(arrayOne,arrayTwo){
    let comb = arrayOne.concat(arrayTwo);
    return comb;
}
var arrayOne = ['a','b','c','d'];
var arrayTwo = ['e','f','g'];
let resu= combine(arrayOne,arrayTwo);
console.log(resu);