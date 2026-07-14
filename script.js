const state = {
  currentStep: "start"
};

let respuestasSesion = {
    Pregunta1: "",
    Pregunta2: "",
    Pregunta3: "",
    Pregunta4: "",
    Pregunta5: "",
    Pregunta6: "",
    Pregunta7: "",
    Pregunta8: ""
};
let sesion = crypto.randomUUID();

function formatMessageText(text) {
  if (!text) {
    return "";
  }

  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}

function addMessage(text, sender = "bot", image = null) {
  const messages = document.getElementById("messages");
  const message = document.createElement("div");
  message.className = `message ${sender}`;

  if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = "Chatbot image";
    img.className = "message-image";
    message.appendChild(img);
  }

  if (text) {
    const textNode = document.createElement("div");
    textNode.innerHTML = formatMessageText(text);
    message.appendChild(textNode);
  }

  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function renderOptions(stepId) {
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  const step = chatFlow[stepId];
  if (!step || !step.options || !step.question) {
    return;
  }

  step.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option.label;
    button.addEventListener("click", () => handleSelection(option, stepId));
    optionsContainer.appendChild(button);
  });
}

function showStep(stepId) {
  const step = chatFlow[stepId];
  if (!step) {
    return;
  }

  state.currentStep = stepId;

  if (step.response) {
    addMessage(step.response, "bot", step.image || null);
  }

  if (step.final) {
    enviarSesion(step.resultado);
}

  if (step.question && step.options) {
    addMessage(step.question, "bot");
    renderOptions(stepId);
  } else {
    document.getElementById("options").innerHTML = "";
  }
}

async function enviarSesion() {

    const datos = {
        sesion: sesion,
        fecha: new Date().toISOString(),
        ...respuestasSesion
    };

    console.log("Datos enviados:");
    console.log(datos);

    try {

        const respuesta = await fetch("https://default2fc13e34f03f498b982a7cb446e25b.c6.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/62f651e143a64b8c8de2d89db7d3d673/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LdZhbhSWnMdTMH9QG6f3veOtjF3FfXtJiavnT2kfhz0", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        console.log("Código de respuesta:", respuesta.status);

        if (respuesta.ok) {
            console.log("Sesión enviada correctamente.");
        } else {
            const error = await respuesta.text();
            console.error("Error del flujo:", error);
        }

    } catch (error) {

        console.error("Error al conectar con Power Automate:", error);

    }

}

function handleSelection(option, stepId) {
  addMessage(option.label, "user");
  respuestasSesion[chatFlow[stepId].id] = option.label;

  if (option.response) {
    addMessage(option.response, "bot");
  }

  const nextStepId = option.next;
  if (nextStepId && chatFlow[nextStepId]) {
    setTimeout(() => {
      showStep(nextStepId);
    }, 250);
    return;
  }

  enviarSesion();
  respuestasSesion = {
    Pregunta1: "",
    Pregunta2: "",
    Pregunta3: "",
    Pregunta4: "",
    Pregunta5: "",
    Pregunta6: "",
    Pregunta7: "",
    Pregunta8: ""
  };
  

 setTimeout(() => {
      addMessage("Gracias por chatear! Puedes empezar de nuevo en cualquier momento.", "bot");
      document.getElementById("options").innerHTML = "";
  }, 250);
}

function startChat() {
  addMessage("Hola! Soy un chatbot diseñado para ayudarte con incidentes de FO de metal", "bot");
  showStep("start");
}

function resetChat() {
  document.getElementById("messages").innerHTML = "";
  document.getElementById("options").innerHTML = "";
  state.currentStep = "start";
  startChat();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("restart").addEventListener("click", resetChat);
  startChat();
});

