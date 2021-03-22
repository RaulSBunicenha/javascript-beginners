/* 
    Data Types:
    undefined, null, boolean, string, symbol, number and object
*/

function dataType () {
    var myName = 'Raul'
    myName = 8
    let ourName = 'freeCodeCamp'
    const pi = 3.14

    console.log(myName, ourName, pi);
}

/* 
    Storing values with Assignment Operator
*/
function storingValues () {
    var a
    var b = 2

    console.log('first a:', a)

    a = 7
    console.log('second a:', a)

    b = a

    console.log('b is equal to a', b)
}

/* 
    Unitialized variables
*/
function unitializedVariables () {
    // Initialize values
    var a = 5
    var b = 10
    var c = "I'm a"

    // Operations (Do not change)
    a = a + 1
    b = b + 5
    c = c + " String"

    console.log('the new value of a:', a)
    console.log('the new value of b:', b)
    console.log('the new value of c:', c)
}

/* 
    Remainder Operator
*/
function remainderOperator () {
    // Initialize values
    var remainder

    // Operations (Do not change)
    remainder = 11 % 3
    
    console.log('the value of remainder:', remainder)
}

/*
    Augmented Operations
*/
function augmentedOperations () {
    // Define
    var a = 3
    b = 5
    c = 2
    d = 10
    
    // Operations
    c += 3
    b -= 5
    a *= 3
    d /= 2

    // Show results
    console.log('The "a" value is:', a)
    console.log('The "b" value is:', b)
    console.log('The "c" value is:', c)
    console.log('The "d" value is:', d)
}

/*
    String Escpape sequences
    \'  single quotes
    \"  double quotes
    \\  backslash
    \n  new line
    \r  carriage return
    \t  tab
    \b  backspace
    \f  form feed
*/
function escapeSequences () {
    let stringSequence = "FirstLine\n\t\\SecondLine\nThirdLine"

    console.log(stringSequence)
}

/*
    String bracket notation
*/
function bracketNotation () {
    let myString = 'RaulBunicenha'
    
    console.log('String Length:', myString.length)
    console.log('String Third Letter:', myString[2])

    // Get the second last letter
    console.log('Second Last Letter:', myString[myString.length - 2])

    // This will not work, because of immutability of string
    myString[2] = 's'
    console.log(`New String:`, myString)
}

/*
    Change Array (push, pop, shift, unshift)
*/
function changeArray () {
    let myArray = [1,2,3,4]
    console.log('Original Array', myArray)

    // push
    myArray.push(5)
    console.log(`Adding a value in the last position: `, myArray)

    console.log('')

    // pop
    const popedValue = myArray.pop()
    console.log(`Removing the last position, and return it`)
    console.log(`The last position value:`, popedValue)
    console.log(`The array:`, myArray)

    console.log('')

    // Shift
    const shiftedValue = myArray.shift()
    console.log(`Removing the first position, and return it`)
    console.log(`The first position value:`, shiftedValue)
    console.log(`The array`, myArray)

    console.log('')

    // Unshift
    myArray.unshift(1)
    console.log(`Adding a value in the fist position: `, myArray)
}

/*
    Change Array Inside a Function
*/
function changeArrayInseide () {
    function nextInLine (arr, item) {
        // arr = arr.map(e => e) // Functional Programimg

        arr.push(item)
        return arr.shift()
    }

    function doIt () {
        let myArray = [1, 2, 3, 4, 5]

        console.log('Before:', myArray)
        console.log('Next In Line:', nextInLine(myArray, 6))
        console.log('After:', myArray)
    }
    doIt()
}

/*
  Identical Options in Switch  
*/
function identicalSwitch (switchTest) {
    let result

    switch (switchTest) {
        case 1:
        case 2:
        case 3:
            result = 'done'
            break
        default:
            result = 'wrong'
            break
    }

    return result
}

/*
    Return Early Pattern for Functions
*/
function earlyPatternFunctions (a, b) {
    if (b === 0) return undefined
    return a / b
}

/*
    Objects for Lookups
*/
function objectLookup (key) {
    const myObject = {
        key1: 'The value is 1',
        key2: 'The value is 2',
        key3: 'The value is 3',
        key4: 'The value is 4',
        key5: function () {
            return 'The value is a function which returns 0'
        }
    }
    
    if (!myObject.hasOwnProperty(key)) return 'wrong key'
    return myObject[key]
}

/*
    Random Fractions
*/

function randomFraction () {
    return Math.random()
}

/*
    Random Whole Number
*/
function randomWholeNumber (max = 0) {
    return Math.random() * max
}

/*
    Random Whole Number With a Range
*/
function randomNumberWithRange(start = 0, end = 0) {
    // Math.floor return the greatest integer
    return Math.floor(Math.random() * (end - start + 1)) + start
}

/*
    Parse Int With Rdix (Binary and Others)
*/
function checkIntRdix (stringNumber, numberType) {
    return parseInt(stringNumber, numberType)
}

/**
 *  Multiple Ternary Operators 
 */
function multipleTernaryOperators (number) {
    return number < 0 ? 'negative' : number > 9 ? 'decimal-plus' : 'decimal'
}
/*
    Var and Let Scopes
*/
function checkScope () {
    // let i = 'function scope'
    var i = 'function scope'
    if (true) {
        // var i = 'block scope'
        let i = 'block scope'
        console.log('block scope `i` is:', i)
    }
    console.log('function scope `i` is:', i)
    return i
}

/*
    Prevent Object Mutation with Object.freeze
*/
function preventObjectMutation () {
    const MATH_CONSTANTS = Object.freeze({
        PI: 3.14
    })

    try {
        MATH_CONSTANTS.PI = 39
    } catch (e) {
        console.log(e)
    }

    return MATH_CONSTANTS.PI
}
/*
* Default Parameters
*/
function defaultParameters ( ) {
    'use strict'
    const increment = (function (value) {
        console.log(value)
        return function increment (number, value) {
            return number + value
        }
    })(3)

    console.log(increment(2, 3))
}

/*
    Destructuring Assignment: Objects
*/
function destructuringObjects () {
    let voxel = { x: 1, y: 2, z: 3 }

    const { x: a, y: b, z: c} = voxel

    console.log('variables:', a, b, c)

    function paramReceive ({ x: a }) {
        return a
    }
    console.log('function', paramReceive(voxel))
}

/*
   Destructuring Assignment: Nested Objects
*/
(function () {
    const myObject = {
        internalObject: { x: 99 }
    }

    const { internalObject: { x } } = myObject
    const { internalObject: { x: a } } = myObject

    console.log(x, a)
})()

