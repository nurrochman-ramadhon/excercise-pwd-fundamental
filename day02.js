// Periksa angka ganjil atau genap
let x = 45
if (x % 2 === 0) {
    console.log("genap");
} else {
    console.log("ganjil");
}

// Nilai Bulan dari Get.Month()
// Input : 2023-09-06
const getMonth = new Date("2023-10-06").getMonth()
console.log(getMonth);
let output

if (getMonth === 0) {
    console.log("Bulan Januari");
} else if (getMonth === 1) {
    console.log("Bulan Februari");
} else if (getMonth === 2) {
    console.log("Bulan Maret");
} else if (getMonth === 3) {
    console.log("Bulan April");
} else if (getMonth === 4) {
    console.log("Bulan Mei");
} else if (getMonth === 5) {
    console.log("Bulan Juni");
} else if (getMonth === 6) {
    console.log("Bulan Juli");
} else if (getMonth === 7) {
    console.log("Bulan Agustus");
} else if (getMonth === 8) {
    console.log("Bulan September");
} else if (getMonth === 9) {
    console.log("Bulan Oktober");
} else if (getMonth === 10) {
    console.log("Bulan November");
} else {
    console.log("Bulan Desember");
}

switch (getMonth) {
    case 0:
        output = "Bulan Januari";
        break;
    case 1:
        output = "Bulan Februari";
        break;
    case 2:
        output = "Bulan Maret";
        break;
    case 3:
        output = "Bulan April";
        break;
    case 4:
        output = "Bulan Mei";
        break;
    case 5:
        output = "Bulan Juni";
        break;
    case 6:
        output = "Bulan Juli";
        break;
    case 7:
        output = "Bulan Agustus";
        break;
    case 8:
        output = "Bulan September";
        break;
    case 9:
        output = "Bulan Oktober";
        break;
    case 10:
        output = "Bulan November";
        break;
    case 11:
        output = "Bulan Desember";
        break;
    default:
        output = "Tidak diketahui"
        break;
}
console.log(output);


// Convert celsius to Fahrenhit
// Input 
let celsius = 1;

// Process
let celToFahr = celsius * 1.8 + 32; 

// output
console.log(celToFahr);

// Check apakah Bilangan prima atau tidak
//  Input
let number = 17 ;

// Process dan Output
let berapakali="";
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        berapakali ++;
        console.log(berapakali);
    }}

if (berapakali == 2) {
    console.log(number, "bilangan prima");
} else {
    console.log(number, "bukan prima");
}

// Write a code to find the sum of the numbers 1 to N
// Input
let angka = 6
let sum = 0

for (i=1; i<=angka; i++) {
    console.log(i);
    sum += i
}

console.log(angka);
console.log(sum);

// Write a code to find the FACTORIAL of the numbers 1 to N
// Input

let angka2 = 6
let sum2 = 1

for (i=1; i<=angka2; i++) {
    console.log(i);
    sum2 *= i
}

console.log(angka2);
console.log(sum2);

// // Write a code to find the sum of the numbers 1 to N
// Input
let n1 = 1;
let n2 = 1;
let fn;
let n = 0;

if (n<=2) {
    fn = n
}

for (let i = 2; i < n; i++){
    fn = n1 + n2
    n1 = n2
    n2 = fn
}

console.log(fn);

// Code for Patern 1
// input 
let result ="";

// Process
for (let i = 0; i < 8; i++) {
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            result += "#";
        } else {
            result += "*";
        } 
    } result += "\n";    
}

// OUTPUT
console.log(result);

// Code for Patern 2
// input
let hasil = "";
let variabel = 5;

// Process
  for (let i = 0; i < variabel; i++) {
    for (j = 0; j < i; j++) {
        if (j < i) {
            hasil +="1"
        } else {
            hasil +="0" 
        }
        }
    }
  console.log(hasil);