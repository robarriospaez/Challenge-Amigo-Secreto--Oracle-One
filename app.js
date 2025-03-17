// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
  // Obtener el valor del campo de texto
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  // Validar que el campo no esté vacío
  if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre válido");
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombreAmigo);

  // Actualizar la lista visible
  actualizarListaAmigos();

  // Limpiar el campo de texto
  inputAmigo.value = "";

  // Enfocar nuevamente el campo de texto para facilitar la entrada de más nombres
  inputAmigo.focus();
}

/**
 * Función para actualizar la lista de amigos en el DOM
 */
function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista actual
  listaAmigos.innerHTML = "";

  // Agregar cada amigo como un elemento de lista
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

/**
 * Función para sortear un amigo aleatorio
 */
function sortearAmigo() {
  // Verificar que haya al menos un amigo en la lista
  if (amigos.length === 0) {
    alert("Debes agregar al menos un amigo para realizar el sorteo");
    return;
  }

  // Seleccionar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre del amigo seleccionado
  const amigoSeleccionado = amigos[indiceAleatorio];

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>¡${amigoSeleccionado} es tu amigo secreto!</li>`;
}
