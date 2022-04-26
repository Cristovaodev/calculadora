function alternar() {
  var element = document.body;
  element.classList.toggle("modo-escuro");
}

function preencher(dado){
  var n1 = document.getElementById('visor1').innerHTML;
  document.getElementById('visor1').innerHTML = n1 + dado;
  
}

function apagar() {
  document.getElementById('visor1').innerHTML ="" ;

  document.getElementById('visor2').innerHTML = "";
}

function retroceder(){
  var visor1 = document.getElementById('visor1').innerHTML;

  document.getElementById("visor1").innerHTML = visor1.substring(0, visor1.length -1);
}

function act(){
  var act = document.getElementById('visor1').innerHTML;
  document.getElementById('visor2').innerHTML = eval(act);
  
}

function calcular(){
  var resultado = document.getElementById("visor1").innerHTML;

  if(resultado)

  {
    document.getElementById('visor2').innerHTML = eval(resultado);
}
}

function porcento(){
  
  getporcento = document.getElementById('visor1').innerHTML;
  document.getElementById('visor2').innerHTML = getporcento/100;
  
}

function raiz(){
  getraiz = document.getElementById('visor1').innerHTML;
  n_quadrado = Math.sqrt(getraiz);
  document.getElementById('visor2').innerHTML = n_quadrado;
}

function recalcular(){
  
  resultado= document.getElementById('visor2').innerHTML;
  document.getElementById('visor1').innerHTML = resultado;
  resultado= document.getElementById('visor2').innerHTML = "";
}


time = setInterval(limpeza_auto,50);

function limpeza_auto(){

  autom = document.getElementById('visor1').innerHTML;
  if(autom == ""){
  document.getElementById('visor2').innerHTML = "";
  }
}


function mostrar(){
  document.getElementById('pri').setAttribute("style","display:flex");
  
  document.getElementById('corpo_modal').setAttribute("style","display:block;");
}

function ocultar(){
  document.getElementById('corpo_modal').setAttribute("style","display:none");
  document.getElementById('pri').setAttribute("style","display:none");
}
