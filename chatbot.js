let knowledgeBase = {};

fetch("knowledge.json")
    .then(response => response.json())
    .then(data => {
        knowledgeBase = data;
        console.log("Knowledge base loaded successfully:", knowledgeBase);
    })
    .catch(error => {
        console.error("Error loading knowledge.json:", error);
    });document.addEventListener("DOMContentLoaded", function () {
  const chatbotButton = document.getElementById("chatbot-button");
  const chatbotWindow = document.getElementById("chatbot-window");
  const closeChatbot = document.getElementById("close-chatbot");
  const sendButton = document.getElementById("send-button");
  const userInput = document.getElementById("user-input");
  const chatbotMessages = document.getElementById("chatbot-messages");

  // OPEN CHATBOT
  chatbotButton.onclick = function () {
    chatbotWindow.style.display = "block";
  };

  // CLOSE CHATBOT
  closeChatbot.onclick = function () {
    chatbotWindow.style.display = "none";
  };

  // Function to add a message
  function addMessage(text, isUser) {
    const messageDiv = document.createElement("div");
    messageDiv.className = isUser ? "user-message" : "bot-message";
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // SEND MESSAGE
  function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    // Show user message
    addMessage(message, true);
    userInput.value = "";

    // Simple bot responses
    const lower = message.toLowerCase();
    let reply = "";

    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      reply = "Hello! 👋 How can I help you today?";
    } else if (lower.includes("course") || lower.includes("program") || lower.includes("courses")) {
      reply = "We offer a variety of courses. Could you tell me which field you are interested in?";
    } else if (lower.includes("fee") || lower.includes("fees") || lower.includes("cost") || lower.includes("tuition")) {
      reply = "I can help you with school fees information. Which course are you asking about?";
    } else if (lower.includes("timetable") || lower.includes("schedule") || lower.includes("knec")) {
      reply = "I can provide information about the KNEC timetable. Do you need the current one?";
    } else if (lower.includes("admission") || lower.includes("apply") || lower.includes("enrol") || lower.includes("enroll")) {
      reply = "For admissions, please visit the Admissions section or contact the office for the latest requirements.";
    } else if (lower.includes("contact") || lower.includes("phone") || lower.includes("email") || lower.includes("location")) {
      reply = "You can contact Arizona International College through the Contact page or the details shown on the website.";
    } else if (lower.includes("thank")) {
      reply = "You're welcome! Feel free to ask if you need anything else.";
    } else {
      reply = "Sorry, I don't have an answer for that yet. Please try asking about courses, fees, timetable, or admissions.";
    }

    // Show bot reply after a short delay (feels more natural)
    setTimeout(function () {
      addMessage(reply, false);
    }, 400);
  }

  // Click Send button
  sendButton.onclick = sendMessage;

  // Press Enter to send
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});