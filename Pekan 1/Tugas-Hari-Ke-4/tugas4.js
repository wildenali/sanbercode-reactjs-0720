// ----------------- soal 1 start -----------------
var bilangan = 1;
var x;

console.log('LOOPING PERTAMA')
while(bilangan <= 20) {
  if(bilangan % 2 == 0) {
    console.log(bilangan + ' - I love coding');
  }
  bilangan++;
}

console.log('LOOPING KEDUA')
while(bilangan >= 2) {
  if(bilangan % 2 == 0) {
    console.log(bilangan + '- I will become a frontend developer');
  }
  bilangan--;
}
// ----------------- soal 1 end -----------------
console.log('\n');
// ----------------- soal 2 start -----------------
for (let i = 1; i <= 20; i++) {
  if(i % 2 == 0)
  {
    console.log(i +" - berkualitas" );
  } else
  {
    if(i % 3 == 0)
    {
      console.log(i +" - I Love Coding" );
    } else {
      console.log(i +" - santai" );
    }
  }
}
// ----------------- soal 2 end -----------------
console.log('\n');
// ----------------- soal 3 start -----------------
var row = 7;
for (var i = 1; i <= row; i++) {
	var result = '';
	for (var j = 1; j <= i; j++) {
    result += '#';
	}
	console.log(result);
}
// ----------------- soal 3 end -----------------
console.log('\n');
// ----------------- soal 4 start -----------------
var kalimat = "saya sangat senang belajar javascript";
var splitKalimat = kalimat.split(" ");
console.log(splitKalimat);
// ----------------- soal 4 end -----------------
console.log('\n');
// ----------------- soal 5 start -----------------
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for (let i = 0; i < daftarBuah.length; i++) {
  console.log(daftarBuah[i]);
}
// ----------------- soal 5 end -----------------