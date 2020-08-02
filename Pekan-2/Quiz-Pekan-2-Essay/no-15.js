let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
  penulis: "john doe",
  tehunTerbit: 2020
}

let buku = {
  nama: "pemrograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"]
}

let gabungkanWarna = [...warna, ...buku.warnaSampul];
console.log(gabungkanWarna);

let gabungkanDataBuku = {...buku, ...dataBukuTambahan};
console.log(gabungkanDataBuku);