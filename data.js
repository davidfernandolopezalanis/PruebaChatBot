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
    question: "¿Qué tipo de incidente estás gestionando el día de hoy?",
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
    question: "¿Qué tipo de incidente estás gestionando el día de hoy?",
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
    question: "¿Qué tipo de incidente estás gestionando el día de hoy?",
    options: [
      {
        label: "Objeto Metálico",
        next: "TOTMetal1"
      },
      {
        label: "Plástico (Suave/Duro)/Vidrio/Madera",
        next: "TOTPlastico01"
      },
      {
        label: "Otros Cuerpos Extraños (cabello/plagas/pelusa/sangre)",
        next: "TOTOtros1"
      },
      {
        label: "Ingreso de Agua",
        next: "TOTAgua1"
      },
      {
        label: "Químico (lubricantes, pintura, sanitizantes, alérgenos)",
        next: "TOTQuimico1"
      },
      {
        label: "Incidentes de Calidad",
        next: "TOTQFSIncidente1"
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
    response: "**¡PARO DE LINEA!**\n Se ha detectado un peligro físico crítico. Ejecuta las siguientes acciones de inmediato: \n 1. **Detener** la línea inmediatamente.\n  2.  **Segregar** El Producto De Acuerdo Con El Last Good Check \n 3.**Notificar** del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager.\n  4. **Revisar** CCPs, OPRP filtros, mallas, magnetos. \n 5. **Caracterizar** partículas con fines de investigación. \n 6. **Detonar** investigación para definir fuente y causa potencial.\n  7. **Documentar** evento en 'Reporte de turno' y llena el documento 'FORM-56871 Informacion para el levantamiento de incidentes en NCMGT'.\n  8. **Lanzar** NCMGT QVS/Q&FS. \n 9. **Llenar** el análisis de riesgos (RA) con el equipo de food safety. \n 10. **Esperar** señal de arranque por RA equipo HACCP \n---------------------------------------\n**RECUERDA**\nLa línea no puede arrancar nuevamente hasta que se tenga la aprobación formal del equipo local de Q&FS/VSQ.\n--------------------------------------- \n **Referencias:** **PR-28769**-Effective Application of Metal Detectors to Production Processes R2, **REF-09274**-Effective Application of Magnets to Production Processes r2, **PR-23677**-Procedimiento de Monitoreo, Verificación y Validación de CCPs y OPRPs, **PR-23565**-Corporate Foreign Materials Management Standard",
    image: "paro-linea.webp",
    final: true
  },
  NoParoLinea: {
    response: "**Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/calidad. \n 2. **Segregar** el producto de acuerdo con el last good check (último control conforme). \n 3. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza. \n 4. **Continuar** con monitoreo especial. \n 5. **Fundir** la pieza que se confirme contaminada para investigación. \n 6. **Colocar** la evidencia en el FORM-38268 Monitoreo de Detectores de Metal (CCP). \n 7. **Registrar** en el FORM-38268 Formato de registro de hallazgos de detector de metales. \n 8. **Caracterizar** las partículas con fines de investigación. \n 9. **Detonar** investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 10. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 11. **Documentar** evento en 'reporte de turno'. \n 12. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 13. **Lanzar** NCMGT QVS/Q&FS \n 14. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety \n **Esperar** señal de arranque y dictamen (liberación, reproceso o destrucción) por el equipo HACCP. \n ----------------------------------- \n **Recuerda** \n Cuando se presentan 3 eventos confirmados de metal en 1 hora o menos debes detener la línea y seguir el proceso de escalamiento. \n -------------------------------------\n **Referencias:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38293** Plan HACCP CCP's | **REF-05557** HACCP-based Food Safety Management Programme Standard",
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
    question: "¿El objeto metálico encontrado es superior a 7mm y/o es esférico menor o igual a 44.5mm?",
    options: [
      {
        label: "Si",
        next: "TOTMetalRespuesta1"
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
        label: "En producto/CCP (Ej. Magneto/Filtro)",
        next: "TOTMetal6"
      },
      {
        label: "En algún ingrediente o material de empaque.",
        next: "TOTMetalRespuesta11"
      },
      {
        label: "En OPRP",
        next: "TOTMetal31"
      },
      {
        label: "En No OPRP (Ej. Mallas Flitros)",
        next: "TOTMetalRespuesta10"
      }
    ]
  },
  TOTMetal3:{
    id: "Pregunta5",
    question: "¿El objeto metálico encontrado es superior a 6 mm?",
    options: [
      {
        label: "Si",
        next: "TOTMetalRespuesta2"
      },
      {
        label: "No",
        next: "TOTMetal5"
      }
    ]
  },
  TOTMetal31:{
    id: "Pregunta5",
    question: "¿El objeto metálico encontrado es superior a 6 mm y es duro o su condición es afilada/puntiaguda?",
    options: [
      {
        label: "Si",
        next: "TOTMetalRespuesta2"
      },
      {
        label: "No",
        next: "TOTMetalRespuesta9"
      }
    ]
  },
  TOTMetal5: {
    id: "Pregunta6",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "TOTMetalRespuesta3"
      },
      {
        label: "No",
        next: "TOTMetal71"
      }
    ]
  },
  TOTMetal51: {
    id: "Pregunta6",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "TOTMetalRespuesta6"
      },
      {
        label: "No",
        next: "TOTMetal71"
      }
    ]
  },
  TOTMetal6: {
    id: "Pregunta6",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "TOTMetalRespuesta3"
      },
      {
        label: "No",
        next: "TOTMetal7"
      }
    ]
  },
  TOTMetal4: {
    response: "**Puedes continuar con la producción normal bajo monitoreo. Ejecutar lo siguiente:** \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager \n 2. **Continuar** con producción normal. \n 3. **Revisar** el porcentaje de defectivo de la orden surtida. \n **En caso de que sea mayor o igual al 2%:** \n - Registrar en la base FORM-41789 REPORTE DE RECHAZOS \n - Generar la etiqueta de Rechazo \n - Entrega el rechazo al Material Tester con el sello para ingreso a almacén y su firma \n - Entregar el rechazo a almacén. \n \n 4. **Caracterizar** las partículas con fines de investigación. \n 5. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 6. **Lanzar** NCMGT LOW QVS/Q&FS \n 7. **Reiniciar** con monitoreo especial por las siguientes 12 horas. \n \n **Referencia:** **PR-28743** Porcedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **TOT PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs site TOT)",
    final: true
  },
  TOTMetal7:{
    id: "Pregunta7",
    question: "¿Es el segundo rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "TOTMetalRespuesta4"
      },
      {
        label: "No",
        next: "TOTMetal8"
      }
    ]
  },
  TOTMetal71:{
    id: "Pregunta7",
    question: "¿Es el segundo rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "TOTMetalRespuesta7"
      },
      {
        label: "No",
        next: "TOTMetal81"
      }
    ]
  },
  TOTMetal8:{
    id: "Pregunta8",
    question: "¿Este es el tercer rechazo de metal confirmado en una hora o menos?",
    options:[
      {
        label: "Si",
        next: "TOTMetalRespuesta5"
      },
      {
        label: "No",
        next: "NoParoLinea"
      }
    ]
  },
  TOTMetal81:{
    id: "Pregunta8",
    question: "¿Este es el tercer rechazo de metal confirmado en una hora o menos?",
    options:[
      {
        label: "Si",
        next: "TOTMetalRespuesta8"
      },
      {
        label: "No",
        next: "TOTMetalRespuesta7"
      }
    ]
  },
  TOTMetalRespuesta1:{
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n \n 1. **Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/calidad.\n 3. **Segregar** el Producto de Acuerdo Con El Last Good Check (último control conforme). \n 4. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza. \n 5. **Fundir** la pieza que se confirme contaminada para investigación. \n 6. **Colocar** la evidencia en el FORM-38268 Monitoreo de Detectores de Metal (CCP) \n 7. **Registrar** en el FORM-38268 Formato de registro de hallazgos de detector de metales. \n 8. **Caracterizar** las partículas con fines de investigación. \n 9. **Detonar** investigación para definir fuente y causa potencial. (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 10. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 11. **Documentar** evento en 'reporte de turno' \n 12. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 13. **Lanzar** NCMGT QVS/Q&FS. \n 14. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 15. **Esperar** señal de arranque y dictamen del producto (Liberación, reproceso o destrucción) por el equipo HACCP. \n ---------------------------------- \n **REFERENCIAS:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38293** Plan HACCP CCPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    image: "paro-linea.webp",
    final:true
  },
  TOTMetalRespuesta2:{
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n 1. **Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/calidad. \n 3. **Caracterizar** las partículas con fines de investigación. \n 4. **Colocar** la evidencia en el FORM-38267 Monitoreo de Mallas y Filtros. \n 5. **Detonar** investigación para definir fuente y causa potencial. (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 6. **Documentar** evento en 'reporte de turno' \n 7.  **Llenar** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 8. **Lanzar** NCMGT QVS/Q&FS. \n 9. **Llenar** el análisis de riesgos (RISK ASSESMENT FORM-50002) con el equipo de food safety. \n 10. **Esperar** señal de arranque y dictamen (liberación, reproceso o destrucción) por el equipo HACCP. \n ---------------------------------- \n **REFERENCIAS:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs site TOT, Sec 5.1 | **FORM-38295** PLAN HACCP OPRPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    image: "paro-linea.webp",
    final:true
  },
  TOTMetalRespuesta3:{
    response: "**Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/calidad. \n 2. **Segregar** el producto de acuerdo con el last good check (último control conforme). \n 3. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza. \n 4. **Continuar** con monitoreo especial. \n 5. **Fundir** la pieza que se confirme contaminada para investigación. \n 6. **Colocar** la evidencia en el FORM-38268 Monitoreo de Detectores de Metal (CCP). \n 7. **Registrar** en el FORM-38268 Formato de registro de hallazgos de detector de metales. \n 8. **Caracterizar** las partículas con fines de investigación. \n 9. **Detonar** investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) \n 10. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 11. **Documentar** evento en 'reporte de turno' \n 12. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es duro y/o afilada. \n 13. **Lanzar** NCMGT QVS/Q&FS. \n 14. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety \n **Esperar** señal de arranque y dictamen (liberación, reproceso o destrucción) por el equipo HACCP. \n -------------------------------\n **RECUERDA** \n  - Cuando se presentan 3 eventos confirmados de metal en 1 hora o menos debes detener la línea y seguir el proceso de escalamiento. \n --------------------------------------\n **Referencia:** **PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs site TOT, Sec. 5.1) | **FORM-38293** Plan HACCP CCPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final:true
  },
  TOTMetalRespuesta4:{
    response: "**Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/calidad \n 2. **Segregar** el producto de acuerdo con el last good check (último control conforme).\n 3. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza. \n 4. **Continuar** con monitoreo especial. \n 5. **Fundir** la pieza que se confirma contaminada para investigación. \n 6. **Colocar** la evidencia en el FORM-38268 Monitoreo de Detectores de Metal (CCP). \n 7. **Regsitrar** en el FORM-38268 Formato de registro de hallazgos de detector de metales. \n 8. **Caracterizar** las partículas con fines de investigación. \n 9. **Detonar** investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) \n 10. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 11. **Documentar** evento en 'reporte de turno'. \n 12. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 13. **Lanzar** NCMGT QVS/Q&FS. \n 14. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n **Esperar** señal de arranque y dictamen (liberación, reproceso o destrucción) por el equipo de HACCP. \n -------------------------------\n **RECUERDA** \n  - Cuando se presentan 3 eventos confirmados de metal en 1 hora o menos debes detener la línea y seguir el proceso de escalamiento. \n --------------------------------------\n **Referencia:** **PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs site TOT, Sec. 5.1) | **FORM-38293** Plan HACCP CCP's | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final:true
  },
  TOTMetalRespuesta5:{
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n 1. **Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/calidad \n 3. **Segregar** el producto de acuerdo con el last good cehck (útlimo control conforme). \n 4. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza. \n 5. **Fundir** la pieza que se confirme contaminada para investigación. \n 6. **Colocar** la evidencia en el FORM-38268 Monitoreo de Detectores de Metal (CCP). \n 7. **Registrar** en el FORM-38268 Formato de registro de hallazgos de detector de metales. \n 8. **Caracterizar** las partículas con fines de investigación. \n 9. **Detonar** investigación para definir fuente y causa potencial. (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 10. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 11. **Documentar** evento en 'reporte de turno'. \n 12. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 13. **Lanzar** NCMGT QVS/Q&FS. \n 14. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 15. **Esperar** señal de arranque y dictamen del prpducto (liberación, reproceso o destrucción) por el equipo HACCP. \n ---------------------------------- \n **REFERENCIAS:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38293** Plan HACCP CCP's | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    image: "paro-linea.webp",
    final:true
  },
  TOTMetalRespuesta6:{
    response: "Puedes continuar con la producción bajo con monitoreo. Ejecutar lo siguiente: \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 2.**Continuar** con tu producción. \n 3. **Revisar** El porcentaje de defectivo de la orden surtida. \n En caso de que sea mayor o igual a 2%: \n -Registrar en la base FORM-41789 REPORTE DE RECHAZOS \n -Generar la etiqueta de Rechazo \n -Entrega el rechazo al Material Tester con el sello para ingreso a almacén y su firma \n -Entregar el rechazo a almacén. \n 4. **Caracterizar** las partículas con fines de investigación. \n 5. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 6. **Lanzar** NCMGT LOW QVS/Q&FS. \n  7. **Reiniciar** con monitoreo especial por las siguientes 12 horas. \n -------------------------------\n **RECUERDA* \n  - Cuando se presentan 3 eventos confirmados de metal en 3 horas o menos debes detener la línea y seguir el proceso de escalamiento. \n --------------------------------------\n **Referencia:** **PR-28743** Procedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **TOT PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs site TOT, Sec. 5.1)",
    final:true
  },
  TOTMetalRespuesta7:{
    response: "Puedes continuar con la producción bajo con monitoreo. Ejecutar lo siguiente: \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 2.**Continuar** con tu producción. \n 3. **Revisar** El porcentaje de defectivo de la orden surtida. \n En caso de que sea mayor o igual a 2%: \n -Registrar en la base FORM-41789 REPORTE DE RECHAZOS \n -Generar la etiqueta de Rechazo \n -Entrega el rechazo al Material Tester con el sello para ingreso a almacén y su firma \n -Entregar el rechazo a almacén. \n 4. **Caracterizar** las partículas con fines de investigación. \n 5. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 6. **Lanzar** NCMGT LOW QVS/Q&FS. \n  7. **Reiniciar** con monitoreo especial por las siguientes 12 horas. \n -------------------------------\n **RECUERDA* \n  - Cuando se presentan 3 eventos confirmados de metal en 3 horas o menos debes detener la línea y seguir el proceso de escalamiento. \n --------------------------------------\n **Referencia:** **PR-28743** Procedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **TOT PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs site TOT, Sec. 5.1)",
    final:true
  },
  TOTMetalRespuesta8:{
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n Se ha detectado un peligro físico **crítico**. Ejecuta las siguientes acciones de inmediato: \n 1. **Detener** la línea inmediatamente. \n 2. **Segregar** el Producto de Acuerdo Con El Last Good Check (último control conforme).\n 3. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 4. **Revisar** CCPs, OPRP filtros, mallas, magnetos. \n 5. **Revisar** el porcentaje de defectivo de la orden surtida: \n En caso de que sea mayor o igual a 2%: \n -Registrar en la base FORM-41789 REPORTE DE RECHAZOS \n -Generar la etiqueta de Rechazo \n -Entrega el rechazo al Material Tester con el sello para ingreso a almacén y su firma. \n -Entregar el rechazo a almacén \n 6. **Caracterizar** las partículas con fines de investigación. \n 7. **Detonar** investigación para definir fuente y causa potencial. (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 8. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 9. **Lanzar** NCMGT QVS/Q&FS. \n 10. **Llenar** el análisis de riesgos (RISK ASSESMENT FORM-50002) con el equipo de food safety. \n 11. **Esperar** señal de arranque por RA equipo HACCP. \n ---------------------------------- \n **REFERENCIAS:** **PR-28743** Procedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs site TOT, Sec 5.1)",
    image: "paro-linea.webp",
    final:true
  },
  TOTMetalRespuesta9:{
    response: " **Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager. \n 2. **Continuar** con producción con monitoreo especial por las siguientes 24 horas. \n 3. **Caracterizar** las partículas con fines de investigación. \n 4. **Colocar** la evidencia en el FORM-38267 Monitoreo de Mallas y Filtros. \n 5. **Revisar** el reporte de turno para detectar algún mantenimiento previo donde se pudo generar roce metal con metal. \n 6. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 7. **Lanzar** NCMGT LOW QVS/Q&FS \n -------------------------------------\n **Referencia:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38295** PLAN HACCP OPRPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  TOTMetalRespuesta10:{
    response: " **Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/calidad \n 2. **Continuar** con producción con monitoreo especial por las siguientes 24 horas. \n 3. **Caracterizar** las partículas con fines de investiación. \n 4. **Colocar** la evidencia en el FORM-56611 Monitoreo de Filtros y Tamices \n 5. **Revisar** el reporte de turno para detectar algún incidente. \n 6. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 7. **Lanzar** NCMGT LOW QVS/Q&FS. \n -------------------------------------- \n **Referencia:** **FORM-38295** PLAN HACCP OPRPs y NO OPRPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  TOTMetalRespuesta11:{
    response: "**Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Local Team/ Q&FS Manager. \n 2. **Continuar** con producción con monitoreo especial por las siguientes 24 horas. \n 3. **Caracterizar** las partículas con fines de investigación. \n 4. **Colocar** la evidencia en el FORM-56871 Información para el levantamiento de incidentes en NCMGT \n - **Revisar** el porcentaje de defectivo de la orden surtida:\n **-**En caso de que sea mayor o igual a 2%: \n **->** Registrar en la base FORM-41789 REPORTE DE RECHAZOS.\n **->** Generar la etiqueta de Rechazo \n **->** Entregar el rechazo al DATA con el sello y firma para que lo entregue al material tester y lo ingrese a almacén. \n **->** Entregar el rechazo a almacén. \n 5. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 6. **Lanzar** NCMGT LOW QVS/Q&FS. \n ----------------------------------------- \n **Referencias:** **PR-28743** Procedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final: true
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
  //                PREGUNTAS VIDRIO/PLASTICO/MADERA TOT
  //====================================================
  TOTPlastico01: {
    id: "Pregunta9",
    question: "¿De qué material es el objeto encontrado?",
    options: [
      {
        label: "Vidrio/cerámica",
        next: "TOTVidrio1"
      },
      {
        label: "Madera",
        next: "TOTMadera1"
      },
      {
        label: "Plástico",
        next: "TOTPlastico1"
      }
    ]
  },
  TOTPlastico1: {
    id: "Pregunta10",
    question: "¿Dónde fue encontrado el objeto plástico?",
    options: [
      {
        label: "En Zona 1/Zona 2",
        next: "TOTRespuestaPlastico1"
      },
      {
        label: "En Zona 3/Zona4",
        next: "TOTRespuestaPlastico2"
      },
      {
        label: "En herramienta de limpieza/utensilio de producción",
        next: "TOTRespuestaPlastico3"
      }
    ]
  },  
  TOTVidrio1: {
    id: "Pregunta9",
    question: "¿Dónde fue encontrado el objeto?",
    options: [
      {
        label: "En Zona 1/Zona 2",
        next: "TOTRespuestaVidrio1"
      },
      {
        label: "En Zona 3/Zona4",
        next: "TOTRespuestaVidrio2"
      }
    ]
  }, 
  TOTMadera1: {
    id: "Pregunta9",
    question: "¿Dónde fue encontrado el objeto?",
    options: [
      {
        label: "En Zona 1/Zona 2",
        next: "TOTRespuestaMadera1"
      },
      {
        label: "En Zona 3/Zona4",
        next: "TOTRespuestaMadera2"
      }
    ]
  },
  TOTRespuestaVidrio1: {
    response: "**¡PARO DE LINEA!**\n 1. **Detener** la línea inmediatamente.\n  2. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager.\n  3. **Delimitar** el área con cinta amarilla y restringir el paso. \n  4. **Segregar** el producto de acuerdo con el last good check (último control conforme) \n 5. **Colocar y registrar** la evidencia en el formato acorde a donde se haya encontrado vidrio: \n CCP -> FORM-38268 Monitoreo de Detectores de Metal (CCP) \n OPRP -> FORM-38267 Monitoreo de Mallas y Filtros \n PRODCUTO/TANQUES -> Reporte de turno \n 6. **Registrar** en el FORM-386268 Formato de registro de hallazgos \n 7. **Realizar** la limpieza con guantes anticorte \n 8. **Detonar** investigación para definir fuente y causa potencial. \n 9. **Documentar** evento en 'reporte de turno' \n 10. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'  \n 11. **Lanzar** NCMGT QVS/Q&FS \n 12. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 13. **Esperar** señal de arranque y dictamen del producto (liberación, reproceso o destrucción) por el equipo HACCP. \n --------------------------------------- \n **Referencias: ** **FORM-40844** Incidente de rompimiento de vidrio, plástico duro y cerámica | **FORM-38293** Plan HACCP CCP's | **FORM-38295** PLAN HACCP OPRP's y NO OPRP's | **REF-05557** HACCP-based Food Safety Management Programme Standard | **PR-28761** Procedimiento Manejo de vidrio, plástico quebradizo y cerámica",
    image: "paro-linea.webp",
    final: true
  },
  TOTRespuestaVidrio2: {
    response: "1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager \n 2. **Delimitar** el área del tráfico peatonal para evitar que se dispersen astillas de vidrio a otras líneas \n 3. **Evaluar** la posible afectación al producto. Si existe producto potencialmente afectado, deberá segregarse e identificarse y proceder conforme al proceso de control de producto no conforme aplicable en Toluca. \n 4. **Investigar** la fuente y causa del vidrio, incluyendo la revisión de equipos, instalaciones y elementos quebradizos cercanos. Si corresponde a un elemento inventariado, dar seguimiento en FORM-40610 Inventario de vidrio, plástico duro y cerámica; las desviaciones de equipo/instalaciones requieren seguimiento a reparación o sustitución. \n 5. **Solicitar** la recolección del vidrio y limpieza al proveedor de limpieza. \n 6. **Realizar** inspección y liberación del área por Q&FS, verificando que el área se encuentre en condiciones adecuadas y no represente riesgo para el proceso. \n 7. **Documentar** evento en FORM-40844 'Incidente de rompimiento de vidrio, plástico duro y cerámica' y en 'reporte de turno' \n --------------------------------------------- \n **Referencias: ** **FORM-40844** Incidente de rompimiento de vidrio, plástico duro y cerámica | **FORM-38293** Plan HACCP CCP's | **FORM-38295** PLAN HACCP OPRP's y NO OPRP's | **REF-05557** HACCP-based Food Safety Management Programme Standard | **PR-28761** Procedimiento Manejo de vidrio, plástico quebradizo y cerámica",
    final: true
  },
  TOTRespuestaMadera1: {
    response: "**¡PARO DE LINEA!** \n 1. **Detener** la línea inmediatamente \n 2. **Notificar** del evento a tu supervisor/calidad \n 3. **Segregar** el producto de acuerdo con el last good check (último control conforme). \n 4. **Colocar y registrar** la evidencia en el formato acorde a donde se haya encontrado madera: \n CCP -> FORM-38268 Monitoreo de Detectores de Metal (CCP) \n OPRP -> FORM-38267 Monitoreo de Mallas y Filtros \n PRODUCTO/TANQUES -> Reporte de turno \n 5. **Registrar** en el FORM-38268 Formato de registro de hallazgos \n 6. **Realizar** limpieza del área afectada \n 7. **Detonar** investigación para definir fuente y causa potencial. \n Evaluar alcance de la contaminación: ubicación del hallazgo, condición del material, producto expuesto, equipos involucrados y posibilidad de que existan fragmentos adicionales. \n 8. **Documentar** evento en 'reporte de turno' \n 9. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 10. **Lanzar** NCMGT QVS/Q&FS \n 11. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 12. **Esperar** señal de arranque y dictamen del producto (liberación, reproceso o destrucción) por el equipo HACCP. \n -------------------------------------\n **Referencias:** **FORM-40844** Incidente de rompimiento de vidrio, plástico duro y cerámica | **FORM-38293** Plan HACCP CCP's | **FORM-8295** PLAN HACCP OPRP's y NO OPRP's | **REF-05557** HACCP-based Food Safety Management Programme Standard | **PR-28761** Procedimiento Manejo de vidrio, plástico quebradizo y cerámica.",
    image: "paro-linea.webp",
    final: true
  },
  TOTRespuestaMadera2: {
    response: "1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager \n **Evaluar** la posible afectación al producto. Si existe producto potencialmente afectado, deberá segregarse e identificarse y proceder conform al proceso de control de producto no conforme aplicable en Toluca. \n 3. **Investigar** la fuente y causa de la amdera. Por ejemplo, infraestructura, material, tarima o algún elemento utilizado en el área. El Manual de BPM de Toluca establece que los materiales y productos almacenados sobre tarimas deben utilizar tarimas en buen estado. \n 4. **Retirar** la madera y solicitar la limpieza al proveedor de limpieza",
    final: true
  },
  TOTRespuestaPlastico1: {
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n 1. **Detener** la línea inmediatamente** \n 2. **Notificar** del evento a tu supervisor/calidad. \n 3. **Segregar** el producto de acuerdo con el last good check (último control conforme). \n 4.**Colocar y registrar** la evidencia en el formato acorde a donde se haya encontrado plástico: \n CCP -> FORM-38268 Monitoreo de Detectores de Metal (CCP) \n OPRP -> FORM-38267 Monitoreo de Mallas y Filtros \n PRODUCTO/TANQUES -> Reporte de turno \n 5. **Retirar** los fragmentos/material roto y ejecutar la limpieza del área. \n 6. **Detonar** investigación para definir fuente y causa potencial. \n Evaluar el alcance de la contaminación: ubicación del hallazgo, condición del material, producto expuesto, equipos involucrados y posibilidad de que existan fragmentos adicionales. \n 7. **Documentar** evento en el 'FORM-40844 Incidente de rompimiento de vidrio, plástico duro y cerámica' y en 'reporte de turno'. \n 8. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 9 .**Lanzar** NCMGT QVS/Q&FS \n 10. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety \n 11. **Esperar** señal de arranque y dictamen del producto (liberación, reproceso o destrucción) por el equipo HACCP. \n -------------------------------------------- \n **Referencias: ** **FORM-40884** Incidente de rompimiento de vidrio, plástico duro y cerámica | **FORM-38293** Plan HACCP CCP's | **FORM-38295** PLAN HACCP OPRP's y NO OPRP's | **REF-05557** HACCP-based Food Safety Management Programme Standard | **PR-28761** Procedimiento Manejo de vidrio, plástico quebradizo y cerámica",
    image: "paro-linea.webp",
    final: true
  },
  TOTRespuestaPlastico2: {
    response: "1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager \n 2. **Evaluar** la ubicación, fuente y condición del plástico, particularmente si puede representar reisgo de contaminación para producto, materias primas, amteriales o equipos. \n 3. **Investigar** la fuente y causa del plástico. Por ejemplo, infraestructura, amterial, herramienta o algún elemento utilizado en el área. \n 4. **Retirar** el plástico y solicitar la limpieza al proveedor de limpieza. \n 5. **Corregir** la fuente del hallazg. Si corresponde a equipo/instalación, el procedimiento contempla reemplazo y/o seguimiento mediante anormalidad en SAP y seguimiento en el inventario de vidrio/plástico quebradizo cuando aplique. \n 6. **Documentar** el evento en el **FORM-40844 (solo si corresponde a una ruptura de plástico duro/quebradizo)** \n 7. **Solicitar** a calidad liberación del área afectada. \n ----------------------------------- \n **Referencias:** **FORM-40844** Incidente de rompimiento de vidrio, plástico duro y cerámica | **REF-05557** HACCP-based Food Safety Management Programme Standard | **PR-28761** Procedimiento Manejo de vidrio, plástico quebradizo y cerámica",
    final: true
  },
  TOTRespuestaPlastico3: {
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n 1.**Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/calidad \n 3. **Segregar** el producto de acuerdo con el last good check (último control conforme). \n 4. **Colocar y registrar**la evidencia en el formato acorde a donde se haya encontrado plástico: \n CCP -> FORM-38268 Monitoreo de Detectores Metal (CCP) \n OPRP -> FORM-38267 Monitoreo de Mallas y Filtros \n PRODUCTOS/TANQUES -> Reporte de turno \n 5. **Retirar** los fragmentos/material roto y ejecutar la limpieza del área. \n 6. **Buscar** el utensilio o todos sus fragmentos y determinar cuándo fue la última verificación confrome. Si el artículo no se encuentra, sustituirlo por uno nuevo, íntegro, limpio, seco y liberado según lo establecido en el procedimiento, y levantar la corección correspondiente. \n 7. **Detonar** investigación para definir fuente y causa potencial. \n Evaluar el alcance de la contaminación: ubicación del hallazgo, condición del material, producto expuesto, equipos involucrados y posibilidad de que existan fragmentos adicionales. \n 8. **Documentar** evento en el FORM-40844 Incidente de rompimiento de vidrio, plástico duro y cerámica y en 'reporte de turno' \n 9. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 10. **Lanzar** NCMGT QVS/Q&FS \n 11. **LLenar** el análisis de riesgos (FORM-50002) con el equipo de food safety \n 12. **Esperar** señal de arranque y dictamen del producto (liberación, reproceso o destrucción) por el equipo HACCP. \n --------------------------------------- \n **Referencias: ** **PR-40192** Procedimiento de escalamiento ante herramientas rotas o extraviadas.",
    image: "paro-linea.webp",
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
    id: "Pregunta10",
    question: "¿Dónde identidicaste el cuerpo extraño?",
    options: [
      {
        label: "Contacto Directo/ Zona 1/ Zona 2",
        next: "TOTRespuestaOtros1"
      },
      {
        label: "Zona3/ Zona4",
        next: "TOTRespuestaOtros2"
      }
    ]
  },
  TOTRespuestaOtros1: {
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n **Debes hacer lo siguiente:** \n 1. **Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 3. **Segregar** el Producto de Acuerdo con el Last Good Check (último control conforme). \n 4. **Evaluar el alcance** e investigar la fuente del hallazgo: \n **- Cabello:** verificar uso correcto de escafandra/balerina y cumplimiento de BPM. \n **- Pelusa/hilo/uña:** revisar univorme, EPP y materiales utilizados. \n **- Plaga:** gestionar conforme al procedimiento de Manejo Integral de Plagas. Si existe riesgo de inocuidad por afectación a producto, línea, materia prima o empaque, se genera PRIMP y las acciones son definidas con HACCP/Q&FS. \n **- Sangre:** detener la actividad de la persona lesionada. La herida visible debe protegerse con material impermeable de color diferente a la piel y la persona debe acudir inmediatamente al servicio médico. Si hubo posible contacto con producto, mantenerlo segregado y bajo control. \n 5. **Retira** el objeto extraño/fluido del área. \n 6. **Limpiar y desinfectar** el área. \n 7. **Documentar** evento en 'reporte de turno' y llenar el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 8. **Lanzar** NCMGT \n 9. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 9. **Esperar** señal de arranque por RA equipo HACCP. \n ------------------------------------ \n **Referencias:** **QM-03782** Manual de Buenas Prácticas de Manufactura. | **PR-28756** Procedimiento Manejo Integral de Plagas. | **PR-28757** Procedimiento de Verificación de Buenas Prácticas de Personal | **REF-28680** Mapeo de Procesos TOT Riesgos Físicos | **PR-28743** PROCEDIMIENTO CONTROL DE PRODUCTO NO CONFORME V12",
    image: "paro-linea.webp",
    final: true
  },
  TOTRespuestaOtros2:{
    response: "**Haz lo siguiente:** \n 1. **Notificar** al supervisor/Team Leader. \n 2. **Confirmar** que no exista afectación a producto o superficies de contacto. \n 3. **Retirar** el contaminante y limpiar el área utilizando los utensilios correspondientes. \n 4. **Investigar** y corregir la fuente del hallazgo \n **-** Para cabello: verificar el cumplimiento de BPM del personal, incluyendo que el cabello esté completamente cubierto por la escafandra, que el cabello largo esté recogido y que se utilice balerina cuando corresponda.\n **-** Para pelusa/ hilo: revisar la condición del uniforme, EPP y materiales utilizados en el área para identificar la fuente. Sustiruír el elemento que esté generando desprendimientos. \n **-** Para uña: verificar el cumplimiento de BPM de higiene personal, revisa las manos de tu equipo que deben estar limpias, sin pintura/esmalte y cortas\n **-** Para plagas: dar seguimiento con el proveedor externo de plagas para aplicación de plaguicidas. \n **-** Para sangre: la persona lesionada debe acudir al servicio médico y proteger adecuadamente cualquier herida visible antes de regresar a las áreas correspondientes \n **Eliminar** las condiciones que puedan favorecer la presencia de plagas, recogiendo papeles, plásticos, trapos sucios u otros residuos y colocándolos en los contenedores correspondientes, aplicando la política Clean as you go /Mantén limpio a tu paso. \n 5. **Documentar** el hallazgo conforme al proceso aplicable. \n 6. **Continuar** la operación únicamente si se confirmó que no existe afectación al producto. \n --------------------------------------- \n **REFERENCIAS:** **QM-03782**-Manual de Buenas Prácticas de Manufactura. | **PR-28756**-Procedimiento Manejo Integral de Plagas | **PR-28757** Procedimiento de Verificación de Buenas Prácticas de Personal | **REF-28680** Mapeo de Procesos TOT Riesgos Físicos | **PR-28743** PROCEDIMIENTO CONTROL PRODUCTO NO CONFORME V12",
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
    question: "¿Dónde identificaste el goteo, condensación o ingreso de agua?",
    options:[
      {
        label: "Contacto Directo/Zona 1/Zona 2",
        next: "TOTRespuestaAgua1"
      },
      {
        label: "Zona 3/Zona 4",
        next: "TOTRespuestaAgua2"
      }
    ]
  },
  TOTRespuestaAgua1:{
    response: "**¡PARO DE LINEA!**\n **Debes hacer lo siguiente:**\n  1. **Detener** la línea inmediatamente.\n  2. **Segregar** El Producto De Acuerdo Con El Last Good Check (último control conforme) \n  3. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 4. **Investigar y delimitar el área**: Identifica el origen del goteo y segrega el área de tránsito para asegurar que el agua no se extienda a otras líneas.\n 5.**Solicitar** un hisopado de zona en sucio. \n 6. **Limpiar** la zona afectada. \n 7. **Secar** completamente el área y eliminar condiciones que permitan acumulación de agua. \n 8. **Solicitar** un hisopado de zona en limpio. \n **-** En caso de LLUVIA -> después de 4 horas \n **-** En caso de otro -> INMEDIATAMENTE después de la limpieza \n 9. **Levantar** el aviso/anormalidad a Mantenimiento cuando el origen corresponda a instalaciones o servicios y realizar las acciones necesarias para eliminar la fuente. \n 10.**Documentar** evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 11. **Lanzar** NCMGT \n 12. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety \n 13. **Esperar** señal de arranque por RA equipo HACCP. \n 14. **Asegurar** que las superficies/equipos estén secos antes del arranque. \n -------------------------------------------------- \n **Referencias:** **STRD-01992** Mars Wrigley Cleaning and Sanitation Standard | **PR-28758** Procedimiento General de Limpieza y Desinfección'",
    image: "paro-linea.webp",
    final: true
  },
  TOTRespuestaAgua2:{
    response: "**Debes hacer lo siguiente:**\n  1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager.\n  2. **Investigar y delimitar el área:** Identifica el origen del goteo y segrega el área de tránsito para asegurar que el agua no se extienda a otras líneas. \n 3. **Solicitar** un hisopado de la zona en sucio. \n 4. **Limpiar** la zona afectada \n 5. **Secar** completamente el área y eliminar condiciones que permitan acumulación de agua. \n 6. **Solicitar** un hisopado de la zona en limpio. \n **-** En caso de LLUVIA -> Después de 4 HORAS \n **-** En caso de otro -> INMEDIATAMENTE después de la limpieza \n 7. **Levantar** el aviso/anormalidad a Mantenimiento cuando el origen corresponda a instalaciones o servicios y realizar las acciones necesarias para eliminar la fuente. \n 8. **Documentar** evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 9. **Lanzar** NCMGT \n --------------------------------------------- \n **Referencias:** **STRD-01992** Mars Wrigley Cleaning and Sanitation Standard | **PR-28758** Procedimiento General de Limpieza y Desinfección",
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
    question: "¿Dónde identificaste el derrame o la contaminación química?",
    options: [
      {
        label: "Contacto Directo/ Zona 1/ Zona 2",
        next: "TOTRespuestaQuimico1"
      },
      {
        label: "Zona 3/ Zona 4",
        next: "TOTRespuestaQuimico2"
      }
    ]
  },
  TOTRespuestaQuimico1: {
    response: "**¡PARO DE LINEA!**\n **Debes hacer lo siguiente:** \n  1. **Detener** la línea inmediatamente.\n  2. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager.\n  3. **Segregar** El Producto De Acuerdo Con El Last Good Check (último control conforme) \n  4. **Delimitar y restringir** el área afectada para evitar que personas, equipo o materiales propaguen el químico hacia otras zonas. \n 5. **Identificar** el químico o alérgeno y determinar el alcance del evento, considerando como mínimo: \n **-** Químico o alérgeno involucrado \n **-** Origen del derrame \n **-** Área y equipos afectados \n **-** Producto, ingrediente o empaque potencialmente involucrado \n **-** Superficies que pudieron tener contacto \n 6. **Limpiar** la zona afectada \n  7. **Desechar** inmediatamente los materiales y utensilios de limpieza utilizados en el derrame. \n 8. **Solicitar** un hisopado de zona en limpio con el KIT correspondiente al alérgeno. \n 9. **Levantar** el aviso/Anormalidad a Mantenimiento cuando el origen corresponda a instalaciones o servicios y realizar las acciones necesarias para eliminar la fuente. \n 10. **Documentar** evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 11. **Lanzar** NCMGT \n 12. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety \n 13. **Esperar** señal de arranque por RA equipo HACCP.\n 14. **Asegurar** que las superficies/Equipos estén secos antes del arranque. \n -------------------------------------------\n **Referencias:** **PR-28763** Procedimiento Control de Químicos | **PR-42219** Procedimiento para derrame de Alérgenos | **PR-28759** Procedimiento de Manejo de Alérgenos TOT | **QM-03782** Manual de Buenas Prácticas de Manufactura",
    image: "paro-linea.webp",
    final: true
  },
  TOTRespuestaQuimico2: {
    response: "**Debes hacer lo siguiente:** \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 2. **Investigar y delimitar el área: **Identifica el origen y segrega el área de tránsito para prevenir la dispersión o transferencia del químico mediante personas, patines, materiales. \n 3. **Limpiar** la zona afectada utilizando materiales y equipo adecuados y respetando el código de colores establecido para los utencilios de limpieza: \n - **Para alérgenos**: Realizar la limpieza utilizando los utensilios con el código de colores asignado en conjunto con los traje Tyvek amarillos. **Nota:** Todos los materiales de limpieza desechables utilizados deben segregarse y desecharse inmediatamente. \n - **Para químicos**: Realizar la limpieza utilizando materiales absorbentes inertes. \n **Nota 1:** Queda estrictamente prohibido usar agua a alta presion o mangueras de aire comprimido, ya que esto aerosoliza y dispersa las partículas químicas o alegrénicas hacia la Zona 1. \n **Nota 2:** Si el derrame es un químico que ha caducado o es peligroso, el área de HSE debe encargarse de su traslado seguro al almacén de residuos peligrosos, destinar su disposición final de acuerdo con su naturaleza química.\n \n 4. **Desechar** inmediatamente los materiales y utensilios de limpieza utilizados en el derrame. \n 5. **Levantar** el aviso/anormalidad a Mantenimiento cuando el origen corresponda a instalaciones o servicios y realizar las acciones necesarias para eliminar la fuente. \n 6. **Documentar** evento en 'reporte de turno' y llenar el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 7. **Lanzar** NCMGT. \n ----------------------------------- \n **Referencias:** **PR-42219** Procedimiento para derrame de Alérgenos | **PR-28759** Procedimiento De Manejo de Alérgenos TOT | **QM-03782** Manual de Buenas Prácticas de Manufactura",
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
        next: "TOTRespuestaQFSIncidente1"
      },
      {
        label: "Error en la mezcla de producto/ pasta o  ingredientes equivocados",
        next: "TOTRespuestaQFSIncidente2"
      },
      {
        label: "Parámetro crítico fuera de límite",
        next: "TOTRespuestaQFSIncidente3"
      }
    ]
  },
  TOTRespuestaQFSIncidente1: {
    response: "**Haz lo siguiente** \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 2. **Segregar** el Producto De Acuerdo Con el Last Good Check (último control conforme). \n 3. **Realizar** la evaluación mediante el Panel de Conformidad, comprobando la muestra contra el estándar vigente y utilizando la escala Degree of Difference (DoD) de 7 puntos.\n 4. **Mantener** el producto bajo control hasta contar con el dictamen/disposición \n 5. **Documentar** el hallazgo conforme al proceso aplicable. \n 6. **Lanzar** NCMGT \n 7. **Esperar** señal de arranque por calidad. \n -------------------------------------\n **Referencia:** **PR-28743** PROCEDIMIENTO CONTROL DE PRODUCTO NO CONFORME V12.",
    final: true
  },
  TOTRespuestaQFSIncidente2: {
    response: "1. **Notifica** del evento a tu supervisor/QVS/Q&FS Manager \n 2. **Segregar** el Producto De Acuerdo Con El Last Good Check (último control conforme). \n 3. **Realizar** la trazabilidad e investigación, considerando el producto/material involucrado y su punto de utilización. \n **Documentos de trazabilidad:** \n **->** Reporte de turno \n **->** Reporte de turno \n **->** Transferencias/consumos de pastas \n **->** Registros de entrega y consumo de materias primas/ingredientes \n **->** Lotes y cantidades utilizadas \n **->** Órdenes y registros de producción \n **->** Registros de producto semiterminado/reproceso involucrado \n **->** Identificación de lote, fecha y hora/punto de uso \n 4. **Mantener** el producto bajo control hasta contar con el dictamen/disposición correspondiente. \n 5. **Documentar** el hallazgo conforme al proceso aplicable. \n 6. **Lanzar** NCMGT. \n 7. **Esperar** señal de arranque por calidad \n ------------------------------ \n **Referencia:** **PR-28743** PROCEDIMIENTO CONTROL DE PRODUCTO NO CONFORME V12",
    final: true
  },
  TOTRespuestaQFSIncidente3: {
    response: "**Haz lo siguiente** \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 2. **Segregar** el Producto De Acuerdo Con el Last Good Check (último control conforme). \n 3. **Revisar** el producto afectado con base en el último registro dentro de especificación del proceso. \n 4. **Mantener** el producto bajo control hasta contar con el dictamen/disposición correspondiente \n 5. **Documentar** el hallazgo conforme al proceso aplicable. \n 6. **Lanzar** NCMGT \n 7. **Esperar** señal de arranque por calidad. \n -------------------------------------\n **Referencia:** **PR-28743** PROCEDIMIENTO CONTROL DE PRODUCTO NO CONFORME V12.",
    final: true
  }


  //====================================================
  //             PREGUNTAS INCIDENTES Q&FS TE
  //====================================================
  };
