//Funcion de los botones 
const botones = document.querySelectorAll(".btn");

//Funcion del popup al darle al boton de calcular
const open = document.getElementById('Calcular');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');


//Calculo de la nota
function calcular()
{
  //Tomamos los datos ingresados y verificamos que por lo menos dos de los tres datos sean distintos a cero 
  const numero1 = Number(document.getElementById("nota1").value.trim());
  const numero2 = Number(document.getElementById("nota2").value.trim());
  const numero3 = Number(document.getElementById("nota3").value.trim());

  //Limita para no ingresar notas mayores a 100
  if ((numero1 > 100) || (numero2 > 100) || (numero3 > 100))
  {
    alert("La nota no puede ser mayor a 100 ...");    
    for (let i = 1; i <= 3; i++) {
      document.getElementById(`nota${i}`).value = 0;
    }
    return;
  }

  //Limita para no ingresar numeros negativos
  else if ((numero1 < 0 ) || (numero2 < 0) || (numero3 < 0 ))
  {
    alert("La nota no puede ser un numero negativo ..."); 
    for (let i = 1; i <= 3; i++) {
      document.getElementById(`nota${i}`).value = 0;
    } 
    return;
  }

  //Validador de notas
  const nonZeroCount = [numero1, numero2, numero3].filter(value => value !== 0).length;
  if (nonZeroCount < 2)
  {
    alert("Debe de ingresar por lo menos 2 notas ...");  
    for (let i = 1; i <= 3; i++) {
      document.getElementById(`nota${i}`).value = 0;
    }
    return;
  }


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
  const resultados = [resultado5, resultado4, resultado3, resultado2];
  for (let i = 0; i < resultados.length; i++) {
    resultados[i] = resultados[i] >= 100 ? 0 : resultados[i];
  }
  
  // Desestructuración
  [resultado5, resultado4, resultado3, resultado2] = resultados;


  // Actualizar resultados en el HTML
  document.getElementById("resultado2").textContent =resultado2.toFixed(2);
  document.getElementById("resultado3").textContent =resultado3.toFixed(2);
  document.getElementById("resultado4").textContent =resultado4.toFixed(2);
  document.getElementById("resultado5").textContent =resultado5.toFixed(2);
  document.getElementById("promedio").textContent =promedio.toFixed(2);

  //PopUp
  open.addEventListener('click', () => {
    modal_container.classList.add('show');  
  });
  
  
  close.addEventListener('click', () =>
  {
    return window.location.href = "index.html";
    
  });
}


  //funcion para limpiar los campos
  function limpiarCampos()
  {
    const elementIds = ["nota1", "nota2", "nota3", "resultado2", "resultado3", "resultado4", "resultado5", "promedio"];
    const value = 0;
    for (let i = 0; i < elementIds.length; i++) {
      document.getElementById(elementIds[i]).value = value;
    }
  }

  

  //Limpiar al dar clic a campos seteados a cero en notas 
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
  