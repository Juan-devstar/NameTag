let namesArray = [];

function insertarNombre(event) {
  event.preventDefault();
  const nombreInput = document.getElementById('nombre');
  if (nombreInput.value.trim() !== '') {
      namesArray.push(nombreInput.value);
      namesArray.forEach(function (elemento) {
          console.log(elemento);
      });
  }
}
