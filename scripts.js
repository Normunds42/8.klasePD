function nolasiitSaturu(evt) {





var dati = [];
var summa = 0;


var datnesSaturs;
datnesSaturs = evt.target.result;




dati = datnesSaturs.split(",");



izvade.innerHTML = summa/ dati.length;
for (var i= 0; i < dati.length; i++){
summa = summa + Number(dati[i]);
}
izvade.innerHTML = dati.join(", ");
izvade1.innerHTML = summa/dati.length;
}

function atveertDatni() {
var d = datne.files[0];
if(d){
atveertLasiisanai(d);
  }
}

function atveertLasiisanai(d) {
var r = new FileReader();
r.readAsText(d);
r.onload = nolasiitSaturu;

r.onerror = kluudasApstraade;
}

function kluudasApstraade(evt) {
if(evt.target.error.name == "NotReadableError") {
alert("Datnes nolasīšanas laikā konstatēta kļūda");
   }
}
