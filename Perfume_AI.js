const $sendButton = document.getElementById('send-button');
const $userInput = document.getElementById('user-input');
const $chatArea = document.getElementById('chat-area');

$sendButton.addEventListener('click', sendMessage);
$userInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const userMessage = $userInput.value;
  if (userMessage.trim() !== '') {
    addUserMessage(userMessage);
    sendUserMessageToAPI(userMessage);
    $userInput.value = '';
  }
}

function addUserMessage(message) {
  const userBubble = document.createElement('div');
  userBubble.classList.add('chat-bubble', 'user-bubble');
  userBubble.textContent = message;
  $chatArea.insertBefore(userBubble, $chatArea.firstChild);
}

function addAssistantMessage(message, atTop = false) {
  const assistantBubble = document.createElement('div');
  assistantBubble.classList.add('chat-bubble', 'assistant-bubble');
  assistantBubble.textContent = message;
  

  if (atTop) {
    $chatArea.insertBefore(assistantBubble, $chatArea.firstChild);
  } else {
    $chatArea.insertBefore(assistantBubble, $chatArea.firstChild);
  }

  $chatArea.scrollTop = $chatArea.scrollHeight;
}

function sendUserMessageToAPI(message) {
  const apiUrl = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/';

  const requestData = [
    {
      "role": "user",
      "content": message
    }
  ];

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.choices && data.choices.length > 0) {
      const assistantReply = data.choices[0].message.content;
      addAssistantMessage(`${assistantReply}`, true);
    } else {
      console.error('API 응답 데이터가 올바르지 않습니다.');
    }
  })
  .catch(error => {
    console.error('API 요청 에러:', error);
  });
}
