// looping of obj

const obj = {
    color1 : 'red',
    color2 : 'blue',
    color3 : 'Yellow',
    color4 : 'Green',
};


for(const key in obj){
    console.log(key, obj[key]);
}


//  loop of array

const name = ['Monu','Sonu','Gita','Shyam','Raj']

for(const key in name){
    console.log(name[key])
}