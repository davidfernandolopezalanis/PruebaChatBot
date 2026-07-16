const chatFlow = {
  start: {
    id: "Pregunta1",
    question: "¿El metal encontrado es mayor a 7mm?",
    options: [
      {
        label: "Si",
        next: "paroLinea"
      },
      {
        label: "No",
        next: "no7mm"
      }
    ]
  },
  paroLinea: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Notificar del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager.\n  3. Detonar investigación para definir fuente y causa potencial.\n  4. Revisión OPRP filtros, mallas, magnetos.\n  5. Caracterizar partículas con fines de investigación.\n  6. Documentar evento en reporte de contaminación.\n  7. Lanzar NCMGT.\n---------------------------------------\n**RECUERDA**\nLa línea no puede arrancar nuevamente hasta que se tenga la aprobación formal del equipo local de Q&FS/VSQ.\n---------------------------------------",
    image: "paro-linea.webp",
    final: true
  },
  NoParoLinea: {
    response: "**Haz lo siguiente:**\n1. Continua con tu producción normal.\n2. Documentar evento en reporte de contaminación.\n3. Debes mantener el monitoreo por las siguientes 12 horas.\n---------------------------------------\n**RECUERDA**\nCuando se presentan 3 eventos confirmados de metal en 3 horas o menos debes detener la línea y seguir el proceso de escalamiento.\n---------------------------------------\n**El proceso de escalamiento consiste en:**\n- Notificar del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager.\n- Detonar investigación para definir fuente y causa potencial.\n- Revisión OPRP filtros, mallas, magnetos.\n- Caracterizar partículas con fines de investigación.\n- Documentar evento en reporte de contaminación.",
    final: true
  },
  no7mm: {
    id: "Pregunta2",
    question: "¿Dónde fue encontrado el objeto metálico?",
    options: [
      {
        label: "En producto",
        next: "preguntaPrimerRechazo"
      },
      {
        label: "En el flujo de proceso (Zona 1)",
        next: "posibilidadMetalEnProducto"
      },
      {
        label: "En algún ingrediente o material de empaque.",
        next: "posibilidadMetalEnProducto"
      },
      {
        label: "En detector de metales (PCC/OPRP)",
        next: "posibilidadMetalEnProducto"
      },
      {
        label: "En piso (Zona 2 o Zona 3)",
        next: "posibilidadMetalEnProducto"
      },
      {
        label: "Otro",
        next: "posibilidadMetalEnProducto"
      }
    ]
  },
  preguntaPrimerRechazo: {
    id: "Pregunta3",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "NoParoLinea"
      },
      {
        label: "No",
        next: "segundoMetal"
      }
    ]
  },
  posibilidadMetalEnProducto: {
    id: "Pregunta4",
    question: "¿Existe posibilidad de que el metal haya llegado al producto?",
    options: [
      {
        label: "Si",
        next: "preguntaPrimerRechazo"
      },
      {
        label: "No",
        next: "preguntaPrimerRechazo"
      }
    ]
  },
  segundoMetal:{
    id: "Pregunta5",
    question: "¿Es el segundo rechazo confirmado?",
    options: [
        {
            label: "Si",
            next: "NoParoLinea"
        },
        {
            label: "No",
            next: "tercerMetal"
        }
    ]
  },
  tercerMetal:{
    id: "Pregunta6",
    question: "¿Este es el tercer rechazo de metal confirmado en tres horas o menos?",
    options:[
        {
            label: "Si",
            next: "paroLinea"
        },
        {
            label: "No",
            next: "tercerMetal3horasMas"
        }
    ]
  },
  tercerMetal3horasMas:{
    id: "Pregunta7",
    question: "¿Este es el tercer rechazo de metal confirmado en más de 3 horas?",
    options:[
      {
        label: "Si",
        next: "NoParoLinea"
      },
      {
        label: "No",
        next: "cuartoMetal"
      }
    ]
  },
  cuartoMetal:{
    id: "Pregunta8",
    question: "¿Este es el cuarto rechazo confirmado?",
    options:[
        {
            label: "Si",
            next: "NoParoLinea"
        },
        {
            label: "No",
            next: "quintoMetal"
        }
    ]
    },
  quintoMetal:{
    id: "Pregunta9",
    question:"¿Este es el quinto rechazo de metal confirmado en 12 horas o menos?",
    options: [
        {
            label: "Si",
            next: "paroLinea"
        },
        {
            label: "No",
            next: "NoParoLinea"
        }
    ]
    },
};
