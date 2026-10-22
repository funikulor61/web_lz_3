                                    // 1
function isPositive(num) {
    if(num >= 0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

// isPositive(10)
// isPositive(0)
// isPositive(-4)

                                        // 2
function getMaxNumber(a,b,c) {
    console.log(Math.max(a,b,c))
}
// getMaxNumber(1,2,3)
// getMaxNumber(0,0.5,-0.5)

                                        // 3

function canQueenCaptureKing(queen, king) {
    if(queen.x === king.x || queen.y === king.y){
        console.log(true)
    } 
    else if(Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
// canQueenCaptureKing({x: 1, y: 1}, {x: 5, y: 5})
// canQueenCaptureKing({x: 2, y: 1}, {x: 2, y: 8})
// canQueenCaptureKing({x: 1, y: 1}, {x: 2, y: 8})

                                            // 4
function isIsoscelesTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }
    else if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    }
    else if(a === b || b === c || a === c){
        return true
    }
}
// console.log(isIsoscelesTriangle(2, 2, 3))
// console.log(isIsoscelesTriangle(2, 2, 5))
// console.log(isIsoscelesTriangle(3,0,3))

                                            // 5

function convertToRomanNumerals(num) {
    let res =''
    while (num >= 10){
        res += 'X'
        num -= 10
    }

    if(num === 9){
        res += 'IX'
        num -= 9
    }

    if(num >= 5){
        res += 'V'
        num -= 5
    }
    else if(num === 4){
        res += 'IV'
        num -= 4
    }

    while(num >= 1){
        res += 'I'
        num -= 1
    }
    console.log(res)
}

// convertToRomanNumerals(1)
// convertToRomanNumerals(2)
// convertToRomanNumerals(6)
// convertToRomanNumerals(10)
// convertToRomanNumerals(26)

                                        // 6
function convertNumberToString(num) {
    let res = ''
    for(i = 0; i < num.length; ++i){
        let s = num[i]
        let word = ''
        switch(s){
            case '0': word = 'zero'; break;
            case '1': word = 'one'; break;
            case '2': word = 'two'; break;
            case '3': word = 'three'; break;
            case '4': word = 'four'; break;
            case '5': word = 'five'; break;
            case '6': word = 'six'; break;
            case '7': word = 'seven'; break;
            case '8': word = 'eight'; break;
            case '9': word = 'nine'; break;
            case '-': word = 'minus'; break;
            case '.': word = 'point'; break;
            case ',':  word = 'point'; break;
            default: continue;
        }
        if(res === ''){
            res = word
        }
        else {
            res += ' ' + word
        }
    }
    console.log(res)
}

// convertNumberToString('52')
// convertNumberToString("10,5")
// convertNumberToString("1950.2")

                                                // 7

function isPalindrome(str) {
    let leng = str.length
    for(i = 0; i < leng/2; ++i){
        if(str[i] !== str[leng - 1 - i]){
            return false
        }
    }
    return true
}

// console.log(isPalindrome('abcba'))
// console.log(isPalindrome('0123210'))
// console.log(isPalindrome('qweqwe'))

                                                // 8

function getIndexOf(str, letter) {
    for(i = 0; i <= str.length; ++i){
        if(str[i] === letter){
            return i 
        }
    }
    return -1
}

// console.log(getIndexOf('qwerty', 'q'))
// console.log(getIndexOf('qwerty', 't'))
// console.log(getIndexOf('qwerty', 'Q'))

                                            // 9
function isContainNumber(num , digit) {
    let norm = Math.abs(num)
    if(norm === 0 && digit === 0){
        return true
    }
    while(norm > 0){
        let current = norm % 10
        if(current === digit){
            return true
        }
        norm = Math.floor(norm / 10)
    }
    return false
}
// console.log(isContainNumber(123450, 0))
// console.log(isContainNumber(12345, 0))
// console.log(isContainNumber(12345, 6))

                                            // 10

function getBalanceIndex(arr) {
    for(i = 0; i <= arr.length; ++i){
        let left = 0
        let right = 0
        for(j = 0; j < i; ++j){
            left += arr[j]
        }
        for(k = i + 1; k < arr.length; ++k){
            right += arr[k]
        }
        if(left === right){
            return i
        }
    }
    return -1
}
// console.log(getBalanceIndex([1, 2, 5, 3, 0]))
// console.log(getBalanceIndex([2, 3, 9, 5]))
// console.log(getBalanceIndex([1, 2, 3, 4, 5]))

                                                // 11

function getSpiralMatrix(size) {
    let matrix = []
    for (let i = 0; i < size; i++) {
        matrix[i] = []
    }
    let num = 1
    let min = 0
    let max = size - 1

    while (min <= max) {
        for (let i = min; i <= max; i++){
            matrix[min][i] = num++
        }
        for (let i = min + 1; i <= max; i++) {
            matrix[i][max] = num++
        }
        for (let i = max - 1; i >= min; i--){
            matrix[max][i] = num++
        }
        for (let i = max - 1; i > min; i--) {
            matrix[i][min] = num++
        }
        min++
        max--
    }

    return matrix;
}
// console.log(getSpiralMatrix(3))
// console.log(getSpiralMatrix(5))

                                                    // 12
function rotateMatrix(matrix) {
    n = matrix.length
  
    for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - 1 - i; j++) {
        let temp = matrix[i][j]
      
        matrix[i][j] = matrix[n - 1 - j][i]
        matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
        matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
        matrix[j][n - 1 - i] = temp
    }
    }
  
    return matrix;
}
// console.log(rotateMatrix([ 
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]
// ]))

                                                    // 13
