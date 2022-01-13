let respo1 = ("Falhamos! Exames encontrados comprovam que Stanley não possuía doenças caidiacas.")
let respo2 = ("parabens! Descobrimos que Stanley morreu porque tomou tylenol e estava invenenado, consequentemente também descobrimos que Adan Junes também havia consumido o mesmo medicamento ")
let respo3 = ("Falhamos! Stanley não apresentou indícios de reações alérgicas nos exames pericial.")

function bum() {
    var a = window.document.getElementById('respfinal')
    a.innerText = respo1
  }
  
  
  function bdois(){
    var a = window.document.getElementById('respfinal')
    a.innerText = respo2
  }
  
  function btres(){
    var a = window.document.getElementById('respfinal')
    a.innerText = respo3
  }