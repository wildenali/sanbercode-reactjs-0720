import React from 'react';
import './App.css';

function App() {
  return (
    <div className="pembungkus">
      <form action="" method="post" enctype="multipart/form-data">
        <h1 align="center"><b>Pembelian Buah</b></h1>
        <table border="0" cellspacing="10" width="400" align="center">
          <tr>
            <td><b>Nama Pelanggan</b></td>
            <td><input type="text" name="nama"/></td>
          </tr>
          <tr>
            <td style={{verticalAlign: 'bottom'}}><b>Daftar Item</b></td>
            <td>
              <label><input type="checkbox" name="semangka" value="semangka"/>Semangka</label>
              <br/>
              <label><input type="checkbox" name="semangka" value="semangka"/>Jeruk</label>
              <br/>
              <label><input type="checkbox" name="semangka" value="semangka"/>Nanas</label>
              <br/>
              <label><input type="checkbox" name="semangka" value="semangka"/>Salak</label>
              <br/>
              <label><input type="checkbox" name="semangka" value="semangka"/>Anggur</label>
            </td>
          </tr>
          <td><button className="button" type="submit" name="simpan">Kirim</button></td>
        </table>
      </form>
    </div>
  );
}

export default App;
