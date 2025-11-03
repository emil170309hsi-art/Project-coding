const lampuMerah = document.getElementById("lampu-merah");
const lampuKuning = document.getElementById("lampu-kuning");
const lampuHijau = document.getElementById("lampu-hijau");
const tombolMulai = document.getElementById("mulai");
const tombolBerhenti = document.getElementById("berhenti");
const btnMerah = document.getElementById("btn-merah");
const btnKuning = document.getElementById("btn-kuning");
const btnHijau = document.getElementById("btn-hijau");
const tesStatus = document.getElementById("status");

let intervalOtomatis;      // interval adalah jarak waktu : ms  1000ms= 1s
let indexLampu = 0;
const urutan = ["merah", "kuning", "hijau"];

//fungsi matikan semua
function matikanSemua() {
  lampuMerah.classList.remove("nyala");
  lampuKuning.classList.remove("nyala");
  lampuHijau.classList.remove("nyala");
}

//fungsi nyalakan lampu sesuai warna
function nyalakanLampu(warna) {
  matikanSemua();

  //switch / pilih ketika (warna)
  switch (warna) {
    case "merah":
      lampuMerah.classList.add("nyala");
      tesStatus.textContent = "Status : Merah - BERHENTI";
      break;

    case "kuning":
      lampuKuning.classList.add("nyala");
      tesStatus.textContent = "Status : Kuning - HATI-HATI";
      break;

    case "hijau":
      lampuHijau.classList.add("nyala");
      tesStatus.textContent = "Status : Hijau - Jalan";
      break;
  }
}

//tombol manual
btnMerah.addEventListener("click", function(){
  nyalakanLampu("merah")
})

btnKuning.addEventListener("click", function(){
  nyalakanLampu("kuning")
})

btnHijau.addEventListener("click", function(){
  nyalakanLampu("hijau")
})

// tombol berhenti
tombolBerhenti.addEventListener("click", function(){
  clearInterval(intervalOtomatis)
  matikanSemua();
  tesStatus.textContent="Status : Mati"
})
// tombol otomatis
function jalanOtomatis(){
  const warna = urutan[indexLampu]
  nyalakanLampu(warna)
  indexLampu++;
  if (indexLampu >= urutan.length){
    indexLampu= 0
  }
}

tombolMulai.addEventListener("click", function(){
  clearInterval(intervalOtomatis);
  indexLampu=0;
  jalanOtomatis();
  intervalOtomatis = setInterval(jalanOtomatis, 1000)
})