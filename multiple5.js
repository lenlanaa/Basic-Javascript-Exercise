//Q30.

function multipleOf5(x,y){
    for (let i=x; i<=y; i++){
        if (i%5===0) {
            console.log(i);
        }
    }
}

console.log("multiples of 5");
multipleOf5(1,86);