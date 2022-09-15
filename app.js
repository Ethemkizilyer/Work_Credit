const kredi = document.querySelector(".form-select")
const vade = document.querySelector("#vade")
const tutar = document.querySelector("#tutar")
const hesap = document.querySelector(".btn")
const sonuc = document.querySelector(".sonuc");

let oran= 0
let taksit = 0
// tutar.value = numberWithCommas(tutar.value);

hesap.addEventListener("click",(item) =>{

    // item.preventDefault();
    if (!kredi.value || !vade.value || !tutar.value) {
      alert("Eksik Giriş Yaptınız");
      
    }
    else{
    if (kredi.value === "Konut Kredisi") {
      oran = 1.29;
    } else if (kredi.value === "İhtiyaç Kredisi") {
      oran = 1.99;
    } else if (kredi.value === "Araç Kredisi") {
      oran = 1.79;
    } 
 function numberWithCommas(x) {
   var parts = x.toString().split(".");
   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

   return parts.join(",");
 }



    const faiz = oran / 100;
    taksit = (tutar.value * (faiz * (1 + faiz) ** vade.value)) / ((1 + faiz) ** vade.value - 1)
    
    let toplam = (taksit * vade.value).toFixed(2);
    console.log(toplam, typeof toplam);

toplam = numberWithCommas(toplam);
taksit = numberWithCommas(taksit);
// taksit = Number(taksit)
taksit = taksit.split(",")[0] + `,` + taksit.split(",")[1].slice(0, 2);
// console.log(taksit, typeof taksit);
tutar.value = numberWithCommas(tutar.value);
console.log(tutar.value, typeof tutar.value);
    sonuc.innerHTML = `<h2 class="mt-3 text-warning text-center">Kredi Bilgileri</h2>
        <table class="table table-bordered border-warning mt-4">
           <tbody>
    <tr>
      <th >Kredi Miktari</th>
      <td >${tutar.value}₺</td>
      <th >Kredi Tipi</th>
      <td >${kredi.value}</td>
    </tr>
    <tr>
      <th >Vade</th>
      <td >${vade.value}</td>
      <th >Faiz Orani</th>
      <td >${oran}</td>
    </tr>
    <tr>
      <th >Toplam Maliyet</th>
      <td >${toplam} ₺</td>
      <th >Taksit Tutari</th>
      <td >${taksit} ₺</td>
    </tr>
  </tbody>
        </table>`;

        if((tutar.value).length >= 7 ){
            alert("Kefilin Var Mı?")
        }
}})