// const user1 = "Sathvik";
// const user2 ="Teju";
// const user3= "Vishnu";
// const user4= "Pavithra";
// const user5 ="Raghu";
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// const users = ["Shravan" , "Sathvik" , "Raghu" , "Teju" , "Vishnu"];
// console.log(users[0]);
// console.log(users[3]);
// for(let i=0;i< users.length;i++){
//     console.log(users[i]);
// }

// let  x = users.map((user)=>{
//console.log(user);//!map method is default method of array.
//     return user;
// });
// console.log(x);

// let  y = users.forEach((user)=>{
//console.log(user);//!for each is called as enhanced for loop.
//     return user;
// });
// console.log(y);

// const users = ["Shravan" , "Sathvik" , "Raghu" , "Teju" , "Vishnu"];

// users.push("Arun");
// console.log(users);

// users.pop();
// console.log(users);

// users.unshift("Mahesh");
// console.log(users);

// users.shift();
// console.log(users);

// console.log(users.reverse());

// const users = ["Shravan" , "Sathvik" , "Raghu" , "Teju" , "Vishnu"];
// let x = users.join("");
// console.log(x , typeof(x));

// let frontend = ["HTML" , "CSS" , "JS" , "REACTJS" , "ANGULAR" ,"VUE"];
// let backend = ["NodeJs" , "Expressjs" , "Java" , "PHP ", "Golang"];
// let db = ["MongoDB" , "MySQL" , "Oracle","MariaDB","CouchDB"];
// console.log(frontend);
// console.log(backend);
// let fullstack = frontend.concat(backend , db);
// console.log(fullstack);

// ! Objects

// let userDetails = {
//     name:"Shravan",
//     age:19,
//     city:"Hyd"
// };
// console.log(userDetails);
// console.log(userDetails.name);

//

// ! nested object

// let userDetails = {
//     name:"Shravan",
//     age:19,
//     city:"Hyd",
//     address:{
//         area:"RamaRam",
//         street:{
//             streetNo:1,
//             pinCode:500035
//         }
//     }
// };
// console.log(userDetails.address.street.pinCode);

// ! create  a  array of objects
// let user1 = {
//   name: "Sam",
//   city: "NewYork"
// }
// let user2 ={
//     name:"Miller",
//     city:"USA"
// }
// let user3 ={
//     name:"Ram",
//     city:"India"
// }
// let user4 ={
//     name:"Shyam",
//     city:"India"
// }
//console.log(user1.name);
// console.log(user2.name);
// console.log(user3.name);
// console.log(user4.name);

// let users = [
//     {
//         name:"Sam",
//         city:"NewYork"
//     },
//     {
//         name:"Miller",
//         city:"USA"
//     },
//     {
//         name:"Ram",
//         city:"India"
//     },
//     {
//         name:"Shyam",
//         city:"India"
//     },
//     {
//         name:"John",
//         city:"Chennai"
//     }
// ];
// users.map((user)=>{
//     console.log(user.name);
// })

// let user1 = {
//   name: "Sam",
//   city: "NewYork",
//   details: function () {
//     return `My name is ${this.name} and i am working in ${this.city}`;
//   },
// };

// console.log(user1.name);
// console.log(user1.details());

//!JSON

let userDetails = {
  name: "Sam",
  age: 25,
  city: "Hyd",
};
console.log(userDetails);

let x = JSON.stringify(userDetails);
console.log("JSON object" + x);

let y = JSON.parse(x);
console.log(y);
