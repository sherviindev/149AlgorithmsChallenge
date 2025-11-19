export function addTwoDigits(n: any): number {

        return n
        .toString()
        .split('')
        .map(Number)
        .reduce((sum: number, digit: number) => sum + digit, 0);


}

console.log(addTwoDigits(29));

