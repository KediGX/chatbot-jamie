document.addEventListener("DOMContentLoaded", function () {
  var sendButton = document.getElementById("send-btn");
  var messageContainer = document.getElementById("message-container");
  var userInputField = document.getElementById("user-input");
  sendButton.disabled = true;

  sendButton.addEventListener("click", function () {
    sendMessage();
  });

  userInputField.addEventListener("input", function () {
    sendButton.disabled = !this.value.trim();
  });

  userInputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && !sendButton.disabled) {
      sendMessage();
      e.preventDefault();
    }
  });

  appendMessage(
    "Hello, nice to meet you!",
    "jamie",
    new Date().toLocaleString()
  );

  function sendMessage() {
    var userInput = userInputField.value.trim();
    if (!userInput) return;
    var response = "";
    var currentTime = new Date().toLocaleString();

    if (userInput.toUpperCase() === userInput && userInput !== "") {
      response = userInput.endsWith("?")
        ? "Please give me some time to resolve the issue."
        : "Please remain calm.";
    } else if (userInput.toLowerCase().includes("jamie")) {
      response = "Can I help you?";
    } else if (userInput.endsWith("?")) {
      response = "Yes";
    } else {
      response = "Sorry, I don’t understand";
    }

    appendMessage(userInput, "user", currentTime);

    appendMessage(response, "jamie", currentTime);

    userInputField.value = "";
    sendButton.disabled = true;
    window.scrollTo(0, document.body.scrollHeight);
  }

  function appendMessage(text, sender, time) {
    var messageSet = document.createElement("div");
    messageSet.classList.add("message-set");

    var bubble = document.createElement("div");
    bubble.classList.add("message-bubble");

    if (sender === "jamie") {
      messageSet.classList.add("jamie");
    } else {
      messageSet.classList.add("user");
    }

    var messageText = document.createElement("div");
    messageText.innerText = text;

    var timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    timestamp.innerText = time;

    bubble.appendChild(messageText);
    messageSet.appendChild(bubble);
    messageSet.appendChild(timestamp);

    messageContainer.appendChild(messageSet);
    window.scrollTo(0, document.body.scrollHeight);
  }
});
