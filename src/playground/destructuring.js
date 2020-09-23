// Object Destructuring

// const person = {
//     name: 'Jonathan',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age } = person;
// //const name = person.name;
// //const age = person.age;

// console.log(`${firstName} is ${age}.`)

// const{ city, temp: temperature } = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Vancouver', 'BC', '12356'];
const [, city = 'Calgary', province = 'AB', zip] = address;
console.log(`You are in ${city} ${province}`);

const menu = ['Coffee', '$2.00', '$2.99', '$4.99'];
const [item, , mediumPrice] = menu;
console.log(`A medium ${item} cost ${mediumPrice}`);