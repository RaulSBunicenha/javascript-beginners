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
augmentedOperations()