function quickSort(arr, left, right){
    if(left >= right) {
        return arr
    }
    let pivotIndex = goer(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex, right)
    return arr
}

function goer(arr, left, right){
    let pivot = arr[left + ((right - left) >> 1)]
    let i = left
    let j = right
    while(i <= j){
        while(arr[i] < pivot){
            i++
        }
        while(arr[j] > pivot){
            j--
        }
        if(i <= j){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }
    return i
}
function sortAsc(arr){
    if(!arr || arr.length <= 1){
        return arr
    }
    return quickSort(arr, 0, arr.length - 1)
}
// console.log(sortAsc([2, 9, 5]))
// console.log(sortAsc([2, 9, 5, 9]))
// console.log(sortAsc([-2, 9, 5, -3]))


                                            // 14

function shuffleChar(str, iterations) {
    let current = str
    let count = 0

    while (count < iterations) {
        let chet = ''
        let nechet = ''
        for (let i = 0; i < current.length; i++) {
            if (i % 2 === 0) {
                chet += current[i]
            }
            else {
                nechet += current[i]
            }
        }
        current = chet + nechet
        count++
        if (current === str) {
            iterations %= count
            count = 0
        }
    }

    return current;
}
// console.log(shuffleChar('012345', 1))
// console.log(shuffleChar('qwerty', 1))
// console.log(shuffleChar('012345', 2))
// console.log(shuffleChar('qwerty', 2))
// console.log(shuffleChar('012345', 3))
// console.log(shuffleChar('qwerty', 3))

                                                // 15
function getNearestBigger(number) {
    let digits = []
    let temp = number
    while (temp > 0) {
        digits.unshift(temp % 10)
        temp = Math.floor(temp / 10)
    }


    let i = digits.length - 2
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--
    }


    if (i < 0) {
        return number
    }


    let j = digits.length - 1
    while (digits[j] <= digits[i]) {
        j--
    }

    
    [digits[i], digits[j]] = [digits[j], digits[i]]


    let left = i + 1;
    let right = digits.length - 1;
    while (left < right) {
        [digits[left], digits[right]] = [digits[right], digits[left]];
        left++;
        right--;
    }

    let result = 0
    for (let digit of digits){
        result = result * 10 + digit
    }
    return result
}
// console.log(getNearestBigger(12345))
// console.log(getNearestBigger(123450))
// console.log(getNearestBigger(12344))
// console.log(getNearestBigger(123440))
// console.log(getNearestBigger(1203450))
// console.log(getNearestBigger(90822))
// console.log(getNearestBigger(321321))
