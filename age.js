//Q17.

const ageCondition=(age)=>{

    if(age>=0 && age<=12){
        console.log("MIMICRY");
    }
    else if(age>=13 && age<=19){
        console.log("SELF-DISCOVERY");
    }
    else if(age>=20 && age<=45){
        console.log("COMMITMENT");
    }
    else if(age>=46){
        console.log("LEGACY");

    }
}
ageCondition(46);