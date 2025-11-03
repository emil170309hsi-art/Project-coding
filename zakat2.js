var inputGram = document.getElementById("emas-gram");
var tombol = document.getElementById("hitung");
var hasil = document.getElementById("hasil");
var historyList = document.getElementById("History");

var hargaEmasRupiah = 20000;

function muatHistory(){
    let histori= localStorage.getItem("zakatHistory")

    if(histori === null){
        histori = []
    }else{
        histori=JSON.parse(histori)
    }

    historyList.innerHTML="";

    for( var i=0; i < histori.length;i++){
        var li=document.createElement("li")
        li.textContent=histori[i]
        historyList.appendChild(li)
    }
}

function simpanHistory(text){
    let histori= localStorage.getItem("zakatHistory")

    if(histori === null){
        histori = []
    }else{
        histori=JSON.parse(histori)
    }

    histori.unshift(text);

    if(histori.length > 10){
        histori.pop()
    }
    localStorage.setItem("zakatHistory",JSON.stringify(histori))

    muatHistory();

}
tombol.addEventListener("click",function(){

    var emas= parseFloat(inputGram.value)
    var nisab = 85;

    if(inputGram.value === ""){
        alert("ISI DULU BOS!!!")
        hasil.textContent="ERROR BOS";
        return
    }

    if(emas < nisab){
        hasil.textContent="Belum wajib dek!"
        simpanHistory("emas:" + emas + "belum wajib dek!")
    }else{
        let zakat= emas * 0.025;
        let rupiah=zakat * hargaEmasRupiah

        hasil.textContent="Emas:" + emas +"gram" + "|" + "zakat:" + zakat + "gram";
        simpanHistory("Emas:" + emas + "gram" + "|" +"zakat:" + zakat + "gram" + "|" + rupiah + "rupiah") 
    }

    inputGram.value=""

})
muatHistory()

