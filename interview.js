//Function Factory:

//Function Factory is used when we want to fix logic
//  once and reuse it with different inputs
/*
function makeMultiplier(multiplier){
    return function(number){
        return multiplier * number
    }
}
const double=makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5));;
console.log(triple(5));

*/

//button clicking
/*
function setupButton(buttonId){
    let count=0;
    let button=document.getElementById(buttonId);
    button.addEventListener("click", function(){
        count++;
        console.log(`Button Clicked ${count} times `);
        this.innerHTML=`${count} times`
    });
}
setupButton("myButton")
*/

/*
//Memory management

// function factorial(n){ 
//      //5 = 1*2*3*4*5

//     console.log("Function running")
//     let fact=1
//     for(let i=1;i<=n;i++){
//        fact= fact*i
//     }
//     return fact;
// }
// console.log(factorial(5));
// console.log(factorial(5));
// console.log(factorial(5));

//to slove using clouse memorize

function memorize(fn){

    const cache ={};
    return function (n){
        const key =n;
        if(cache[key]){
            console.log("Data Already Found");
            return cache[key]
        }
      
        const result =fn(n);
        cache[key]=result;
        return result;
    };

}
const factorial = memorize(function(n){
  console.log("Function Running");
      console.log("Function running")
      let fact=1
      for(let i=1;i<=n;i++){
         fact= fact*i
      }
      return fact;
})

console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(5));

*/

//Curring:


//normal function
/*
function add(a,b,c){
    return a+b+c;

}
console.log(add(1,2,3))

//rewrite the function:

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}
console.log(add(1));
console.log(add(1)(2));
console.log(add(1)(3));
*/


//form validation (using curring):

/* //noraml function
function validationInput(minLength,maxLength,input){
    if(input.length<minLength)
        return `Input is too short.Minimum is ${minLength}`;

     if(input.length>maxLength)
        return `Input is too long.Maximum is ${maxLength}`;
         return "valid input";
}
console.log(validationInput(3,10,"hello"))
*/

function validationInput(minLength){
    return function (maxLength){
        return function (input){
            if (input.length < minLength)
              return `Input is too short.Minimum is ${minLength}`;

            if (input.length > maxLength)
              return `Input is too long.Maximum is ${maxLength}`;
            return "valid input";
        }
    }
}
//username 3,10

const validateUsername =validationInput(3)(10);
console.log(validateUsername("hello"));

//name min5 max 15

const validatename = validationInput(5)(15);
console.log(validatename("haii"));