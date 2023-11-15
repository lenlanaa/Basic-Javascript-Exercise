//Q26.

function factorial(a){
    num=1;
    if(a<0){
        return "Invalid input";
    }
    else{
        for(let i=a; i>0; i--){
            num*=i;
        }
        return num;
    }
}
console.log(factorial(4));
