function lovefunc(flower1, flower2) {
    petalFlower1 = parseInt(flower1)
    petalFlower2 = parseInt(flower2)

    let isLove = false;

    if ((petalFlower1 % 2 === 0 && petalFlower2 % 2 !== 0) || (petalFlower2 % 2 === 0 && petalFlower1 % 2 !== 0)) {
        isLove = true
    }

    return isLove;
}

function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

function positiveSum(arr) {
    let sum = 0;
    arr.map((item) => { if (item >= 0) sum += item })
    return sum
}

function repeatStr(n, s) {
    let string = ''
    for (let i = 0; i < n; i++) {
        string += s
    }
    return string;
}

function repeatStr(n, s) {
    return s.repeat(n);
}

function paperwork(n, m) {
    if (n < 0 || m < 0) return 0;
    else return n * m
}

function sumArray(array) {

}

let arr = [1, 1, 11, 2, 3];
const min = Math.min(...arr), max = Math.max(...arr)
console.log(sumArray(arr));
console.log(min, max);

