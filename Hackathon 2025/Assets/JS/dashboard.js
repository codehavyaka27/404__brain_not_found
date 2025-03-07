document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.getElementById("chatbot");
  const openChatbot = document.getElementById("open-chatbot");
  const closeChatbot = document.getElementById("close-chatbot");
  const messagesContainer = document.getElementById("chatbot-messages");
  const userInput = document.getElementById("user-input");
  const sendMessageButton = document.getElementById("send-message");

  // Open the chatbot
  openChatbot.addEventListener("click", () => {
    chatbot.style.display = "block";
    openChatbot.style.display = "none";
  });

  // Close the chatbot
  closeChatbot.addEventListener("click", () => {
    chatbot.style.display = "none";
    openChatbot.style.display = "block";
  });

  // Handle sending messages
  sendMessageButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Display user message
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user-message";
    userMessageElement.textContent = userMessage;
    messagesContainer.appendChild(userMessageElement);

    // Clear input
    userInput.value = "";

    // Simulate bot response
    setTimeout(() => {
      const botMessageElement = document.createElement("div");
      botMessageElement.className = "message bot-message";
      botMessageElement.textContent = "Thanks for your message! I'll get back to you.";
      messagesContainer.appendChild(botMessageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);
  }
});
