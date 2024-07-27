const abecedario = "abcdefghijklmnñopqrstuvwxyz";
const parte1 = abecedario.slice(0, 14); // Incluye la ñ
const parte2 = abecedario.slice(14).split('').reverse().join('') + 'ñ'; // Incluye la ñ al final

function cifrar(letra) {
  if (letra === 'n') {
    return 'n';
  }

  let index = parte1.indexOf(letra);
  if (index !== -1) {
    return parte2[index];
  }

  index = parte2.indexOf(letra);
  if (index !== -1) {
    return parte1[index];
  }

  return letra; // Si la letra no está en el abecedario, se devuelve tal cual
}

function descifrar(letra) {
  if (letra === 'n') {
    return 'n';
  }

  let index = parte2.indexOf(letra);
  if (index !== -1) {
    return parte1[index];
  }

  index = parte1.indexOf(letra);
  if (index !== -1) {
    return parte2[index];
  }

  return letra; // Si la letra no está en el abecedario, se devuelve tal cual
}

function obtenerText() {
  let inputText = document.getElementById('inputText').value;
  let textoCifrado = "";
  for (let i = 0; i < inputText.length; i++) {
    textoCifrado += cifrar(inputText[i]);
  }
  let outputText = document.getElementById('outputText');
  outputText.value = textoCifrado;
  actualizarPlaceholder(outputText);
}

function obtener() {
  let inputText = document.getElementById('inputText').value;
  let textoDescifrado = "";
  for (let i = 0; i < inputText.length; i++) {
    textoDescifrado += descifrar(inputText[i]);
  }
  let outputText = document.getElementById('outputText');
  outputText.value = textoDescifrado;
  actualizarPlaceholder(outputText);
}

function copiarTexto() {
  let outputText = document.getElementById('outputText');
  outputText.select();
  outputText.setSelectionRange(0, 99999);
  
  // Uso de la API del portapapeles moderna
  navigator.clipboard.writeText(outputText.value).then(() => {
    alert("Texto copiado: " + outputText.value);
  }).catch(err => {
    alert("Error al copiar el texto: " + err);
  });
}

function limpiar() {
  let outputText = document.getElementById('outputText');
  outputText.value = ''; // Limpia el contenido del textarea
  
  const placeholder = document.getElementById('formattedPlaceholder');
  placeholder.style.display = 'flex'; // Muestra el placeholder si el textarea está vacío
}

function actualizarPlaceholder(textarea) {
  const placeholder = document.getElementById('formattedPlaceholder');
  if (textarea.value === '') {
    placeholder.style.display = 'flex';
  } else {
    placeholder.style.display = 'none';
  }
}

const textarea = document.getElementById('outputText');
const placeholder = document.getElementById('formattedPlaceholder');

textarea.addEventListener('focus', () => {
    placeholder.style.display = 'none';
});

textarea.addEventListener('blur', () => {
    if (textarea.value === '') {
        placeholder.style.display = 'flex';
    }
});

window.addEventListener('load', () => {
    if (textarea.value === '') {
        placeholder.style.display = 'flex';
    }
});
