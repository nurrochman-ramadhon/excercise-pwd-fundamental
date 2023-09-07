// Input : length, width
let length;
let widht;
length = 5;
widht = 10;

// Process
let luas = length * widht;
let keliling = 2*length + 2*widht;

// Output
console.log(`Luas persegi panjang dengan panjang ${length} dan lebar ${widht} adalah `, luas, "\n");
console.log(`Keliling persegi panjang dengan panjang ${length} dan lebar ${widht} adalah `, keliling, "\n");


// find diameter, keliling dan luas lingkaran
let jari;
const PI = Math.PI
jari = 7

// Process 
let diameter = 2*jari;
let luasling = PI*Math.pow(jari, 2);
let kelilingling = 2*PI*jari;

// OUTPUT
console.log(`Phi bernilai`,PI);
console.log(`diameter lingkaran dengan jari-jari ${jari} adalah =`, diameter, "\n");
console.log(`luas lingkaran dengan jari-jari ${jari} adalah =`, luasling, "\n");
console.log(`keliling lingkaran dengan jari-jari ${jari} adalah =`, kelilingling);


// INPUT : Mencari sudut segitiga jika kedua sudut yang lain sudah diketahui
let sudut1 = 60;
let sudut2 = 80;

// Process 
let sudut3 = 180 - sudut1 - sudut2;

// OUTPUT
console.log(`Sudut trakhir adalah`, sudut3);

// Mencari rentang hari
// Input
let date1 = new Date("09/06/2023");
let date2 = new Date("09/01/2023");

// Process 
let rentangWaktu = date1.getTime() - date2.getTime();
let rentangHari = rentangWaktu / (1000*60*60*24)

// OUTPUT 
console.log(`Rentang hari dari ${date1} ke ${date2} adalah`, rentangHari, "hari");


// Mengkonversi tahun, bulan, hari
// INPUT 
let day = 1000;
// PROCESS
let dayToYear = Math.floor (day / 365);
console.log(dayToYear);
let dayToMonth = Math.floor(day % 365 / 30);
console.log(dayToMonth);
let dayToDay = day % 365 % 30;
console.log(dayToDay);

// OUTPUT
console.log(`Hasilnya adalah ${dayToYear} Tahun, ${dayToMonth} bulan, dan ${dayToDay} hari`);
