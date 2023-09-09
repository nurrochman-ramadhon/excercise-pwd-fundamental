// ==========================================================================================================
//1. Create a function that can create a triangle pattern according to the height we provide like the following :
/**
 * 01 
 * 02 03 
 * 04 05 06 
 * 07 08 09 10 
 * 11 12 13 14 15
 * n
 */
// langkahnya adalah menentukan variabel input tinggi
let height = 4

// membuat code perulangan
// karena perulangannya  untuk tinggi 1 berbeda dengan tinggi > 1, dimana memiliki lebih dari 1 karakter perulangan, maka menggunakan pengulangan ganda dan menentukan kondisi tertentu
const piramida = (height) => {
    let result = ""
    // result sebagai penyimpan hasil
    let n1 = 2
    // n1 sebagai count untuk perulangan ke-j yang dimulai dari 02 di baris kedua
    for (i = 1; i <= height; i++) {
        // i = 1 sebab di perulangan j atau sub dari perulangan i, menghasilkan karakter +1 dari perulangan i
        if (i == 1) {
            result += `01`
        } else {
            result += "\n"
            for (j = 0; j < i; j++) {
                if (n1 < 10) {
                    result += `0${n1} `
                    n1++
                } else {
                    result += `${n1} `
                    n1++
                }
            }
        }
    }

    return result
}




console.log(piramida(1));
console.log(piramida(5));

// ==========================================================================================================
//2.  Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".

let word = "yeah"
const yeah = (n) => {
    let kata = ""
    let result = ""
    for (i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 == 0)) {
            result += "Fizzbuzz "
        } else if (i % 3 === 0) {
            result += "Fizz "
        } else if (i % 5 === 0) {
            result += "Buzz "
        } else {
            result += `${word} `
        }
    }
    return result
}

console.log(yeah(15));

// ===============================================================================================================
// 3. Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
/**
 * < 18.5 return “less weight”
 * 18.5 - 24.9 return “ideal”
 * 25.0 - 29.9 overweght
 * 30.0 - 39.9 very overweight
 * > 39.9 obesity
 */

let weight;
let height2;
const BMI = (weight, height2) => {
    let result
    let conv = height2 / 100
    height2 = Math.pow(conv, 2)

    hitungan = parseFloat(weight / height2).toFixed(2)
    if (hitungan < 18.5) {
        result = `Score BMI anda ${hitungan}, LESS WEIGHT`
    } else if (hitungan < 25) {
        result = `Score BMI anda ${hitungan}, IDEAL`
    } else if (hitungan < 30) {
        result = `Score BMI anda ${hitungan}, OVERWEIGHT`
    } else if (hitungan < 40) {
        result = `Score BMI anda ${hitungan}, VERY OVERWIGHT`
    } else if (hitungan > 39.9) {
        result = `Score BMI anda ${hitungan}, OBESITY`
    }
    return result
}
console.log(BMI(61, 169));

// ================================================================================================================
//4.  Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

let arr = [1, 2, 3, 4, 5, 6];

const remove = (arr) => {
    let result = [];
    for (index of arr) {
        if (index % 2 === 0) {
            result.push(index)
        }
    }
    return result
}

console.log(remove(arr));

// ==========================================================================================================
//5. Write a function to split a string and convert it into an array of words
let arrray = "Hello World"
const array2 = (array) => {
    let result = [];
    result = array.split(" ")
    return result
}
console.log(array2(arrray));

