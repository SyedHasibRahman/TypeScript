interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: string[]
}

const messy: Player = {
    name: 'L Messy',
    club: 'Abahoni',
    salary: 12000,
    wife: 'Wife'
}

const hannan: Player = {
    name: 'A. Hannan',
    salary: 2000,
    club: 'Kolabagan'
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Develper extends Employee {
    Language: string,
    codeEditor: string,
    typingSpeed: number,
}

const Hasib: Develper = {
    name: 'Syed Hasibur Rahman',
    designation: 'Kamla',
    salary: 2000,
    age: 13,
    Language: 'JS',
    codeEditor: 'VS Code',
    typingSpeed: 65,
}