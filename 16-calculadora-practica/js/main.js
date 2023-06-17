function sumar () {
  const forma = document.getElementById('forma');
  let operandoA = parseInt(forma['operandoA'].value);
  let operandoB = parseInt(forma['operandoB'].value);
  let resultado = operandoA + operandoB;
  imprimirResutlado(resultado);
  return;
}

function restar() {
  const forma = document.getElementById('forma');
  let operandoA = parseInt(forma['operandoA'].value);
  let operandoB = parseInt(forma['operandoB'].value);
  let resultado = operandoA - operandoB;
  imprimirResutlado(resultado);
  return;
}

function multiplicar() {
  const forma = document.getElementById('forma');
  let operandoA = parseInt(forma['operandoA'].value);
  let operandoB = parseInt(forma['operandoB'].value);
  let resultado = operandoA * operandoB;
  imprimirResutlado(resultado);
  return;
}

function dividir() {
  const forma = document.getElementById('forma');
  let operandoA = parseInt(forma['operandoA'].value);
  let operandoB = parseInt(forma['operandoB'].value);
  let resultado = operandoA / operandoB;
  imprimirResutlado(resultado);
  return;
}

function imprimirResutlado(resultado) {
  if (isNaN(resultado)) {
    resultado = 'La operacion no incluye numero';
  } else {
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
  }
}