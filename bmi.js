//Q18.

function weight(w,h){
    var bmi= w/(h*h);
    if(bmi < 20){
        console.log("Underweight");
    }
    else if(bmi >= 20 && bmi < 28){
        console.log( " Weight")
    }
    else if(bmi >=28 && bmi < 35){
        console.log("OverWeight");
    }
    else{
        console.log("Obesity");
    }
}

weight(51,1.7);