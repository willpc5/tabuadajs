function tabuada(){

    let num = parseInt(document.getElementById("num").value);
    let resposta = document.getElementById('resposta');
    let tabuada = "";
  
    for (let i = 1; i <= 10;  i++)
        tabuada += num + " x " + i +" = " + num * i + "<br />";
    
        resposta.innerHTML = tabuada;
        
  }