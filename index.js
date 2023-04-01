const data = require('./friends_data.json');

console.log(data.students[0].friends[0].name);


console.log(data.students[0].friends[1].age);

console.log(data.students[1].languages[2]);

 for ( x in data ) {
    console.log(data[x]);
}

data.students[0].friends[0].name = "abhishek"

console.log(data.students[0].friends[0].name);

delete data.students[0];

console.log(data);

const data2 = {
    name : "anisul",
    age : 22,
}

console.log(JSON.stringify(data2));

console.log(JSON.parse('{"name" : "anisul", "age" : 25}'));