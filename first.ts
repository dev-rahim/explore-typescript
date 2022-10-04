// console.log('Hello TypeScript');
// console.log('Again Hello TypeScript');
// const n = 12;
// let age = 52;
// console.log(n, age);

let StudentName: string = 'Rahim Uddin';
let StudentAge: number = 22;
let isPresent: boolean = true;

// when reassign the value cannot change the valueType

// StudentAge=''; error
// StudentName=true; error
// isPresent='true'; error


// function add(first: number, second: number): number {
//     const result = first + second;
//     return result;
// }

// const output: number = add(10, 50);

//if we use void then cannot return anything 
function add(first: number, second: number): void {
    const result: number = first + second;
    // return result;
    console.log(result);

}

add(10, 50);
// function add(first: number | string, second: number | string): number | string {
//     const result: string | number = first + second;
//     return result;
// }

// const output: number | string = add(10, 50);