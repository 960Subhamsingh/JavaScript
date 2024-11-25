const date_1 = new Date();

const month = date_1.getMonth();

const hour = date_1.getHours();

// Immediate value evaluation

switch (month){
    case month=="Jan":
        console.log("It is January");
        document.writeln("It is January");
        break;
    case month=="Mar":
        console.log("It is February");
        document.writeln("It is February");
    case month=="Sep":
        console.log('It is March');
        document.writeln("It is March")
        break;
    case 3:
        console.log('It is  septemer');
        document.writeln("It is septemer");
        break;
    default:
        console.log('It is not Jan, Feb or March');
        document.writeln("It is not Jan, Feb or March")
        break;
}


 // Range evaluation

 switch(true){
    case hour<12:
        console.log("Good Morning");
        document.writeln("Good Monrning");
        break;
    case hour<18:
        console.log("Good AfterNoon");
        document.write("Good AfterNoon");
    default:
        console.log("Good Evening");
        document.log("Good Night");
 }