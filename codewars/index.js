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
    let sum = 0;
    if (array && array.length > 2) {
        const min = Math.min(...array), max = Math.max(...array);
        const minIndex = array.indexOf(min);
        array.splice(minIndex, 1);
        const maxIndex = array.indexOf(max);
        array.splice(maxIndex, 1)
        array.map((num) => sum += num);
    } return sum;
}

function abbrevName(name) {
    const arr = name.toUpperCase().split(' ')
    const initialsArray = arr.map((item) => item[0])
    const initials = initialsArray.join('.')
    return initials;
}

function findNeedle(haystack) {
    const res = haystack.indexOf('needle')
    return res > -1 && `found the needle at position ${res}`;
}

function findAverage(array) {
    return array.length > 0 ? array.reduce((sum, item) => sum += item, 0) / array.length : 0
}


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft ? true : false;
};

const reverseSeq = n => {
    let list = []
    while (n > 0) {
        list.push(n)
        n--;
    }
    return list;
};

function squareSum(numbers) {
    return numbers.length > 0 ? numbers.reduce((acc, num) => acc += num ** 2, 0) : 0
}

function highAndLow(numbers) {
    const nums = numbers.split(' ')
    const min = Math.min(...nums), max = Math.max(...nums)
    return (`${max} ${min}`)
}

function getSum(a, b) {
    let sum = 0;
    if (a <= b) {
        for (a; a <= b; a++) {
            sum += a
        }
        return sum;
    } else if (a >= b) {
        for (b; a >= b; b++) {
            sum += b
        }
        return sum;
    } return a;
}

function longest(s1, s2) {
    let str = s1.concat(s2)
    let res = [...new Set(str)].sort().join('')
    return res;
}

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}

function descendingOrder(n) {
    let str = n.toString();
    return str.length > 1 ? parseInt(str.split('').sort().reverse().join('')) : n;
}

function squareDigits(num) {
    return parseInt(num.toString().split('').reduce((acc, item) => acc.concat(item ** 2), ''));
}

function isIsogram(str) {
    return str.toUpperCase().length === [...new Set(str.toUpperCase())].length ? true : false;
}

function countSheeps(sheep) {
    let count = sheep.filter((item) => item === true);
    return count.length;
}

function digitize(n) {
    return n.toString().split('').reverse().map(Number)
}

console.log(digitize(324234));

