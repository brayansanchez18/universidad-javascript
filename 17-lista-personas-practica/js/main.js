const personas = [
  new Persona('Emanuel', 'Sanchez'),
  new Persona('Sonia', 'Crespo')
];

function mostrarPersonas() {
  let texto = '';

  for (let persona of personas) {
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }

  document.getElementById('persona').innerHTML = texto;
}

function agregarPersona() {
  const forma = document.forms['forma'];
  const nombre = forma['nombre'];
  const apellido = forma['apellido'];

  if (nombre.value != '' && apellido.value != '') {
    const persona = new Persona(nombre.value, apellido.value);
  //  console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  } else {
    alert('No hay imformacion que agregar, por favor llene todos los campos');
  }

}