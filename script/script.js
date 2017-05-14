function berechnenWartRent(pws, ptver, kt) {
  //Befuellung der Variablen
  pws = document.getElementById('wartungssumme').value;
  ptver = document.getElementById('verbrauchteTage').value;
  kt = document.getElementById('tagessatz').value;
//Pruefung Zahlenwerte
if (kt==="0") {
  alert('Fehler. Zahlenwert Tagessatz darf nicht 0 betragen!');
  exit();
} else if (ptver==="0") {
  alert('Fehler. Zahlenwert verbrauchte Tage darf nicht 0 betragen');
  exit();
} else {
  //Berechnung der Werte
  ergebnis = pws/3/ptver/kt;
  ergebnisGesamt = pws/ptver/kt;
  maxWert = pws/kt;
  maxWertPS = pws/3/kt;
};
};

function clearfields() {
  // Löschen der Werte in den einzelnen Feldern
  document.getElementById('wartungssumme').value="";
  document.getElementById('verbrauchteTage').value="";
  document.getElementById('tagessatz').value="";
  document.getElementById('ergebnis').innerHTML="";
  document.getElementById('meldung').innerHTML="";
  document.getElementById('ergebnisGesamt').innerHTML="";
  document.getElementById('meldungGesamt').innerHTML="";
  document.getElementById('maxWert').innerHTML="";
  document.getElementById('maxWertPS').innerHTML="";
};

function ausgabeWerte() {
berechnenWartRent();
if (isNaN(ergebnis)) {
  alert('Fehler! Bitte Werte eingeben!');
} else {
      werteRunden();
      document.getElementById('ergebnis').innerHTML=ergebnis;
      document.getElementById('ergebnisGesamt').innerHTML=ergebnisGesamt;
      document.getElementById('maxWert').innerHTML=maxWert + ' PT';
      document.getElementById('maxWertPS').innerHTML=maxWertPS + ' PT';
      bewertungWerte();
};
};

function bewertungWerte() {
  if (ergebnis<1.0) {
    document.getElementById('meldung').innerHTML="schlecht";
    document.getElementById('meldung').style.color="red";
  } else if (ergebnis>1.0) {
    document.getElementById('meldung').innerHTML="gut";
    document.getElementById('meldung').style.color ="green";
  } else {
    document.getElementById('meldung').innerHTML="neutral";
    document.getElementById('meldung').style.color="black";
  };
  if (ergebnisGesamt<1.0) {
    document.getElementById('meldungGesamt').innerHTML="schlecht";
    document.getElementById('meldungGesamt').style.color="red";
  } else if (ergebnisGesamt>1.0) {
    document.getElementById('meldungGesamt').innerHTML="gut";
    document.getElementById('meldungGesamt').style.color ="green";
  } else {
    document.getElementById('meldungGesamt').innerHTML="neutral";
    document.getElementById('meldungGesamt').style.color="black";
  };
};

function werteRunden() {
  ergebnis = Math.round(ergebnis*100)/100;
  ergebnisGesamt = Math.round(ergebnisGesamt*100)/100;
  maxWert = Math.round(maxWert*100)/100;
  maxWertPS = Math.round(maxWertPS*100)/100;
};
