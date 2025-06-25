window.addEventListener("load", function() {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  const content = document.querySelector(".content");

  setTimeout(() => {
    loaderWrapper.style.opacity = "0";

    setTimeout(() => {
      loaderWrapper.style.display = "none";
    }, 500);
  }, 1500);
});

document.addEventListener('DOMContentLoaded', function() {
    setInterval(createMeteor, 3000);
    
    setInterval(randomGlitch, 5000);
});

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.className = 'meteor';
    
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * 100;
    
    meteor.style.left = `${startX}px`;
    meteor.style.top = `${startY}px`;
    
    document.querySelector('.star-field').appendChild(meteor);
    
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

document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    console.time('LoadSingers'); // Начало замера времени
    
    const singersData = [
        {
            id: "sakire",
            name: "Byokiutane Sakire",
            image: "images/sakire.webp"
        },
        {
            id: "dero",
            name: "Karune Dero", 
            image: "images/dero.webp"
        },
        {
            id: "teru",
            name: "Karune Teru",
            image: "images/teru.webp"
        },
        {
            id: "marie",
            name: "Marie Yokunonetsu",
            image: "images/marie.webp"
        },
        {
            id: "mafincheku",
            name: "Amaine Mafincheku", 
            image: "images/mafincheku.webp"
        },
        {
            id: "ikoi",
            name: "Utawararene Ikoi",
            image: "images/ikoi.webp"
        },
        {
            id: "soyaka",
            name: "Ishoraji Soyaka", 
            image: "images/soyaka.webp"
        },
        {
            id: "daichi",
            name: "Daichi Yoshida",
            image: "images/daichi.webp"
        }
    ];

    const container = document.getElementById('singersContainer');
    if (!container) return;
    
    let html = '';
    singersData.forEach(singer => {
        html += `
            <div class="singer-card ${singer.isFormer ? 'former' : ''}" 
                 onclick="window.location='${singer.id}_dl.html'">
                <img src="${singer.image}" alt="${singer.name}" 
                     loading="lazy" class="singer-image">
                <div class="singer-info">
                    <h3>${singer.name}</h3>
                    ${singer.isFormer ? '<span class="former-badge">Бывший участник</span>' : ''}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    console.timeEnd('LoadSingers'); // Конец замера времени
});

// Загрузка страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация аудиоплеера
    const audioPlayer = document.querySelector('audio');
    if (audioPlayer) {
        audioPlayer.volume = 0.7;
    }
    
    // Анимация появления элементов
    const animateElements = () => {
        const elements = document.querySelectorAll('.singer-header, .singer-stats, .voice-sample, .voicebanks');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 150 * index);
        });
    };
    
    // Инициализация анимации
    setTimeout(animateElements, 500);
    
    // Отслеживание кликов по кнопкам загрузки
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            console.log(`Скачивание: ${this.previousElementSibling.textContent}`);
            // Можно добавить analytics или логирование
        });
    });
});