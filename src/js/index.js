// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


//CALLBACK -> FUNCION QUE EJCUTA OTRA FUNCION
// SORT -> BUCLES PARA ORDENAR
//EJEMPLO DE SORT :

// const numbers = [3, 2, 9, 6, 5, 1, 8,]
// const users = ['ana', 'pedro', 'antonio', 'jose']

// users.sort((a, b) => a.localeCompare(b))
// numbers.sort((a, b) => a - b)

// console.log(users)
// console.log(numbers)



//EJERCICIOS:


// - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbersMultiplyForIndex = numbers => {

    numbers.forEach((number, index) => {
        console.log(number * index)
    });
}
numbersMultiplyForIndex([1, 2, 3, 4, 5])


// - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2


const numbersDivideByIndexPlus2 = numbers => {

    const results = numbers.map((number, index) => {
        return number / (index + 2)

    })
    return results
}
const resultsDivided = numbersDivideByIndexPlus2([1, 2, 3, 4, 5])
console.log(resultsDivided)

// - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const arrayWords = words => {
    const newWords = words.map(word => {
        return word.toUpperCase()
    })
    return newWords

}
const resultsArray = arrayWords(['coche', 'perro', 'casa'])
console.log(resultsArray)


// - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const arrayWorldAndLetter = (words, letter) => {
    const newWord = words.filter(word => {
        return word.startsWith(letter)
    })

    if (newWord.length === 0) {
        return `no hay palabras que empiecen por${letter}`

    } else {
        return newWord
    }
}
const resultsArrayFilter = arrayWorldAndLetter(['coche', 'perro', 'casa'], 'x')
console.log(resultsArrayFilter)

// - Añade a la función anterior lo necesario para que funcione independientemente de mayusculas o minúsculas.


const arrayWorldAndLetterUpper = (words, letter) => {
    const newWord = words.filter(word => {
        const formattedWord = word.toLowerCase()
        const formateLetter = letter.toLowerCase()
        return formattedWord.startsWith(formateLetter)
    })

    if (newWord.length === 0) {
        return `no hay palabras que empiecen por${letter}`

    } else {
        return newWord
    }
}
const resultsArrayUpper = arrayWorldAndLetterUpper(['coche', 'perro', 'casa'], 'C')
console.log(resultsArrayUpper)


// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.


const arrayTenNumbers = numbers => {

    const total = numbers.reduce((acc, number) => {
        return acc + number

    })
    console.log(total)
}

arrayTenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

const arraySquareAndCube = numbers => {

    numbers.forEach(number => {
        const square = Math.pow(number, 2)
        const cube = Math.pow(number, 3)
        console.log(`numero: ${number} - cuadrado:${square} - cubo: ${cube}`)
    })
}
arraySquareAndCube([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const oneWordUpper = word => {
    const vowels = 'aeiou'
    const wordToArray = word.split('')
    const finalWord = wordToArray.reduce((acc, letter) => {

        if (vowels.includes(letter)) {
            return acc + letter.toUpperCase()
        }
        return acc + letter
    }, '')
    console.log(finalWord)
}
oneWordUpper('antonio')


// - Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenAndOdd = numbers => {

    const even = []
    const odd = []

    numbers.forEach(number => {
        const randomNumber = Math.floor(Math.random() * 10 + 1)
        const result = randomNumber + number

        if (result % 2 === 0) even.push(result)
        else odd.push(result)
    })

    console.log(numbers)
    console.log(odd)
    console.log(even)

}

evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat()


const fiveWords = words => {

    const firstLetter = words.flatMap(word => {
        const lastLetter = word.charAt(word.length - 1)
        return [word.charAt(0).toUpperCase(), lastLetter.toUpperCase()]
    })

    console.log(firstLetter)
}

fiveWords(['coche', 'perro', 'casa', 'gato', 'camion'])



// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const tenNumbers = numbers => {

    const numberBig = numbers.some(number => {
        return number > 5
    })
    if (numberBig) {
    } else {
    }
    console.log(numberBig)
}
tenNumbers([1, 2, 3, 4, 0, 1, 2, 3, 0, 1])



// - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']









// - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número






// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
//   const array = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Bob', age: 20 }
//   ];




// - Crea una función que reciba un array relleno con números y te diga si todos son pares o no.




// - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.





// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight)
