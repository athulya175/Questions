const names=["Spongebob","Patrick","Suidward","Sandy"]  // array

const person={
    "name":"Spongebob",
    "age":30,
    "isEmployed":true,
    "hobbies":["Jellyfishing","karate","Cooking"]
}                                              // Object
const people=
[{"name":"Spongebob","age":30,"isEmployed":true},
{"name":"patrick","age":34,"isEmployed":false},
{"name":"Squidward","age":50,"isEmployed":true},
{"name":"Sandy","age":27,"isEmployed":false}
]                                           //array of object

// to converst a js object to JSONstring we use stringify method

const jsonString=JSON.stringify(names)
console.log("withoutStringify:",names)  // op be a array
console.log(`Stringify ${jsonString}`)  // op be a large string

const JsonStringPerson=JSON.stringify(person)
console.log("WithoutStringify",person) // object
console.log("WithStringify",JsonStringPerson) // one long string


const jsonStringPeople=JSON.stringify(people)
console.log("WithoutStringify",people)  // array of objects
console.log("withStringify",jsonStringPeople)   //a one long string

// Parse() is used to convert a JSON String to js object

// to convert the object to a string we can surround them with backticks
const jsonNames=`["Spongebob","Patrick","Suidward","Sandy"]`  // array

const jsonPerson=`{
    "name":"Spongebob",
    "age":30,
    "isEmployed":true,
    "hobbies":["Jellyfishing","karate","Cooking"]
}`                                              // Object
const jsonPeople=`[{"name":"Spongebob","age":30,"isEmployed":true},
{"name":"patrick","age":34,"isEmployed":false},
{"name":"Squidward","age":50,"isEmployed":true},
{"name":"Sandy","age":27,"isEmployed":false}
] `  

const parseName=JSON.parse(jsonNames)
console.log("withoutParse",jsonNames)
console.log("WIth parse",parseName)

const parsePerson=JSON.parse(jsonPerson)
console.log("withoutParse",jsonPerson)
console.log("WIth parse",parsePerson)

const parsePeople=JSON.parse(jsonPeople)
console.log("withoutParse",jsonPeople)
/*
console.log("WIth parse",parsePeople)

    //fetching json file

    fetch("./People.json")
    .then(response=>response.json())
    .then(values=>values.forEach(value=>console.log(value.name)))
    .catch(error=>console.error(error));
*/

/********************************************************** */
const myObj={name:"Dave",
    hobbies:["eat","sleep","code"],
    hello:function(){
        console.log("hello")
    }
}
console.log(myObj)
console.log(myObj.name)
myObj.hello()

const sendJson=JSON.stringify(myObj)
console.log(sendJson)

const receivedJson=JSON.parse(sendJson)
console.log(receivedJson)   // the thing is we 1st changes the json object to string that time we losts the method(hello)