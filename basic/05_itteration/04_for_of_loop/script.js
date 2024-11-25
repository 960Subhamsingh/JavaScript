const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];


for(const item of items){
    console.log(item);    
}

for(const user of users){
    console.log(user.name);
}

// string loop

const str = 'Hello World';

for(const letter of str){
    console.log(letter);
}

// Maps 

const map = new Map();
map.set('name', 'Subham');
map.set('age',21);

for(const [key, value] of map) {
    console.log(key, value);
}

