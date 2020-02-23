/**
 * If "isOpen" is true, set it to false
 * else set it to true
 */

let isOpen = false;

function toggleIsOpen() {
    isOpen = !isOpen;
}

console.log(isOpen); // false
toggleIsOpen();
console.log(isOpen); // true
toggleIsOpen();
console.log(isOpen); // false
toggleIsOpen();
console.log(isOpen); // true

console.log('\n===\n');




/**
 * Returns the boolean true if the number is less than 50
 * Returns the boolean false if the number is greater than 50
 * Returns null if the number is 50
 */

function checkNumber(number) {
    if (number < 50) {
      return true
    } else if (number > 50) {
      return false
    } else if (number === 50) {
        return null
    }
}

console.log('checkNumber(49):', checkNumber(49)); // true
console.log('checkNumber(50):', checkNumber(50)); // null
console.log('checkNumber(51):', checkNumber(51)); // false

console.log('\n===\n');




/**
 * If the sum of the parameters is greater than 50, return the parameters multipled together
 * else if a is falsey, return a subtracted by b (a - b)
 * else return null
 */
function getComputedResult(a, b) {
if (a + b > 50) {
    return a * b
} else if (!a) {
    return (a - b)
} else {
    return null
}
}

console.log('getComputedResult(20, 31):', getComputedResult(20, 31)); // 620
console.log('getComputedResult(6, 10):', getComputedResult(6, 10)); // -4
console.log('getComputedResult(2, 8):', getComputedResult(2, 8)); // null
