const salary: number = 7500;
const friendSalaries: number[] = [7550, 12300, 85620, 8526, 85621];
const friends: string[] = ['Rahkib', 'komola', 'kamil', 'Ashik', 'anisha'];
friendSalaries[0] = 15000;
friendSalaries.push(15500);
// friendSalaries[4] = '15000'; error
// friendSalaries.push('15500'); error

let max: number = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}