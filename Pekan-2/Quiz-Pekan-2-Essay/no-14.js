var volumeBalok = (panjang, lebar, tinggi) => {
  var volume = panjang * lebar * tinggi
  return `volume balok = ${volume}`
}
let ukuranBalok = ['4', '5', '6']
let [panjang, lebar, tinggi] = ukuranBalok
console.log(volumeBalok(panjang, lebar, tinggi));

var volumeKubus = (sisi) => {
  var volume = sisi * sisi * sisi
  return `volume kubus = ${volume}`
}
let ukuranKubus = ['4']
let [sisi] = ukuranKubus
console.log(volumeKubus(sisi));