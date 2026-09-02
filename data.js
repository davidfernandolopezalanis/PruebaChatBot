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
        label: "Plástico Suave",
        next: "turnoPlasticoMTM"
      },
      {
        label: "Plástico Duro",
        next: "turnoPlasticoMTM"
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
  tipoIncidenteSCA: {
    id: "Pregunta2",
    question: "¿Qué tipo de incidente o hallazgo estás reportando el día de hoy?",
    options: [
      {
        label: "Objeto Metálico",
        next: "lineaMetalSCA"
      },
      {
        label: "Plástico Suave",
        next: "lineaPlasticoSCA"
      },
      {
        label: "Plástico Duro",
        next: "lineaPlasticoSCA"
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
        label: "Plástico Suave",
        next: "lineaPlasticoTOT"
      },
      {
        label: "Plástico Duro",
        next: "lineaPlasticoTOT"
      },
      {
        label: "Otros Cuerpos Extraños (vidrio, madera, cabello, plagas, pelusa, etc.)",
        next: "lineaFOTOT"
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
  //--------------------------------------------
  //                  LINEA METAL
  //--------------------------------------------

  lineaMetalMTM: {
    id: "Pregunta3",
    question: "¿En qué línea se encontró el metal?",
    options: [
      {
        label: "Barras",
        next: "turnoMetalMTM"
      },
      {
        label: "Empaque",
        next: "turnoMetalMTM"
      }
    ]
  },
  lineaMetalSCA: {
    id: "Pregunta3",
    question: "¿En qué linea se encontró el metal?",
    options: [
      {
        label: "Goma - HBB",
        next: "turnoMetalSCA"
      },
      {
        label: "Goma - Pellet",
        next: "turnoMetalSCA"
      },
      {
        label: "HC - Chuan Tye",
        next: "turnoMetalSCA"
      },
      {
        label: "HC - J&R",
        next: "turnoMetalSCA"
      },
      {
        label: "HC - Muecas 8",
        next: "turnoMetalSCA"
      },
      {
        label: "HC - Muecas 9",
        next: "turnoMetalSCA"
      },
      {
        label: "HC - Panzon",
        next: "turnoMetalSCA"
      },
      {
        label : "Lucas - Bomvazo",
        next: "turnoMetalSCA"
      },
      {
        label: "Lucas - Gusano",
        next: "turnoMetalSCA"
      },
      {
        label: "Lucas - Polvos",
        next: "turnoMetalSCA"
      },
      {
        label: "SKW - L1",
        next: "turnoMetalSCA"
      },
      {
        label: "SKW - L2",
        next: "turnoMetalSCA"
      },
      {
        label: "SKW - L3",
        next: "turnoMetalSCA"
      },
      {
        label: "SKW - Premezclas",
        next: "turnoMetalSCA"
      },
      {
        label: "SKW - Salsitas",
        next: "turnoMetalSCA"
      }
    ]
  },
  lineaMetalTOT:{
    id: "Pregunta3",
    question: "¿En qué línea se encontró el metal?",
    options: [
      {
        label: "Golosina - AA 21",
        next: "turnosMetalTOT"
      },
      {
        label: "Golosina - AA 4000",
        next: "turnosMetalTOT"
      },
      {
        label: "Golosina - AA 8000",
        next: "turnosMetalTOT"
      },
      {
        label: "Golosina - AA MIDI",
        next: "turnosMetalTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 1",
        next : "turnosMetalTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 2",
        next: "turnosMetalTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 1",
        next: "turnosMetalTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 2",
        next: "turnosMetalTOT"
      },
      {
        label: "Golosina - Empque - SAPAL",
        next: "turnosMetalTOT"
      },
      {
        label: "Golosina - Empaque - Thurlings",
        next: "turnosMetalTOT"
      },
      {
        label: "TAR - Bagger",
        next: "turnosMetalTOT"
      },
      {
        label: "TAR - Coberturas",
        next: "turnosMetalTOT"
      },
      {
        label: "TAR - Confitiers",
        next: "turnosMetalTOT"
      },
      {
        label: "TAR - Granillo",
        next: "turnosMetalTOT"
      },
      {
        label: "TAR - Marquetas",
        next: "turnosMetalTOT"
      },
      {
        label: "TAR - Trampados",
        next: "turnosMetalTOT"
      }
    ]
  },

  //--------------------------------------------
  //                  LINEA PLASTICO
  //--------------------------------------------

  lineaPlasticoMTM: {
    id: "Pregunta3",
    question: "¿En qué línea se encontró el plástico?",
    options: [
      {
        label: "Barras",
        next: "turnoPlasticoMTM"
      },
      {
        label: "Empaque",
        next: "turnoPlasticoMTM"
      }
    ]
  },
  lineaPlasticoSCA: {
    id: "Pregunta3",
    question: "¿En qué linea se encontró el plástico?",
    options: [
      {
        label: "Goma - HBB",
        next: "turnoPlasticoSCA"
      },
      {
        label: "Goma - Pellet",
        next: "turnoPlasticoSCA"
      },
      {
        label: "HC - Chuan Tye",
        next: "turnoPlasticoSCA"
      },
      {
        label: "HC - J&R",
        next: "turnoPlasticoSCA"
      },
      {
        label: "HC - Muecas 8",
        next: "turnoPlasticoSCA"
      },
      {
        label: "HC - Muecas 9",
        next: "turnoPlasticoSCA"
      },
      {
        label: "HC - Panzon",
        next: "turnoPlasticoSCA"
      },
      {
        label : "Lucas - Bomvazo",
        next: "turnoPlasticoSCA"
      },
      {
        label: "Lucas - Gusano",
        next: "turnoPlasticoSCA"
      },
      {
        label: "Lucas - Polvos",
        next: "turnoPlasticoSCA"
      },
      {
        label: "SKW - L1",
        next: "turnoPlasticoSCA"
      },
      {
        label: "SKW - L2",
        next: "turnoPlasticoSCA"
      },
      {
        label: "SKW - L3",
        next: "turnoPlasticoSCA"
      },
      {
        label: "SKW - Premezclas",
        next: "turnoPlasticoSCA"
      },
      {
        label: "SKW - Salsitas",
        next: "turnoPlasticoSCA"
      }
    ]
  },
  lineaPlasticoTOT:{
    id: "Pregunta3",
    question: "¿En qué línea se encontró el plástico?",
    options: [
      {
        label: "Golosina - AA 21",
        next: "turnosPlasticoTOT"
      },
      {
        label: "Golosina - AA 4000",
        next: "turnosPlasticoTOT"
      },
      {
        label: "Golosina - AA 8000",
        next: "turnosPlasticoTOT"
      },
      {
        label: "Golosina - AA MIDI",
        next: "turnosPlasticoTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 1",
        next : "turnosPlasticoTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 2",
        next: "turnosPlasticoTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 1",
        next: "turnosPlasticoTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 2",
        next: "turnosPlasticoTOT"
      },
      {
        label: "Golosina - Empque - SAPAL",
        next: "turnosPlasticoTOT"
      },
      {
        label: "Golosina - Empaque - Thurlings",
        next: "turnosPlasticoTOT"
      },
      {
        label: "TAR - Bagger",
        next: "turnosPlasticoTOT"
      },
      {
        label: "TAR - Coberturas",
        next: "turnosPlasticoTOT"
      },
      {
        label: "TAR - Confitiers",
        next: "turnosPlasticoTOT"
      },
      {
        label: "TAR - Granillo",
        next: "turnosPlasticoTOT"
      },
      {
        label: "TAR - Marquetas",
        next: "turnosPlasticoTOT"
      },
      {
        label: "TAR - Trampados",
        next: "turnosPlasticoTOT"
      }
    ]
  },
  //--------------------------------------------
  //              LINEA OBJETO EXTRAÑO
  //--------------------------------------------

  lineaFOMTM: {
    id: "Pregunta3",
    question: "¿En qué línea se encontró el objeto extraño?",
    options: [
      {
        label: "Barras",
        next: "turnoVidrioMTM"
      },
      {
        label: "Empaque",
        next: "turnoVidrioMTM"
      }
    ]
  },
  lineaFOSCA: {
    id: "Pregunta3",
    question: "¿En qué linea se encontró el objeto extraño?",
    options: [
      {
        label: "Goma - HBB",
        next: "turnoVidrioSCA"
      },
      {
        label: "Goma - Pellet",
        next: "turnoVidrioSCA"
      },
      {
        label: "HC - Chuan Tye",
        next: "turnoVidrioSCA"
      },
      {
        label: "HC - J&R",
        next: "turnoVidrioSCA"
      },
      {
        label: "HC - Muecas 8",
        next: "turnoVidrioSCA"
      },
      {
        label: "HC - Muecas 9",
        next: "turnoVidrioSCA"
      },
      {
        label: "HC - Panzon",
        next: "turnoVidrioSCA"
      },
      {
        label : "Lucas - Bomvazo",
        next: "turnoVidrioSCA"
      },
      {
        label: "Lucas - Gusano",
        next: "turnoVidrioSCA"
      },
      {
        label: "Lucas - Polvos",
        next: "turnoVidrioSCA"
      },
      {
        label: "SKW - L1",
        next: "turnoVidrioSCA"
      },
      {
        label: "SKW - L2",
        next: "turnoVidrioSCA"
      },
      {
        label: "SKW - L3",
        next: "turnoVidrioSCA"
      },
      {
        label: "SKW - Premezclas",
        next: "turnoVidrioSCA"
      },
      {
        label: "SKW - Salsitas",
        next: "turnoVidrioSCA"
      }
    ]
  },
  lineaFOTOT:{
    id: "Pregunta3",
    question: "¿En qué línea se encontró la materia extraña?",
    options: [
      {
        label: "Golosina - AA 21",
        next: "turnosVidrioTOT"
      },
      {
        label: "Golosina - AA 4000",
        next: "turnosVidrioTOT"
      },
      {
        label: "Golosina - AA 8000",
        next: "turnosVidrioTOT"
      },
      {
        label: "Golosina - AA MIDI",
        next: "turnosVidrioTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 1",
        next : "turnosVidrioTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 2",
        next: "turnosVidrioTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 1",
        next: "turnosVidrioTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 2",
        next: "turnosVidrioTOT"
      },
      {
        label: "Golosina - Empque - SAPAL",
        next: "turnosVidrioTOT"
      },
      {
        label: "Golosina - Empaque - Thurlings",
        next: "turnosVidrioTOT"
      },
      {
        label: "TAR - Bagger",
        next: "turnosVidrioTOT"
      },
      {
        label: "TAR - Coberturas",
        next: "turnosVidrioTOT"
      },
      {
        label: "TAR - Confitiers",
        next: "turnosVidrioTOT"
      },
      {
        label: "TAR - Granillo",
        next: "turnosVidrioTOT"
      },
      {
        label: "TAR - Marquetas",
        next: "turnosVidrioTOT"
      },
      {
        label: "TAR - Trampados",
        next: "turnosVidrioTOT"
      }
    ]
  },

  //--------------------------------------------
  //                 LINEA AGUA
  //--------------------------------------------

  lineaAguaMTM: {
    id: "Pregunta3",
    question: "¿En qué línea se encontró el agua?",
    options: [
      {
        label: "Barras",
        next: "turnoAguaMTM"
      },
      {
        label: "Empaque",
        next: "turnoAguaMTM"
      }
    ]
  },
  lineaAguaSCA: {
    id: "Pregunta3",
    question: "¿En qué linea se encontró el agua?",
    options: [
      {
        label: "Goma - HBB",
        next: "turnoAguaSCA"
      },
      {
        label: "Goma - Pellet",
        next: "turnoAguaSCA"
      },
      {
        label: "HC - Chuan Tye",
        next: "turnoAguaSCA"
      },
      {
        label: "HC - J&R",
        next: "turnoAguaSCA"
      },
      {
        label: "HC - Muecas 8",
        next: "turnoAguaSCA"
      },
      {
        label: "HC - Muecas 9",
        next: "turnoAguaSCA"
      },
      {
        label: "HC - Panzon",
        next: "turnoAguaSCA"
      },
      {
        label : "Lucas - Bomvazo",
        next: "turnoAguaSCA"
      },
      {
        label: "Lucas - Gusano",
        next: "turnoAguaSCA"
      },
      {
        label: "Lucas - Polvos",
        next: "turnoAguaSCA"
      },
      {
        label: "SKW - L1",
        next: "turnoAguaSCA"
      },
      {
        label: "SKW - L2",
        next: "turnoAguaSCA"
      },
      {
        label: "SKW - L3",
        next: "turnoAguaSCA"
      },
      {
        label: "SKW - Premezclas",
        next: "turnoAguaSCA"
      },
      {
        label: "SKW - Salsitas",
        next: "turnoAguaSCA"
      }
    ]
  },
  lineaAguaTOT:{
    id: "Pregunta3",
    question: "¿En qué línea se encontró el agua?",
    options: [
      {
        label: "Golosina - AA 21",
        next: "turnosAguaTOT"
      },
      {
        label: "Golosina - AA 4000",
        next: "turnosAguaTOT"
      },
      {
        label: "Golosina - AA 8000",
        next: "turnosAguaTOT"
      },
      {
        label: "Golosina - AA MIDI",
        next: "turnosAguaTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 1",
        next : "turnosAguaTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 2",
        next: "turnosAguaTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 1",
        next: "turnosAguaTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 2",
        next: "turnosAguaTOT"
      },
      {
        label: "Golosina - Empque - SAPAL",
        next: "turnosAguaTOT"
      },
      {
        label: "Golosina - Empaque - Thurlings",
        next: "turnosAguaTOT"
      },
      {
        label: "TAR - Bagger",
        next: "turnosAguaTOT"
      },
      {
        label: "TAR - Coberturas",
        next: "turnosAguaTOT"
      },
      {
        label: "TAR - Confitiers",
        next: "turnosAguaTOT"
      },
      {
        label: "TAR - Granillo",
        next: "turnosAguaTOT"
      },
      {
        label: "TAR - Marquetas",
        next: "turnosAguaTOT"
      },
      {
        label: "TAR - Trampados",
        next: "turnosAguaTOT"
      }
    ]
  },

  //--------------------------------------------
  //                LINEA QUIMICO
  //--------------------------------------------

  lineaQuimicoMTM: {
    id: "Pregunta3",
    question: "¿En qué línea se encontró el químico?",
    options: [
      {
        label: "Barras",
        next: "turnoQuimicoMTM"
      },
      {
        label: "Empaque",
        next: "turnoQuimicoMTM"
      }
    ]
  },
  lineaQuimicoSCA: {
    id: "Pregunta3",
    question: "¿En qué linea se encontró el químico?",
    options: [
      {
        label: "Goma - HBB",
        next: "turnoQuimicoSCA"
      },
      {
        label: "Goma - Pellet",
        next: "turnoQuimicoSCA"
      },
      {
        label: "HC - Chuan Tye",
        next: "turnoQuimicoSCA"
      },
      {
        label: "HC - J&R",
        next: "turnoQuimicoSCA"
      },
      {
        label: "HC - Muecas 8",
        next: "turnoQuimicoSCA"
      },
      {
        label: "HC - Muecas 9",
        next: "turnoQuimicoSCA"
      },
      {
        label: "HC - Panzon",
        next: "turnoQuimicoSCA"
      },
      {
        label : "Lucas - Bomvazo",
        next: "turnoQuimicoSCA"
      },
      {
        label: "Lucas - Gusano",
        next: "turnoQuimicoSCA"
      },
      {
        label: "Lucas - Polvos",
        next: "turnoQuimicoSCA"
      },
      {
        label: "SKW - L1",
        next: "turnoQuimicoSCA"
      },
      {
        label: "SKW - L2",
        next: "turnoQuimicoSCA"
      },
      {
        label: "SKW - L3",
        next: "turnoQuimicoSCA"
      },
      {
        label: "SKW - Premezclas",
        next: "turnoQuimicoSCA"
      },
      {
        label: "SKW - Salsitas",
        next: "turnoQuimicoSCA"
      }
    ]
  },
  lineaQuimicoTOT:{
    id: "Pregunta3",
    question: "¿En qué línea se encontró el químico?",
    options: [
      {
        label: "Golosina - AA 21",
        next: "turnosQuimicoTOT"
      },
      {
        label: "Golosina - AA 4000",
        next: "turnosQuimicoTOT"
      },
      {
        label: "Golosina - AA 8000",
        next: "turnosQuimicoTOT"
      },
      {
        label: "Golosina - AA MIDI",
        next: "turnosQuimicoTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 1",
        next : "turnosQuimicoTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 2",
        next: "turnosQuimicoTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 1",
        next: "turnosQuimicoTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 2",
        next: "turnosQuimicoTOT"
      },
      {
        label: "Golosina - Empque - SAPAL",
        next: "turnosQuimicoTOT"
      },
      {
        label: "Golosina - Empaque - Thurlings",
        next: "turnosQuimicoTOT"
      },
      {
        label: "TAR - Bagger",
        next: "turnosQuimicoTOT"
      },
      {
        label: "TAR - Coberturas",
        next: "turnosQuimicoTOT"
      },
      {
        label: "TAR - Confitiers",
        next: "turnosQuimicoTOT"
      },
      {
        label: "TAR - Granillo",
        next: "turnosQuimicoTOT"
      },
      {
        label: "TAR - Marquetas",
        next: "turnosQuimicoTOT"
      },
      {
        label: "TAR - Trampados",
        next: "turnosQuimicoTOT"
      }
    ]
  },

  //--------------------------------------------
  //                LINEA OTRO
  //--------------------------------------------

  lineaQFSIncidenteMTM: {
    id: "Pregunta3",
    question: "¿En qué línea se encontró el objeto?",
    options: [
      {
        label: "Barras",
        next: "turnoQFSIncidenteMTM"
      },
      {
        label: "Empaque",
        next: "turnoQFSIncidenteMTM"
      }
    ]
  },
  lineaQFSIncidenteSCA: {
    id: "Pregunta3",
    question: "¿En qué linea se encontró el objeto?",
    options: [
      {
        label: "Goma - HBB",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "Goma - Pellet",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "HC - Chuan Tye",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "HC - J&R",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "HC - Muecas 8",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "HC - Muecas 9",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "HC - Panzon",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label : "Lucas - Bomvazo",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "Lucas - Gusano",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "Lucas - Polvos",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "SKW - L1",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "SKW - L2",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "SKW - L3",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "SKW - Premezclas",
        next: "turnoQFSIncidenteSCA"
      },
      {
        label: "SKW - Salsitas",
        next: "turnoQFSIncidenteSCA"
      }
    ]
  },
  lineaQFSIncidenteTOT:{
    id: "Pregunta3",
    question: "¿En qué línea se encontró el objeto?",
    options: [
      {
        label: "Golosina - AA 21",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "Golosina - AA 4000",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "Golosina - AA 8000",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "Golosina - AA MIDI",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 1",
        next : "turnoQFSIncidenteTOT"
      },
      {
        label: "Golosina - Empaque - Flowpack 2",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 1",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "Golosina - Empaque - Multi Pon 2",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "Golosina - Empque - SAPAL",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "Golosina - Empaque - Thurlings",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "TAR - Bagger",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "TAR - Coberturas",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "TAR - Confitiers",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "TAR - Granillo",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "TAR - Marquetas",
        next: "turnoQFSIncidenteTOT"
      },
      {
        label: "TAR - Trampados",
        next: "turnoQFSIncidenteTOT"
      }
    ]
  },

  //-----------------------------------------------------
  //                    TURNOS METAL
  //-----------------------------------------------------

  turnoMetalMTM: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "MTMMetal1"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "MTMMetal1"
      }
    ]
  },
  turnoMetalTE: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "TEMetal1"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "TEMetal1"
      },
      {
        label: "Turno 3 (Noche)",
        next: "TEMetal1"
      }
    ]
  },
  turnoMetalSCA:{
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "SCAMetal1"
      },
      {
        label: "Turno 2 (Trade)",
        next: "SCAMetal1"
      }
    ]
  },
  turnosMetalTOT: {
    id: "Pregunta4",
    question: "¿En qué turno se ecnontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "TOTMetal1"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "TOTMetal1"
      },
      {
        label: "Turno 3 (Noche)",
        next: "TOTMetal1"
      }
    ]
  },

  //-----------------------------------------------------
  //                   TURNOS PLASTICO
  //-----------------------------------------------------

  turnoPlasticoMTM: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el plástico?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "MTMPlastico1"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "MTMPlastico1"
      }
    ]
  },
  turnoPlasticoTE: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el plástico?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "TEPlastico1"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "TEPlastico1"
      },
      {
        label: "Turno 3 (Noche)",
        next: "TEPlastico1"
      }
    ]
  },
  turnoPlasticoSCA:{
    id: "Pregunta4",
    question: "¿En qué turno se encontró el plástico?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "SCAPlastico1"
      },
      {
        label: "Turno 2 (Trade)",
        next: "SCAPlastico1"
      }
    ]
  },
  turnosPlasticoTOT: {
    id: "Pregunta4",
    question: "¿En qué turno se ecnontró el plástico?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "TOTPlastico1"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "TOTPlastico1"
      },
      {
        label: "Turno 3 (Noche)",
        next: "TOTPlastico1"
      }
    ]
  },

  //-----------------------------------------------------
  //                   TURNOS VIDRIO
  //-----------------------------------------------------

  turnoVidrioMTM: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el vidrio?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "medidaMetal"
      }
    ]
  },
  turnoVidrioTE: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "medidaMetal"
      },
      {
        label: "Turno 3 (Noche)",
        next: "medidaMetal"
      }
    ]
  },
  turnoVidrioSCA:{
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Trade)",
        next: "medidaMetal"
      }
    ]
  },
  turnosVidrioTOT: {
    id: "Pregunta4",
    question: "¿En qué turno se ecnontró la materia extraña?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "TOTForeignO1"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "TOTForeignO1"
      },
      {
        label: "Turno 3 (Noche)",
        next: "TOTForeignO1"
      }
    ]
  },

  //-----------------------------------------------------
  //                   TURNOS AGUA
  //-----------------------------------------------------

  turnoAguaMTM: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el agua?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "medidaMetal"
      }
    ]
  },
  turnoAguaTE: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "medidaMetal"
      },
      {
        label: "Turno 3 (Noche)",
        next: "medidaMetal"
      }
    ]
  },
  turnoAguaSCA:{
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Trade)",
        next: "medidaMetal"
      }
    ]
  },
  turnosAguaTOT: {
    id: "Pregunta4",
    question: "¿En qué turno se ecnontró el agua?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "TOTAgua1"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "TOTAgua1"
      },
      {
        label: "Turno 3 (Noche)",
        next: "TOTAgua1"
      }
    ]
  },

  //-----------------------------------------------------
  //                   TURNOS QUIMICO
  //-----------------------------------------------------

  turnoQuimicoMTM: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "medidaMetal"
      }
    ]
  },
  turnoQuimicoTE: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "medidaMetal"
      },
      {
        label: "Turno 3 (Noche)",
        next: "medidaMetal"
      }
    ]
  },
  turnoQuimicoSCA:{
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Trade)",
        next: "medidaMetal"
      }
    ]
  },
  turnosQuimicoTOT: {
    id: "Pregunta4",
    question: "¿En qué turno se ecnontró el químico?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "TOTQuimico1"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "TOTQuimico1"
      },
      {
        label: "Turno 3 (Noche)",
        next: "TOTQuimico1"
      }
    ]
  },

  //-----------------------------------------------------
  //                   TURNOS OTRO
  //-----------------------------------------------------

  turnoQFSIncidenteMTM: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "medidaMetal"
      }
    ]
  },
  turnoQFSIncidenteTE: {
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "medidaMetal"
      },
      {
        label: "Turno 3 (Noche)",
        next: "medidaMetal"
      }
    ]
  },
  turnoQFSIncidenteSCA:{
    id: "Pregunta4",
    question: "¿En qué turno se encontró el metal?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "medidaMetal"
      },
      {
        label: "Turno 2 (Trade)",
        next: "medidaMetal"
      }
    ]
  },
  turnoQFSIncidenteTOT: {
    id: "Pregunta4",
    question: "¿En qué turno sucedió el incidente?",
    options: [
      {
        label: "Turno 1 (Mañana)",
        next: "TOTQFSIncidente1"
      },
      {
        label: "Turno 2 (Tarde)",
        next: "TOTQFSIncidente1"
      },
      {
        label: "Turno 3 (Noche)",
        next: "TOTQFSIncidente1"
      }
    ]
  },

  //====================================================
  //                        ALERTAS
  //====================================================

  paroLinea: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  \   1. Detener la línea inmediatamente.\n  2. Notificar del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager.\n  3. Detonar investigación para definir fuente y causa potencial.\n  4. Revisión OPRP filtros, mallas, magnetos.\n  5. Caracterizar partículas con fines de investigación.\n  6. Documentar evento en reporte de contaminación.\n  7. Lanzar NCMGT.\n---------------------------------------\n**RECUERDA**\nLa línea no puede arrancar nuevamente hasta que se tenga la aprobación formal del equipo local de Q&FS/VSQ.\n---------------------------------------",
    image: "paro-linea.webp",
    final: true
  },
  NoParoLinea: {
    response: "**Haz lo siguiente:**\n1. Continua con tu producción normal.\n2. Documentar evento en reporte de contaminación.\n3. Debes mantener el monitoreo por las siguientes 12 horas.\n---------------------------------------\n**RECUERDA**\nCuando se presentan 3 eventos confirmados de metal en 3 horas o menos debes detener la línea y seguir el proceso de escalamiento.\n---------------------------------------\n**El proceso de escalamiento consiste en:**\n- Notificar del evento a tu supervisor/QVS/Q&FS Local Team/Q&FS Manager.\n- Detonar investigación para definir fuente y causa potencial.\n- Revisión OPRP filtros, mallas, magnetos.\n- Caracterizar partículas con fines de investigación.\n- Documentar evento en reporte de contaminación.",
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
    id: "Pregunta5",
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
    id: "Pregunta6",
    question: "¿Dónde fue encontrado el objeto metálico?",
    options: [
      {
        label: "En producto",
        next: "TOTMetal5"
      },
      {
        label: "En CCP",
        next: "TOTMetal4"
      },
      {
        label: "En algún ingrediente o material de empaque.",
        next: "TOTMetal4"
      },
      {
        label: "En detector de metales (PCC/OPRP)",
        next: "TOTMetal3"
      },
      {
        label: "Otro",
        next: "TOTMetal4"
      }
    ]
  },
  TOTMetal3:{
    id: "Pregunta7",
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
  TOTMetal4:{
    id: "Pregunta8",
    question: "¿Qué estructura tiene el objeto metálico?",
    options: [
      {
        label: "Filoso",
        next: "TOTMetal5"
      },
      {
        label: "Duro",
        next: "TOTMetal5"
      },
      {
        label: "Felxible",
        next: "TOTMetal5"
      },
      {
        label: "No Filoso",
        next: "TOTMetal5"
      },
      {
        label: "Quebradizo",
        next: "TOTMetal5"
      },
      {
        label: "Blando",
        next: "TOTMetal5"
      },
    ]
  },
  TOTMetal5:{
    id:"Pregunta9",
    question: "¿El objeto metálico de que material es?",
    options:[
      {
        label: "Ferroso",
        next: "TOTMetal6"
      },
      {
        label: "No Ferroso",
        next: "TOTMetal6"
      },
      {
        label: "Acero Inoxidable",
        next: "TOTMetal6"
      }
    ]
  },
  TOTMetal6: {
    id: "Pregunta10",
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
    id: "Pregunta11",
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
    id: "Pregunta12",
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
  SCAPlastico1: {
    id: "Pregunta17",
    question: "¿Dónde fue encontrado el objeto plástico?",
    options: [
      {
        label: "En producto",
        next: "SCAPlastico2"
      },
      {
        label: "En molde con desgaste (le falta un pedazo)",
        next: "SCAPlastico3"
      },
      {
        label: "En tanques/marmita",
        next: "SCAPlastico2"
      },
      {
        label: "EN PCC",
        next: "SCAPlastico2"
      },
      {
        label: "EN OPRP",
        next: "SCAPlastico2"
      },
      {
        label: "En herramienta de limpieza",
        next: "SCAPlastico2"
      },
      {
        label: "Otro (Ej. Magneto/Filtro)",
        next: "SCAPlastico2"
      }
    ]
  },
  SCAPlastico2: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Revisar OPRP, Magnetos y No OPRP Antes de PCC o donde se encontro la particula.\n  5. Detonar investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) .\n 6. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 7. Detectar origen de partícula. \n 8. Revisar toda la linea para identificar más partículas plásticas y asegurar despeje completo. \n 9. Lanzar NCMGT MEDIO QVS/Q&FS \n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety  ---------------------------------------\n**RECUERDA**\nLa línea no puede arrancar nuevamente hasta que se tenga la aprobación formal del equipo local de Q&FS/VSQ.\n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety. \n 11. Esperar señal de arranque por RA equipo HACCP.  \n ---------------------------------------",
    image: "paro-linea.webp",
    final: true
  },
  SCAPlastico3: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Retira el molde de uso operativo \n 5. Revisar OPRP, Magnetos y No OPRP Antes de PCC o donde se encontró la partícula \n  6. Detonar investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) .\n 7. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 8. Detectar origen de partícula. \n 9. Revisar toda la linea para identificar más partículas plásticas y asegurar despeje completo. \n 10. Lanzar NCMGT MEDIO QVS/Q&FS \n 11. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety. \n 12. Esperar señal de arranque por RA equipo HACCP.",
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
    id: "Pregunta17",
    question: "¿Dónde fue encontrado el objeto plástico?",
    options: [
      {
        label: "En producto",
        next: "TOTPlastico2"
      },
      {
        label: "En molde con desgaste (le falta un pedazo)",
        next: "TOTPlastico3"
      },
      {
        label: "En tanques/marmita",
        next: "TOTPlastico2"
      },
      {
        label: "EN PCC",
        next: "TOTPlastico2"
      },
      {
        label: "EN OPRP",
        next: "TOTPlastico2"
      },
      {
        label: "En herramienta de limpieza",
        next: "TOTPlastico2"
      },
      {
        label: "Otro (Ej. Magneto/Filtro)",
        next: "TOTPlastico2"
      }
    ]
  },
  TOTPlastico2: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Revisar OPRP, Magnetos y No OPRP Antes de PCC o donde se encontro la particula.\n  5. Detonar investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) .\n 6. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 7. Detectar origen de partícula. \n 8. Revisar toda la linea para identificar más partículas plásticas y asegurar despeje completo. \n 9. Lanzar NCMGT MEDIO QVS/Q&FS \n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety  ---------------------------------------\n**RECUERDA**\nLa línea no puede arrancar nuevamente hasta que se tenga la aprobación formal del equipo local de Q&FS/VSQ.\n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety. \n 11. Esperar señal de arranque por RA equipo HACCP.  \n ---------------------------------------",
    image: "paro-linea.webp",
    final: true
  },
  TOTPlastico3: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Retira el molde de uso operativo \n 5. Revisar OPRP, Magnetos y No OPRP Antes de PCC o donde se encontró la partícula \n  6. Detonar investigación para definir fuente y causa potencial (Recuerda consultar la lista de caracterización de equipos de línea e información del reporte de turno) .\n 7. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 8. Detectar origen de partícula. \n 9. Revisar toda la linea para identificar más partículas plásticas y asegurar despeje completo. \n 10. Lanzar NCMGT MEDIO QVS/Q&FS \n 11. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety. \n 12. Esperar señal de arranque por RA equipo HACCP.",
    image: "paro-linea.webp",
    final: true
  },

  //====================================================
  //                PREGUNTAS PLASTICO TE
  //====================================================

  //====================================================
  //                PREGUNTAS OTROS SCA
  //====================================================
  SCAForeignO1: {
    id: "Pregunta18",
    question: "¿Qué tipo de objeto encontraste?",
    options: [
      {
        label: "Vidrio",
        next: "SCAForeignO3"
      },
      {
        label: "Madera",
        next: "SCAForeignO3"
      },
      {
        label: "Cartón",
        next: "SCAForeignO2"
      },
      {
        label: "Pelusa",
        next: "SCAForeignO2"
      },
      {
        label: "Hilo",
        next: "SCAForeignO2"
      },
      {
        label: "Plagas",
        next: "SCAForeignO2"
      },
      {
        label: "Cabello",
        next: "SCAForeignO2"
      },
      {
        label: "Uñas",
        next: "SCAForeignO2"
      }
    ]
  },
  SCAForeignO2: {
    id: "Pregunta19",
    question: "¿Dónde fue encontrado el objeto extraño?",
    options: [
      {
        label: "En producto",
        next: "SCAForeignO4"
      },
      {
        label: "En tanques/marmita",
        next: "SCAForeignO5"
      },
      {
        label: "En PCC",
        next: "SCAForeignO5"
      },
      {
        label: "En OPRP",
        next: "SCAForeignO5"
      },
      {
        label: "Otro",
        next: "SCAForeignO5"
      }
    ]
  },
  SCAForeignO3: {
    id: "Pregunta19",
    question: "¿Dónde fue encontrado el objeto extraño?",
    options: [
      {
        label: "En producto",
        next: "SCAForeignO4"
      },
      {
        label: "En tanques/marmita",
        next: "SCAForeignO4"
      },
      {
        label: "En PCC",
        next: "SCAForeignO4"
      },
      {
        label: "En OPRP",
        next: "SCAForeignO4"
      },
      {
        label: "Otro",
        next: "SCAForeignO4"
      }
    ]
  },
  SCAForeignO4: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Revisar OPRP, Magnetos y No OPRP Antes de PCC o donde se encontró el objeto extraño.\n  5. Detonar investigación para definir fuente y causa potencial.\n 6. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 7. Detectar origen de partícula. \n 8. Revisar toda la linea para identificar más partículas y asegurar despeje completo. \n 9. Lanzar NCMGT MEDIO QVS/Q&FS \n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n 11. Esperar señal de arranque por RA equipo HACCP.",
    image: "paro-linea.webp",
    final: true
  },
  SCAForeignO5: {
    response: "**Debes hacer lo siguiente:**\n  1. Notificar del evento a tu supervisor/QVS/Q&FS Manager.\n  5. Detonar investigación para definir fuente y causa potencial \n 6. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 9. Lanzar NCMGT. \n 10. Continuar monitoreo.",
    final: true
  },
  //====================================================
  //                PREGUNTAS OTROS MTM
  //====================================================

  //====================================================
  //                PREGUNTAS OTROS TOT
  //====================================================

  TOTForeignO1: {
    id: "Pregunta18",
    question: "¿Qué tipo de objeto encontraste?",
    options: [
      {
        label: "Vidrio",
        next: "TOTForeignO3"
      },
      {
        label: "Madera",
        next: "TOTForeignO3"
      },
      {
        label: "Cartón",
        next: "TOTForeignO2"
      },
      {
        label: "Pelusa",
        next: "TOTForeignO2"
      },
      {
        label: "Hilo",
        next: "TOTForeignO2"
      },
      {
        label: "Plagas",
        next: "TOTForeignO2"
      },
      {
        label: "Cabello",
        next: "TOTForeignO2"
      },
      {
        label: "Uñas",
        next: "TOTForeignO2"
      }
    ]
  },
  TOTForeignO2: {
    id: "Pregunta19",
    question: "¿Dónde fue encontrado el objeto extraño?",
    options: [
      {
        label: "En producto",
        next: "TOTForeignO4"
      },
      {
        label: "En tanques/marmita",
        next: "TOTForeignO5"
      },
      {
        label: "En PCC",
        next: "TOTForeignO5"
      },
      {
        label: "En OPRP",
        next: "TOTForeignO5"
      },
      {
        label: "Otro",
        next: "TOTForeignO5"
      }
    ]
  },
  TOTForeignO3: {
    id: "Pregunta19",
    question: "¿Dónde fue encontrado el objeto extraño?",
    options: [
      {
        label: "En producto",
        next: "TOTForeignO4"
      },
      {
        label: "En tanques/marmita",
        next: "TOTForeignO4"
      },
      {
        label: "En PCC",
        next: "TOTForeignO4"
      },
      {
        label: "En OPRP",
        next: "TOTForeignO4"
      },
      {
        label: "Otro",
        next: "TOTForeignO4"
      }
    ]
  },
  TOTForeignO4: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Revisar OPRP, Magnetos y No OPRP Antes de PCC o donde se encontró el objeto extraño.\n  5. Detonar investigación para definir fuente y causa potencial.\n 6. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 7. Detectar origen de partícula. \n 8. Revisar toda la linea para identificar más partículas y asegurar despeje completo. \n 9. Lanzar NCMGT MEDIO QVS/Q&FS \n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n 11. Esperar señal de arranque por RA equipo HACCP.",
    image: "paro-linea.webp",
    final: true
  },
  TOTForeignO5: {
    response: "**Debes hacer lo siguiente:**\n  1. Notificar del evento a tu supervisor/QVS/Q&FS Manager.\n  5. Detonar investigación para definir fuente y causa potencial \n 6. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 9. Lanzar NCMGT. \n 10. Continuar monitoreo.",
    final: true
  },
  //====================================================
  //                PREGUNTAS OTROS TE
  //====================================================

  //====================================================
  //                PREGUNTAS AGUA SCA
  //====================================================
  SCAAgua1:{
    id: "Pregunta20",
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
    id: "Pregunta21",
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
    id: "Pregunta20",
    question: "¿El goteo condensación o ingreso de agua cayó **DIRECTAMENTE** sobre el producto, materias primas, material de empaque o Zona 1, 2?",
    options:[
      {
        label: "Si",
        next: "TOTAgua2"
      },
      {
        label: "No",
        next: "TOTAgua3"
      }
    ]
  },
  TOTAgua2:{
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n 4. Detonar investigación para definir fuente y causa potencial.\n 5. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 6. SOLICITAR ISOPADO SUCIO ZONA AFECTADA \n 7. Lanzar NCMGT \n 8. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n **9. Esperar señal de arranque por RA equipo HACCP.**",
    image: "paro-linea.webp",
    final: true
  },
  TOTAgua3:{
    id: "Pregunta21",
    question: "¿El agua está cayendo en pasillo o áreas alejadas, pero existe el riesgo de que salpique o llegue a la línea por el tráfico de personas o patines?",
    options:[
      {
        label: "Si",
        next: "TOTAgua2"
      },
      {
        label: "No",
        next: "TOTAgua4"
      }
    ]
  },
  TOTAgua4:{
    response: "**Debes hacer lo siguiente:**\n  1. Notificar del evento a tu supervisor/QVS/Q&FS Manager.\n  2. Solicitar a Kryon acordonar el área, secar inmediatamente.\n  3. Reportar y levantar anormalidad a mantenimiento. \n 4. Detonar inversitgación para definir fuente y cuasa potencial \n 5. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n  6. SOLICITAR ISOPADO SUCIO ZONA AFECTADA \n 7. Lanzar NCMGT \n  8. Continuar monitoreo.",
    final: true
  },
  //====================================================
  //                PREGUNTAS AGUA TE
  //====================================================

  //====================================================
  //                PREGUNTAS QUIMICO SCA
  //====================================================
  SCAQuimico1: {
    id: "Pregunta22",
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
    id: "Pregunta23",
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
    id: "Pregunta24",
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
    id: "Pregunta22",
    question: "¿Qué tipo contaminación química identificaste?",
    options: [
      {
        label: "Lubricantes",
        next: "TOTQuimico2"
      },
      {
        label: "Pintura",
        next: "TOTQuimico2"
      },
      {
        label: "Sanitizantes",
        next: "TOTQuimico2"
      },
      {
        label: "Alérgenos",
        next: "TOTQuimico2"
      }
    ]
  },
  TOTQuimico2: {
    id: "Pregunta23",
    question: "¿El químico tuvo contacto con el producto, ingredientes, empaques o Z1?",
    options: [
      {
        label: "Si",
        next: "TOTQuimico3"
      },
      {
        label: "No",
        next: "TOTQuimico4"
      }
    ]
  },
  TOTQuimico3: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Acordonar y restringir el área  \n 5. Realizar la limpieza de las áreas involucradas. \n 6. Todos los materiales y utensilios de limpieza que se utilicen para limpiar el derrame se deben segregar y los responsables de limpiar derrames de alérgenos las deben desechar inmediatamente.\n  7. Detonar investigación para definir fuente y causa potencial.\n 8. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 9. Lanzar NCMGT MEDIO QVS/Q&FS \n 10. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n 11. Esperar señal de arranque por RA equipo HACCP.",
    image: "paro-linea.webp",
    final: true
  },
  TOTQuimico4: {
    id: "Pregunta24",
    question: "¿El derrame ocurrió cerca de la línea  hay riesgo de contaminación cruzada?",
    options: [
      {
        label: "Si",
        next: "TOTQuimico5"
      },
      {
        label: "No",
        next: "TOTQuimico6"
      }
    ]
  },
  TOTQuimico5: {
    response: "**¡PARO DE LINEA!**\n Debes hacer lo siguiente:\n  1. Detener la línea inmediatamente.\n  2. Segregar El Producto De Acuerdo Con El Last Good Check  \n  3. Notificar del evento a tu supervisor/QVS/Q&FS Manager. \n  4. Acordonar y restringir el área  \n 5. Realizar la limpieza de las áreas involucradas. \n  6. Detonar investigación para definir fuente y causa potencial.\n 7. Documentar evento en “reporte de turno” y llena el documento “FORM-56871 Información para el levantamiento de incidentes en NCMGT” \n 8. Lanzar NCMGT MEDIO QVS/Q&FS \n 9. Llenar el análisis de riesgos (RA FORM-5002) con el equipo de food safety \n 10. Esperar señal de arranque por RA equipo HACCP.",
    image: "paro-linea.webp",
    final: true
  },
  TOTQuimico6: {
    response: "**Notificar del evento a tu supervisor/QVS/Q&FS Manager.**",
    final: true
  },
  //====================================================
  //                PREGUNTAS QUIMICO TE
  //====================================================

  //====================================================
  //             PREGUNTAS INCIDENTES Q&FS SCA
  //====================================================
  SCAQFSIncidente1: {
    id: "Pregunta25",
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
    id: "Pregunta26",
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
    id: "Pregunta25",
    question: "¿Qué tipo de desviación de calidad detectaste?",
    options: [
      {
        label: "Error en la mezcla / ingredientes equivocados",
        response: "**Detener el proceso.** \n No avanzar el producto. \n Escalar a Q&FS. \n Lanzar NCMGT"
      },
      {
        label: "Parámetro fuera de límite",
        next: "TOTQFSIncidente2"
      },
      {
        label: "Falla Sensorial",
        response: "**Detener** **avance** **del** **lote** **específico**. \n Aislar muestra y llamar a VS Calidad."
      }
    ]
  },
  TOTQFSIncidente2: {
      id: "Pregunta26",
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
  //             PREGUNTAS INCIDENTES Q&FS TE
  //====================================================
  };
