const pantalla1 = document.querySelector(".pantalla1", ".pantalla2", "pantalla3");

//Funcion de los botones 
const botones = document.querySelectorAll(".btn");

//Funcion del popup al darle al boton de calcular
const open = document.getElementById('Calcular');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');




//PopUp
open.addEventListener('click', () => {
    modal_container.classList.add('show');  
  });
  
  close.addEventListener('click', () => {
    modal_container.classList.remove('show');
  });



//Calculo de la nota
function calcular()
{
  var numero1 = parseInt(document.getElementById("nota1").value);
  var numero2 = parseInt(document.getElementById("nota2").value);
  var numero3 = parseInt(document.getElementById("nota3").value);



  //Tomar el mayor de los 3 datos
  if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
    segundoMayor = numero2 >= numero3 ? numero2 : numero3;
  } else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
    segundoMayor = numero1 >= numero3 ? numero1 : numero3;
  } else {
    mayor = numero3;
    segundoMayor = numero1 >= numero2 ? numero1 : numero2;
  }

  //Suma y promedio de las 2 mejores notas
  var TotalP = (mayor + segundoMayor) / 2 * 0.6


  // Realizar cálculos
  var resultado2 = (60 - TotalP)/0.4;
  var resultado3 = (70 - TotalP )/0.4;
  var resultado4 = (80 - TotalP)/0.4;
  var resultado5= (90 - TotalP)/0.4;
  var promedio = (numero1 + numero2 + numero3) /3;

  
  //Para que la nota no pase 100%
  resultado5 = resultado5 >= 100 ? "" : resultado5;
  resultado4 = resultado4 >= 100 ? "" : resultado4;
  resultado3 = resultado3 >= 100 ? "" : resultado3;
  resultado2 = resultado2 >= 100 ? "" : resultado2;


  // Actualizar resultados en el HTML
  document.getElementById("resultado2").textContent =resultado2.toFixed(2);
  document.getElementById("resultado3").textContent =resultado3.toFixed(2);
  document.getElementById("resultado4").textContent =resultado4.toFixed(2);
  document.getElementById("resultado5").textContent =resultado5.toFixed(2);
  document.getElementById("promedio").textContent =promedio.toFixed(2);
  }


  //funcion para limpiar los campos
  function limpiarCampos()
  {
    document.getElementById("nota1").value = "0";
    document.getElementById("nota2").value = "0";
    document.getElementById("nota3").value = "0";
  }

  
  //Limpiar campos seteados a cero en notas 
  function limpiarCampo1() {
    var inputNumero1 = document.getElementById("nota1");
    if (inputNumero1.value === "0") {
      inputNumero1.value = "";
    }   
  }
  function limpiarCampo2() {
    var inputNumero2 = document.getElementById("nota2");
    if (inputNumero2.value === "0") {
      inputNumero2.value = "";
    }
  }

  function limpiarCampo3() {
    var inputNumero3 = document.getElementById("nota3");
    if (inputNumero3.value === "0") {
      inputNumero3.value = "";
    }
  }
