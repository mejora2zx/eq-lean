// ============================================================
// Catálogo de la Evaluación de Madurez Lean — Zubex
// Fuente: 09__Septiembre-_Madurez_Eq_Lean.xlsx
// Si cambian los criterios, sube VERSION_CATALOGO; cada
// auditoría guarda la versión con la que se evaluó.
// ============================================================

export const VERSION_CATALOGO = "2026-1";

export const BLOQUES = [
  { id: "edu", nombre: "Educación y Cultura",   puntos: [1, 2, 3, 4, 5] },
  { id: "sol", nombre: "Solución de Problemas", puntos: [6, 7, 8, 9, 10, 11] },
  { id: "mej", nombre: "Mejora Continua",       puntos: [12, 13, 14, 15] },
  { id: "res", nombre: "Resultados",            puntos: [16, 17, 18, 19] }
];

// Mínimos de certificación según el título de cada punto en la hoja de auditoría.
// Puntos 17–19: mínimos de la fórmula del Excel, aplicados como "igual o mayor".
// Un equipo es CERTIFICADO solo si cumple todos. Los puntos que no aparecen no tienen mínimo.
export const CERTIFICACION = {
  1:  [">=", 0.60],
  2:  [">=", 0.75],
  3:  [">=", 0.75],
  4:  [">=", 0.75],
  6:  [">=", 0.50],
  7:  [">=", 0.75],
  8:  [">=", 0.75],
  9:  [">=", 0.75],
  14: [">=", 0.50],
  15: [">=", 0.50],
  16: [">=", 0.75],
  17: [">=", 0.70],
  18: [">=", 0.80],
  19: [">=", 0.70]
};

