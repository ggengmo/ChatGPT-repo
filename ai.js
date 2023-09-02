document.addEventListener("DOMContentLoaded", function () {
  const $recommendButton = document.getElementById('recommendButton');
  const $season = document.getElementById('season');
  const $favoriteScent = document.getElementById('favoriteScent');
  const $age = document.getElementById('age');
  const $genderMale = document.getElementById('male');
  const $genderFemale = document.getElementById('female');
  const $recommendation = document.getElementById('recommendation');

  $recommendButton.addEventListener('click', getPerfumeRecommendation);

  function getPerfumeRecommendation() {
    const season = $season.value;
    const favoriteScent = $favoriteScent.value;
    const age = $age.value;
    const gender = $genderMale.checked ? "male" : ($genderFemale.checked ? "female" : "unspecified"); // 성별 선택하지 않았을 때 "unspecified"로 설정

    // 사용자 입력 데이터
    const userMessage = `향수 추천: 계절=${season}, 향=${favoriteScent}, 나이=${age}, 성별=${gender}`;

    // 학습 데이터
    const trainingData = [
      {
        "role": "system",
        "content": "assistant는 향수 전문가인 시향사 입니다."
      },
      // 남자와 여자 향수 데이터를 추가하는 부분
      // 남자 향수 데이터 추가
      {
        "role": "user",
        "content": "남자 향수 추천해 줘."
      },
      {
        "role": "assistant",
        "content": "남자를 위한 향수 추천을 시작합니다."
      },
      // 남자 향수에 대한 추가 데이터를 작성하세요.

      // 여자 향수 데이터 추가
      {
        "role": "user",
        "content": "여자 향수 추천해 줘."
      },
      {
        "role": "assistant",
        "content": "여자를 위한 향수 추천을 시작합니다."
      },
      // 여자 향수에 대한 추가 데이터를 작성하세요.
      // 나머지 학습 데이터 계속 추가

    ];

    // API 요청 데이터 준비
    const requestData = [
      {
        role: "user",
        content: userMessage
      },
      // 학습 데이터를 추가합니다.
      ...trainingData
    ];

    // API 호출
    fetch('https://estsoft-openai-api.jejucodingcamp.workers.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.choices && data.choices.length > 0) {
        const assistantReply = data.choices[0].message.content;
        showRecommendation(assistantReply);
      } else {
        console.error('API 응답 데이터가 올바르지 않습니다.');
      }
    })
    .catch(error => {
      console.error('API 요청 에러:', error);
    });
  }

  function showRecommendation(message) {
    const recommendationBubble = document.createElement('div');
    recommendationBubble.classList.add('chat-bubble', 'assistant-bubble');
    recommendationBubble.textContent = message;
    $recommendation.appendChild(recommendationBubble);
  }
});
