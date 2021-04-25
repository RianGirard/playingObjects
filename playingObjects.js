var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];  // object array with several key|value pairs
for (var person in users){   // for this new variable in the Object group
    console.log(`${users[person].name} - ${users[person].age}`);   // print the name and age for each of the qualifying new variables in the Object group
}
