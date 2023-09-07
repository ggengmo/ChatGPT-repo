import { Spinner } from './spin.js';

document.addEventListener("DOMContentLoaded", function () {
  const $recommendButton = document.getElementById('recommendButton');
  const $season = document.getElementById('season');
  const $favoriteScent = document.getElementById('favoriteScent');
  const $age = document.getElementById('age');
  const $genderMale = document.getElementById('male');
  const $genderFemale = document.getElementById('female');
  const $recommendation = document.getElementById('recommendation');

  const trainingData = [
    {
      "role": "system",
      "content": "assistant는 향수 전문가인 조향사 입니다."
    }
  ];

  $recommendation.setAttribute('contenteditable', 'false');
  $recommendation.style.cursor = 'not-allowed';
  $recommendation.addEventListener('click', function (event) {
    event.preventDefault();
  });

  $recommendButton.addEventListener('click', function () {
    $recommendButton.disabled = true;
    $recommendation.innerHTML = '';
    getPerfumeRecommendation();
  });

  // 아래 코드를 추가하여 스피너 관련 함수를 정의합니다.
  function spinnerStart() {
    let createSpinDiv = document.createElement("div");
    createSpinDiv.setAttribute("id", "spinnerContainer1000");
    let createSpinDivStyle = "width:100px; height:100px; margin:0 auto; padding:0; border:none;";
    createSpinDivStyle = createSpinDivStyle + " float:top; position:relative; top:40%;";
    createSpinDiv.setAttribute("style", createSpinDivStyle);
    $recommendation.appendChild(createSpinDiv);

    let opts = {
      lines: 10,
      length: 10,
      width: 15,
      radius: 42,
      scale: 0.65,
      corners: 1,
      color: '#007BFF',
      fadeColor: 'transparent',
      opacity: 0.05,
      rotate: 0,
      direction: 1,
      speed: 1,
      trail: 74,
      fps: 30,
      zIndex: 2e9
    };

    let target = document.getElementById("spinnerContainer1000");
    let spinner = new Spinner(opts).spin(target);
  }

  function spinnerStop() {
    try {
      let tagId = document.getElementById("spinnerContainer1000");
      $recommendation.removeChild(tagId);
    }
    catch (exception) {
      console.error("catch : " + "not find spinnerContainer1000");
    }
  }


  function showRecommendationDetails(perfumeDetails) {
    // 추천된 향수에 대한 상세 설명을 보여주는 함수
    const recommendationDetailsBubble = document.createElement('div');
    recommendationDetailsBubble.classList.add('chat-bubble', 'assistant-bubble');
  
    // 추천 향수 정보 추출
    const name = perfumeDetails.name;
    const description = perfumeDetails.description;
    const notes = perfumeDetails.notes;
  
    // 향수 추천 설명을 구성
    const formattedMessage = `
      ${seasonSelect.value}에 어울리는 ${favoriteScentSelect.value} 향을 가진 향수를 추천해드리겠습니다. 
      ${gender.value}이며 ${age}세 이신 경우에는 다음과 같은 향수를 추천해드립니다:
      ${name} - ${description}: ${notes}
    `;
  
    recommendationDetailsBubble.textContent = formattedMessage;
    $recommendation.appendChild(recommendationDetailsBubble);
  }

  function getPerfumeRecommendation() {
    const season = $season.value;
    const favoriteScent = $favoriteScent.value;
    const age = $age.value;

    let gender = "";
    if ($genderMale.checked) {
      gender = "male";
    } else if ($genderFemale.checked) {
      gender = "female";
    } else {
      // 남성 또는 여성 라디오 버튼 중 하나를 선택하지 않았을 경우
      alert("성별을 선택하세요.");
      return;
    }

    // 사용자 입력 데이터
    const userMessage = `향수 추천: 계절=${season}, 향=${favoriteScent}, 나이=${age}, 성별=${gender}`;

    // 남성 또는 여성 향수 데이터를 선택하여 추가
    if (gender === "male") {
      // 남성 향수 데이터 추가
      trainingData.push(
        {
          "role": "user",
          "content": userMessage
        }, {
          "role": "assistant",
          "content": "남자를 위한 향수 추천을 시작합니다."
        },
        // 남자 향수에 대한 추가 데이터
        {
          "role": "assistant",
          "content": "Dior Homme - 디올 옴 : 디올은 고급스러운 향수로 유명하며, 디올 옴 화이트, 디올 옴 인텐스 등 다양한 라인의 향수를 제공합니다."
        }, {
          "role": "assistant",
          "content": "Chanel Bleu de Chanel - 샤넬 블루 드 샤넬 : 샤넬의 블루 드 샤넬은 시트러스와 우디 향이 조화를 이루는 고급스러운 향수로 유명합니다."
        }, {
          "role": "assistant",
          "content": "Creed Aventus - 크리드 아벤투스 : 아벤투스는 과일과 우디 노트가 조화를 이루는 향으로, 특히 자신을 독특하게 표현하고 싶을 때 좋은 선택입니다."
        }, {
          "role": "assistant",
          "content": "Bvlgari Man in Black - 불가리 맨 인 블랙 : 진한 향조와 스파이시한 노트로 구성된 고급스러운 향수입니다."
        }, {
          "role": "assistant",
          "content": "Jo Malone London Wood Sage & Sea Salt - 조말론 우드 세이지 & 씨 솔트 : 시원하고 바다의 향이 느껴지는 자연스러운 향수로, 가볍고 상쾌한 느낌을 원하는 분들에게 적합합니다."
        }, {
          "role": "assistant",
          "content": "Dolce & Gabbana The One for Men - 돌체 앤 가바나 더 원 포맨 : 스파이시하면서도 우디한 향으로, 세련된 남자를 위한 향수입니다."
        }, {
          "role": "assistant",
          "content": "Paco Rabanne 1 Million - 파코라반 원 밀리언 : 화려하고 강렬한 향으로, 자신을 독특하게 표현하고 싶을 때 좋은 선택입니다."
        }, {
          "role": "assistant",
          "content": "Yves Saint Laurent La Nuit de l'Homme - 입생로랑 라 누이트 드 롬므 : 은은한 스파이스와 우디 향이 어우러진 향수로, 로맨틱한 분위기를 연출할 때 인기가 있습니다."
        }, {
          "role": "assistant",
          "content": "Creed Green Irish Tweed - 크리드 그린 아이리쉬 트위드 : 프레쉬한 그린 노트와 시트러스가 조화로운 고급 향수로, 클래식한 남성용 향수 중 하나입니다."
        }, {
          "role": "assistant",
          "content": " Hermès Terre d'Hermès - 에르메스 떼르 데르메스: 미네랄하고 우디한 노트로 풍부한 향을 가진 향수로, 자연과 모험을 연상시킵니다."
        }
      );
    } else if (gender === "female") {
      // 여성 향수 데이터 추가
      trainingData.push(
        {
          "role": "user",
          "content": "userMessage."
        }, {
          "role": "assistant",
          "content": "여자를 위한 향수 추천을 시작합니다."
        },
        // 여자 향수에 대한 추가 데이터
        {
          "role": "assistant",
          "content": "Dolce & Gabbana Light Blue - 돌체 앤 가바나 라이트 블루 : 시트러스와 플로랄 노트가 조화를 이루는 상쾌하고 여성스러운 향수로 유명합니다."
        }, {
          "role": "assistant",
          "content": "Chanel Coco Mademoiselle - 샤넬 코코 마드모아젤 : 세련된 플로랄과 시트러스 노트가 조화로운 향수로, 여성스럽고 우아한 느낌을 선사합니다"
        }, {
          "role": "assistant",
          "content": "Yves Saint Laurent Black Opium - 입생로랑 블랙 오피움 : 다크하고 감각적인 향으로, 커피와 바닐라 노트가 미묘한 매력을 더해줍니다."
        }, {
          "role": "assistant",
          "content": "Marc Jacobs Daisy - 마크제이콥스 데이지 : 상큼하고 꽃향의 미소를 머금은 향수로, 청량감과 여성스러움을 동시에 느낄 수 있습니다."
        }, {
          "role": "assistant",
          "content": "Gucci Bloom - 구찌 블룸 : 화사하고 세련된 꽃향을 가진 향수로, 자연의 아름다움을 상징합니다."
        }, {
          "role": "assistant",
          "content": "Prada Candy - 프라다 캔디 : 달콤하고 감미로운 바닐라와 사탕 노트로 가득 찬 향수로, 여성스러움을 강조합니다."
        }, {
          "role": "assistant",
          "content": "Jo Malone London Peony & Blush Suede - 조말론 피오니 앤 블러쉬 스웨이드 : 피오니와 스웨이드 노트가 조화를 이루는 상쾌한 향수로, 경쾌한 느낌을 줍니다."
        }, {
          "role": "assistant",
          "content": "Dior J'adore - 디올 쟈도르 : 고급스럽고 풍부한 꽃향을 가진 향수로, 여성스러움을 강조하는 선택입니다."
        }, {
          "role": "assistant",
          "content": "Burberry My Burberry - 버버리 마이 버버리 : 잔디와 장미의 조화로운 향을 가진 향수로, 클래식한 분위기를 연출합니다."
        }, {
          "role": "assistant",
          "content": "Givenchy Dahlia Divin - 지방시 달리아 디바인 : 고요하고 우아한 향수로, 달콤한 무스와 꽃향의 결합이 독특합니다."
        }
      );
    }

    // user 메시지를 대화 데이터에 추가
    trainingData.push({
      "role": "user",
      "content": userMessage
    });

    // API 요청 데이터 준비
    const requestData = [
      {
        "role": "user",
        "content": userMessage
      },
      ...trainingData
    ];

    spinnerStart() // 스피너 시작

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
        // 추천된 향수 메시지가 있는 경우
        const assistantReply = data.choices[0].message.content;
        if (assistantReply.startsWith("향수 추천:")) {
          // 향수 추천 메시지인 경우 상세 정보 표시
          showRecommendationDetails(data.choices[0].message);
        } else {
          // 그렇지 않으면 일반적인 답변 표시
          showRecommendation(assistantReply);
        }
      } else {
        console.error('API 응답 데이터가 올바르지 않습니다.');
      }
    })
    .catch(error => {
      console.error('API 요청 에러:', error);
    })
    .finally(() => {
      // API 호출 완료 후 버튼을 다시 활성화
      $recommendButton.disabled = false;
      spinnerStop() // 스피너 정지
    });
  }



  function showRecommendation(message) {
    const recommendationBubble = document.createElement('div');
    recommendationBubble.classList.add('chat-bubble', 'assistant-bubble');
    recommendationBubble.textContent = message;
    $recommendation.appendChild(recommendationBubble);
  }

  const seasonSelect = document.getElementById("season");
  const favoriteScentSelect = document.getElementById("favoriteScent");
  
  seasonSelect.addEventListener("change", () => {
    if (seasonSelect.value !== "ex") {
      seasonSelect.style.color = "black";
    }
  });
  
  favoriteScentSelect.addEventListener("change", () => {
    if (favoriteScentSelect.value !== "ex") {
      favoriteScentSelect.style.color = "black";
    }
  });
});

