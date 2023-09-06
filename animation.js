document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const perfumeImage = document.getElementById("perfumeImage");
  const images = ["./img/perfume1.jpg", "./img/perfume2.jpg", "./img/perfume3.jpg", "./img/perfume4.jpg", "./img/perfume5.jpg", "./img/perfume6.jpg", "./img/perfume7.jpg", "./img/perfume8.jpg", "./img/perfume9.jpg", "./img/perfume10.jpg", "./img/perfume11.jpg", "./img/perfume12.jpg"];

  let currentIndex = -1; // 현재 이미지 인덱스 초기화
  let previousIndex = -1; // 이전 이미지 인덱스 초기화

  function getRandomImage() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === currentIndex || randomIndex === previousIndex); // 현재 이미지나 이전 이미지와 중복되지 않도록 반복

    previousIndex = currentIndex;
    currentIndex = randomIndex;
    return images[currentIndex];
  }

  function slideImage() {
    const selectedImage = getRandomImage();
    perfumeImage.src = selectedImage;
  }

  setInterval(slideImage, 1000);
});