// Puntos 1–16 se evalúan con y/n. Puntos 17–19 son valores en % que se capturan en Administración.
export const PUNTOS = [
  {
    "n": 1,
    "bloque": "edu",
    "titulo": "Entrenamiento y empoderamiento",
    "criterios": [
      {
        "id": "1.1",
        "peso": 0.2,
        "texto": "Los Integrantes del Equipo están entrenados en conceptos de Lean y solución de Problemas"
      },
      {
        "id": "1.2",
        "peso": 0.2,
        "texto": "El equipo muestra evidencia del uso de herramientas lean y se observa que han en el historial que se mantienen las mejoras realizadas por el equipo."
      },
      {
        "id": "1.3",
        "peso": 0.2,
        "texto": "El líder ha definido un back up, para cubrir en caso de emergencia, este ha sido entrenado de tal forma que ya presenta su gemba, analiza usando el 5 porques, da seguimiento a acciones y puede atender la evaluación o cubrir cualquier necesidad del equipo Lean"
      },
      {
        "id": "1.4",
        "peso": 0.2,
        "texto": "Tiempo de respuesta ante problemas sin esperar aprobación. El equipo muestra evidencia del tiempo total al responder en alguna falla a su personal o algún área de servició"
      },
      {
        "id": "1.5",
        "peso": 0.2,
        "texto": "Número de propuestas de mejora por empleado al mes. Todos los integrantes del equipo Lean demuestran que están están documentando mejoras, Osas, y estas son registradas oficialmente"
      }
    ]
  },
  {
    "n": 2,
    "bloque": "edu",
    "titulo": "Objetivos y metas",
    "criterios": [
      {
        "id": "2.1",
        "peso": 0.25,
        "texto": "El equipo asume la responsabilidad de sus métricos, y tienen junta diaria para analizarlos y mejorarlos, ( se muestra evidencia del cumplimiento en el gemba 1)"
      },
      {
        "id": "2.2",
        "peso": 0.25,
        "texto": "Son revisados los indicadores del equipo y cuando estos están en rojo, fuera de meta el líder le explica a los integrantes y el personal que esta involucrado en la falla explica la causa raíz y las acciones de prevención."
      },
      {
        "id": "2.3",
        "peso": 0.25,
        "texto": "Las acciones de prevención se les da seguimiento, NO están vencidas y una vez cerrada estas son documentadas como short kaizen"
      },
      {
        "id": "2.4",
        "peso": 0.25,
        "texto": "Adopción de nuevas herramientas o metodologías. El equipo esta buscando por lo regular nuevas herramientas de mejorar y estas son expuestas en sus gembas y muestra evidencia de implementación de estas nuevas herramientas con problemas reales del proceso"
      }
    ]
  },
  {
    "n": 3,
    "bloque": "edu",
    "titulo": "Compartiendo análisis con otros equipos",
    "criterios": [
      {
        "id": "3.1",
        "peso": 0.25,
        "texto": "El equipo lean cuando se presenta una falla esta es analizada solo por el líder involucrando a algunos integrantes"
      },
      {
        "id": "3.2",
        "peso": 0.25,
        "texto": "El Problema esta claramente identificado y es claro el alcance para todos los involucrados saben lo que deben analizar, por lo que el equipo debe mostrar evidencia del impacto o relevancia del análisis"
      },
      {
        "id": "3.3",
        "peso": 0.25,
        "texto": "El equipo lean forma un equipo multifuncional cuando existen fallas en la operación y trabajan en equipo para resolver el problema, y existen un alto compromiso de todos los involucrados en la comunicación de las acciones de tal manera que todos de aseguran de cumplir con los compromisos"
      },
      {
        "id": "3.4",
        "peso": 0.25,
        "texto": "El equipo lleva a cabo toda la documentación de esta falla en los formatos oficiales y muestran evidencia de que el INDICADOR clave ha sido mejorado o que hubo una reducción significativa en el Pareto, así como la mejora implementada sigue funcionando y el problema no se ha vuelto a presentar y todos los integrantes del análisis están involucrados y trabajan en equipo"
      }
    ]
  },
  {
    "n": 4,
    "bloque": "edu",
    "titulo": "Administración visual y 8S",
    "criterios": [
      {
        "id": "4.1",
        "peso": 0.25,
        "texto": "El equipo Lean realiza las 8s de forma diaria y esto lo utilizan para detectar anomalías del proceso inmediatamente, y estas las registran en sus tarjetas rojas (cuando existe una reparación temporal) como parte de la reducción de los desperdicios de su proceso y le dan seguimiento hasta que mejore la condición anormal ya no requieren supervisión."
      },
      {
        "id": "4.2",
        "peso": 0.25,
        "texto": "El equipo Lean muestra tendencia positiva en su indicador de 8s, y en caso de que se muestren oportunidades estas son analizadas por el equipo y estas son registradas en su grafica de seguimiento de 8s, las acciones son implementadas en tiempo."
      },
      {
        "id": "4.3",
        "peso": 0.25,
        "texto": "La administración visual esta siendo bien utilizada por todos los integrantes del equipo, los tablero y los formatos son los del estándar, es fácil detectar la falla con los indicadores, no hay espacios vacíos en los formatos ya que el equipo actualiza diariamente"
      },
      {
        "id": "4.4",
        "peso": 0.25,
        "texto": "Es fácil observar todas las acciones de prevención derivadas de los análisis (5porques o Ishikawa), y estas no están vencidas o sin seguimiento."
      }
    ]
  },
  {
    "n": 5,
    "bloque": "edu",
    "titulo": "Seguridad",
    "criterios": [
      {
        "id": "5.1",
        "peso": 0.25,
        "texto": "El Líder tiene conocimiento del proceso de seguridad llevado a cabo como vivencia de comportamientos seguros ( OSAS) y muestra evidencia"
      },
      {
        "id": "5.2",
        "peso": 0.25,
        "texto": "Las Reglas salvavidas son parte del proceso diario y todos lo integrantes del equipo lean muestran evidencia de como han trabajado para que sea un proceso vivo"
      },
      {
        "id": "5.3",
        "peso": 0.25,
        "texto": "El equipo lean no tiene accidentes o incidentes dentro de su proceso validado por el área de seguridad"
      },
      {
        "id": "5.4",
        "peso": 0.25,
        "texto": "el equipo lean realizo un short kaizen de seguridad durante el mes, y este es seguido por todos lo turnos"
      }
    ]
  },
  {
    "n": 6,
    "bloque": "sol",
    "titulo": "Ve tu mismo al Gemba",
    "criterios": [
      {
        "id": "6.1",
        "peso": 0.25,
        "texto": "El líder del equipo ha iniciado actividades de análisis donde se presenta la falla (Gemba), pero el análisis lo pide o lo realiza solo sin involucrar al responsable de la línea"
      },
      {
        "id": "6.2",
        "peso": 0.25,
        "texto": "Todos los integrantes del equipo lean pueden leer e interpretar el PDCA de su tablero, y cualquier integrante puede iniciar o llevar a cabo un análisis de 5 porques"
      },
      {
        "id": "6.3",
        "peso": 0.25,
        "texto": "Cuantos de los problemas detectados cuenta con un análisis de 5 porques y con cauda raíz identificada (mínimo el 50% de los problema deben estar analizados en el gemba), del total de las fallas"
      },
      {
        "id": "6.4",
        "peso": 0.25,
        "texto": "Los Integrantes del equipo exponen en el gemba 1 las acciones que están vencidas y el líder se asegura de monitorear y cerrar acciones, acercando a los responsables de las acciones y muestran evidencia en su propio formato de seguimiento"
      }
    ]
  },
  {
    "n": 7,
    "bloque": "sol",
    "titulo": "Análisis",
    "criterios": [
      {
        "id": "7.1",
        "peso": 0.25,
        "texto": "Todos los integrantes del equipo conocen el significado y el concepto de PDCA, para la solución de problemas y es fácil que lo expliquen."
      },
      {
        "id": "7.2",
        "peso": 0.25,
        "texto": "El equipo Identifico claramente el problema y muestra datos para explicar claramente por que es un problema (Valida en sistema si existe alguna especificación del problema y compara si la falla es por falta de seguimiento del operador o es una falla diferente)"
      },
      {
        "id": "7.3",
        "peso": 0.25,
        "texto": "El líder del equipo se ha organizado y muestra evidencia de haber invitado a sus compañeros de soporte a realizar el análisis de causa raíz"
      },
      {
        "id": "7.4",
        "peso": 0.25,
        "texto": "Las acciones de prevención resolvieron el problema, fueron acciones sostenibles en el tiempo y estas se estandarizaron en todos los turnos involucrados y se muestra evidencia de la capacitación"
      }
    ]
  },
  {
    "n": 8,
    "bloque": "sol",
    "titulo": "Buscando la causa raíz",
    "criterios": [
      {
        "id": "8.1",
        "peso": 0.25,
        "texto": "Las fallas del proceso son documentadas en PCA, y los 5w están ligados a estas fallas o al menos con las fallas recurrentes"
      },
      {
        "id": "8.2",
        "peso": 0.25,
        "texto": "La verdadera causa raíz es analizada por el equipo al momento de la falla y algunos integrantes participan en el análisis y en la definición de acciones de prevención, pero las acciones son responsabilidad de otros departamentos"
      },
      {
        "id": "8.3",
        "peso": 0.25,
        "texto": "Todas las fallas son analizadas por medio del 5w al momento de presentarse la falla y todo el equipo participa en el análisis y las acciones son responsabilidad del Equipo"
      },
      {
        "id": "8.4",
        "peso": 0.25,
        "texto": "Todas las acciones preventivas son tomadas por el equipo derivadas de un 5W, son registradas y monitoreadas para su seguimiento y el TIEMPO PROMEDIO de cierre de acciones es medido por el líder del equipo,"
      }
    ]
  },
  {
    "n": 9,
    "bloque": "sol",
    "titulo": "Procedimiento y estandarización de acciones",
    "criterios": [
      {
        "id": "9.1",
        "peso": 0.25,
        "texto": "El equipo identifica sus procedimientos mas básicos para su operación (instrucciones, ayudas visuales, lups, poes) y estos son utilizados por todos los integrantes para desempeñar sus función"
      },
      {
        "id": "9.2",
        "peso": 0.25,
        "texto": "El equipo muestra evidencia de haber entrenado a todo su personal con las nuevas acciones y genera lups, ayudas visuales, de evidencia y todas están firmadas por todos los turnos involucrados en la mantener la mejora"
      },
      {
        "id": "9.3",
        "peso": 0.25,
        "texto": "El equipo ha generado OCAP's de las principales fallas (Criticas o repetitivas) y todos los integrantes los consultan en caso de falla, y este es actualizado por lo menos cada 3 meses y este es documentado oficialmente"
      },
      {
        "id": "9.4",
        "peso": 0.25,
        "texto": "El equipo Lean muestra evidencia haber resulto algún problema con el uso del OCAP, (Variabilidad, retrabajos, paros de línea, merma, etc.)"
      }
    ]
  },
  {
    "n": 10,
    "bloque": "sol",
    "titulo": "Variabilidad del proceso - Control de proceso",
    "criterios": [
      {
        "id": "10.1",
        "peso": 0.25,
        "texto": "El equipo tiene identificado cuales son las variables criticas de su proceso y ha iniciado con revisiones periódicas por parte del líder"
      },
      {
        "id": "10.2",
        "peso": 0.25,
        "texto": "El equipo conoce las especificaciones de sus variables y estas las validan en documentos oficiales (especificaciones, OCAP's, Ayudas visuales, etc) y estas son documentadas en sus registros oficiales"
      },
      {
        "id": "10.3",
        "peso": 0.25,
        "texto": "El equipo ha iniciado con la revisión de variables y ha implementado Graficas de control para la variable mas critica y marca sus tolerancias en su grafico y muestra evidencia diaria del seguimiento"
      },
      {
        "id": "10.4",
        "peso": 0.25,
        "texto": "El equipo muestra evidencia de acciones correctivas de las desviación mostradas en su grafico y esto es una practica frecuente, donde aseguran llevar a control la medición que esta fuera"
      }
    ]
  },
  {
    "n": 11,
    "bloque": "sol",
    "titulo": "Mejoras del proceso: Short Kaizen",
    "criterios": [
      {
        "id": "11.1",
        "peso": 0.25,
        "texto": "Las mejoras son documentadas derivadas del análisis de mas impórtate de la semana, pero solo el líder documenta las mejora e informa al equipo."
      },
      {
        "id": "11.2",
        "peso": 0.25,
        "texto": "Las mejoras son documentadas derivadas del análisis de mas impórtate de la semana, pero ahora los integrantes ya registran las mejoras documenta las mejora e informa al equipo."
      },
      {
        "id": "11.3",
        "peso": 0.25,
        "texto": "el Equipo muestra evidencia de la implementación de las mejoras y se asegura que sean seguidas por todos los integrantes,"
      },
      {
        "id": "11.4",
        "peso": 0.25,
        "texto": "el equipo Lean una vez de haber generado mejoras, se aseguro del despliegue en otro turnos y valida que sean seguidas para asegurar que la mejora se mantenga oficial en el proceso, con el fin de asegurar que la falla sea corregida de causa raíz"
      }
    ]
  },
  {
    "n": 12,
    "bloque": "mej",
    "titulo": "Mejoras en los procesos a través del método kaizen",
    "criterios": [
      {
        "id": "12.1",
        "peso": 0.25,
        "texto": "El líder participan en eventos kaizen dirigidos por 3eros. Y muestran una participación activa"
      },
      {
        "id": "12.2",
        "peso": 0.25,
        "texto": "Los integrante del equipo que participa en un Evento Kaizen de 3eros. Muestra evidencia de las actividades o tareas que se le han asignado como parte de las mejoras implementadas en el Kaizen y muestran una participación activa (sin necesidad de que los estén buscando)"
      },
      {
        "id": "12.3",
        "peso": 0.25,
        "texto": "Los integrantes de un evento kaizen, cumplen con las tareas asignada y entregan evidencia de tal forma que se cumplen las fechas y muestran evidencia"
      },
      {
        "id": "12.4",
        "peso": 0.25,
        "texto": "El Evento kaizen propuesto por el equipo se cerro en la fecha estimada establecida en el prework, y se muestra evidencia del compromiso que tuvieron para asegurar el cumplimiento."
      }
    ]
  },
  {
    "n": 13,
    "bloque": "mej",
    "titulo": "Mantenimiento Autónomo",
    "criterios": [
      {
        "id": "13.1",
        "peso": 0.25,
        "texto": "El equipo realiza limpieza profunda y regular de sus equipos, identificando tempranamente fugas, desgastes, vibraciones anormales u otras condiciones anormales."
      },
      {
        "id": "13.2",
        "peso": 0.25,
        "texto": "Los integrantes ejecutan correctamente las inspecciones básicas (niveles, aprietes, lubricación, sensores, seguridad), usando correctamente su carta ABE y documentando hallazgos."
      },
      {
        "id": "13.3",
        "peso": 0.25,
        "texto": "El equipo sigue los estándares definidos (procedimientos, etiquetas, puntos de control, rutinas de mantenimiento autónomo) y reporta desviaciones oportunamente, así busca como contribuir para reducir los PAROS NO PROGRAMADOS"
      },
      {
        "id": "13.4",
        "peso": 0.25,
        "texto": "El equipo Lean tiene iniciativas llevadas acabo para implementar el SMED - reducción del tiempo de cambio de modelo"
      }
    ]
  },
  {
    "n": 14,
    "bloque": "mej",
    "titulo": "Enfoque en la calidad del proceso y/o producto",
    "criterios": [
      {
        "id": "14.1",
        "peso": 0.25,
        "texto": "El equipo tiene sus documentos oficiales llenados de manera correcta y cumpliendo con los estándares definidos por el SGCI"
      },
      {
        "id": "14.2",
        "peso": 0.25,
        "texto": "El Equipo Lean muestra análisis de los últimos 3 meses de fallas recurrentes en la calidad de en su proceso y conoce el proceso de PDCA de tal forma que muestra un análisis completo de las principales oportunidades - paretos, 5 porques, acciones de prevención y Validación de acciones"
      },
      {
        "id": "14.3",
        "peso": 0.25,
        "texto": "se observa tendencia positiva en su indicador de Folios, Quejas de cliente o alguna oportunidad interna en su proceso derivado de los análisis previos hechos por el equipo y todos los integrantes están involucrados"
      },
      {
        "id": "14.4",
        "peso": 0.25,
        "texto": "El Equipo a realizado POKAYOKES enfocados en reducir los folios de calidad, merma y estos han sido desplegados en todos los turnos y muestran evidencia"
      }
    ]
  },
  {
    "n": 15,
    "bloque": "mej",
    "titulo": "Eventos Kaizen",
    "criterios": [
      {
        "id": "15.1",
        "peso": 0.25,
        "texto": "El equipo lean ha iniciado actividades para arrancar un Evento Kaizen, muestra un análisis de mínimo 3 meses de una oportunidad en su proceso, indicador en rojo y cuenta con el prework autorizado, donde muestren un métrico SMART e involucren a un equipo multidisciplinario"
      },
      {
        "id": "15.2",
        "peso": 0.25,
        "texto": "El equipo muestra evidencia de reuniese periódicamente para avanzar con su evento, y muestra evidencia de los análisis que han realizado para mejorar el indicador en conjunto con otros departamentos"
      },
      {
        "id": "15.3",
        "peso": 0.25,
        "texto": "El equipo muestra evidencia de la efectividad de las acciones derivadas del Evento Kaizen, hay tendencia positiva en los métricos del prework,"
      },
      {
        "id": "15.4",
        "peso": 0.25,
        "texto": "el equipo muestra evidencia de haber generado los controles necesarios para asegurar mantener la mejora del Evento Kaizen y estas mejoras son documentadas oficialmente en el sistema de calidad, y se ha realizado un despliegue y un entrenamiento con todos los turnos involucrados, asegurando que la mejora permanezca en el tiempo"
      }
    ]
  },
  {
    "n": 16,
    "bloque": "res",
    "titulo": "Efectividad en el proceso del equipo Lean",
    "criterios": [
      {
        "id": "16.1",
        "peso": 0.25,
        "texto": "El equipo muestra evidencia con datos de haber reducido al menos desperdicio de su proceso en el mes (ya sea en cantidad de material, tiempo, espacio, piezas, productividad, etc.)"
      },
      {
        "id": "16.2",
        "peso": 0.25,
        "texto": "El equipo muestra evidencia de que algún integrante del equipo participa en el ahorro de un 3ero como soporte"
      },
      {
        "id": "16.3",
        "peso": 0.25,
        "texto": "No existen quejas del equipo de otros áreas por no prestar un correcto servicio con el enfoque al cliente"
      },
      {
        "id": "16.4",
        "peso": 0.25,
        "texto": "La tendencia de crecimiento del equipo lean se muestra de forma positiva, es constante en su trabajo de análisis y documentación de mejoras"
      }
    ]
  },
  {
    "n": 17,
    "bloque": "res",
    "titulo": "Desempeño contra metas del equipo Lean",
    "valor": "desempeno",
    "descripcion": "El equipo Lean muestra el cumplimiento de sus indicadores contra las metas del Equipo, se ha alcanzo y/o muestra tendencia de mejora, Indicadores (ETE, folios, CUMPLIMIENTO AL PROGRAMA, 8S, REDUCCIÓN DE GASTOS, )"
  },
  {
    "n": 18,
    "bloque": "res",
    "titulo": "Ahorros",
    "valor": "ahorro",
    "descripcion": "El equipo ha identificado e implementado iniciativas que generen ahorros monetarios directos y cuantificables y que sean sostenibles en el tiempo."
  },
  {
    "n": 19,
    "bloque": "res",
    "titulo": "Evaluación",
    "valor": "examen",
    "descripcion": "El equipo cuenta con un nivel de conocimiento y comprensión respecto a los principios, herramientas y metodologías de Lean Manufacturing"
  }
];

