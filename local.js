document.body.onkeyup = function(e){
    if (e.keyCode ==13){
        localStorage.setItem('Aflos Chirurgie OK1', document.getElementById("AC1").value);
        localStorage.setItem('Aflos Chirurgie OK2', document.getElementById("AC2").value);
        localStorage.setItem('Aflos Chirurgie OK3', document.getElementById("AC3").value);
        localStorage.setItem('Aflos Chirurgie OK4', document.getElementById("AC4").value);
        localStorage.setItem('Aflos Chirurgie OK5', document.getElementById("AC5").value);
        localStorage.setItem('Aflos Chirurgie OK6', document.getElementById("AC6").value);
        localStorage.setItem('Aflos Chirurgie OK7', document.getElementById("AC7").value);
        localStorage.setItem('Aflos Chirurgie OK8', document.getElementById("AC8").value);
        localStorage.setItem('Aflos Anesthesie OK1', document.getElementById("AA1").value);
        localStorage.setItem('Aflos Anesthesie OK2', document.getElementById("AA2").value);
        localStorage.setItem('Aflos Anesthesie OK3', document.getElementById("AA3").value);
        localStorage.setItem('Aflos Anesthesie OK4', document.getElementById("AA4").value);
        localStorage.setItem('Aflos Anesthesie OK5', document.getElementById("AA5").value);
        localStorage.setItem('Aflos Anesthesie OK6', document.getElementById("AA6").value);
        localStorage.setItem('Aflos Anesthesie OK7', document.getElementById("AA7").value);
        localStorage.setItem('Aflos Anesthesie OK8', document.getElementById("AA8").value);
        localStorage.setItem('Chirurgie 1 OK1',document.getElementById("C11").value);
        localStorage.setItem('Chirurgie 1 OK2',document.getElementById("C12").value);
        localStorage.setItem('Chirurgie 1 OK3',document.getElementById("C13").value);
        localStorage.setItem('Chirurgie 1 OK4',document.getElementById("C14").value);
        localStorage.setItem('Chirurgie 1 OK5',document.getElementById("C15").value);
        localStorage.setItem('Chirurgie 1 OK6',document.getElementById("C16").value);
        localStorage.setItem('Chirurgie 1 OK7',document.getElementById("C17").value);
        localStorage.setItem('Chirurgie 1 OK8',document.getElementById("C18").value);
        localStorage.setItem('Chirurgie 2 OK1',document.getElementById("C21").value);
        localStorage.setItem('Chirurgie 2 OK2',document.getElementById("C22").value);
        localStorage.setItem('Chirurgie 2 OK3',document.getElementById("C23").value);
        localStorage.setItem('Chirurgie 2 OK4',document.getElementById("C24").value);
        localStorage.setItem('Chirurgie 2 OK5',document.getElementById("C25").value);
        localStorage.setItem('Chirurgie 2 OK6',document.getElementById("C26").value);
        localStorage.setItem('Chirurgie 2 OK7',document.getElementById("C27").value);
        localStorage.setItem('Chirurgie 2 OK8',document.getElementById("C28").value);
        localStorage.setItem('Anesthesie OK1',document.getElementById('A1').value);
        localStorage.setItem('Anesthesie OK2',document.getElementById('A2').value);
        localStorage.setItem('Anesthesie OK3',document.getElementById('A3').value);
        localStorage.setItem('Anesthesie OK4',document.getElementById('A4').value);
        localStorage.setItem('Anesthesie OK5',document.getElementById('A5').value);
        localStorage.setItem('Anesthesie OK6',document.getElementById('A6').value);
        localStorage.setItem('Anesthesie OK7',document.getElementById('A7').value);
        localStorage.setItem('Anesthesie OK8',document.getElementById('A8').value);
        localStorage.setItem('Notities',document.getElementById('Notities').value);
    }}
 
 var AC1 = localStorage.getItem('Aflos Chirurgie OK1');
    if(AC1) { document.getElementById("AC1").value = AC1 }
 
 var AC2 = localStorage.getItem('Aflos Chirurgie OK2');
    if(AC2) { document.getElementById("AC2").value = AC2 }
 
 var AC3 = localStorage.getItem('Aflos Chirurgie OK3');
    if(AC3) { document.getElementById("AC3").value = AC3 }
 
 var AC4 = localStorage.getItem('Aflos Chirurgie OK4');
    if(AC4) { document.getElementById("AC4").value = AC4 }
 
 var AC5 = localStorage.getItem('Aflos Chirurgie OK5');
    if(AC5) { document.getElementById("AC5").value = AC5 }
 
 var AC6 = localStorage.getItem('Aflos Chirurgie OK6');
    if(AC6) { document.getElementById("AC6").value = AC6 }
 
 var AC7 = localStorage.getItem('Aflos Chirurgie OK7');
    if(AC7) { document.getElementById("AC7").value = AC7 }
 
 var AC8 = localStorage.getItem('Aflos Chirurgie OK8');
    if(AC8) { document.getElementById("AC8").value = AC8 }
 
 var AA1 = localStorage.getItem('Aflos Anesthesie OK1');
    if(AA1) { document.getElementById("AA1").value = AA1 }
 
 var AA2 = localStorage.getItem('Aflos Anesthesie OK2');
    if(AA2) { document.getElementById("AA2").value = AA2 }
 
 var AA3 = localStorage.getItem('Aflos Anesthesie OK3');
    if(AA3) { document.getElementById("AA3").value = AA3 }
 
 var AA4 = localStorage.getItem('Aflos Anesthesie OK4');
    if(AA4) { document.getElementById("AA4").value = AA4 }
 
 var AA5 = localStorage.getItem('Aflos Anesthesie OK5');
    if(AA5) { document.getElementById("AA5").value = AA5 }
 
 var AA6 = localStorage.getItem('Aflos Anesthesie OK6');
    if(AA6) { document.getElementById("AA6").value = AA6 }
 
 var AA7 = localStorage.getItem('Aflos Anesthesie OK7');
    if(AA7) { document.getElementById("AA7").value = AA7 }
 
 var AA8 = localStorage.getItem('Aflos Anesthesie OK8');
    if(AA8) { document.getElementById("AA8").value = AA8 }
 
 var C11 = localStorage.getItem('Chirurgie 1 OK1');
    if(C11) { document.getElementById("C11").value = C11 }
 
 var C12 = localStorage.getItem('Chirurgie 1 OK2');
    if(C12) { document.getElementById("C12").value = C12 }
 
 var C13 = localStorage.getItem('Chirurgie 1 OK3');
    if(C13) { document.getElementById("C13").value = C13 }
 
 var C14 = localStorage.getItem('Chirurgie 1 OK4');
    if(C14) { document.getElementById("C14").value = C14 }
 
 var C15 = localStorage.getItem('Chirurgie 1 OK5');
    if(C15) { document.getElementById("C15").value = C15 }
 
 var C16 = localStorage.getItem('Chirurgie 1 OK6');
    if(C16) { document.getElementById("C16").value = C16 }
 
 var C17 = localStorage.getItem('Chirurgie 1 OK7');
    if(C17) { document.getElementById("C17").value = C17 }
 
 var C18 = localStorage.getItem('Chirurgie 1 OK8');
    if(C18) { document.getElementById("C18").value = C18 }
 
 
 var C21 = localStorage.getItem('Chirurgie 2 OK1');
    if(C21) { document.getElementById("C21").value = C21 }
 
 var C22 = localStorage.getItem('Chirurgie 2 OK2');
    if(C22) { document.getElementById("C22").value = C22 }
 
 var C23 = localStorage.getItem('Chirurgie 2 OK3');
    if(C23) { document.getElementById("C23").value = C23 }
 
 var C24 = localStorage.getItem('Chirurgie 2 OK4');
    if(C24) { document.getElementById("C24").value = C24 }
 
 var C25 = localStorage.getItem('Chirurgie 2 OK5');
    if(C25) { document.getElementById("C25").value = C25 }
 
 var C26 = localStorage.getItem('Chirurgie 2 OK6');
    if(C26) { document.getElementById("C26").value = C26 }
 
 var C27 = localStorage.getItem('Chirurgie 2 OK7');
    if(C27) { document.getElementById("C27").value = C27 }
 
 var C28 = localStorage.getItem('Chirurgie 2 OK8');
    if(C28) { document.getElementById("C28").value = C28 }
 
 var A1 = localStorage.getItem('Anesthesie OK1');
    if(A1) { document.getElementById("A1").value = A1 }
 
 var A2 = localStorage.getItem('Anesthesie OK2');
    if(A2) { document.getElementById("A2").value = A2 }
 
 var A3 = localStorage.getItem('Anesthesie OK3');
    if(A3) { document.getElementById("A3").value = A3 }
 
 var A4 = localStorage.getItem('Anesthesie OK4');
    if(A4) { document.getElementById("A4").value = A4 }
 
 var A5 = localStorage.getItem('Anesthesie OK5');
    if(A5) { document.getElementById("A5").value = A5 }
 
 var A6 = localStorage.getItem('Anesthesie OK6');
    if(A6) { document.getElementById("A6").value = A6 }
 
 var A7 = localStorage.getItem('Anesthesie OK7');
    if(A7) { document.getElementById("A7").value = A7 }
 
 var A8 = localStorage.getItem('Anesthesie OK8');
    if(A8) { document.getElementById("A8").value = A8 }
 
 var Notities = localStorage.getItem('Notities');
    if(Notities) { document.getElementById("Notities").value = Notities}
 
 

