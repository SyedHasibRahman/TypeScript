const city: string = 'Dhaka';
const fruits: string[] = ['Mango', 'Banana', 'apple'];

type Person = {
    name: string,
    age: number,
    salary: number
}
const student: Person = {
    name: 'Syed Hasib',
    age: 115,
    salary: 4500,
}
const employee: Person = {
    name: 'Rakib',
    age: 28,
    salary: 9000,
}

function getSalary(player: { name?: string, salary: number }):
    number {
    return player.salary;
}
getSalary({ salary: 50000 });

function getSalary2(player: Person): number {
    return player.salary;

}