let person={
          name:"Abhishek",
          age:21,
          hobbies:["cricket","photography"]
};

let persons=[
          {name:"kelly",age:24},
          {name:"hayato",age:27},
          {name:"Maro",age:29}

];

function findByAge(persons,age)
{
          return persons.filter(persons=>persons.age>age).map(persons=>persons.name)
}
console.log((findByAge(persons,25)));