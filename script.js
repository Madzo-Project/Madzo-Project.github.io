window.addEventListener("load", function() {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  const content = document.querySelector(".content");

  setTimeout(() => {
    loaderWrapper.style.opacity = "0";

    setTimeout(() => {
      loaderWrapper.style.display = "none";
    }, 500); // Совпадает с transition: 0.5s в CSS
  }, 1500); // Общее время задержки (лоадер крутится 1.5 секунды)
});

document.addEventListener('DOMContentLoaded', function() {
    // Создаём случайные вспышки (метеоры)
    setInterval(createMeteor, 3000);
    
    // Случайные глитчи
    setInterval(randomGlitch, 5000);
});

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.className = 'meteor';
    
    // Случайные начальные позиции
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * 100;
    
    meteor.style.left = `${startX}px`;
    meteor.style.top = `${startY}px`;
    
    document.querySelector('.star-field').appendChild(meteor);
    
    // Удаляем метеор после анимации
    setTimeout(() => {
        meteor.remove();
    }, 2000);
}

function randomGlitch() {
    const glitch = document.querySelector('.glitch-effect');
    glitch.style.opacity = '0.1';
    glitch.style.background = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.1)`;
    
    setTimeout(() => {
        glitch.style.opacity = '0.05';
        glitch.style.background = 'transparent';
    }, 100);
}

// Добавляем стили для метеоров
const style = document.createElement('style');
style.textContent = `
    .meteor {
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 10px 2px white;
        animation: meteorFall 2s linear forwards;
    }
    
    @keyframes meteorFall {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            transform: translate(-200px, 200px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

let progress = 0;
const progressBar = document.querySelector('.progress-bar');
const progressInterval = setInterval(() => {
  progress += 5;
  progressBar.style.width = `${progress}%`;
  
  if (progress >= 100) {
    clearInterval(progressInterval);
  }
}, 150);