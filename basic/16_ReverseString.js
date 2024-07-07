/* The statement of the problem:
   Write a JavaScript function reverses string and
   returns it.
   Example: "sample" 
*/

const str = "sample"

const reversed = str.split("").reverse().join("");
console.log(reversed)


// Reading the input data.
 
function revestring(str1){
    let reversed = " ";
    for(let i=str1.length-1; i>=0; i--){
        reversed += str[i];

    }
    return reversed
}
console.log(revestring("sample"))


function revesstring(str){
    const revesstring = str.split("").reverse().join("");
    return revesstring;
}
console.log(revesstring(str))