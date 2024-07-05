function sendMessage() {
    const inputBox = document.getElementById('user-input');
    const message = inputBox.value.trim();

    if (message !== '') {
        displayMessage(message, 'user-message');
        inputBox.value = '';
        
        // Simulate a bot response with a delay
        setTimeout(() => {
            displayBotResponse(message);
        }, 1000);
    }
}

function displayMessage(message, className) {
    const chatContent = document.getElementById('chat-content');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${className}`;
    messageDiv.textContent = message;
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function displayBotResponse(userMessage) {
    const responses = [
        { type: 'text', content: 'Hello! How can I help you?' },
        { type: 'text', content: 'Here is some information for you.' },
        { type: 'image', content: 'https://via.placeholder.com/150' }
    ];

    // Select a random response
    const response = responses[Math.floor(Math.random() * responses.length)];

    if (response.type === 'text') {
        displayMessage(response.content, 'bot-message');
    } else if (response.type === 'image') {
        displayImage(response.content, 'bot-message');
    }
}

function displayImage(url, className) {
    const chatContent = document.getElementById('chat-content');
    const img = document.createElement('img');
    img.className = `chat-image ${className}`;
    img.src = url;
    chatContent.appendChild(img);
    chatContent.scrollTop = chatContent.scrollHeight;
}
