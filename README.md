# 향수 추천 ChatGPT
- 향수 추천_AI
## 목차
1. 목표와 기능
2. 개발 환경 및 배포 URL
3. 프로젝트 구조
4. UI
5. 기능
6. 개발 이슈
7. 개발하면서 느낀점
## 1. 목표와 기능
### 1.1 목표
- 남성과 여성을 위한 데일리 향수 추천 AI
- 사용자의 취향의 따라 계절, 좋아하는 향, 나이, 성별에 따른 향수를 추천
### 1.2 기능
- 사용자가 계절, 좋아하는 향, 나이 및 성별을 입력 후 추천받기 버튼을 누르면 ChatGPT API를 통해 향수를 추천해줍니다.

![마인드맵](https://github.com/ggengmo/ChatGPT-repo/assets/142369113/4bd0bcb7-60b1-403f-a9f5-cf7022855513)
## 2. 개발 환경 및 배포 URL
### 2.1 개발 환경
- Visual Studio Code, HTML, CSS, JavaScript
### 2.2 배포 URL
- https://ggengmo.github.io/ChatGPT-repo/

## 3. 프로젝트 구조
### 3.1 프로젝트 구조
```
 📦Perfume_AI
  ┣ 📂img
  ┃ ┣ 📜MOMO_logo.png
  ┃ ┣ 📜pepe.png
  ┃ ┣ 📜perfume1.jpg
  ┃ ┣ 📜perfume10.jpg
  ┃ ┣ 📜perfume11.jpg
  ┃ ┣ 📜perfume12.jpg
  ┃ ┣ 📜perfume2.jpg
  ┃ ┣ 📜perfume3.jpg
  ┃ ┣ 📜perfume4.jpg
  ┃ ┣ 📜perfume5.jpg
  ┃ ┣ 📜perfume6.jpg
  ┃ ┣ 📜perfume7.jpg
  ┃ ┣ 📜perfume8.jpg
  ┃ ┗ 📜perfume9.jpg
  ┣ 📜animation.js
  ┣ 📜index.html
  ┣ 📜Perfume.css
  ┣ 📜Perfume.js
  ┗ 📜spin.js
```
## 4. UI
### 4.1 MOCKUP 페이지
- 웹 테스트 URL : https://ovenapp.io/view/m8uDgSzJDQAKxt01SEM4GFB5W32dJt8U/uMNyA
- 메인페이지
![01_메인 화면](https://github.com/ggengmo/ChatGPT-repo/assets/142369113/50b5f7e3-0072-416a-b145-06b9f6724c83)
- 계절 선택
![02_계절 선택](https://github.com/ggengmo/ChatGPT-repo/assets/142369113/efa74252-b8f2-41ed-ac4a-830f5ffe2969)
- 좋아하는 향 선택
![03_좋아하는 향 선택](https://github.com/ggengmo/ChatGPT-repo/assets/142369113/26150116-c622-4b4c-a320-8bba07dcf4b1)
- 나이와 성별 선택
![04_나이와 성별 선택](https://github.com/ggengmo/ChatGPT-repo/assets/142369113/d5dabe7a-6f40-4ef7-aaeb-20a523003c8e)
- 추천받기 버튼 누른 후 응답 로딩 스피너
![05_추천받기 눌렀을 때 로딩 스피너](https://github.com/ggengmo/ChatGPT-repo/assets/142369113/85e44bbc-7706-4c19-b63a-270b66263324)
- AI 응답 예시
![06_AI 응답 예시](https://github.com/ggengmo/ChatGPT-repo/assets/142369113/2ab69878-2d86-47e8-9434-c616ac428cd7)

## 5. 기능
### 5.1 메인 기능
- 사용자가 계절, 좋아하는 향, 나이 및 성별을 입력한 후 추천받기를 누르면 로딩 후 AI가 향수를 추천
![기능](https://github.com/ggengmo/ChatGPT-repo/assets/142369113/aa69754c-296d-4125-a051-4eda3d4d467f)

### 5.2 추가 기능
- 추천받은 향수가 있는 상태로 다른 조건으로 추천받기를 하면 바뀐 조건으로 다시 추천하며
- 이미지 애니매이션을 스타일링하고 같은 이미지가 반복되지않게 함수를 만들었습니다
![추가기능](https://github.com/ggengmo/ChatGPT-repo/assets/142369113/766d3ce3-2263-4fc8-ae89-c5ba3766e9fa)
```
let currentIndex = -1; // 현재 이미지 인덱스 초기화
  let previousIndex = -1; // 이전 이미지 인덱스 초기화

  function getRandomImage() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * images.length); //randomIndex 값이 현재 이미지의 인덱스 currentIndex나 이전 이미지의 인덱스 previousIndex와 같다면, 다시 무작위 인덱스를 생성하고 반복합니다.
    } while (randomIndex === currentIndex || randomIndex === previousIndex); // 현재 이미지나 이전 이미지와 중복되지 않도록 반복
  
    previousIndex = currentIndex;
    currentIndex = randomIndex;
    return images[currentIndex];
  }
```
## 6.개발 이슈
### 6.1 select 태그를 placeholder 처럼 스타일링 하기
- 해당 코드처럼 select에 placeholder처럼 스타일링 하고 싶었지만 placeholder은 input 태그여서 적용이 안되었습니다.
```
<label for="season"><b>계절</b></label>
          <select id="season" required>
            <option value="ex" selected disabled>
              좋아하시는 계절을 선택해 주세요!
            </option>
<label for="favoriteScent"><b>좋아하는 향</b></label>
          <select id="favoriteScent" required>
            <option value="ex" selected disabled>
              좋아하시는 향을 선택해 주세요!
            </option>
          </select>
```

- CSS와 JavaScript에 해당 코드를 입력하면서 placeholder 처럼 스타일링하여 해결했습니다.

```
// 초기 텍스트 색상이 회색으로 설정. 사용자가 옵션을 선택할 때 마다 선택된 옵션의 색은 검은색으로 변경합니다.
#season, #favoriteScent {
  color: grey;
}
option {
  color: black
}
option[value='ex'][disabled]{
  display: none;
}

const seasonSelect = document.getElementById("season");
  const favoriteScentSelect = document.getElementById("favoriteScent");
  //옵션을 선택하면 change 함수가 발생하여 드롭다운 메뉴에서 선택한 값이 ex가 아닌경우에만 텍스트 색상이 검은색으로 변경합니다
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
```

### 6.2 div 태그를 placeholder 처럼 스타일링 하기

- recommendation에도 placeholder처럼 스타일링을 하고싶었지만 input 태그여서 해당 코드를 CSS에 입력하여 해결했습니다.

```
<div id="recommendation" contenteditable placeholder="AI가 가상 제품을 추천해주거나 영어 이름과 한글 이름이 다를 수 있으니 주의하세요!"></div>

[placeholder]:empty:before {
  display: block;
  content: attr(placeholder);
  color: #a6a6a6;
}
```
## 7. 개발하면서 느낀점
- 오르미 3기 시작 후 처음 하는 프로젝트이기도 하고 잘해보고 싶은 마음이 컸던 만큼 처음 생각했던 기능들 외에도 추가적으로 다른 기능들도 구현하고 싶은 욕심이 있었지만 시간이 부족해서 못한 게 아쉬웠습니다.
- 물론 처음에 생각했던 기능에서 여러 기능들을 추가하기는 했지만 좀 더 잘해보고 싶다는 마음이 커서 아쉽지만 그래도 처음에 생각했던 기능이 구현이 되는 걸 확인을 하니 그래도 필요한 기능들이 구현되는 것이 중요하단 걸 깨달았습니다.
- 나중에 조금 더 공부를 하여 지금보다 실력이 늘어나게 된다면 첫 프로젝트인 '향수 추천_ AI'를 좀 더 다듬고 싶다는 생각이 들었습니다.
- 그리고 API를 연동하여 만들어보니 배울 것도 많았고 생각보다 많은 걸 할 수 있을 거란 생각이 들어 좀 더 많은 서비스를 만들어보고 싶었습니다.
