// If Statement Syntax
if (true) {
    console.log('This is true');
  }

  if (true) {
    document.writeln('This is true');
  }


if(false){
    console.log("This is Not True");
    document.writeln("This is Not True")
}

// Evaluation expressions

const x = 10;
const y = 5;

if(x>=y){
    console.log('${x} is  greater  than or equal to ${y}');
    
}


if(x==y){
    console.log('${x} is  greater then to ${y}');
}else{
    console.log("${x} is Not equal to ${y}");
}


// Block scope
if(x!==y){
    const z =20;
    console.log("${z} is 20");
    
}

console.log(z); // Throw error

//  Shorthand if/Else

if(x>=y){
    console.log("${x} is greater than or equal to ${y} ")
}
else{
    console.log("This is False")
}



var temperature;

//TODO: GO to google and get the data

temperature = 49;

// var result = temperature < 20;
// console.log(result);

if (temperature < 20) {
  console.log("it's very cold outside");
}

 