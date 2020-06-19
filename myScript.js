// let human = ''
// let name = 'Kraisit.ch'

// human = name

// console.log(human)


// let myWallet = 100
// let myFather = 'PA'
// let myMother = 'MA'
// let myAddress = 'BKK'
// let ageOfUniverse = 10

// let aa = 11 + "123"

// console.log(myWallet)
// console.log(aa)
// console.log(myMother)
// console.log(myAddress)
// console.log(ageOfUniverse)

// console.log(`Hi, ${1}`)
// console.log(`Hi, ${"myWallet"}`)
// console.log(`Hi, ${myWallet}`)


// let myName = 'Kraisit.ch'
// let myAge = 29
// let myAddress = 'BKK'

// let myProfile = `Name: ${myName}, \
// Age: ${myAge}, 
// Address: ${myAddress}`

// console.log(myProfile)


// let currVal = '2' + '10' + '10'
// console.log(currVal)


// console.log(Number(undefined))
// console.log(Number(null))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(""))
// console.log(Number("  123  "))
// console.log(Number(" 1 2 3  "))
// console.log(Number("123z"))
// console.log(Number("123.23"))

// let currData = prompt('What is your name?')

// let msg = (currData === 'kraisit') ? 'Yes' : 'No' ;

// alert(msg)


let currData = prompt('Your number ?')
let numScore = 0
if (!Number(currData)) {
    alert('Data is not number')
} else {
    numScore = parseInt(currData)
    if (numScore >= 80) {
        alert('A')
    } else if (numScore >= 70 && numScore < 80) {
        alert('B')
    } else if (numScore >= 60 && numScore < 70) {
        alert('C')
    } else if (numScore >= 50 && numScore < 60) {
        alert('D')
    } else if (numScore < 50) {
        alert('F')
    } else {
        alert('NA')
    }
}


let currAge = prompt('How old are you?')
let price = 0
if (!Number(currAge)) {
    alert('Data is not number')
} else {
    let numAge = parseInt(currAge)
    let msg = (numAge < 18) ? price = 2000 : price = 3500;
    alert(msg)
}