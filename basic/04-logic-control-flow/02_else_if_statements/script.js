temperature = 49;


if (temperature < 30) {
  console.log("It's moderate outside");
} else {
  console.log("It's really HOT outside");
}

// current data object 
const d = new Date();
// find the only hour date object
const hour = d.getHours();

// Print the hour 
document.writeln(hour);

if(hour<12){
    console.log("Good morning");
}
else if (hour <18){
    console.log("Good Afternoon");
}
else{
    console.log("good Night");
}

// Nested if

if(hour<12){
    document.writeln("Good Morning");
    if(hour==6){
        document.writeln("Wake Up!");
    }
} else if(hour<10){
    document.writeln("Good Afternoon");
} else{
    document.writeln("Good Night");
    if(hour>=20){
        document.writeln("Mid Night")
    }
}


if(hour>=7 && hour<15){
    document.writeln("It is work time!");
}

if(hour == 6 || hour == 20){
    document.writeln("Brush your teeth !")
}

