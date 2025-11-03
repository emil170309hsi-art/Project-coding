var inputGram = document.getElementById("emas-gram");
var tombol = document.getElementById("hitung");
var hasil = document.getElementById("hasil");
var historyList = document.getElementById("History");

var hargaEmasRupiah = 2000000;

function muatHistory() {
    let history = localStorage.getItem("zakatHistory");

    if (history === null) {
        history = [];
    } else {
        history = JSON.parse(history);
    }

    historyList.innerHTML = "";

    for (var i = 0; i < history.length; i++) {
        var li = document.createElement("li");
        li.textContent = history[i];
        historyList.appendChild(li);
    }
}

function simpanHistory(text) {
    let history = localStorage.getItem("zakatHistory");

    if (history === null) {
        history = [];
    } else {
        history = JSON.parse(history);
    }

    history.unshift(text); 

    if (history.length > 10) {
        history.pop(); 
    }

    localStorage.setItem("zakatHistory", JSON.stringify(history));
    muatHistory();
}

tombol.addEventListener("click", function () {
    var emas = parseFloat(inputGram.value);
    var nisab = 85;

    if (inputGram.value === "") {
        alert("Masukkan angka dulu!");
        hasil.textContent = "Input tidak valid";
        return;
    }

    if (emas < nisab) {
        hasil.textContent = "Belum wajib zakat";
        simpanHistory("Emas: " + emas + ` gram   Belum wajib zakat`);
    } else {
        let zakat = emas * 0.025;
        let rupiah = zakat * hargaEmasRupiah;

        hasil.textContent =  zakat + rupiah + "rupiah";
        simpanHistory("Emas:" + emas +  "_Zakat:" + zakat + " gram " + rupiah + " rupiah");
    }

    inputGram.value = "";
});

muatHistory();
