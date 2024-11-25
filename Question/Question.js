function f(){
    if(true){
        let count = 12;
        console.log(count);
    }
    }
f();

// Types oc condition statements

//  1. if/eles statment

let x = 12;
if(x>10){
    console.log("!");
} else if(x>= 12){
    console.log("equal");
}else{
    console.log("Finally")
}

//  2. Ternary Operator

let  y = 12
let z=y>10 ? "1":"2";
console.log(z);

// Switch statement

let a = 15;
switch(a){
    case 1:
        console.log("1");
            break;
    case 4:
        console.log("4");
        break;
    case 15:
        console.log("Finally");
}

// What is the different betweeen == and ==?

console.log(1==1);
console.log("a"==1);

// What is the diffence betweeen Spread and Rest Operator?

const array = [1,3,4,5];
console.log(...array);


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

const array1 = [1,2,3,3,4,5]
let c = arr1.find((Number) => Number%2==0);
console.log(c);

// what is the slice method of an array?
// find()
// filter()
// slice()

const array3= ["A","B","C","D","E"];

let e = array3.slice(1,4);
console.log(e);


//  what is different between while loop and do while loop?

let a1 = 12;
do{
    console.log(a1);
    a1++;
     
}
while(a1<12);


// 

(function() {
    console.log("IIFE executed");
})();



/* Question 2
You are given a variable “marks”. Your task is to print:
- AA if the mark is greater than 90
- AB if the mark is greater than 80 and less than or equal to 90
- BB if the mark is greater than 70and less than or equal to 80
- BC if the mark is greater than 60 and less than or equal to 70
- CC if the mark is greater than 50 and less than or equal to 60
- CD if the mark is greater than 40 and less than or equal to 50
- DD if the mark is greater than 30 and less than or equal to 40
- FF if the mark is less than or equal to 30
 */
 
var marks = 52;
 
if (marks > 90){
    console.log("AA")
}
else if (marks < 90 && marks > 80){
    console.log("AB")
}
else if (marks < 80 && marks > 70){
    console.log("BB")
}
else if (marks < 70 && marks > 60){
    console.log("BC")
}
else if (marks < 60 && marks > 50){
    console.log("CC")
}
else if (marks < 50 && marks > 40){
    console.log("CD")
}
else if (marks < 40 && marks > 30){
    console.log("DD")
}
else{
    console.log("FF")
}
