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

let conversationData = [
  {
    "role": "system",
    "content": "assistant는 향수 전문가인 시향사 입니다."
  }, {
    "role": "user",
    "content": "남자 향수 추천해 줘."
    // 남자 향수 추천 10개
  }, {
    "role": "assistant",
    "content": "새벽이슬에 젖은 신선한 풀잎과 울창한 숲의 시원한 향. 푸른 숲의 한가운데에 있는 듯한 분위기를 연출하는 다니엘트루스 블루 세이지 블라썸은 어떤가요?"
  }, {
    "role": "user",
    "content": "남자 향수 추천해 줘."
  }, {
    "role": "assistant",
    "content": "남성과 부드러움을 모두 느끼게하는 힘차고 섬세한 향입니다. 우디와 향신료가 강조되고 독특한 온기를 느끼게 하는 샤넬 안테우스는 어떤가요?"
  }, {
    "role": "user",
    "content": "남자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "상쾌한 시트러스가 느껴지고 따듯하고 관능적인 느낌을 자아내는 우디 아로마틱향인 블루 드 샤넬 오드빠르펭은 어떤가요?"
  }, {
    "role": "user",
    "content": "남자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "성숙하면서도 시트러스가 느껴지며 댄디한 오우드 나무와 프랄린향이 어울러진 조말론 오드 앤 베르가못은 어떤가요?"
  }, {
    "role": "user",
    "content": "남자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "상쾌한 시트러스 향이 느껴지며, 따듯하고 관능적인 느낌을 자아내며오렌지의 껍질에 살짝 닿은 아오리 사과의 수분 머금은 시원한 청량감을 느낄 수 있는 톰포드 네롤리 포르토피노는 어떤가요?"
  }, {
    "role": "user",
    "content": "남자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "쌉싸름한 묵직함과 해조류의 청량감을 느낄 수 있는 톰포드 코스타 아쥬라는 어떤가요?"
  }, {
    "role": "user",
    "content": "남자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "차분하고 머스키하게 퍼지는 과일의 달달함을 느낄 수 있고 향기로운 베리와 산뜻한 시트러스의 조화로 아주 독특한 느낌을 주는 딥디크 베티베리오는 어떤가요?"
  }, {
    "role": "user",
    "content": "남자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "시드러스, 나무 및 암브량과 함께 끝내 결합되는 예리한 향과 고급스러움과 남성적인 느낌을 동시에 느낄 수 있는 입생로랑 라 뉘드 옴므는 어떤가요?"
  }, {
    "role": "user",
    "content": "남자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "레몬, 라임, 베르가못 등의 시트러스 과일 향과 진저, 멘톨 등의 향신료가 조화롭게 어우러져 경쾌하고 상쾌한 느낌을 주는 크리드 로얄워터는 어떤가요?"
  }, {
    "role": "user",
    "content": "남자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "상쾌하면서도 섹시하고 향기로운 향과 우디한 노트와 허브 향이 더해져 깊이 있는 향을 느낄 수 있는 조말론 머르 앤 통카 코롱 인텐스는 어떤가요?"
  }, {
    "role": "user",
    "content": "여자 향수 추천해 줘."
    // 여자 향수 추천 10개
  }, {
    "role": "assistant",
    "content": "상쾌한 시트러스 노트와 꽃향기, 그리고 우디하고 따뜻한 베이스 노트가 조화롭게 어우러져 독특하고 아찔한 느낌을 주는 랄프로렌 로맨스는 어떤가요?"
  }, {
    "role": "user",
    "content": "여자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "청량한 하늘에서 하늘거리며 내려온 하얀 은방울꽃을 투명한 이슬로 살포시 감싼 것 같은 밝은 분위기의 쾌활한 꽃과일 향기가 나며 캐쥬얼한 느낌을 주는 미우미우 로블루는 어떤가요?"
  }, {
    "role": "user",
    "content": "여자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "생동감 넘치면서도 부드럽게 다가오는 플로럴 향과 갓 피어난 꽃들의 다채롭고 자연스러운 매력을 담고 있는 미스 디올 블루밍 부케는 어떤가요?"
  }, {
    "role": "user",
    "content": "여자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "신선하고 산뜻한 향수. 신선한 만다린과 눈부시게 반짝이는 은방울꽃 어코드가 만나 생기 넘치는 바스크 해변의 분위기를 느낄 수 있는 레 조 드 샤넬 비아리츠는 어떤가요?"
  }, {
    "role": "user",
    "content": "여자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "가을석양이 지고 있는 따뜻한 햇살정도의 따뜻함과 오일리함을 갖고 있는 모던하고 우아한 느낌을 주는 에르메스 트윌리는 어떤가요?"
  }, {
    "role": "user",
    "content": "여자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "하얀 우유 거품이 담겨져 있는 욕조에 들어갔다가 일어났을 때 흐르는 우유 거품의 부드러움을 담은 은밀한 머스크 향이 나는 나르시소 로드리게즈 퓨어 머스크는 어떤가요?"
  }, {
    "role": "user",
    "content": "여자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "쟈스민 앱솔루트와 로즈 에센스의 생기로 빛나는 감각적인 향을 주는 샤넬 샹스 오 땅드르는 어떤가요?"
  }, {
    "role": "user",
    "content": "여자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "포도를 갈아서 만든 것 같은 상큼 달콤함이 스파클링 하게 오르다가 시간이 지나면 바닐라의 고소한 향기를 작약 꽃잎에 부드럽게 바른 듯한 향을 주는 돌체앤가바나 돌체 피오니는 어떤가요?"
  }, {
    "role": "user",
    "content": "여자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "쟈스민과 일랑일랑, 오렌지 블라썸 그리고 그라스 튜베로즈의 네 가지 꽃향기가 어우러져, 자신만의 길을 만들어가는 빛나는 여성을 위한 향을 주는 샤넬 가브리엘는 어떤가요?"
  }, {
    "role": "user",
    "content": "여자 향수 추천해 줘."
  },{
    "role": "assistant",
    "content": "봄비가 내린 뒤 꽃들의 싱그럽고 투명한 향을 담았으며 싱그럽고 신선한 백합, 작약, 재스민의 조화에 이국적인 베이 로즈 향이 더해진 플로럴 향을 주는 에스티로더 플레져는 어떤가요?"
  }
];


console.log(conversationData);

function addUserMessage(message) {
  conversationData.push({
    "role": "user",
    "content": message
  });

  const userBubble = document.createElement('div');
  userBubble.classList.add('chat-bubble', 'user-bubble');
  userBubble.textContent = message;
  $chatArea.appendChild(userBubble);
}

function addAssistantMessage(message) {
  conversationData.push({
    "role": "assistant",
    "content": message
  });

  const assistantBubble = document.createElement('div');
  assistantBubble.classList.add('chat-bubble', 'assistant-bubble');
  assistantBubble.textContent = message;
  $chatArea.appendChild(assistantBubble);
}

function sendUserMessageToAPI(message) {
  const apiUrl = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/';

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(conversationData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.choices && data.choices.length > 0) {
      const assistantReply = data.choices[0].message.content;
      addAssistantMessage(assistantReply);
    } else {
      console.error('API 응답 데이터가 올바르지 않습니다.');
    }
  })
  .catch(error => {
    console.error('API 요청 에러:', error);
  });
}
