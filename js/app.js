let numbers = [1, 2, 4, 5, 6, 4, 8]
let i = 0

while (i < numbers.length) {
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
    i++
}