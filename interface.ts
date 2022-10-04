interface Player {
    name: string,
    club: string,
    wifeName?: string,
    salary: number,
}

const messy: Player = {
    name: 'L messy',
    club: 'abahoni',
    salary: 1250,
    wifeName: 'bidda'

}
const hannan: Player = {
    name: 'L messy',
    club: 'abahoni',
    salary: 12500,
}

interface Employee {
    name: string,
    salary: number,
    designation: string,
    age: number,

}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number,
}
const zukku: Developer = {
    language: 'JS',
    codeEditor: 'Vs-Code',
    typingSpeed: 50,
    name: 'Mark Jukar Barg',
    age: 30,
    designation: 'JS Developer',
    salary: 200000,
}