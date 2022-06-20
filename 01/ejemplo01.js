
/**
 * 
 * @param { string } string Una cadena de texto
 * @param { number } number Un número
 * @returns { string }
 */
function funcion(string, number) {
    return string + number;
}

/**
 * @type { string } Cualquier cadena que desee agregar
 */
let cadena;

/**
 * @type { HTMLInputElement } Caja de texto
 */
const input = document.querySelector("#text-input");

const datos = `${cadena}`;

if (input) input.oninput = () => {
    // Cualquier cosa que se ejecuta mientras el usuario
    // ingresa algún tipo de texto.
}