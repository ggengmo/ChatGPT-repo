const $sendButton = document.getElementById('send-button');
const $userInput = document.getElementById('user-input');
const $chatArea = document.getElementById('chat-area'); // 수정된 부분

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
  
  const formattedMessage = `
    <p>흐린 날씨에 어울리는 남자 향수로는 다음과 같은 제품들을 추천해 드립니다</p>
    <ol>
      <li>Dior Homme Intense: 묵직하고 풍부한 아로마의 플로랄 향이 흐린 날씨와 잘 어울리며, 세련된 남자성을 강조합니다</li>
      <li>Tom Ford Tobacco Vanille: 흡연가의 향기를 연상시키는 담배와 바닐라의 조화로운 향이 흐린 날씨의 분위기와 어울립니다.</li>
      <li>Chanel Allure Homme Sport: 시트러스와 플로럴의 경쾌한 향이 흐린 날씨의 우울한 분위기를 밝히며, 활기찬 느낌을 줍니다.</li>
      <li>Giorgio Armani Code: 스파이시한 향과 우디 노트가 조화롭게 어우러진 이 향수는 흐린 날씨에 차분한 분위기를 연출합니다.</li>
      <li>Yves Saint Laurent La Nuit de L'homme: 감귤향과 스파이시한 향조의 조화로운 향기로 흐린 날씨에 적합한 남성적인 분위기를 연출할 수 있습니다.</li>
    </ol>
    <p>이 중 원하시는 향기를 선택하여 흐린 날씨에 어울리는 향수를 찾아보세요.</p>
  `;
  
  assistantBubble.innerHTML = formattedMessage;

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
      addAssistantMessage(`${assistantReply}`, true); // 수정된 부분
    } else {
      console.error('API 응답 데이터가 올바르지 않습니다.');
    }
  })
  .catch(error => {
    console.error('API 요청 에러:', error);
  });
}
