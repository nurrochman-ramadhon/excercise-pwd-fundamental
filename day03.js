// ==========================================================================================================
// Write code to display multipication 
// INPUT 
let number = "9";
let output = "";

// PROCESS 
// 1. menunjukkan persamaan perkaliannya
for (i = 1; i <= number; i++) {
    output += number + " x " + i + " = " + number * i + "\n";
}
console.log(output);

// ==========================================================================================================
// check whether a string is a palindrome or not.
// INPUT 
let word1 = "tidak";
let check = "";
let check2 = "";
output = "";

// PROCESS
// 1. Length karakter sama atau tidak
// 1b. tidak peduli huruf besar atau kecil
// 2. indeks tiap karakter ditemukan 
// 3. indeks tiap karakter dibandingkan

for (i = 0; i < word1.length; i++) {

    check = word1.charAt(i);
    check2 = word1.charAt(word1.length - i - 1);
    if (check !== check2) {
        output = `tidak Palindrome`
    } else {
        output = `Palindrome`
    }
}

console.log(output);

// ==========================================================================================================
// CODE to convert centimeter to kilometer
// INPUT

let cm = parseFloat("12345");
let hitungan = cm / 1000;
let km = hitungan + " kilometer";

// OUTPUT
console.log(km);

// ==========================================================================================================
// Code to format number as currency (IDR)
// INPUT 

let duit = 1000000
let rupiah = ""

// PROCESS dan OUTPUT
/**
 * 1. deklarasi input uang
 * 2. membuat uang menjadi type INT
 * 3. konversi uang menjadi toLocaleString dan id
 */

rupiah = "Rp " + duit.toLocaleString('id') + ",00"
console.log(rupiah);

// ==========================================================================================================
// a code to remove the first occurrence of a given “search string” from a string
// INPUT 

let string = "hello world";
let searchString = "ell";

// PROCESS
/**
 * 1. declare string dan searcString
 * 2. declare hasil dari eliminasi string
 * 3. buat kondisi searchString replace dengan ""
 * 4. jalankan output
 */
let result = string.replace(searchString, "")
console.log(result);


// ==========================================================================================================
//  a code to capitalize the first letter of each word in a string
// INPUT

string = "meong meong meong";
result = "";

for (i = 0; i <= string.length; i++) {
    if (i == 0) {
        result += string.charAt(i).toUpperCase()
    } else if (string.charAt(i - 1) == " ") {
        // dalam perulangan ke i yang berarti setelah " " maka karakter tersebut sudah pasti awal kalimat
        // sehingga harus dijadikan uppercase
        result += string.charAt(i).toUpperCase()
    } else {
        result += string.charAt(i)
    }
}
result

console.log(result);

// ==========================================================================================================
//  a code to reverse a string

// Sama seperti cara POLIDROME
string = "tomat"
dataReverse = ""
for (i = string.length; i >= 0; i--) {
    dataReverse += string.charAt(i);
}
console.log(dataReverse);

// ==========================================================================================================
// a code to swap the case of each character from string

string = "The QuiCk BrOwN Fox"
let swap = ""
result = ""

for (i = 0; i <= string.length; i++) {
    swap = string.charAt(i)
    if (swap == swap.toLowerCase()) {
        result += swap.toUpperCase()
    } else {
        result += swap.toLowerCase()

    }
}
console.log(string);
console.log(result);

// ==========================================================================================================
// a code to find the largest of two given integers

let angka1 = parseInt("90")
let angka2 = parseInt("6990")
result;

if (angka1 > angka2) {
    result = angka1;
} else {
    result = angka2
}
console.log(result);

// ==========================================================================================================
// a conditional statement to sort three numbers
// untuk menyelesaikan ini maka perlu menentukan mana yang angka max, mid dan min
// Maka perlu untuk nanti membuat sebuah kondisi yang dapat menentukan nilai max, mid, min

angka1 = 10
angka2 = 19
let angka3 = 12
let max
let min
let mid

if ((angka1 > angka2) && (angka1 > angka3)) {
    max = angka1
} else if ((angka2 > angka1) && (angka2 > angka3)) {
    max = angka2
} else {
    max = angka3
}

if ((angka1 < angka2) && (angka1 < angka3)) {
    min = angka1
} else if ((angka2 < angka1) && (angka2 < angka3)) {
    min = angka2
} else {
    min = angka3
}

if (((angka1 > angka2) && (angka1 < angka3)) || ((angka1 < angka2) && (angka1 > angka3))) {
    mid = angka1
} else if ((angka2 > angka1 && angka2 < angka3) || (angka2 < angka1 && angka2 > angka3)) {
    mid = angka2
} else {
    mid = angka3
}

result = `${max}, ${mid}, ${min}`
console.log(result);

// ==========================================================================================================
// code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.

let input
let hasilnya = ""

if (typeof input == "string") {
    hasilnya = 1
} else if (typeof input == "number") {
    hasilnya = 2
} else {
    hasilnya = 3
}

console.log(hasilnya);


// ==========================================================================================================
// a code to change every letter a into * from a string of input

input = "dokter Muda sangat BerseMangat"
let faktor = "m";
// faktor adalah karakter yang diinginkan untuk diubah 
hasilnya = ""
// hasilnya sebagai penampung hasil perulangan

for (i = 0; i < input.length; i++) {
    if (input.charAt(i) == faktor.toUpperCase() || input.charAt(i) == faktor.toLowerCase())
        // supaya karakter dalam input tidak dibedakan ketika berbeda jenis huruf besar atau kecilnya, maka perlu untuk membuat aturan if yang dapat mendeteksi perbedaan karakter
        hasilnya += input.charAt(i).replace(input.charAt(i), "*")
    else {
        hasilnya += input.charAt(i)
    }
}
console.log(hasilnya); 
