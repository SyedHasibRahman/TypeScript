/* 
const myNumber = 5;
const myName = 'SyedHasib';
console.log('Explore TypeScript', myNumber, myName);
console.log('Explore TypeScript to Javascriptnp');
 */

let money: number = 5;
let honey: string = 'Syed Hasib';
let funny: boolean = true;


function sum(first: number, second: number): number {
    const result = first + second;
    return result;
}

const output: number = sum(2, 45);

function doubleNumber(num: number): number {
    console.log(num * 2);
    return num;
}

/*
function sum(first: number | string, second: number | string): number | string {
    const result = first + second;
    return result;
}

const output: number | string = sum(2, 45); */