// ============================================================
// Cálculo de calificaciones — misma lógica que el Excel
//   Punto  = suma de pesos de los criterios con "y"
//   Bloque = promedio de sus puntos
//   Final  = promedio de los 4 bloques
// Sin redondeo: los valores se guardan completos.
// ============================================================
import { PUNTOS, BLOQUES, CERTIFICACION } from "./catalogo.js";

const promedio = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;

// Calificación de un punto (0 a 1). Para 17–19 toma el valor capturado (o null si está pendiente).
export function calificarPunto(punto, respuestas = {}, resultados = {}) {
  if (punto.valor) {
    const v = resultados[punto.valor];
    return (v === null || v === undefined || v === "") ? null : Number(v);
  }
  return punto.criterios.reduce((suma, c) => suma + (respuestas[c.id]?.v === "y" ? c.peso : 0), 0);
}

// Cuántos criterios y/n faltan por contestar
export function faltantes(respuestas = {}) {
  const ids = PUNTOS.flatMap(p => p.criterios ? p.criterios.map(c => c.id) : []);
  return ids.filter(id => !["y", "n"].includes(respuestas[id]?.v));
}

export function resultadosCompletos(resultados = {}) {
  return ["desempeno", "ahorro", "examen"].every(k => resultados[k] !== null && resultados[k] !== undefined && resultados[k] !== "");
}

// Calcula todo. Si faltan los 3 valores, el bloque Resultados, la final y la certificación quedan en null.
export function calcular(respuestas = {}, resultados = {}) {
  const puntos = {};
  PUNTOS.forEach(p => { puntos[p.n] = calificarPunto(p, respuestas, resultados); });

  const bloques = {};
  BLOQUES.forEach(b => {
    const vals = b.puntos.map(n => puntos[n]);
    bloques[b.id] = vals.some(v => v === null) ? null : promedio(vals);
  });

  const contestada = faltantes(respuestas).length === 0;
  const listo = contestada && Object.values(bloques).every(v => v !== null);
  const calificacion = listo ? promedio(Object.values(bloques)) : null;

  // La certificación incluye los puntos 17–19, así que solo se conoce cuando están capturados
  let certificado = null;
  if (listo) {
    certificado = Object.entries(CERTIFICACION).every(([n, [op, min]]) =>
      op === ">" ? entero(puntos[n]) > entero(min) : entero(puntos[n]) >= entero(min));
  }

  return { puntos, bloques, calificacion, certificado };
}

// Pre-calificación: aproximado con los datos disponibles antes de cerrar.
// El bloque Resultados promedia solo los puntos que ya tienen dato (16 y los de 17–19 capturados).
// Los criterios sin contestar cuentan como 0.
export function preCalificacion(respuestas = {}, resultados = {}) {
  const puntos = {};
  PUNTOS.forEach(p => { puntos[p.n] = calificarPunto(p, respuestas, resultados); });
  const bloques = {};
  BLOQUES.forEach(b => { bloques[b.id] = promedio(b.puntos.map(n => puntos[n]).filter(v => v !== null)); });
  const faltan = PUNTOS.filter(p => p.valor && puntos[p.n] === null).map(p => p.n);
  return { puntos, bloques, calificacion: promedio(Object.values(bloques).filter(v => v !== null)), faltan };
}

// Puntos que no alcanzan su mínimo de certificación (sirve para explicar un "No certificado")
export function puntosBajoMinimo(puntos) {
  return Object.entries(CERTIFICACION)
    .filter(([n, [op, min]]) => puntos[n] !== null && !(op === ">" ? entero(puntos[n]) > entero(min) : entero(puntos[n]) >= entero(min)))
    .map(([n]) => Number(n));
}

// Las calificaciones se muestran y se comparan redondeadas a entero (como se manejan en Zubex).
// Los valores se guardan completos; solo se redondea al mostrar y al comparar.
export const entero = (v) => Math.round(v * 100);
export const alcanza = (v, min) => entero(v) >= entero(min);
export const pct = (v, dec = 0) => (v === null || v === undefined) ? "—"
  : (dec === 0 ? String(entero(v)) : (v * 100).toFixed(dec).replace(/\.0+$/, "")) + " %";
