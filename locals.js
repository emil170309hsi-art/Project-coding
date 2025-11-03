var tombol=document.getElementById("tombol")
var input=document.getElementById("namadepan",)
var input2=document.getElementById("namabelakang")

var namaDepan= [];


function tambah() {
    var teks= input.value.trim();    // trim : menghapus spasi yg tidak diperlukan

    if (teks === "") {
        alert("Nama kosong !");     // alert: peringatan
        return
    }

    namaDepan.push(teks);   // masukan ke array
    localStorage.setItem("namaDepan" ,JSON.stringify(namaDepan));// simpan ke localstorage

    input.value= "";  // kosongkan input
    tampilkan()       //tampilkan ulang


}

//hapus tugas 
function hapus(index){
    namaDepan.splice(index, 1);   // hapus dari array
    localStorage.setItem("namaDepan" ,JSON.stringify(namaDepan)); //simpan perubahan   stringify: dari objek di js ke array
    
    tampilkan(); // tampilkan ulang
}

//fungsi = muat data dari localstorage
function muat() {
    var data= localStorage.getItem("namaDepan");
    if (data !== null) {
        namaDepan = JSON.parse(data);     // dari array/JSON ke objek di js
    }
    tampilkan()
}

//event tombol
tombol.addEventListener("click", tambah);
 // jalankan sat halaman di muat
muat();
  

