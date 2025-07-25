/* TASK 1 */
// #1
let item_1;

// #2
item_1 = 5;

// #3
console.log(item_1);

// #4
let item_2;

// #5
item_2 = 3;

// #6
console.log(item_2);

// #7
let item_3;

// #8
item_3 = item_1 + item_2;

// #9
console.log(item_3);

// #10
let item_4;

// #11
item_4 = 'Hello World';

// #12
console.log(item_4);

// #13
console.log(item_3 + item_4);

// #14
console.log(item_3 * item_4);

// #15
let item_5;

// #16
item_5 = item_3;

// #17
let item_6;

// #18
let item_6_type;

// #19
item_6 = 15;

// #20
item_6_type = typeof item_6;

// #21
console.log(`item_6 == ${item_6}, item_6_type == ${item_6_type}`);
console.log('item_6 == ' + item_6 + ', item_6_type == ' + item_6_type);

// #22
let item_7 = String(item_6);

// #23
let item_7_type;

// #24
item_7_type = typeof item_7;

// #25
console.log(`item_7 == ${item_7}, item_7_type == ${item_7_type}`);
console.log('item_7 == ' + item_7 + ', item_7_type == ' + item_7_type);

/* TASK 2 */
const randomNumber = 5;
console.log(
  randomNumber +
    Number(String(randomNumber) + String(randomNumber)) +
    Number(String(randomNumber) + String(randomNumber) + String(randomNumber)),
);