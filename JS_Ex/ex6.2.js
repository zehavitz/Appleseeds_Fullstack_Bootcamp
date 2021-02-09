let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
};

people.shift();
console.log(people);

people.pop();
console.log(people);

people.splice(0, 0, "Matt");
console.log(people);

people.push("Zehavit");
console.log(people);

let j=0;
while (people[j] != "Mary" && j<people.length) {
   console.log(people[j]);
    j++
    console.log(people[j]);
};

let people2 = people.slice(2, 4);
console.log(people2);

let m=people.indexOf("Mary");
console.log(m);

let f=people.indexOf("Foo");
console.log(f);

people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

let withBob=people.concat("Bob");
console.log(withBob);