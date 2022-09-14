export function demo() {
let val;

//NOTE: January is month 0.
const today = new Date();
let myDate = new Date('9-10-1981 11:25:00');
myDate = new Date('September 10 1981');
myDate = new Date('9/10/1981');

console.log(today)
val = today.getMonth();
//val = today.getDate();
//val = today.getDay();
//val = today.getFullYear();
//val = today.getHours();
//val = today.getMinutes();
//val = today.getSeconds();
//val = today.getMilliseconds();
//val = today.getTime();

//myDate.setMonth(2);
//myDate.setDate(12);
//myDate.setFullYear(1985);
//myDate.setHours(3);
//myDate.setMinutes(30);
//myDate.setSeconds(25);

console.log(val);
console.log(myDate);
}