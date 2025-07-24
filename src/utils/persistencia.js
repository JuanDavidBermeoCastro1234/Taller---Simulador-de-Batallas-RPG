const fs = require('fs');
const ruta = './data/personajes.json';

/**
 * 💾 Guarda el arreglo de personajes en el archivo JSON.
 * @param {Array} personajes - Lista de personajes a guardar.
 */
function guardar(personajes) {
  fs.writeFileSync(ruta, JSON.stringify(personajes, null, 2));
  // Mensaje de guardado eliminado para evitar mostrarlo cada vez
}

/**
 * 📂 Carga los personajes desde el archivo. Si no existe o hay error, retorna un arreglo vacío.
 * @returns {Array} personajes
 */
function cargar() {
  if (!fs.existsSync(ruta)) return [];

  try {
    const data = fs.readFileSync(ruta, 'utf-8');
    const json = JSON.parse(data);
    return Array.isArray(json) ? json : [];
  } catch (error) {
    console.error('❌ Error al cargar personajes:', error.message);
    return [];
  }
}

module.exports = { guardar, cargar };
