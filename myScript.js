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

if(!Number(currData)) {
    alert('Data is not number')
}else{
    if (currData >= 80) {
        alert('A')
    }else if(currData >=70 && currData < 80){
        alert('B')
    }else if(currData >=60 && currData < 70){
        alert('C')
    }else if(currData >=50 && currData < 60){
        alert('D')
    }else if(currData < 50){
        alert('F')
    }else {
        alert('NA')
    }
}



