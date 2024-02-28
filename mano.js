var vardas = 'John' // String (tekstas) duomenų tipas
let pavarde = "Doe" // String (tekstas) duomenų tipas
let gyvenamasisMiestas = `Kaunas` // String (tekstas) duomenų tipas
let amzius = 25 // Number (skaičius) duomenų tipas
let yraStudentas = false // Boolean (true/false) duomenų tipas
const asmensKodas = 378645312154 // Number (skaičius) duomenų tipas

console.log(`${vardas} ${pavarde}  (amzius: ${amzius}), asmens kodas: ${asmensKodas}, gyvenamasis miestas ${gyvenamasisMiestas}.`)

console.log(vardas + ' ' + pavarde + ' ' + '(amzius' + amzius + ')' + ',' + ' ' + 'asmens kodas:' + ' ' + asmensKodas + ',' + ' gyvenamasis miestas' + ' ' + gyvenamasisMiestas + '.')



let text1 = 'tekstas'
let text2 = 'tekstas'

console.log('text1' == 'text2')
 

let num = 10
let text = 10

console.log(num > text)
console.log(num >= text)
console.log(num != text)



let currentBalance1 = 50
let transaction1 = -50

console.log(currentBalance1 > transaction1)

let currentBalance2 = 50
let transaction2 = 50

console.log(currentBalance2 >= transaction2)

let currentBalance3 = 50
let transaction3 = -51

console.log(currentBalance3 >= transaction3)

let num1=25
let num2=3

console.log(num1 % num2)

//   3.1. currentBalance1 - 50, transaction1 - -50, rezultatas - true

//   3.2. currentBalance2 - 50, transaction2 - 50, rezultatas - true

//   3.3. currentBalance3 - 50, transaction3 - -51, rezultatas - false

//   3.4. currentBalance4  - 50, transaction4 - 51, rezultatas - true
 
// 4. Patikrinkite ar du pasirinkti skaičiai (kintamieji) dalinasi be liekanos. Rezultatą išveskite į konsolę.

// 5. Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else, kuris į konsolę išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.
 
// 6. Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length).
 
// 7. Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult".
// 8.Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// BMW group priklauso: BMW, Mini, Rolls-Royce.

let legalAge = '20'
let clientAge = 19

console.log(20)

if (clientAge === '20') {
    console.log('taip')
} else {
    console.log('ne')
}

let clientName = 'simona'

if(clientName.length > 6){
    console.log(`Vardas Ilgas`)
}
 
let age = '300'
if(age >= 100) {
    console.log('Invalid age')
} else if(age <= 0) {
    console.log('Invalid age')
} else if(age  <= 18 ) {
    console.log('child')
} else if(age >= 19 ) {
    console.log('aduld')
}


let car = 'merceders'

console.log(car)
if(car === 'VW'){
    console.log('VW group')
} else if(car === 'Audi'){
    console.log('VW group')
} else if(car === 'bentley'){
    console.log('VW group')
} else if(car === 'Bugatti'){
    console.log('VW group')
} else if(car === 'BMV'){
    console.log('BMV Group')
} else if(car === 'mini'){
    console.log('BMW Group')
} else {
    console.log('nei vienam')
}