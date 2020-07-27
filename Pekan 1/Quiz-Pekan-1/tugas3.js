// ----------------- soal 1 start -----------------
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kataKEDUA = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)

var gabung;
gabung = kataPertama + " " + kataKEDUA + " " + kataKetiga +  " " + kataKeempat.toUpperCase();
console.log(gabung);
// ----------------- soal 1 end -----------------

// ----------------- soal 2 start -----------------
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var intKataPertama = parseInt(kataPertama);
var intKataKedua = parseInt(kataKedua);
var intKataKetiga = parseInt(kataKetiga);
var intKataKeempat = parseInt(kataKeempat);

var jumlah = intKataPertama + intKataKedua + intKataKetiga + intKataKeempat;

console.log(jumlah);
// ----------------- soal 2 end -----------------

// ----------------- soal 3 start -----------------
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 32);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
// ----------------- soal 3 end -----------------

// ----------------- soal 4 start -----------------
var nilai = 75;
var intNilai = parseInt(nilai);

if ( intNilai >= 80 ) {
    console.log("indeksnya A");
} else if ( intNilai >= 70  && intNilai < 80 ) {
  console.log("indeksnya B");
} else if ( intNilai >= 60  && intNilai < 70 ) {
  console.log("indeksnya C");
} else if ( intNilai >= 50  && intNilai < 60 ) {
  console.log("indeksnya D");
} else {
  console.log("indeksnya E");
}
// ----------------- soal 4 end -----------------

// ----------------- soal 5 start -----------------
var tanggal = 11;
var bulan = 10;
var tahun = 1998;
var tangalLahir;

// bulan = "oktober";

switch(bulan) {
  case 1:   { bulan = "Januari"; break; }
  case 2:   { bulan = "Februari"; break; }
  case 3:   { bulan = "Maret"; break; }
  case 4:   { bulan = "April"; break; }
  case 5:   { bulan = "Mei"; break; }
  case 6:   { bulan = "Juni"; break; }
  case 7:   { bulan = "Juli"; break; }
  case 8:   { bulan = "Agustus"; break; }
  case 9:   { bulan = "September"; break; }
  case 10:   { bulan = "Oktober"; break; }
  case 11:   { bulan = "November"; break; }
  case 12:   { bulan = "Desember"; break; }
  default:  { console.log('Isi Bulan'); }}

tangalLahir = tanggal + " " + bulan + " " + tahun;
console.log(tangalLahir);
// ----------------- soal 5 end -----------------