// Lista inicial de equipos (solo se usa una vez para llenar la base de datos vacía).
export const EQUIPOS_INICIALES = [
  {
    "nombre": "5QF",
    "departamento": "Calidad",
    "estado": "activo"
  },
  {
    "nombre": "Audi",
    "departamento": "Ingeniería",
    "estado": "activo"
  },
  {
    "nombre": "C4",
    "departamento": "Administración Productiva",
    "estado": "activo"
  },
  {
    "nombre": "Colorflex",
    "departamento": "Impresión",
    "estado": "activo"
  },
  {
    "nombre": "Entrega2",
    "departamento": "Administración Productiva",
    "estado": "activo"
  },
  {
    "nombre": "Equipo de 10",
    "departamento": "Extrusión",
    "estado": "activo"
  },
  {
    "nombre": "HOM",
    "departamento": "Administración Productiva",
    "estado": "activo"
  },
  {
    "nombre": "La Familia APP",
    "departamento": "Administración Productiva",
    "estado": "activo"
  },
  {
    "nombre": "La Pandilla",
    "departamento": "Extrusión",
    "estado": "activo"
  },
  {
    "nombre": "Leanpieza",
    "departamento": "Ingeniería",
    "estado": "activo"
  },
  {
    "nombre": "Linces",
    "departamento": "Administración Productiva",
    "estado": "activo"
  },
  {
    "nombre": "Los Electros",
    "departamento": "Ingeniería",
    "estado": "activo"
  },
  {
    "nombre": "Los Inalcanzables",
    "departamento": "Conversión",
    "estado": "pausa"
  },
  {
    "nombre": "Los Jefes",
    "departamento": "Conversión",
    "estado": "pausa"
  },
  {
    "nombre": "Los Osos",
    "departamento": "Extrusión",
    "estado": "activo"
  },
  {
    "nombre": "Mortal Kompras",
    "departamento": "Compras",
    "estado": "activo"
  },
  {
    "nombre": "Los Pibes",
    "departamento": "Conversión",
    "estado": "pausa"
  },
  {
    "nombre": "Los Tercos",
    "departamento": "Extrusión",
    "estado": "activo"
  },
  {
    "nombre": "Servilean",
    "departamento": "Ingeniería",
    "estado": "activo"
  },
  {
    "nombre": "Smart Team 4.0",
    "departamento": "Ingeniería",
    "estado": "activo"
  },
  {
    "nombre": "Solution Team",
    "departamento": "Ingeniería",
    "estado": "activo"
  },
  {
    "nombre": "Team Zubiox",
    "departamento": "Corrugado",
    "estado": "activo"
  },
  {
    "nombre": "Teamwork",
    "departamento": "Ingeniería",
    "estado": "activo"
  },
  {
    "nombre": "Teclean",
    "departamento": "Ingeniería",
    "estado": "activo"
  },
  {
    "nombre": "The Watchmen",
    "departamento": "Recursos Humanos",
    "estado": "activo"
  }
];
