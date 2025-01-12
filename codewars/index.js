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

function findNextSquare(sq) {
    if (sq > 0) {
        let root = Math.sqrt(sq)
        if (Number.isInteger(root)) return (root + 1) ** 2;
    }
    return -1;
}

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

function DNAtoRNA(dna) {
    return dna.replaceAll("T", "U")
}

function oddOrEven(array) {
    let sum = 0;
    array.forEach(element => {
        return sum += element
    });
    return sum % 2 === 0 ? 'even' : 'odd'
}

var countSheep = function (num) {
    if (num === 0) return "";
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}

const stringToNumber = function (str) {
    return Number(str);
}

function past(h, m, s) {
    return h * 3600 * 1000 + m * 60 * 1000 + s * 1000;
}

function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce((a, b) => a + b, 0) + yourPoints) / (classPoints.length + 1) <= yourPoints ? true : false;
}

function opposite(number) {
    return number * -1;
}

function duplicateCount(text) {
    let numCount = {}
    let reqText = text.toLowerCase().split('')
    if (reqText.length > 0) {

        reqText.map((letter) => {
            (letter in numCount) ? numCount[letter] += 1 : numCount[letter] = 1
        })

        return Object.values(numCount).filter(value => value > 1).length;
    } return 0;
}

function findSmallestInt(arr) {
    return Math.min(...arr);
}

function order(words) {
    if (!words) return "";
    return words
        .split(" ")
        .sort((a, b) => {
            let num1 = a.match(/\d/)
            let num2 = b.match(/\d/)

            return num1 - num2
        }).join(' ')
}

function findUniqNum(arr) {
    arr.sort((a, b) => a - b)
    return arr[arr.length - 2] !== arr[arr.length - 1] ? arr[arr.length - 1] : arr[0] !== arr[1] && arr[0]
}

function findUniqStr(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    return arr[arr.length - 2] !== arr[arr.length - 1] ? arr[arr.length - 1] : arr[0] !== arr[1] && arr[0]
}

function areYouPlayingBanjo(name) {
    return name.toUpperCase().match(/^R/) ? name + " plays banjo" : name + " does not play banjo";
}

function findShort(s) {
    return s.split(' ').sort((a, b) => {
        let num1 = a.length
        let num2 = b.length

        return num1 - num2
    })[0].length
}

function sumMix(x) {
    return x.reduce((a, b) => Number(a) + Number(b), 0)
}


