"use strict";
const salary = 7500;
const friendSalarys = [7500, 12300, 8700.9400, 11100];
const friends = ['Hasib', 'Rakib', 'Opu', 'Rasel'];
friendSalarys[0] = 10500;
friendSalarys.push(13100);
friendSalarys[4] = 9800;
// friendSalarys.push = '9800'; Error
friends.push('Arif');
friends[2] = 'Hamim';
let max = 0;
for (const salary of friendSalarys) {
    if (salary > max) {
        max = salary;
    }
}
console.log(max);
