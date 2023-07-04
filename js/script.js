let num = -124;
let x = 100 + (num *= 5);
console.log(x);
// -520  !

// ----------

console.log("" + 15 + 5);
// 155  !

console.log("" - 10 + 5);
// -5  !

console.log(false + true);
// 1  !

console.log(69 / "3");
// 23   !

console.log("10" * "20");
// 200  !

console.log(12 + 10 + "px");
// 1210   ?   22px

// ------------------

let question = 'Выбери чётное число в интервале...';
console.log(question);

let numb = 'от 10 до 50';

let replyUser = prompt (question, numb);
console.log(replyUser);
console.log(typeof replyUser);

let result = replyUser / 2;
console.log(result);

// ------min 1

let a = 0.2;
let b = 0.1;

let sum = +(a + b).toFixed(1);
console.log (sum);

// ------min 2

let c = "1";
let d = 2;

let result_2 = (Number(c) + d);
console.log (result_2);

// ------min 3

let question_2 = 'Вкажи обсяг флешки в ГБ';
console.log(question_2);

let replyUser_2 = prompt (question_2, '');
console.log (replyUser_2);

let result_3 = +(replyUser_2 * 1024 / 820).toFixed(2);
console.log (result_3);