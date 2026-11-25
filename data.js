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
        next: "SCAMetal1"
      },
      {
        label: "Plástico (Suave/Duro) / Vidrio / Madera",
        next: "lineaPlasticoSCA"
      },
      {
        label: "Otros cuerpos extraños (cabello/plagas/pelusa/sangre)",
        next: ""
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
    id: "Pregunta3",
    question: "¿El objeto metálico encontrado es superior a 7mm?",
    options: [
      {
        label: "Si",
        next: "SCAMetalRespuesta1"
      },
      {
        label: "No",
        next: "SCAMetal2"
      }
    ]
  },
  SCAMetal2: {
    id: "Pregunta4",
    question: "¿Dónde fue encontrado el objeto metálico?",
    options: [
      {
        label: "En producto/CCP (Ej. Magneto/Filtro)",
        next: "SCAMetal6"
      },
      {
        label: "En algún ingrediente o material de empaque.",
        next: "SCAMetalRespuesta11"
      },
      {
        label: "En OPRP",
        next: "SCAMetal31"
      },
      {
        label: "En No OPRP (Ej. Mallas Flitros)",
        next: "SCAMetalRespuesta10"
      }
    ]
  },
  SCAMetal31:{
    id: "Pregunta5",
    question: "¿El objeto metálico encontrado es mayor a 6 mm y es duro o su condición es afilada/puntiaguda?",
    options: [
      {
        label: "Si",
        next: "SCAMetalRespuesta2"
      },
      {
        label: "No",
        next: "SCAMetalRespuesta9"
      }
    ]
  },
  SCAMetal6: {
    id: "Pregunta6",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "SCAMetalRespuesta3"
      },
      {
        label: "No",
        next: "SCAMetal7"
      }
    ]
  },
  SCAMetal7:{
    id: "Pregunta7",
    question: "¿Es el segundo rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "SCAMetalRespuesta4"
      },
      {
        label: "No",
        next: "SCAMetal8"
      }
    ]
  },
  SCAMetal8:{
    id: "Pregunta8",
    question: "¿Este es el tercer rechazo de metal confirmado?",
    options:[
      {
        label: "Si",
        next: "SCAMetalRespuesta5"
      },
      {
        label: "No",
        next: "SCAMetal9"
      }
    ]
  },
  SCAMetal9:{
    id: "Pregunta9",
    question: "¿Es el cuarto rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "SCAMetalRespuesta12",
      },
      {
        label: "No",
        next: "SCAMetal10"
      }
    ]
  },
  SCAMetal10:{
    id: "Pregunta10",
    question: "¿Es el quinto rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "SCAMetalRespuesta13"
      }
    ]
  },
  SCAMetalRespuesta1:{
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n \n 1. **Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/calidad REF-38187 Árbol de decisiones para manejo de incidentes de metal detectados por Detectores de metal.\n 3. **Segregar** el Producto de Acuerdo Con El Last Good Check (último control conforme). \n 4. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza.\n **- Proporcionar** la pieza que se confirme contaminada para investigación. \n **- Colocar** la evidencia en el **FORM-20599 Registro Spicy-Goma de detector de metales** \n **- Registrar** en el **FORM-20599 Registro Spicy-Goma de detector de metales** \n 5. **Caracterizar** las partículas con fines de investigación. \n 6. **Detonar** investigación para definir fuente y causa potencial. (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 7. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 8. **Documentar** evento en 'reporte de turno' \n 9. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 10. **Lanzar** NCMGT QVS/Q&FS. \n 11. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 12. **Esperar** señal de arranque y dictamen del producto (Liberación, reproceso o destrucción) por el equipo HACCP. \n ---------------------------------- \n **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Pnazón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
    image: "paro-linea.webp",
    final:true
  },
  SCAMetalRespuesta2:{
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n 1. **Detener** el proceso \n 2. **Escalar** con el VSL responsable y Calidad. \n 3. **Realizar** la investigación. \n 4. **Corregir** las oportunidades detectadas durante la investigación. \n 5. **Detonar** una NCMGT/PRIMP según aplique el procedimiento PR-26024 PRIMP y el procedimiento PR-32998 No Conformidades. Documentar las acciones en el FORM-20683 Registro de contaminación en proceso. \n---------------------------------- \n **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Pnazón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard  ",
    image: "paro-linea.webp",
    final:true
  },
  SCAMetalRespuesta3:{
    response: "**Ejecutar** lo siguiente: \n 1. **Mantener detenido el flujo hacia el Detector de Metales** durante las acciones correspondientes. \n 2. **Segregar y mermar comletamente el producto rechazado** \n 3. **Recuperar la materia extraña cuando sea posible y caracterizarla** con fines de investigación \n 4. **Registrar el hallazgo en el sistema de conformidad de monitoreo del PCC o PPRO aplicable**. \n 5. **Iniciar la investigación para identificar la fuente y causa potencial de la contaminación** \n 6. **Revisar las fuentes potenciales de metal en el proceso**, incluyendo equipos, desgaste y puntos de roce metal-metal. \n 7. **Revisar los controles de riesgos físicos relacionados del proceso**, de acuerdo con el análisis HACCP y la línea correspondiente. \n 8. **Documentar el rechazo confirmado y la investigación** en los registros aplicables. \n 9. **Seguir el árbol de Decisiones para Manejo de Incidentes de Metal vigente en SCA** PR-19116 V21. \n 10. **Iniciar/documentar NCMGT y/o PRIMP según corresponda**. \n 11. **Realizar el análisis de riesgo requerido por el proceso de gestión del incidente cuando corresponda**, con participación de Q&FS/HACCP conforme al procedimiento aplicable. \n 12. **Definir la disposición del producto potencialmente afectado** mediante el proceso correspondiente de Calidad/Q&FS. \n 13. **No reincorporar a producción el producto rechazado por el detector**. Aunque vuelva a pasarse por el Detector de Metales para investigación, su disposición final es merma. \n 14. **Reiniciar la línea únicamente después de completar las acciones requeridas y contar con la autorización/disposición aplicable.** \n --------------------------------- \n RECUERDA \n Cuando se presentan 5 eventos confirmados de metal en 1 hora o menos debes detener la línea y seguir el proceso de escalamiento. \n --------------------------------- \n **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Pnazón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
    final:true
  },
  SCAMetalRespuesta4:{
    response: "**Ejecutar** lo siguiente: \n 1. **Mantener el producto rechazado segregado.** \n 2. **Clasificaro como rechazo no confirmado** cuando, después de la inspección, no se detecte materia extraña. \n 3. **Mermar completamente el producto rechazado.** Un rechazo no confirmado **no vuelve a producción.** \n 4. **Registrar el evento en el sistema de conformidad del PCC a la hora de ocurrencia** \n 5. **Mantener el seguimiento del número de rechazos no confirmados durante el turno.** \n 6. El límite establecido por SCA es **5 rechazos no confirmados en un turno de 12 horas**. Al completar este límite, se debe ejecutar el procedimiento de **falla del equipo**. \n -----------------------------------------\n RECUERDA \n Cuando se presentan 5 eventos confirmados de metal en 1 hora o menos debes detener la línea y seguir el proceso de escalamiento. \n ------------------------------------ \n **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Pnazón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard.",
    final:true
  },
  SCAMetalRespuesta5:{
    response: "**Mantener el producto rechazado segregado** \n 1. **Clasificarlo como rechazo no confirmado** cuando, después de la inspección, no se detecte materia extraña. \n 2. **Mermar completamente el producto rechazado.** Un rechazo no confirmado **no vuelve a producción.** \n 3. **Registrar el evento en el sistema de conformidad del PCC a la hora de ocurrencia.** \n 4. **Mantener el seguimiento del número de rechazos no confirmados durante el turno.** \n 5. El límite establecido por SCA es **5 rechazos no confirmados en un turno de 12 horas.** Al completar este límite, se debe ejecutar el procedimiento de **falla del equipo**. \n --------------------------------- \n **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Pnazón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
    final:true
  },
  SCAMetalRespuesta9:{
    response: " **Ejecutar** lo siguiente: \n 1. **Detener** el proceso \n 2. **Escalar** con el VSL responsable, Calidad y Mantenimiento. \n 3. **Realizar** el cambio de equipo y/o reparación del mismo \n 4. **Detener** desde el último monitoreo OK \n 5. **Detonar** una NCMGT/PRIMP segun aplique de acuerdo al procedimiento PR-26024 PRIMP \n ---------------------------------- \n **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Pnazón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  SCAMetalRespuesta10:{
    response: " **Ejecutar** lo siguiente: \n 1. **Detener** el proceso \n 2. **Escalar** con el VSL responsable, Calidad y Mantenimiento \n 3. **Realizar** el cambio de equipo y/o reparación del mismo \n 4. **Detener** desde el último monitoreo OK \n 5. **Detonar** una NCMGT/PRIMP segun aplique de acuerdo al procedimiento PR-26024 PRIMP \n ---------------------------------- \n **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Pnazón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  SCAMetalRespuesta11:{
    response: "**Ejecutar** lo siguiente: \n 1. **Notificar inmediatamente** el hallazgo al VSL y a Calidad. \n 2. **Identificar y mantener bajo control el material/ingrediente involucrado mientras se evalúa el hallazgo.** \n 3. **Caracterizar la materia extraña** con fines de investigación. \n 4. **Conservar la evidencia del hallazgo** asociada con el incidente y la investigación \n 5. **Idetnificar el ingrediente/material de empaque, lote u orden involucrada.** \n 6. **Evaluar el hallazgo con Calidad/Q&FS** para determinar el control y disposición correspondiente del material y producto potencialmente relacionado. \n 7. **Determinar la posible fuente de contaminación**. \n 8. **Documentar evento y la investigación** en los registros aplicables \n 9. **Inicirar NCMGT y/o PRIMP de acuerdo con la evaluación del evento.** \n 10. **Definir la disposición del material y producto potencialmente afectado con Calidad/Q&FS.** \n 11. Cuando corresponda por la evaluación del material, **ejecutar el proceso de rechazo/no conformidad vigente para materias primas o material de empaque** \n 12. **Reiniciar o continuar el proceso conforme a la disposición documentada de Calidad/Q&FS.** \n ---------------------------------- \n **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Pnazón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  SCAMetalRespuesta12:{
    response: "**Mantener el producto rechazado segregado.** \n 1. **Clasificarlo como rechazo no confirmado** cuando, después de la inspección, no se detecte materia extraña. \n 2. **Mermar completamente el producto rechazado.** Un rechazo no confirmado **no vuelve a producción.** \n 3. **Registrar el evento en el sistema de conformidad del PCC a la hora de ocurencia.** \n 4. **Mantener el seguimiento del número de rechazos no confirmados durante el turno.** \n 5. El límite establecido por SCA es **5 rechazos no confirmados en un turno de 12 horas.** Al completar este límite, se debe ejecutar el procdimiento de **falla del equipo**. \n -------------------------------- \n \n RECUERDA \n Cuando se presentan 5 eventos confirmados de metal en 1 hora o menos debes detener la línea y seguir el proceso de escalamiento \n \n --------------------------------------\n  **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev 10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Panzón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  SCAMetalRespuesta13:{
    response: "**PARO DE LÍNEA DE PRODUCCIÓN** \n **Haz lo siguiente** \n 1. **Detener e identificar el producto desde el último monitoreo correcto** \n 2. **Escalar al Operador especializado, VSL, Calidad y Mantenimiento para los ajustes del equipo.** \n 3. **Generar y registrar el número de aviso en el registro del PCC.** \n 4. **Documentar mediante NCMGT el producto detenido.** \n 5. **Realizar los ajustes necesarios al Detector de Metales** por Mantenimiento. \n 6. **Validar el Detector de Metales para confirmar su correcto funcionamiento.** \n 7. **Arrancar la línea únicamente después de confirmar el correcto funcionamiento del equipo por Mantenimiento y Calidad.** \n ------------------------------------ \n **RECUERDA** \n **Desde el primer evento de metal rechazado por un PCC se debe parar el flujo e iniciar la identificación/investigación de la fuente.** \n El producto rechazado debe mantenerse segregado y analizarse imediatamente para determinar si corresponde a un **rechazo confirmado o no confirmado.** \n El producto rechazado por el Detector de Metales debe ser mermado. \n  **Para rechzaos confirmados:** seguir el Árbol de Decisiones para Manejo de Incidentes de Metal vigente de SCA [PR-19116 V21] \n **Para rechazos no confirmados:** el límite establecido es **5 rechazos no confirmados en un turno de 12 horas**. Al alcanzar ese límite, se debe aplicar el procedimiento de falla del equipo. \n ----------------------------------------\n **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Pnazón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
    image: "paro-linea.webp",
    final: true
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
        next: "TOTMetal4"
      },
      {
        label: "En algún ingrediente o material de empaque.",
        next: "TOTMetalRespuesta8"
      },
      {
        label: "En OPRP",
        next: "TOTMetal3"
      },
      {
        label: "En No OPRP (Ej. Mallas Flitros)",
        next: "TOTMetalRespuesta7"
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
        next: "TOTMetalRespuesta6"
      }
    ]
  },
  TOTMetal4: {
    id: "Pregunta6",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "TOTMetalRespuesta3"
      },
      {
        label: "No",
        next: "TOTMetal5"
      }
    ]
  },
  TOTMetal5:{
    id: "Pregunta7",
    question: "¿Es el segundo rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "TOTMetalRespuesta4"
      },
      {
        label: "No",
        next: "TOTMetal6"
      }
    ]
  },
  TOTMetal6:{
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
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n 1. **Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/calidad \n 3. **Segregar** el producto de acuerdo con el last good cehck (útlimo control conforme). \n 4. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza. \n 5. **Fundir** la pieza que se confirme contaminada para investigación. \n 6. **Colocar** la evidencia en el FORM-38268 Monitoreo de Detectores de Metal (CCP). \n 7. **Registrar** en el FORM-38268 Formato de registro de hallazgos de detector de metales. \n 8. **Caracterizar** las partículas con fines de investigación. \n 9. **Detonar** investigación para definir fuente y causa potencial. (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 10. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 11. **Documentar** evento en 'reporte de turno'. \n 12. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 13. **Lanzar** NCMGT QVS/Q&FS. \n 14. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 15. **Esperar** señal de arranque y dictamen del producto (liberación, reproceso o destrucción) por el equipo HACCP. \n ---------------------------------- \n **REFERENCIAS:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38293** Plan HACCP CCP's | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    image: "paro-linea.webp",
    final:true
  },
  TOTMetalRespuesta6:{
    response: " **Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager. \n 2. **Continuar** con producción con monitoreo especial por las siguientes 24 horas. \n 3. **Caracterizar** las partículas con fines de investigación. \n 4. **Colocar** la evidencia en el FORM-38267 Monitoreo de Mallas y Filtros. \n 5. **Revisar** el reporte de turno para detectar algún mantenimiento previo donde se pudo generar roce metal con metal. \n 6. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 7. **Lanzar** NCMGT LOW QVS/Q&FS \n -------------------------------------\n **Referencia:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38295** PLAN HACCP OPRPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  TOTMetalRespuesta7:{
    response: " **Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/calidad \n 2. **Continuar** con producción con monitoreo especial por las siguientes 24 horas. \n 3. **Caracterizar** las partículas con fines de investiación. \n 4. **Colocar** la evidencia en el FORM-56611 Monitoreo de Filtros y Tamices \n 5. **Revisar** el reporte de turno para detectar algún incidente. \n 6. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 7. **Lanzar** NCMGT LOW QVS/Q&FS. \n -------------------------------------- \n **Referencia:** **FORM-38295** PLAN HACCP OPRPs y NO OPRPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  TOTMetalRespuesta8:{
    response: "**Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Local Team/ Q&FS Manager. \n 2. **Continuar** con producción con monitoreo especial por las siguientes 24 horas. \n 3. **Caracterizar** las partículas con fines de investigación. \n 4. **Colocar** la evidencia en el FORM-56871 Información para el levantamiento de incidentes en NCMGT \n - **Revisar** el porcentaje de defectivo de la orden surtida:\n **-**En caso de que sea mayor o igual a 2%: \n **->** Registrar en la base FORM-41789 REPORTE DE RECHAZOS.\n **->** Generar la etiqueta de Rechazo \n **->** Entregar el rechazo al DATA con el sello y firma para que lo entregue al material tester y lo ingrese a almacén. \n **->** Entregar el rechazo a almacén. \n 5. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 6. **Lanzar** NCMGT LOW QVS/Q&FS. \n ----------------------------------------- \n **Referencias:** **PR-28743** Procedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final: true
  },

  //====================================================
  //                PREGUNTAS METAL MTM
  //====================================================
 MTMMetal1: {
    id: "Pregunta3",
    question: "¿El objeto metálico encontrado es mayor o igual a 2mm y/o menor o igual a 44.5mm?",
    options: [
      {
        label: "Si",
        next: "MTMMetalRespuesta1"
      },
      {
        label: "No",
        next: "MTMMetal2"
      }
    ]
  },
  MTMMetal2: {
    id: "Pregunta4",
    question: "¿Dónde fue encontrado el objeto metálico?",
    options: [
      {
        label: "En producto/CCP (Ej. Magneto/Filtro)",
        next: "MTMMetal6"
      },
      {
        label: "En algún ingrediente o material de empaque.",
        next: "MTMMetalRespuesta11"
      },
      {
        label: "En OPRP",
        next: "MTMMetal31"
      },
      {
        label: "En No OPRP (Ej. Mallas Flitros)",
        next: "MTMMetalRespuesta10"
      }
    ]
  },
  MTMMetal3:{
    id: "Pregunta5",
    question: "¿El objeto metálico encontrado es superior a 6 mm?",
    options: [
      {
        label: "Si",
        next: "MTMMetalRespuesta2"
      },
      {
        label: "No",
        next: "MTMMetal5"
      }
    ]
  },
  MTMMetal31:{
    id: "Pregunta5",
    question: "¿El objeto metálico encontrado es superior a 6 mm?",
    options: [
      {
        label: "Si",
        next: "MTMMetalRespuesta2"
      },
      {
        label: "No",
        next: "MTMMetalRespuesta9"
      }
    ]
  },
  MTMMetal5: {
    id: "Pregunta6",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "MTMMetalRespuesta3"
      },
      {
        label: "No",
        next: "MTMMetal71"
      }
    ]
  },
  MTMMetal51: {
    id: "Pregunta6",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "MTMMetalRespuesta6"
      },
      {
        label: "No",
        next: "MTMMetal71"
      }
    ]
  },
  MTMMetal6: {
    id: "Pregunta6",
    question: "¿Este es el primer rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "MTMMetalRespuesta3"
      },
      {
        label: "No",
        next: "MTMMetal7"
      }
    ]
  },
  MTMMetal4: {
    response: "**Puedes continuar con la producción normal bajo monitoreo. Ejecutar lo siguiente:** \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager \n 2. **Continuar** con producción normal. \n 3. **Revisar** el porcentaje de defectivo de la orden surtida. \n **En caso de que sea mayor o igual al 2%:** \n - Registrar en la base FORM-41789 REPORTE DE RECHAZOS \n - Generar la etiqueta de Rechazo \n - Entrega el rechazo al Material Tester con el sello para ingreso a almacén y su firma \n - Entregar el rechazo a almacén. \n \n 4. **Caracterizar** las partículas con fines de investigación. \n 5. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 6. **Lanzar** NCMGT LOW QVS/Q&FS \n 7. **Reiniciar** con monitoreo especial por las siguientes 12 horas. \n \n **Referencia:** **PR-28743** Porcedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **MTM PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs site MTM)",
    final: true
  },
  MTMMetal7:{
    id: "Pregunta7",
    question: "¿Es el segundo rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "MTMMetalRespuesta4"
      },
      {
        label: "No",
        next: "MTMMetal8"
      }
    ]
  },
  MTMMetal71:{
    id: "Pregunta7",
    question: "¿Es el segundo rechazo confirmado?",
    options: [
      {
        label: "Si",
        next: "MTMMetalRespuesta7"
      },
      {
        label: "No",
        next: "MTMMetal81"
      }
    ]
  },
  MTMMetal8:{
    id: "Pregunta8",
    question: "¿Este es el tercer rechazo de metal confirmado en una hora o menos?",
    options:[
      {
        label: "Si",
        next: "MTMMetalRespuesta5"
      },
      {
        label: "No",
        next: "MTMMetalRespuesta12"
      }
    ]
  },
  MTMMetal81:{
    id: "Pregunta8",
    question: "¿Este es el tercer rechazo de metal confirmado en una hora o menos?",
    options:[
      {
        label: "Si",
        next: "MTMMetalRespuesta8"
      },
      {
        label: "No",
        next: "MTMMetalRespuesta7"
      }
    ]
  },
  MTMMetalRespuesta1:{
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n \n 1. **Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/calidad.\n **- Retener y Segregar** el Producto de Acuerdo Con El Last Good Check (último control conforme). \n  **- Revisar** el producto rechazado pieza por pieza y sin flujo de producción. \n **- Secciona** la pieza que se confirme contaminada para investigación hasta encontrar la particula. \n **- Colocar** la evidencia en el FORM-58004 FORMATO PARA REGISTRO DE EVIDENCIA PRP-OPRP BARRAS localizar y extraer la partícula. \n **- Registrar** en el FORM-27693 Monitoreo de Detector de Metales \n 3. **Caracterizar** las aprtículas con fines de investigación. \n 4. **Detonar** investigación para definir fuente y causa potencial. (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 5. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n **- Documentar** evento en 'reporte de turno' \n 6. **Lanzar** NCMGT QVS/Q&FS. \n **- Llenar** el análisis de riesgos (FORM-50002) con el equipo de Food Safety. \n **- Esperar** señal de arranque y dictamen del producto (Liberación, reproceso o destrucción) por el equipo de Calidad. \n ---------------------------------- \n **REFERENCIAS:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38293** Plan HACCP CCPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    image: "paro-linea.webp",
    final:true
  },
  MTMMetalRespuesta2:{
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n 1. **Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/calidad. \n 3. **Caracterizar** las partículas con fines de investigación. \n 4. **Colocar** la evidencia en el FORM-38267 Monitoreo de Mallas y Filtros. \n 5. **Detonar** investigación para definir fuente y causa potencial. (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 6. **Documentar** evento en 'reporte de turno' \n 7.  **Llenar** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 8. **Lanzar** NCMGT QVS/Q&FS. \n 9. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 10. **Esperar** señal de arranque y dictamen (liberación, reproceso o destrucción) por el equipo HACCP. \n ---------------------------------- \n **REFERENCIAS:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38295** PLAN HACCP OPRPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    image: "paro-linea.webp",
    final:true
  },
  MTMMetalRespuesta3:{
    response: "**Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/calidad. \n 2. **Segregar** el producto de acuerdo con el last good check (último control conforme). \n 3. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza. \n 4. **Continuar** con monitoreo especial. \n 5. **Fundir** la pieza que se confirme contaminada para investigación. \n 6. **Colocar** la evidencia en el FORM-38268 Monitoreo de Detectores de Metal (CCP). \n 7. **Registrar** en el FORM-38268 Formato de registro de hallazgos de detector de metales. \n 8. **Caracterizar** las partículas con fines de investigación. \n 9. **Detonar** investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) \n 10. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 11. **Documentar** evento en 'reporte de turno' \n 12. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es duro y/o afilada. \n 13. **Lanzar** NCMGT QVS/Q&FS. \n 14. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety \n **Esperar** señal de arranque y dictamen (liberación, reproceso o destrucción) por el equipo HACCP. \n -------------------------------\n **RECUERDA** \n  - Cuando se presentan 3 eventos confirmados de metal en 1 hora o menos debes detener la línea y seguir el proceso de escalamiento. \n --------------------------------------\n **Referencias:** **PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38293** Plan HACCP CCPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final:true
  },
  MTMMetalRespuesta4:{
    response: "**Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/calidad \n 2. **Segregar** el producto de acuerdo con el last good check (último control conforme).\n 3. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza. \n 4. **Continuar** con monitoreo especial. \n 5. **Fundir** la pieza que se confirma contaminada para investigación. \n 6. **Colocar** la evidencia en el FORM-38268 Monitoreo de Detectores de Metal (CCP). \n 7. **Regsitrar** en el FORM-38268 Formato de registro de hallazgos de detector de metales. \n 8. **Caracterizar** las partículas con fines de investigación. \n 9. **Detonar** investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) \n 10. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 11. **Documentar** evento en 'reporte de turno'. \n 12. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 13. **Lanzar** NCMGT QVS/Q&FS. \n 14. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n **Esperar** señal de arranque y dictamen (liberación, reproceso o destrucción) por el equipo de HACCP. \n -------------------------------\n **RECUERDA** \n  - Cuando se presentan 3 eventos confirmados de metal en 1 hora o menos debes detener la línea y seguir el proceso de escalamiento. \n --------------------------------------\n **Referencia:** **PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38293** Plan HACCP CCP's | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final:true
  },
  MTMMetalRespuesta5:{
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n 1. **Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/calidad \n 3. **Segregar** el producto de acuerdo con el last good cehck (útlimo control conforme). \n 4. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza. \n 5. **Fundir** la pieza que se confirme contaminada para investigación. \n 6. **Colocar** la evidencia en el FORM-38268 Monitoreo de Detectores de Metal (CCP). \n 7. **Registrar** en el FORM-38268 Formato de registro de hallazgos de detector de metales. \n 8. **Caracterizar** las partículas con fines de investigación. \n 9. **Detonar** investigación para definir fuente y causa potencial. (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 10. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 11. **Documentar** evento en 'reporte de turno'. \n 12. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 13. **Lanzar** NCMGT QVS/Q&FS. \n 14. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 15. **Esperar** señal de arranque y dictamen del producto (liberación, reproceso o destrucción) por el equipo HACCP. \n ---------------------------------- \n **REFERENCIAS:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38293** Plan HACCP CCP's | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    image: "paro-linea.webp",
    final:true
  },
  MTMMetalRespuesta6:{
    response: "Puedes continuar con la producción bajo con monitoreo. Ejecutar lo siguiente: \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 2.**Continuar** con tu producción. \n 3. **Revisar** El porcentaje de defectivo de la orden surtida. \n En caso de que sea mayor o igual a 2%: \n -Registrar en la base FORM-41789 REPORTE DE RECHAZOS \n -Generar la etiqueta de Rechazo \n -Entrega el rechazo al Material Tester con el sello para ingreso a almacén y su firma \n -Entregar el rechazo a almacén. \n 4. **Caracterizar** las partículas con fines de investigación. \n 5. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 6. **Lanzar** NCMGT LOW QVS/Q&FS. \n  7. **Reiniciar** con monitoreo especial por las siguientes 12 horas. \n -------------------------------\n **RECUERDA* \n  - Cuando se presentan 3 eventos confirmados de metal en 3 horas o menos debes detener la línea y seguir el proceso de escalamiento. \n --------------------------------------\n **Referencia:** **PR-28743** Procedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **MTM PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs site MTM, Sec. 5.1)",
    final:true
  },
  MTMMetalRespuesta7:{
    response: "Puedes continuar con la producción bajo con monitoreo. Ejecutar lo siguiente: \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 2.**Continuar** con tu producción. \n 3. **Revisar** El porcentaje de defectivo de la orden surtida. \n En caso de que sea mayor o igual a 2%: \n -Registrar en la base FORM-41789 REPORTE DE RECHAZOS \n -Generar la etiqueta de Rechazo \n -Entrega el rechazo al Material Tester con el sello para ingreso a almacén y su firma \n -Entregar el rechazo a almacén. \n 4. **Caracterizar** las partículas con fines de investigación. \n 5. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 6. **Lanzar** NCMGT LOW QVS/Q&FS. \n  7. **Reiniciar** con monitoreo especial por las siguientes 12 horas. \n -------------------------------\n **RECUERDA* \n  - Cuando se presentan 3 eventos confirmados de metal en 3 horas o menos debes detener la línea y seguir el proceso de escalamiento. \n --------------------------------------\n **Referencia:** **PR-28743** Procedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **MTM PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs site MTM, Sec. 5.1)",
    final:true
  },
  MTMMetalRespuesta8:{
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n Se ha detectado un peligro físico **crítico**. Ejecuta las siguientes acciones de inmediato: \n 1. **Detener** la línea inmediatamente. \n 2. **Segregar** el Producto de Acuerdo Con El Last Good Check (último control conforme).\n 3. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 4. **Revisar** CCPs, OPRP filtros, mallas, magnetos. \n 5. **Revisar** el porcentaje de defectivo de la orden surtida: \n En caso de que sea mayor o igual a 2%: \n -Registrar en la base FORM-41789 REPORTE DE RECHAZOS \n -Generar la etiqueta de Rechazo \n -Entrega el rechazo al Material Tester con el sello para ingreso a almacén y su firma. \n -Entregar el rechazo a almacén \n 6. **Caracterizar** las partículas con fines de investigación. \n 7. **Detonar** investigación para definir fuente y causa potencial. (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno). \n 8. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 9. **Lanzar** NCMGT QVS/Q&FS. \n 10. **Llenar** el análisis de riesgos (RISK ASSESMENT FORM-50002) con el equipo de food safety. \n 11. **Esperar** señal de arranque por RA equipo HACCP. \n ---------------------------------- \n **REFERENCIAS:** **PR-28743** Procedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **PR-28769** (Monitoreo, Verificación y Validación de CCPs y OPRPs site MTM, Sec 5.1)",
    image: "paro-linea.webp",
    final:true
  },
  MTMMetalRespuesta9:{
    response: " **Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager. \n 2. **Continuar** con producción con monitoreo especial por las siguientes 24 horas. \n 3. **Caracterizar** las partículas con fines de investigación. \n 4. **Colocar** la evidencia en el FORM-38267 Monitoreo de Mallas y Filtros. \n 5. **Revisar** el reporte de turno para detectar algún mantenimiento previo donde se pudo generar roce metal con metal. \n 6. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 7. **Lanzar** NCMGT LOW QVS/Q&FS \n -------------------------------------\n **Referencia:** **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38295** PLAN HACCP OPRPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  MTMMetalRespuesta10:{
    response: " **Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/calidad \n 2. **Continuar** con producción con monitoreo especial por las siguientes 24 horas. \n 3. **Caracterizar** las partículas con fines de investiación. \n 4. **Colocar** la evidencia en el FORM-56611 Monitoreo de Filtros y Tamices \n 5. **Revisar** el reporte de turno para detectar algún incidente. \n 6. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 7. **Lanzar** NCMGT LOW QVS/Q&FS. \n -------------------------------------- \n **Referencia:** **FORM-38295** PLAN HACCP OPRPs y NO OPRPs | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  MTMMetalRespuesta11:{
    response: "**Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/QVS/Q&FS Local Team/ Q&FS Manager. \n 2. **Continuar** con producción con monitoreo especial por las siguientes 24 horas. \n 3. **Caracterizar** las partículas con fines de investigación. \n 4. **Colocar** la evidencia en el FORM-56871 Información para el levantamiento de incidentes en NCMGT \n - **Revisar** el porcentaje de defectivo de la orden surtida:\n **-**En caso de que sea mayor o igual a 2%: \n **->** Registrar en la base FORM-41789 REPORTE DE RECHAZOS.\n **->** Generar la etiqueta de Rechazo \n **->** Entregar el rechazo al DATA con el sello y firma para que lo entregue al material tester y lo ingrese a almacén. \n **->** Entregar el rechazo a almacén. \n 5. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT'. \n 6. **Lanzar** NCMGT LOW QVS/Q&FS. \n ----------------------------------------- \n **Referencias:** **PR-28743** Procedimiento sobre liberación producto (positive release) y control de producto no conforme (hold & release) | **REF-05557** HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  MTMMetalRespuesta12:{
    response: "**Ejecutar** lo siguiente: \n 1. **Notificar** del evento a tu supervisor/calidad \n 2. **Segregar** el producto de acuerdo con el last good check (último control conforme). \n 3. **Pasar** el producto rechazado por el mismo detector SIN flujo de producción pieza por pieza. \n 4. **Continuar** con monitoreo especial. \n 5. **Fundir** la pieza que se confirme contaminada para investigación. \n 6. **Colocar** la evidencia en el FORM-38268 Monitoreo de Detectores de Metal (CCP). \n 7. **Registrar** en el FORM-38268 Formato de registro de hallazgos de detector de metales. \n 8. **Caracterizar** las partículas con fines de investigación. \n 9. **Detonar** investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) \n 10. **Revisar** CCPs, OPRP filtros, mallas, magnetos para determinar fuente de la partícula. \n 11. **Documentar** evento en 'reporte de tunro' \n 12. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' y especifica si la partícula es dura y/o afilada. \n 13. **Lanzar** NCMGT QVS/Q&FS \n 14. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 15. **Esperar** señal de arranque y dictamen (liberación, reproceso o destrucción) por el equipo HACCP. \n ------------------------------------ \n RECUERDA \n Cuando se presentan 3 eventos confirmados de metal en 1 hora o menos debes detener la línea y seguir el proceso de escalamiento \n -------------------------------------- \n **Referencias:** \n **PR-28769** Monitoreo, Verificación y Validación de CCPs y OPRPs | **FORM-38293** Plan HACCP CCPs | **REF-05557** HACCP-based Food Safey Management Programme Standard.",
    final: true
  },

  //====================================================
  //                PREGUNTAS METAL TE
  //====================================================


  //====================================================
  //                PREGUNTAS VIDRIO/PLASTICO/MADERA SCA
  //====================================================
  SCAPlastico01: {
    id: "Pregunta9",
    question: "¿De qué material es el objeto encontrado?",
    options: [
      {
        label: "Vidrio/cerámica",
        next: "SCAVidrio1"
      },
      {
        label: "Madera",
        next: "SCAMadera1"
      },
      {
        label: "Plástico",
        next: "SCAPlastico1"
      }
    ]
  },
  SCAPlastico1: {
    id: "Pregunta10",
    question: "¿Dónde fue encontrado el objeto plástico?",
    options: [
      {
        label: "En Zona 1/Zona 2",
        next: "SCARespuestaPlastico1"
      },
      {
        label: "En Zona 3/Zona4",
        next: "SCARespuestaPlastico2"
      },
      {
        label: "En herramienta de limpieza/utensilio de producción",
        next: "SCARespuestaPlastico3"
      }
    ]
  },  
  SCAVidrio1: {
    id: "Pregunta9",
    question: "¿Dónde fue encontrado el objeto?",
    options: [
      {
        label: "En Zona 1/Zona 2",
        next: "SCARespuestaVidrio1"
      },
      {
        label: "En Zona 3/Zona4",
        next: "SCARespuestaVidrio2"
      }
    ]
  }, 
  SCAMadera1: {
    id: "Pregunta9",
    question: "¿Dónde fue encontrado el objeto?",
    options: [
      {
        label: "En Zona 1/Zona 2",
        next: "SCARespuestaMadera1"
      },
      {
        label: "En Zona 3/Zona4",
        next: "SCARespuestaMadera2"
      }
    ]
  },
  SCARespuestaVidrio1: {
    response: "**¡PARO DE LINEA!**\n 1. **Detener la línea inmediatamente.** \n  2. **Notificar inmediatamente** el evento al Supervisor de Producción y a **Calidad**. \n  3. **Segregar e identificar el producto potencialmente afectado.** \n 4. **Conservar y recuperar la evidencia de vidrio** para ralizar la investigación. \n 5. **Caracterizar el objeto/material extraño** encontrado con fines de investigación y evaluación de riesgo. \n 6. **Identificar exactamente dónde fue encontrado el vidrio:** \n I. Producto\n II. Tanque/proceso \n III. OPRPR/PPRO, por ejemplo, malla o filtro \n IV. PCC \n 7. **Registrar el hallazgo en el formato correspondiente al dispositivo y línea donde ocurrió el evento.** \n 8. **Si el vidrio fue encontrado en una mallo o filtro, inspeccionar inmediatamente la integridad y condición del dispositivo.** \n 9. **Si se identifica daño de la malla/filtro:** \n I. Avisar al VSL y Quality and Food Safety Technician. \n II. Detener el producto desde la última revisión exitosa. \n III. Levantar reporte de producto no conforme. \n IV. Reparar o reemplazar el dispositivo. \n V. Volver a filtrar el producto desde el último monitoreo exitoso. \n VI. Documentar las acciones correctivas en el registro aplicable. \n 10. **Detonar la investigación para determinar la fuente y causa potencial del vidrio.** \n 11. **Corregir las oportunidades o causas identificadas durante la investigación.** \n 12. **Documentar el evento y las acciones realizadas.** \n 13. **Levantar el registro de contaminación de producto y/o Producto No Confrome que corresponda. FORM-20683 Registro de contaminación de producto** y el **FORM-20737 Reporte de Producto No Conforme.** \n 14. **Iniciar NCMGT y/o PRIMP según corresponda a la evaluación del incidente.** \n 15. **Antes de reiniciar, verificar que las condiciones que originaron el hallazgo hayan sido corregidas** y completar las acciones aplicables al dispositivo/proceso. \n --------------------------------- \n **REFERENCIAS:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev 10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Panzón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
    image: "paro-linea.webp",
    final: true
  },
  SCARespuestaVidrio2: {
    response: "1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager \n 2. **Delimitar** el área del tráfico peatonal para evitar que se dispersen astillas de vidrio a otras líneas \n 3. **Evaluar** la posible afectación al producto. Si existe producto potencialmente afectado, deberá segregarse e identificarse y proceder conforme al proceso de control de producto no conforme aplicable en Santa Catarina. \n 4. **Investigar** la fuente y causa del vidrio, incluyendo la revisión de equipos, instalaciones y elementos quebradizos cercanos. Si corresponde a un elemento inventariado, dar seguimiento en FORM-40610 Inventario de vidrio, plástico duro y cerámica; las desviaciones de equipo/instalaciones requieren seguimiento a reparación o sustitución. \n 5. **Solicitar** la recolección del vidrio y limpieza al proveedor de limpieza. \n 6. **Realizar** inspección y liberación del área por Q&FS, verificando que el área se encuentre en condiciones adecuadas y no represente riesgo para el proceso. \n 7. **Documentar** evento en FORM-40844 'Incidente de rompimiento de vidrio, plástico duro y cerámica' y en 'reporte de turno' \n --------------------------------------------- \n **Referencias: ** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev 10 | **FORM-37754 Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Panzón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
    final: true
  },
  SCARespuestaMadera1: {
    response: "**¡PARO DE LINEA!** \n 1. **Detener** la línea inmediatamente \n 2. **Notificar** del evento a tu supervisor/calidad \n 3. **Segregar** el producto de acuerdo con el last good check (último control conforme). \n 4. **Colocar y registrar** la evidencia en el formato acorde a donde se haya encontrado madera: \n CCP -> FORM-38268 Monitoreo de Detectores de Metal (CCP) \n OPRP -> FORM-38267 Monitoreo de Mallas y Filtros \n PRODUCTO/TANQUES -> Reporte de turno \n 5. **Registrar** en el FORM-38268 Formato de registro de hallazgos \n 6. **Realizar** limpieza del área afectada \n 7. **Detonar** investigación para definir fuente y causa potencial. \n Evaluar alcance de la contaminación: ubicación del hallazgo, condición del material, producto expuesto, equipos involucrados y posibilidad de que existan fragmentos adicionales. \n 8. **Documentar** evento en 'reporte de turno' \n 9. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 10. **Lanzar** NCMGT QVS/Q&FS \n 11. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety. \n 12. **Esperar** señal de arranque y dictamen del producto (liberación, reproceso o destrucción) por el equipo HACCP. \n -------------------------------------\n **Referencias:** **FORM-40844** Incidente de rompimiento de vidrio, plástico duro y cerámica | **FORM-38293** Plan HACCP CCP's | **FORM-8295** PLAN HACCP OPRP's y NO OPRP's | **REF-05557** HACCP-based Food Safety Management Programme Standard | **PR-28761** Procedimiento Manejo de vidrio, plástico quebradizo y cerámica.",
    image: "paro-linea.webp",
    final: true
  },
  SCARespuestaMadera2: {
    response: "1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager \n **Evaluar** la posible afectación al producto. Si existe producto potencialmente afectado, deberá segregarse e identificarse y proceder conform al proceso de control de producto no conforme aplicable en Toluca. \n 3. **Investigar** la fuente y causa de la amdera. Por ejemplo, infraestructura, material, tarima o algún elemento utilizado en el área. El Manual de BPM de Toluca establece que los materiales y productos almacenados sobre tarimas deben utilizar tarimas en buen estado. \n 4. **Retirar** la madera y solicitar la limpieza al proveedor de limpieza",
    final: true
  },
  SCARespuestaPlastico1: {
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n 1. **Detener** la línea inmediatamente** \n 2. **Notificar** del evento a tu supervisor/calidad. \n 3. **Segregar** el producto de acuerdo con el last good check (último control conforme). \n 4.**Colocar y registrar** la evidencia en el formato acorde a donde se haya encontrado plástico: \n CCP -> FORM-38268 Monitoreo de Detectores de Metal (CCP) \n OPRP -> FORM-38267 Monitoreo de Mallas y Filtros \n PRODUCTO/TANQUES -> Reporte de turno \n 5. **Retirar** los fragmentos/material roto y ejecutar la limpieza del área. \n 6. **Detonar** investigación para definir fuente y causa potencial. \n Evaluar el alcance de la contaminación: ubicación del hallazgo, condición del material, producto expuesto, equipos involucrados y posibilidad de que existan fragmentos adicionales. \n 7. **Documentar** evento en el 'FORM-40844 Incidente de rompimiento de vidrio, plástico duro y cerámica' y en 'reporte de turno'. \n 8. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 9 .**Lanzar** NCMGT QVS/Q&FS \n 10. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety \n 11. **Esperar** señal de arranque y dictamen del producto (liberación, reproceso o destrucción) por el equipo HACCP. \n -------------------------------------------- \n **Referencias: ** **FORM-40884** Incidente de rompimiento de vidrio, plástico duro y cerámica | **FORM-38293** Plan HACCP CCP's | **FORM-38295** PLAN HACCP OPRP's y NO OPRP's | **REF-05557** HACCP-based Food Safety Management Programme Standard | **PR-28761** Procedimiento Manejo de vidrio, plástico quebradizo y cerámica",
    image: "paro-linea.webp",
    final: true
  },
  SCARespuestaPlastico2: {
    response: "1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager \n 2. **Evaluar** la ubicación, fuente y condición del plástico, particularmente si puede representar reisgo de contaminación para producto, materias primas, amteriales o equipos. \n 3. **Investigar** la fuente y causa del plástico. Por ejemplo, infraestructura, amterial, herramienta o algún elemento utilizado en el área. \n 4. **Retirar** el plástico y solicitar la limpieza al proveedor de limpieza. \n 5. **Corregir** la fuente del hallazg. Si corresponde a equipo/instalación, el procedimiento contempla reemplazo y/o seguimiento mediante anormalidad en SAP y seguimiento en el inventario de vidrio/plástico quebradizo cuando aplique. \n 6. **Documentar** el evento en el **FORM-40844 (solo si corresponde a una ruptura de plástico duro/quebradizo)** \n 7. **Solicitar** a calidad liberación del área afectada. \n ----------------------------------- \n **Referencias:** **FORM-40844** Incidente de rompimiento de vidrio, plástico duro y cerámica | **REF-05557** HACCP-based Food Safety Management Programme Standard | **PR-28761** Procedimiento Manejo de vidrio, plástico quebradizo y cerámica",
    final: true
  },
  SCARespuestaPlastico3: {
    response: "**¡PARO DE LÍNEA INMEDIATO!** \n 1.**Detener** la línea inmediatamente. \n 2. **Notificar** del evento a tu supervisor/calidad \n 3. **Segregar** el producto de acuerdo con el last good check (último control conforme). \n 4. **Colocar y registrar**la evidencia en el formato acorde a donde se haya encontrado plástico: \n CCP -> FORM-38268 Monitoreo de Detectores Metal (CCP) \n OPRP -> FORM-38267 Monitoreo de Mallas y Filtros \n PRODUCTOS/TANQUES -> Reporte de turno \n 5. **Retirar** los fragmentos/material roto y ejecutar la limpieza del área. \n 6. **Buscar** el utensilio o todos sus fragmentos y determinar cuándo fue la última verificación confrome. Si el artículo no se encuentra, sustituirlo por uno nuevo, íntegro, limpio, seco y liberado según lo establecido en el procedimiento, y levantar la corección correspondiente. \n 7. **Detonar** investigación para definir fuente y causa potencial. \n Evaluar el alcance de la contaminación: ubicación del hallazgo, condición del material, producto expuesto, equipos involucrados y posibilidad de que existan fragmentos adicionales. \n 8. **Documentar** evento en el FORM-40844 Incidente de rompimiento de vidrio, plástico duro y cerámica y en 'reporte de turno' \n 9. **Llena** el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 10. **Lanzar** NCMGT QVS/Q&FS \n 11. **LLenar** el análisis de riesgos (FORM-50002) con el equipo de food safety \n 12. **Esperar** señal de arranque y dictamen del producto (liberación, reproceso o destrucción) por el equipo HACCP. \n --------------------------------------- \n **Referencias: ** **PR-40192** Procedimiento de escalamiento ante herramientas rotas o extraviadas.",
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
    id: "Pregunta13",
    question: "¿Dónde identificaste el goteo, condensación o ingreso de agua?",
    options:[
      {
        label: "Contacto Directo/Zona 1/Zona 2",
        next: "SCARespuestaAgua1"
      },
      {
        label: "Zona 3/Zona 4",
        next: "SCARespuestaAgua2"
      }
    ]
  },
  SCARespuestaAgua1:{
    response: "**¡PARO DE LINEA!**\n **Debes hacer lo siguiente:**\n  1. **Detener** la línea inmediatamente.\n  2. **Segregar** El Producto De Acuerdo Con El Last Good Check (último control conforme) \n  3. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager. \n 4. **Investigar y delimitar el área**: Identifica el origen del goteo y segrega el área de tránsito para asegurar que el agua no se extienda a otras líneas.\n 5. **Solicitar** un hisopado de zona en sucio. \n 6. **Limpiar** la zona afectada. \n 7. **Secar** completamente el área y eliminar condiciones que permitan acumulación de agua. \n 8. **Solicitar** un hisopado de zona en limpio. \n **-** En caso de LLUVIA -> después de 4 horas \n **-** En caso de otro -> INMEDIATAMENTE después de la limpieza \n 9. **Levantar** el aviso/anormalidad a Mantenimiento cuando el origen corresponda a instalaciones o servicios y realizar las acciones necesarias para eliminar la fuente. \n 10.**Documentar** evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 11. **Lanzar** NCMGT \n 12. **Llenar** el análisis de riesgos (FORM-50002) con el equipo de food safety \n 13. **Esperar** señal de arranque por RA equipo HACCP. \n 14. **Asegurar** que las superficies/equipos estén secos antes del arranque. \n -------------------------------------------------- \n **Referencias:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev 10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Panzón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37759** Análisis de Proceso Polvos Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de Procesos Skwinkles Premezclas Rev 04 | HACCP-based Food Safet Management Programme Standard",
    image: "paro-linea.webp",
    final: true
  },
  SCARespuestaAgua2:{
    response: "**Debes hacer lo siguiente:**\n  1. **Notificar** del evento a tu supervisor/QVS/Q&FS Manager.\n  2. **Solicitar** a Kryon acordonar el área. \n 3. **Solicitar** a Q&FS hisopado en sucio de la zona afectada. \n 4. **Solicitar** a KRYON limpieza de la zona afectada \n 5. **Reportar y lebantar** anormalidad a mantenimiento. \n 6. **Detonar** investigación para definir fuente y causa potencial. \n 7. **Documentar** evento en 'reporte de turno' y llena el documento 'FORM-56871 Información para el levantamiento de incidentes en NCMGT' \n 8. **Lanzar** NCMGT \n 9. **Continuar** monitoreo \n 10. **Solicitar** hisopado en limpio (DDL) por correo al equipo Q&FS \n - En caso de LLUVIA -> después de 4 HORAS \n - En caso de otro -> INMEDIATAMENTE después de la limpieza. \n ---------------------------------------- \n **Referencias:** **FORM-37750** Análisis del Proceso Skwinkles L1 Rev 09 | **FORM-37760** Análisis de Proceso Hubba Bubba Rev 09 | **FORM-37757** Análisis de Riesgo Gusano Rev 09 | **FORM-37753** Análisis de Proceso Skwinkles L3 Rev 10 | **FORM-37754** Análisis de Proceso Muecas 8 y 9 Rev 11 | **FORM-37755** Análisis de Proceso Panzón Rev 08 | **FORM-37761** Análisis de Proceso Pellet Rev 09 | **FORM-37751** Análisis de Proceso Skwinkles L2 Rev 07 | **FORM-55791** Análisis de proceso Skwinkles Premezclas Rev 04 | HACCP-based Food Safety Management Programme Standard",
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
