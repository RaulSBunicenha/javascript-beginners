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
changeArrayInseide()

