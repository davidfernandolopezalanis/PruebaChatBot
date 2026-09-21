//---------------------------------------------
//               PREGUNTA INICIAL
//---------------------------------------------

const chatFlow = {
  start: {
    id: "Pregunta1",
    question: " Dime ¿En qué planta está localizado?",
    options: [
      {
        label: "MTM (Montemorelos)",
        next: "tipoIncidenteMTM"
      },
      {
        label: "SCA (Santa Catarina)",
        next: "tipoIncidenteSCA"
      },
      {
        label: "TE (Tienda de Experiencia)",
        next: "tipoIncidenteTE"
      },
      {
        label: "TOT (Toluca)",
        next: "tipoIncidenteTOT"
      }
    ]
  },

  //-----------------------------------------------------------------------------
  //                          PREGUNTA TIPO DE INCIDENTE    
  //------------------------------------------------------------------------------
  tipoIncidenteMTM: {
    id: "Pregunta2",
    question: "¿Qué tipo de incidente o hallazgo estás reportando el día de hoy?",
    options: [
      {
        label: "Objeto Metálico",
        next: "turnoMetalMTM"
      },
      {
        label: "Plástico Suave/Duro",
        next: "turnoPlasticoMTM"
      },
      {
        label: "Vidrio o Madera",
        next: ""
      },
      {
        label: "Otros Cuerpos Extraños (cabello, plagas, pelusa, etc.)",
        next: ""
      },
      {
        label: "Ingreso de Agua",
        next: ""
      },
      {
        label: "Químico (lubricantes, pintura, sanitizantes, alérgenos)",
        next: ""
      },
      {
        label: "Incidentes de Calidad",
        next: ""
      }
    ]
  },
  tipoIncidenteSCA: {
    id: "Pregunta2",
    question: "¿Qué tipo de incidente o hallazgo estás reportando el día de hoy?",
    options: [
      {
        label: "Objeto Metálico",
        next: "lineaMetalSCA"
      },
      {
        label: "Plástico Suave / Duro",
        next: "lineaPlasticoSCA"
      },
      {
        label: "Vidrio o Madera",
        next: ""
      },
      {
        label: "Otros Cuerpos Extraños (vidrio, madera, cabello, plagas, pelusa, etc.)",
        next: "lineaFOSCA"
      },
      {
        label: "Ingreso de Agua",
        next: "lineaAguaSCA"
      },
      {
        label: "Químico (lubricantes, pintura, sanitizantes, alérgenos)",
        next: "lineaQuimicoSCA"
      },
      {
        label: "Incidentes de Calidad",
        next: "lineaQFSIncidenteSCA"
      }
    ]
  },
  tipoIncidenteTOT: {
    id: "Pregunta2",
    question: "¿Qué tipo de incidente o hallazgo estás reportando el día de hoy?",
    options: [
      {
        label: "Objeto Metálico",
        next: "lineaMetalTOT"
      },
      {
        label: "Plástico Suave / Duro",
        next: "lineaPlasticoTOT"
      },
      {
        label: "Vidrio o Madera",
        next: "lineaVidrioTOT"
      },
      {
        label: "Otros Cuerpos Extraños (cabello, plagas, pelusa, etc.)",
        next: "lineaOtrosTOT"
      },
      {
        label: "Ingreso de Agua",
        next: "lineaAguaTOT"
      },
      {
        label: "Químico (lubricantes, pintura, sanitizantes, alérgenos)",
        next: "lineaQuimicoTOT"
      },
      {
        label: "Incidentes de Calidad",
        next: "lineaQFSIncidenteTOT"
      }
    ]
  },
  tipoIncidenteTE: {
    id: "Pregunta2",
    question: "¿Qué tipo de incidente o hallazgo estás reportando el día de hoy?",
    options: [
      {
        label: "Objeto Metálico",
        next: "metalPlanta"
      },
      {
        label: "Plástico Suave",
        next: "plasticoPlanta"
      },
      {
        label: "Plástico Duro",
        next: "plasticoPlanta"
      },
      {
        label: "Otros Cuerpos Extraños (vidrio, madera, cabello, plagas, pelusa, etc.)",
        next: "vidrioMaderaPlanta"
      },
      {
        label: "Ingreso de Agua",
        next: "aguaPlanta"
      },
      {
        label: "Químico (lubricantes, pintura, sanitizantes, alérgenos)",
        next: "quimicoPlanta"
      },
      {
        label: "Incidentes de Calidad",
        next: "otroPlanta"
      }
    ]
  },
  //====================================================
  //                        ALERTAS
  //====================================================

  paroLinea: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  \   1. **Detener** la línea inmediatamente.\n  2.  **Segregar** El Producto De Acuerdo Con El Last Good Check \n 3.**Notificar** del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager.\n  4. **Revisar** CCPs, OPRP filtros, mallas, magnetos. \n 5. **Caracterizar** partículas con fines de investigación. \n 6. **Detonar** investigación para definir fuente y causa potencial.\n  7. **Documentar** evento en 'Reporte de turno' y llena el documento 'FORM-56871 Informacion para el levantamiento de incidentes en NCMGT'.\n  8. **Lanzar** NCMGT QVS/Q&FS. \n 9. **Llenar** el análisis de riesgos (RA) con el equipo de food safety. \n 10. **Esperar** señal de arranque por RA equipo HACCP \n---------------------------------------\n**RECUERDA**\nLa línea no puede arrancar nuevamente hasta que se tenga la aprobación formal del equipo local de Q&FS/VSQ.\n--------------------------------------- \n **Referencias:** **PR-28769**-Effective Application of Metal Detectors to Production Processes R2, **REF-09274**-Effective Application of Magnets to Production Processes r2, **PR-23677**-Procedimiento de Monitoreo, Verificación y Validación de CCPs y OPRPs, **PR-23565**-Corporate Foreign Materials Management Standard",
    image: "paro-linea.webp",
    final: true
  },
  NoParoLinea: {
    response: "**Puedes continuar con la producción normal bajo monitoreo.Ejecutar lo siguiente:**\n 1. Notificar del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager \n2. Continuar con tu producción normal.\n 3. Revisar CCPs, OPRP filtros, mallas, magnetos. \n 4. Caracterizar partículas con fines de investigación. \n 5. Revisar el reporte de turno para detecrar algún mantenimiento previo donde se pudo generar roce metal con metal. \n 6. Documentar evento en 'reporte de turno' y llenar el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 7. Lanzar NCMGT LOW QVS/Q&FS \n 8. Reiniciar con monitoreo especial por las siguientes 12 horas. \n---------------------------------------\n**RECUERDA**\nCuando se presentan 3 eventos confirmados de metal en 3 horas o menos debes detener la línea y seguir el proceso de escalamiento.\n--------------------------------------- \n **Referencias:** **PR-28769**-Effective Application of Metal Detectors to Production Processes R2, **PR-23677**-Procedimiento de Monitoreo, Verificación y Validación de CCPs y OPRPs",
    final: true
  },

  //====================================================
  //                PREGUNTAS METAL SCA
  //====================================================

  SCAMetal1: {
    id: "Pregunta5",
    question: "¿El metal encontrado es mayor a 7mm?",
    options: [
      {
        label: "Si",
        next: "paroLinea"
      },
      {
        label: "No",
        next: "SCAMetal2"
      }
    ]
  },
  SCAMetal2: {
    id: "Pregunta6",
    question: "¿Dónde fue encontrado el objeto metálico?",
    options: [
      {
        label: "En producto",
        next: "SCAMetal5"
      },
      {
        label: "En CCP",
        next: "SCAMetal4"
      },
      {
        label: "En algún ingrediente o material de empaque.",
        next: "SCAMetal4"
      },
      {
        label: "En detector de metales (PCC/OPRP)",
        next: "SCAMetal3"
      },
      {
        label: "Otro",
        next: "SCAMetal4"
      }
    ]
  },
  SCAMetal3:{
    id: "Pregunta7",
    question: "¿El objeto metálico encontrado es superior a 6 mm?",
    options: [
      {
        label: "Si",
        next: "paroLinea"
      },
      {
        label: "No",
        next: "SCAMetal4"
      }
    ]
  },
  SCAMetal4:{
    id: "Pregunta8",
    question: "¿Qué estructura tiene el objeto metálico?",
    options: [
      {
        label: "Filoso",
        next: "SCAMetal5"
      },
      {
        label: "Duro",
        next: "SCAMetal5"
      },
      {
        label: "Felxible",
        next: "SCAMetal5"
      },
      {
        label: "No Filoso",
        next: "SCAMetal5"
      },
      {
        label: "Quebradizo",
        next: "SCAMetal5"
      },
      {
        label: "Blando",
        next: "SCAMetal5"
      },
    ]
  },
  SCAMetal5:{
    id:"Pregunta9",
    question: "¿El objeto metálico de que material es?",
    options:[
      {
        label: "Ferroso",
        next: "SCAMetal6"
      },
      {
        label: "No Ferroso",
        next: "SCAMetal6"
      },
      {
        label: "Acero Inoxidable",
        next: "SCAMetal6"
      }
    ]
  },
  SCAMetal6:{
    id: "Pregunta10",
    question: "¿Existe la posibilidad de que el metal haya llegado al producto?",
    options: [
      {
        label: "Si",
        next: "SCAMetal7",
      },
      {
        label: "No",
        next: "SCAMetal7"
      }
    ]
  },
  SCAMetal7: {
    id: "Pregunta11",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "NoParoLinea"
      },
      {
        label: "No",
        next: "SCAMetal7"
      }
    ]
  },
  SCAMetal8:{
    id: "Pregunta12",
    question: "¿Es el segundo rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "NoParoLinea"
      },
      {
        label: "No",
        next: "SCAMetal8"
      }
    ]
  },
  SCAMetal9:{
    id: "Pregunta13",
    question: "¿Este es el tercer rechazo de metal confirmado en tres horas o menos?",
    options:[
        {
            label: "Si",
            next: "paroLinea"
        },
        {
            label: "No",
            next: "SCAMetal10"
        }
    ]
  },
  SCAMetal10:{
    id: "Pregunta14",
    question: "¿Este es el tercer rechazo de metal confirmado en más de tres horas?",
    options:[
      {
        label: "Si",
        next: "NoParoLinea"
      },
      {
        label: "No",
        next: "SCAMetal11"
      }
    ]
  },
  SCAMetal11:{
    id: "Pregunta15",
    question: "¿Este es el cuarto rechazo confirmado?",
    options:[
        {
            label: "Si",
            next: "NoParoLinea"
        },
        {
            label: "No",
            next: "SCAMetal12"
        }
    ]
  },
  SCAMetal12:{
    id: "Pregunta16",
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

  //====================================================
  //                PREGUNTAS METAL TOT
  //====================================================

  TOTMetal1: {
    id: "Pregunta3",
    question: "¿El metal encontrado es mayor a 7mm?",
    options: [
      {
        label: "Si",
        next: "paroLinea"
      },
      {
        label: "No",
        next: "TOTMetal2"
      }
    ]
  },
  TOTMetal2: {
    id: "Pregunta4",
    question: "¿Dónde fue encontrado el objeto metálico?",
    options: [
      {
        label: "En producto/CCP/ Otro (Ej. Magneto/Filtro)",
        next: "TOTMetal6"
      },
      {
        label: "En algún ingrediente o material de empaque.",
        next: "TOTMetal6"
      },
      {
        label: "En OPRP",
        next: "TOTMetal3"
      }
    ]
  },
  TOTMetal3:{
    id: "Pregunta5",
    question: "¿El objeto metálico encontrado es superior a 6 mm?",
    options: [
      {
        label: "Si",
        next: "paroLinea"
      },
      {
        label: "No",
        next: "TOTMetal4"
      }
    ]
  },
  TOTMetal6: {
    id: "Pregunta6",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "NoParoLinea"
      },
      {
        label: "No",
        next: "TOTMetal7"
      }
    ]
  },
  TOTMetal7:{
    id: "Pregunta7",
    question: "¿Es el segundo rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "NoParoLinea"
      },
      {
        label: "No",
        next: "TOTMetal8"
      }
    ]
  },
  TOTMetal8:{
    id: "Pregunta8",
    question: "¿Este es el tercer rechazo de metal confirmado en una hora o menos?",
    options:[
      {
        label: "Si",
        next: "paroLinea"
      },
      {
        label: "No"
      }
    ]
  },

  //====================================================
  //                PREGUNTAS METAL MTM
  //====================================================
  
  MTMMetal1: {
    id: "Pregunta5",
    question: "¿El metal encontrado es mayor a 7mm?",
    options: [
      {
        label: "Si",
        next: "paroLinea"
      },
      {
        label: "No",
        next: "MTMMetal2"
      }
    ]
  },
  MTMMetal2: {
    id: "Pregunta6",
    question: "¿Dónde fue encontrado el objeto metálico?",
    options: [
      {
        label: "En producto",
        next: "MTMMetal5"
      },
      {
        label: "En CCP",
        next: "MTMMetal4"
      },
      {
        label: "En algún ingrediente o material de empaque.",
        next: "MTMMetal4"
      },
      {
        label: "En detector de metales (PCC/OPRP)",
        next: "MTMMetal3"
      },
      {
        label: "Otro",
        next: "MTMMetal4"
      }
    ]
  },
  MTMMetal3:{
    id: "Pregunta7",
    question: "¿El objeto metálico encontrado es superior a 6 mm?",
    options: [
      {
        label: "Si",
        next: "paroLinea"
      },
      {
        label: "No",
        next: "MTMMetal4"
      }
    ]
  },
  MTMMetal4:{
    id: "Pregunta8",
    question: "¿Qué estructura tiene el objeto metálico?",
    options: [
      {
        label: "Filoso",
        next: "MTMMetal5"
      },
      {
        label: "Duro",
        next: "MTMMetal5"
      },
      {
        label: "Felxible",
        next: "MTMMetal5"
      },
      {
        label: "No Filoso",
        next: "MTMMetal5"
      },
      {
        label: "Quebradizo",
        next: "MTMMetal5"
      },
      {
        label: "Blando",
        next: "MTMMetal5"
      },
    ]
  },
  MTMMetal5:{
    id:"Pregunta9",
    question: "¿El objeto metálico de que material es?",
    options:[
      {
        label: "Ferroso",
        next: "MTMMetal6"
      },
      {
        label: "No Ferroso",
        next: "MTMMetal6"
      },
      {
        label: "Acero Inoxidable",
        next: "MTMMetal6"
      }
    ]
  },
  MTMMetal6:{
    id: "Pregunta10",
    question: "¿Existe la posibilidad de que el metal haya llegado al producto?",
    options: [
      {
        label: "Si",
        next: "MTMMetal7",
      },
      {
        label: "No",
        next: "MTMMetal7"
      }
    ]
  },
  MTMMetal7: {
    id: "Pregunta11",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "NoParoLinea"
      },
      {
        label: "No",
        next: "MTMMetal7"
      }
    ]
  },
  MTMMetal8:{
    id: "Pregunta12",
    question: "¿Es el segundo rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "NoParoLinea"
      },
      {
        label: "No",
        next: "MTMMetal8"
      }
    ]
  },
  MTMMetal9:{
    id: "Pregunta13",
    question: "¿Este es el tercer rechazo de metal confirmado en tres horas o menos?",
    options:[
        {
            label: "Si",
            next: "paroLinea"
        },
        {
            label: "No",
            next: "tercerMetalMas3Horas"
        }
    ]
  },
  MTMMetal10:{
    id: "Pregunta14",
    question: "¿Este es el tercer rechazo de metal confirmado en más de tres horas?",
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
  MTMMetal11:{
    id: "Pregunta15",
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
  MTMMetal12:{
    id: "Pregunta16",
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

  //====================================================
  //                PREGUNTAS METAL TE
  //====================================================

  TEMetal1: {
    id: "Pregunta5",
    question: "¿El metal encontrado es mayor a 7mm?",
    options: [
      {
        label: "Si",
        next: "paroLinea"
      },
      {
        label: "No",
        next: "TEMetal2"
      }
    ]
  },
  TEMetal2: {
    id: "Pregunta6",
    question: "¿Dónde fue encontrado el objeto metálico?",
    options: [
      {
        label: "En producto",
        next: "TEMetal4"
      },
      {
        label: "En el flujo de proceso (Zona 1)",
        next: "TEMetal3"
      },
      {
        label: "En algún ingrediente o material de empaque.",
        next: "TEMetal3"
      },
      {
        label: "En detector de metales (PCC/OPRP)",
        next: "TEMetal3"
      },
      {
        label: "En piso (Zona 2 o Zona 3)",
        next: "TEMetal3"
      },
      {
        label: "Otro",
        next: "TEMetal3"
      }
    ]
  },
  TEMetal3: {
    id: "Pregunta7",
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
  TEMetal4: {
    id: "Pregunta8",
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
  TEMetal5:{
    id: "Pregunta9",
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
  TEMetal6:{
    id: "Pregunta10",
    question: "¿Este es el tercer rechazo de metal confirmado en tres horas o menos?",
    options:[
        {
            label: "Si",
            next: "paroLinea"
        },
        {
            label: "No",
            next: "tercerMetalMas3Horas"
        }
    ]
  },
  TEMetal7:{
    id: "Pregunta11",
    question: "¿Este es el tercer rechazo de metal confirmado en más de tres horas?",
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
  TEMetal8:{
    id: "Pregunta12",
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
  TEMetal9:{
    id: "Pregunta13",
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

  //====================================================
  //                PREGUNTAS PLASTICO SCA
  //====================================================
  SCAPlastico1:{
    id: "Pregunta17",
    question: "¿Qué tipo de objeto plástico encontraste?",
    options: [
      {
        label: "Duro (ej. moldes, acrílico, empaques)",
        next: "SCAPlastico2"
      },
      {
        label: "Suave (ej. empaque, bolsas)",
        next: "SCAPlastico2"
      }
    ]
  },
  SCAPlastico2: {
    id: "Pregunta18",
    question: "¿Dónde fue encontrado el objeto plástico?",
    options: [
      {
        label: "En producto",
        next: "SCAPlastico3"
      },
      {
        label: "En molde con desgaste (le falta un pedazo)",
        next: "SCAPlastico4"
      },
      {
        label: "En tanques/marmita",
        next: "SCAPlastico3"
      },
      {
        label: "EN PCC",
        next: "SCAPlastico3"
      },
      {
        label: "EN OPRP",
        next: "SCAPlastico3"
      },
      {
        label: "En herramienta de limpieza",
        next: "SCAPlastico3"
      },
      {
        label: "Otro (Ej. Magneto/Filtro)",
        next: "SCAPlastico3"
      }
    ]
  },
  SCAPlastico3: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Revisar OPRP, Magnetos y No OPRP Antes de PCC o donde se encontro la particula.\n  5. Detonar investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) .\n 6. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 7. Detectar origen de partícula. \n 8. Revisar toda la linea para identificar más partículas plásticas y asegurar despeje completo. \n 9. Lanzar NCMGT MEDIO QVS/Q&FS \n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety  ---------------------------------------\n**RECUERDA**\nLa línea no puede arrancar nuevamente hasta que se tenga la aprobación formal del equipo local de Q&FS/VSQ.\n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety. \n 11. Esperar señal de arranque por RA equipo HACCP.  \n --------------------------------------- \n **Referencias: ** **PR-24264**-Effective Application of Physical Sorters to Production Processes, **PR-23679**-Effective Application of Optical Sorters to Production Processes, **PR-40192**-Procedimiento de escalamiento ante herramientas rotas o extraviadas V0, **PR-28769**-Procedimiento de Monitoreo",
    image: "paro-linea.webp",
    final: true
  },
  SCAPlastico4: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Retira el molde de uso operativo \n 5. Revisar OPRP, Magnetos y No OPRP Antes de PCC o donde se encontró la partícula \n  6. Detonar investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) .\n 7. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 8. Detectar origen de partícula. \n 9. Revisar toda la linea para identificar más partículas plásticas y asegurar despeje completo. \n 10. Lanzar NCMGT MEDIO QVS/Q&FS \n 11. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety. \n 12. Esperar señal de arranque por RA equipo HACCP. \n **Referencias: ** **PR-24264**-Effective Application of Physical Sorters to Production Processes, **PR-23679**-Effective Application of Optical Sorters to Production Processes, **PR-40192**-Procedimiento de escalamiento ante herramientas rotas o extraviadas V0, **PR-28769**-Procedimiento de Monitoreo",
    image: "paro-linea.webp",
    final: true
  },
  //====================================================
  //                PREGUNTAS PLASTICO MTM
  //====================================================

  //====================================================
  //                PREGUNTAS PLASTICO TOT
  //====================================================
  TOTPlastico1: {
    id: "Pregunta9",
    question: "¿Dónde fue encontrado el objeto plástico?",
    options: [
      {
        label: "En molde con desgaste (le falta un pedazo)",
        next: "TOTPlastico4"
      },
      {
        label: "En producto/tanques/marmita",
        next: "TOTPlastico3"
      },
      {
        label: "En herramienta de limpieza/utensilio de producción",
        next: "TOTPlastico3"
      }
    ]
  },  
  TOTPlastico2: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. **Detener** la línea inmediatamente.\n  2. **Segregar** El Producto De Acuerdo Con El Last Good Check  \n  3. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n  4. **Revisar** OPRP, Magnetos.\n  5. **Caracterizar** las partículas con fines de investigación. \n 6. **Detonar** investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) .\n 7. **Documentar** evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 8. **Lanzar** NCMGT MEDIO QVS/Q&FS \n 9. **Llenar** el análisis de riesgos con el equipo de food safety  \n  10. **Esperar** señal de arranque por RA equipo HACCP. \n --------------------------------------- \n **Referencias: ** **PR-24264**-Effective Application of Physical Sorters to Production Processes, **PR-23679**-Effective Application of Optical Sorters to Production Processes, **PR-40192**-Procedimiento de escalamiento ante herramientas rotas o extraviadas V0, **PR-28769**-Procedimiento de Monitoreo",
    image: "paro-linea.webp",
    final: true
  },
  TOTPlastico3: {
    id: "Pregunta10",
    question: "¿La herramienta o utensilio se reportó como perdida, o se encontró rota en la línea?",
    options:[
      {
        label: "Se encontró rota y FALTAN fragmentos (>2mm)",
        next: "TOTPlastico2"
      },
      {
        label:"Se perdió y no se logra localizar",
        next: "TOTPlastico2"
      },
      {
        label: "Se encontró rota, pero está completa (no faltan pedazos)",
        next: "TOTPlastico4"
      }
    ]
  },
  TOTPlastico4: {
    response: "**Haz lo siguiente:** \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 2. **Retirar** la herramienta dañada de la línea. \n 3. **Reemplazar** el utensilio por un sustituto nuevo, limpio, seco y previamente liberado. \n 4. **Detonar** investigación para definir fuente y causa potencial. \n 5. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 6. **Lanzar** NCMGT \n **Continuar** monitero. \n **REFERENCIAS:** **PR-40192**-Procedimiento de Escalamiento ante Herramientas Rotas o Extraviadas, Sec. 4 | **PR-28761**-Procedimiento Manejo de vidrio, plástico quebradizo y cerámica.",
    final: true
  },

  //====================================================
  //                PREGUNTAS PLASTICO TE
  //====================================================

  //====================================================
  //                PREGUNTAS VIDRIO/MADERA SCA
  //====================================================
  SCAVidrio1: {
    id: "Pregunta19",
    question: "¿Qué tipo de objeto encontraste?",
    options: [
      {
        label: "Vidrio",
        next: "SCAVidrio3"
      },
      {
        label: "Madera",
        next: "SCAVidrio3"
      },
      
    ]
  },
  SCAVidrio3: {
    id: "Pregunta20",
    question: "¿Dónde fue encontrado el objeto extraño?",
    options: [
      {
        label: "En producto",
        next: "SCAVidrio4"
      },
      {
        label: "En tanques/marmita",
        next: "SCAVidrio4"
      },
      {
        label: "En PCC",
        next: "SCAVidrio4"
      },
      {
        label: "En OPRP",
        next: "SCAVidrio4"
      },
      {
        label: "Otro",
        next: "SCAVidrio4"
      }
    ]
  },
  SCAVidrio4: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Revisar OPRP, Magnetos y No OPRP Antes de PCC o donde se encontró el objeto extraño.\n  5. Detonar investigación para definir fuente y causa potencial.\n 6. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 7. Detectar origen de partícula. \n 8. Revisar toda la linea para identificar más partículas y asegurar despeje completo. \n 9. Lanzar NCMGT MEDIO QVS/Q&FS \n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n 11. Esperar señal de arranque por RA equipo HACCP.",
    image: "paro-linea.webp",
    final: true
  },
  SCAVidrio5: {
    response: "**Debes hacer lo siguiente:**\n  1. Notificar del evento a tu supervisor/QVS/Q&FS Manager.\n  5. Detonar investigación para definir fuente y causa potencial \n 6. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 9. Lanzar NCMGT. \n 10. Continuar monitoreo.",
    final: true
  },
  //====================================================
  //                PREGUNTAS VIDRIO/MADERA MTM
  //====================================================

  //====================================================
  //                PREGUNTAS VIDRIO/MADERA TOT
  //====================================================

  TOTVidrio1: {
    id: "Pregunta11",
    question: "¿Qué tipo de objeto encontraste?",
    options: [
      {
        label: "Vidrio",
        next: "TOTVidrio2"
      },
      {
        label: "Madera",
        next: "TOTVidrio2"
      }
    ]
  },
  TOTVidrio2: {
    id: "Pregunta12",
    question: "¿Dónde fue encontrado el objeto extraño?",
    options: [
      {
        label: "En producto/tanques/marmita/PCC/OPRP",
        next: "TOTVidrio3"
      },
      {
        label: "En pasillos o áreas de tránsito",
        next: "TOTVidrio4"
      }
    ]
  },
  TOTVidrio3: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. **Detener** la línea inmediatamente.\n  2. **Segregar** El Producto De Acuerdo Con El Last Good Check  \n  3. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n  4. **Delimitar** el área de tráfico peatonal para evitar que se dispersen estillas de vidrio a otras líneas.\n  5. **Detonar** investigación para definir fuente y causa potencial.\n 6. **Documentar** evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 7. **Lanzar** NCMGT QVS/Q&FS \n 8. **Llenar** el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n 9. **Esperar** señal de arranque por RA equipo HACCP. \n **Referencias: ** **PR-24264**-Effective Application of Physical Sorters, **PR-23679**-Effective Application of Optical Sorters, **PR-23566**-Effective Application of Sieves to Production Processes r2, **PR-28769**-Procedimiento de Monitoreo de CCPs y OPRPs, **REF-09274**-Corporate Foreign Materials Management Standard ",
    image: "paro-linea.webp",
    final: true
  },
  TOTVidrio4: {
    response: "**Haz lo siguiente** \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 2. **Delimitar** el área del tráfico peatonal para evitar que se dispersen astillas de vidrio a otra líneas. \n 3. **Detonar** investigación para definir fuente y causa potencial. \n 4. **Consultar** el registro de Vidrio y Plástico Duro de la línea para identificar el origen del fragmento. \n 5. **Solicitar** al proveedor KRYON. \n 6. **Documentar** evento en 'reporte de turno'. \n **REFERENCIA:** **FORM-40844**-Incidente de rompimiento de vidrio, plástico duro y cerámica | **PR-28761**-Procedimiento Manejo de vidrio, plástico quebradizo y cerámica.",
  },
  //====================================================
  //                PREGUNTAS VIDRIO/MADERA TE
  //====================================================
  
  //====================================================
  //                PREGUNTAS OTROS MTM
  //====================================================

  //====================================================
  //                PREGUNTAS OTROS SCA
  //====================================================

  //====================================================
  //                PREGUNTAS OTROS TE
  //====================================================

  //====================================================
  //                PREGUNTAS OTROS TOT
  //====================================================
  TOTOtros1:{
    response: "**Haz lo siguiente:** \n 1. Notificar del evento a tu supervisor/QVS/Q&FS Local Team. \n 2. Asegurar que no haya producto expuesto en contacto con la plaga/materia extraña. \n 3. Continuar con tu producción normal. \n 4. Revisar: \n  - CARTÓN: El reporte del turno anterior para identificar intervenciones o mantenimientos donde pudieran haber quedado remanentes de cartón u otros materiales extraños. \n - PLAGAS: El último registro de limpieza profunda para detectar desviaciones. El último reporte del proveedor de plagas. \n - CABELLO/PELUSA/HILO/UÑAS: Verificar que el equipo de operación porte de manera correcta completa su Equipo de Protección Personal (EPP). \n 5. Documentar evento en 'reporte de turno' y llena el documento 'FORM-56871 Informacion para el levantamiento de incidentes en NCMGT'. \n 6. Lanzar NCMGT LOW QVS/Q&FS. \n 7. Esperar indicación del equipo calidad para realizar la limpieza en el área. \n **REFERENCIAS:** **PR-28756**-Procedimiento Manejo Integral de Plagas | **QM-03782**-Manual de Buenas Prácticas de Manufactura.",
    final: true
  },

  //====================================================
  //                PREGUNTAS AGUA SCA
  //====================================================
  SCAAgua1:{
    id: "Pregunta23",
    question: "¿El goteo condensación o ingreso de agua cayó **DIRECTAMENTE** sobre el producto, materias primas, material de empaque o Zona 2?",
    options:[
      {
        label: "Si",
        next: "SCAAgua2"
      },
      {
        label: "No",
        next: "SCAAgua3"
      }
    ]
  },
  SCAAgua2:{
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n 4. Detonar investigación para definir fuente y causa potencial.\n 5. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 6. SOLICITAR ISOPADO SUCIO ZONA AFECTADA \n 7. Lanzar NCMGT \n 8. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n **9. Esperar señal de arranque por RA equipo HACCP.**",
    image: "paro-linea.webp",
    final: true
  },
  SCAAgua3:{
    id: "Pregunta24",
    question: "¿El agua está cayendo en pasillo o áreas alejadas, pero existe el riesgo de que salpique o llegue a la línea por el tráfico de personas o patines?",
    options:[
      {
        label: "Si",
        next: "SCAAgua2"
      },
      {
        label: "No",
        next: "SCAAgua4"
      }
    ]
  },
  SCAAgua4:{
    response: "**Debes hacer lo siguiente:**\n  1. Notificar del evento a tu supervisor/QVS/Q&FS Manager.\n  2. Solicitar a Kryon acordonar el área, secar inmediatamente.\n  3. Reportar y levantar anormalidad a mantenimiento. \n 4. Detonar inversitgación para definir fuente y cuasa potencial \n 5. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n  6. SOLICITAR ISOPADO SUCIO ZONA AFECTADA \n 7. Lanzar NCMGT \n  8. Continuar monitoreo.",
    final: true
  },
  //====================================================
  //                PREGUNTAS AGUA MTM
  //====================================================

  //====================================================
  //                PREGUNTAS AGUA TOT
  //====================================================
  TOTAgua1:{
    id: "Pregunta13",
    question: "¿El goteo condensación o ingreso de agua cayó **DIRECTAMENTE** sobre el producto, materias primas, material de empaque o Zona 1,/Zona 2?",
    options:[
      {
        label: "Si (Contacto Directo/Zona 1/Zona 2)",
        next: "TOTAgua2"
      },
      {
        label: "No (Cayó en pasillos o áreas alejadas)",
        next: "TOTAgua3"
      }
    ]
  },
  TOTAgua2:{
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. **Detener** la línea inmediatamente.\n  2. **Segregar** El Producto De Acuerdo Con El Last Good Check  \n  3. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 4. **Investigar y delimidar el área**: Identifica el origen del goteo y segrega el área de tránsito para asegurar que el agua no se extienda por otras líneas.\n 5. **Documentar** evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 6. **Solicitar** un hispoado de Zona 1 en sucio. \n 7. **Limpiar** la zona afectada. \n 8. **Solicitar** un hisopado de Zona 1 en limpio. \n **Registrar y documentar** en el reporte de turno, llenar el FORM-56871 y **levanta** una No Conformidad en Nexus. \n 10. **Llenar** el análisis de riesgos (RA) con el equipo de food safety \n 11. **Esperar** señal de arranque por RA equipo HACCP.** \n **REQUISITO DE ARRANQUE**: El quipo no podrá reanudar producción basándose únicamente en una inspección visual. El área **debe estar 100% seca** y se debe contar con **resultados de laboratorio conformes** que liberen la zona microbiológicamente. \n **Referencias:** 'STRD-01992-Mars Wrigley Cleaning and Sanitation Standard' , 'PR-28758 - Procedimiento General de Limpieza y Desinfección', 'PR-28769- Procedimiento de Monitoreo de CCPs y OPRPs'",
    image: "paro-linea.webp",
    final: true
  },
  TOTAgua3:{
    response: "**Debes hacer lo siguiente:**\n  1. Notificar del evento a tu supervisor/QVS/Q&FS Manager.\n  2. Solicitar a Kryon acordonar el área, secar inmediatamente.\n 3. Reportar y levantar anormalidad a mantenimiento. \n4. Detonar investigación para definir fuente y causa potencial \n5. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n6. SOLICITAR ISOPADO SUCIO ZONA AFECTADA \n7. Lanzar NCMGT \n 8. Continuar monitoreo. \ **Referencia:** STRD-01992 - Mars Wrigley Cleaning and Sanitation Standard \n **Referencias:** **STRD-01992**-Mars Wrigley Cleaning and Sanitation Standard, **PR-28758**-Procedimiento General de Limpieza y Desinfección, **PR-28769**-Procedimiento de Monitoreo de CCPs y OPRPs",
    final: true
  },
  //====================================================
  //                PREGUNTAS AGUA TE
  //====================================================

  //====================================================
  //                PREGUNTAS QUIMICO SCA
  //====================================================
  SCAQuimico1: {
    id: "Pregunta25",
    question: "¿Qué tipo contaminación química identificaste?",
    options: [
      {
        label: "Lubricantes",
        next: "SCAQuimico2"
      },
      {
        label: "Pintura",
        next: "SCAQuimico2"
      },
      {
        label: "Sanitizantes",
        next: "SCAQuimico2"
      },
      {
        label: "Alérgenos",
        next: "SCAQuimico2"
      }
    ]
  },
  SCAQuimico2: {
    id: "Pregunta26",
    question: "¿El químico tuvo contacto con el producto, ingredientes, empaques o Z1?",
    options: [
      {
        label: "Si",
        next: "SCAQuimico3"
      },
      {
        label: "No",
        next: "SCAQuimico4"
      }
    ]
  },
  SCAQuimico3: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Acordonar y restringir el área  \n 5. Realizar la limpieza de las áreas involucradas. \n 6. Todos los materiales y utensilios de limpieza que se utilicen para limpiar el derrame se deben segregar y los responsables de limpiar derrames de alérgenos las deben desechar inmediatamente.\n  7. Detonar investigación para definir fuente y causa potencial.\n 8. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 9. Lanzar NCMGT MEDIO QVS/Q&FS \n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n 11. Esperar señal de arranque por RA equipo HACCP.",
    image: "paro-linea.webp",
    final: true
  },
  SCAQuimico4: {
    id: "Pregunta27",
    question: "¿El derrame ocurrió cerca de la línea  hay riesgo de contaminación cruzada?",
    options: [
      {
        label: "Si",
        next: "SCAQuimico5"
      },
      {
        label: "No",
        next: "SCAQuimico6"
      }
    ]
  },
  SCAQuimico5: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Acordonar y restringir el área  \n 5. Realizar la limpieza de las áreas involucradas. \n  6. Detonar investigación para definir fuente y causa potencial.\n 7. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 8. Lanzar NCMGT MEDIO QVS/Q&FS \n 9. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n 10. Esperar señal de arranque por RA equipo HACCP.",
    image: "paro-linea.webp",
    final: true
  },
  SCAQuimico6: {
    response: "**Notificar del evento a tu supervisor/QVS/Q&FS Manager.**",
    final: true
  },
  //====================================================
  //                PREGUNTAS QUIMICO MTM
  //====================================================

  //====================================================
  //                PREGUNTAS QUIMICO TOT
  //====================================================
  TOTQuimico1: {
    id: "Pregunta14",
    question: "¿El químico tuvo contacto directo con el producto, ingredientes, material de empaque o superficies de Zona 1?",
    options: [
      {
        label: "Si, contacto directo o derrame en Zona 1/Zona 2",
        next: "TOTQuimico2"
      },
      {
        label: "No, pero es un derrame en Zona 3/Zona 4",
        next: "TOTQuimico3"
      }
    ]
  },
  TOTQuimico2: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. **Detener** la línea inmediatamente.\n  2. **Segregar** El Producto De Acuerdo Con El Last Good Check  \n  3. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n  4. **Acordonar** y restringir el área  \n 5. **Realizar** la limpieza de las áreas involucradas \n - NOTA: Todos los materiales y utensilios que se utilicen para limpiar el derrame se deben segregar y los responables de limpiar derrames de alérgenos las deben desechar inmediatamente. \n 6. **Solicitar** un hisopado a calidad para validar la limpieza de la zona.\n  7. **Detonar** investigación para definir fuente y causa potencial.\n 8. **Documentar** evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 9. **Lanzar** NCMGT QVS/Q&FS \n 10. **Llenar** el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n 11. **Esperar** señal de arranque por RA equipo HACCP.",
    image: "paro-linea.webp",
    final: true
  },
  TOTQuimico3: {
    response: "**Haz lo siguiente:** \n 1. **Notificar** del evento a tu supervisor/QVS.\n 2. **Delimitar** la zona afectada en pisos o montacargas pr el área del derrame.\n 3. **Realizar** limpieza: \n - **Para alérgenos**: Realizar la limpieza utilizando los utensilios con el código de colores asignado en conjunto con los traje Tyvek amarillos. **Nota:** Todos los materiales de limpieza desechables utilizados deben segregarse y desecharse inmediatamente. \n - **Para químicos**: Realizar la limpieza utilizando materiales absorbentes inertes. **Nota 1:** Queda estrictamente prohibido usar agua a alta presion o mangueras de aire comprimido, ya que esto aerosoliza y dispersa las partículas químicas o alegrénicas hacia la Zona 1. **Nota 2:** Si el derrame es un químico que ha caducado o es peligroso, el área de HSE debe encargarse de su traslado seguro al almacén de residuos peligrosos, destinar su disposición final de acuerdo con su naturaleza química.\n \n4. **Solicitar** a Q&FS inspección visual para liberación del área. \n 5. **Documentar** evento en 'reporte de turno' \n **Referencias:** **PR-42219**-Procedimiento para derrame de Alérgenos, **PR-28763**-Procedimiento Control de Químicos",
    final: true
  },
  //====================================================
  //                PREGUNTAS QUIMICO TE
  //====================================================

  //====================================================
  //             PREGUNTAS INCIDENTES Q&FS SCA
  //====================================================
  SCAQFSIncidente1: {
    id: "Pregunta28",
    question: "¿Qué tipo de desviación de calidad detectaste?",
    options: [
      {
        label: "Error en la mezcla / ingredientes equivocados",
        response: "**Detener el proceso.** \n No avanzar el producto. \n Escalar a Q&FS. \n Lanzar NCMGT"
      },
      {
        label: "Parámetro fuera de límite",
        next: "SCAQFSIncidente3"
      },
      {
        label: "Falla Sensorial",
        response: "**Detener** **avance** **del** **lote** **específico**. \n Aislar muestra y llamar a VS Calidad."
      }
    ]
  },
  SCAQFSIncidente2: {
    id: "Pregunta29",
    question: "¿Hay producto terminado comprometido?",
    options: [
      {
        label: "Si",
        response: "Ejecutar Protocolo de Paro Inmediato. \n Segregar todo el producto afectado. \n Escalar a Q&FS. \n Lanzar NCMGT"
      },
      {
        label: "No",
        response: "Detener el proceso. \n Escalar a Q&FS \n Lanzar NCMGT"
      }
      ]
  },
  //====================================================
  //             PREGUNTAS INCIDENTES Q&FS MTM
  //====================================================

  //====================================================
  //             PREGUNTAS INCIDENTES Q&FS TOT
  //====================================================
  TOTQFSIncidente1: {
    id: "Pregunta15",
    question: "¿Qué tipo de desviación de calidad detectaste?",
    options: [
      {
        label: "Desviación Sensorial",
        response: "1. **Notificar** del evento a tu supervisor/QVS. \n 2. Participar en el **Panel de Conformidad** para evaluar la muestra contra el estándar físico vigente utilizanda la **Escala de Grado de Diferencia (DoD) de 7 puntos**. \n 3. **Escalar y detener la producción SOLO si** el panel determina un **DoD>=4**. \n 4. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentesen NCMGT', \n 5. **Lanzar** NCMGT QVS/Q&FS. \n **REFERENCIAS:** Procedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) TOT."
      },
      {
        label: "Error en la mezcla / ingredientes equivocados/ parámetro crítico fuera de límite (ej. Temperatura, Peso)",
        response: "1. **Notificar** del evento a tu supervisor/QVS. \n **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 3. **Lanzar** NCMGT QVS/Q&FS.\n **REFERENCIAS:** Procedimiento sobre liberación producto (positive release) y control del producto no conforme (hold & release) TOT.",
      }
    ]
  }


  //====================================================
  //             PREGUNTAS INCIDENTES Q&FS TE
  //====================================================
  };
