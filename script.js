let countdown = new Date("22 december 2025").getTime();
let x = setInterval(function () {
    let indiki = new Date().getTime();
    let araliq = countdown - indiki;
    let gun = Math.floor(araliq / (1000 * 60 * 60 * 24));
    let saat = Math.floor((araliq % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let deqiqe = Math.floor((araliq % (1000 * 60 * 60)) / (1000 * 60));
    let saniye = Math.floor((araliq % (1000 * 60)) / 1000);
    document.getElementById("goster").innerHTML = gun + "g " + saat + "s " +
        deqiqe + "d " + saniye + "s ";
    if (araliq < 0) {
        clearInterval(x);
        document.getElementById("goster").innerHTML = "Daxil etdiyiniz tarix keçmişdə qalıb :(";
    }
}, 1000);