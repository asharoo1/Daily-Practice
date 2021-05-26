console.log("Hello JSON");
// Displaying JSON object as JS Object JSON toObject
// var myJSON = '{ "name": "ASHAR","age":25, "city": "Mumbai"}';
// var myObj = JSON.parse(myJSON);

// console.log(myObj);


// Object to JSON
// myObj = {name: "ashar", age: 25, city: "mumbai"};
// myJSON = JSON.stringify(myObj);

// console.log(myJSON);

// Store and retrieve data from local storage.
var myObj, myJSON, text, obj;

// storing Object
// myObj = {name: "ashar", age: 25, city: "mumbai"};
// myJSON = JSON.stringify(myObj);

// localStorage.setItem("textJSON", myJSON);

//Retreiving DATA

// text = localStorage.getItem("textJSON");
// obj = JSON.parse(text);


// console.log(obj);


// JSON from the server

// var xhr = new XMLHttpRequest();
// document.getElementById("demo1").innerHTML = "Ashar";
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
// //   if (this.readyState == 4 && this.status == 200) {
//     var myObj = JSON.parse(this.responseText);
//     console.log(myObj);
// //   }
// };
// xmlhttp.open("GET", "json_demo.txt", true);
// xmlhttp.send();

// Parsing Dates
// var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
// var obj = JSON.parse(text);
// console.log(obj);

// obj.birth = new Date(obj.birth);
// console.log(obj);

// Convert a string into a date, using the reviver function:
// var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
// var obj = JSON.parse(text, function (key, value) {
//     if (key == "birth") {
//       return new Date(value);
//     } else {
//       return value;
//     }
//   });

// console.log(obj.birth);

// Parsing Functions

// var text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
// var obj = JSON.parse(text);
// obj.age = eval("(" + obj.age + ")");

// console.log(obj);
// console.log(obj.age());

// stringify object
// var arr = [ "John", "Peter", "Sally", "Jane" ];
// var myJSON = JSON.stringify(arr);
// console.log(myJSON);

// stringify date and function
// var obj = { name: "John", date: new Date(), age: function () {return 30;}, city: "New York"};
// obj.age = obj.age.toString();
// var myJSON = JSON.stringify(obj);

// console.log(myJSON);
// console.log(myJSON.age());

// Looping in JS Object

// myObj = { "name":"John", "age":30, "car":null };
// for(x in myObj){
//     // console.log(x);
//     console.log(myObj[x]);
// }

// Nested JSON Objects

// var myObj = {
//     "name":"John",
//     "age":30,
//     "cars": {
//       "car1":"Ford",
//       "car2":"BMW",
//       "car3":"Fiat"
//     }
//    }
// console.log(myObj.cars.car1);
// console.log(myObj.cars.car3);
// console.log(myObj.cars["car2"]);

// // Modify Values

// myObj.cars.car1= "Audi";
// myObj.cars["car2"] = "Mercedes";
// console.log(myObj);

// // delete json objects

// delete myObj.cars.car2;
// console.log(myObj.cars.car2);

// Arrays in JSON Objects

// var myObj = {
//     "name":"John",
//     "age":30,
//     "cars":[ "Ford", "BMW", "Fiat" ]
// }
// // Accessing Array Values
// console.log(myObj.cars[2]);

// // Looping Through an Array

// for( x in myObj.cars){
//     console.log(myObj.cars[x]);
// }

// for (i = 0; i < myObj.cars.length; i++) {
//     console.log(myObj.cars[i]);
// }

// Nested Arrays in JSON Objects
var myObj = {
    "name":"John",
    "age":30,
    "cars": [
      { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
      { "name":"BMW", "models":[ "320", "X3", "X5" ] },
      { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
   }

// accessing array elements
for(i in myObj.cars){
    console.log(myObj.cars[i]);
    for(j in myObj.cars[i]){
        console.log(myObj.cars[i].models[j]);
    }
}

// Modify Array Values
myObj.cars[1] = "Mercedes";
console.log(myObj.cars[1]);

// Delete Array Items
delete myObj.cars[1];
console.log(myObj.cars[1]);