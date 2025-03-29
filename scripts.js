const gamesData = {
    'popular-games': [{
            img: './images/tetris.gif',
            alt: 'Tetris',
            title: 'Tetris',
            rating: '★★★★☆',
            description: 'This is a fun and exciting game that will keep you entertained for hours.etris is a classic puzzle game where players rotate falling blocks to form complete lines. It challenges strategic thinking and reflexes, becoming globally popular due to its addictive gameplay.',
            url: 'https://chvin.github.io/react-tetris/'
        }
    ],
    'casual-games': [{
            img: './images/tetris.gif',
            alt: 'Tetris',
            title: 'Tetris',
            rating: '★★★★☆',
            description: 'This is a fun and exciting game that will keep you entertained for hours.etris is a classic puzzle game where players rotate falling blocks to form complete lines. It challenges strategic thinking and reflexes, becoming globally popular due to its addictive gameplay.',
            url: 'https://chvin.github.io/react-tetris/'
        }
    ],
    'puzzle-games': [{
            img: './images/tetris.gif',
            alt: 'Tetris',
            title: 'Tetris',
            rating: '★★★★☆',
            description: 'This is a fun and exciting game that will keep you entertained for hours.etris is a classic puzzle game where players rotate falling blocks to form complete lines. It challenges strategic thinking and reflexes, becoming globally popular due to its addictive gameplay.',
            url: 'https://chvin.github.io/react-tetris/'
    }],
    'other-games': [{
            img: './images/tetris.gif',
            alt: 'Tetris',
            title: 'Tetris',
            rating: '★★★★☆',
            description: 'This is a fun and exciting game that will keep you entertained for hours.etris is a classic puzzle game where players rotate falling blocks to form complete lines. It challenges strategic thinking and reflexes, becoming globally popular due to its addictive gameplay.',
            url: 'https://chvin.github.io/react-tetris/'
    }]
};

function createGameCard(game) {
    return `
        <div class="game-card">
            <img src="${game.img}" alt="${game.alt}">
            <h3>${game.title}</h3>
            <div class="rating">${game.rating}</div>
            <p class="game-description" title="${game.description}">${game.description}</p>
            <button onclick="openGame('${game.alt.toLowerCase()}')">Play Now</button>
        </div>
    `;
}

function renderGames() {
    for (const sectionId in gamesData) {
        const container = document.querySelector(`#${sectionId} .games-container`);
        gamesData[sectionId].forEach(game => {
            container.innerHTML += createGameCard(game);
        });
    }
}

// 初始化渲染
renderGames();

function openGame(gameId) {
    const modal = new bootstrap.Modal(document.getElementById('gameModal'));
    const modalTitle = document.getElementById('gameModalLabel');
    const modalBody = document.getElementById('gameModalBody');
    
    // 查找对应的游戏数据
    const game = Object.values(gamesData).flat().find(g => g.alt.toLowerCase() === gameId);
    
    if (game) {
        modalTitle.textContent = `Starting ${game.title}`;
        modalBody.innerHTML = `<iframe src="${game.url}" style="width: 100%; height: 100%; border: none;"></iframe>`;
        modal.show();
    }
}

// 修复图片点击事件监听器
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.game-card img').forEach(img => {
        img.addEventListener('click', function() {
            const gameId = this.alt.toLowerCase();
            openGame(gameId);
        });
    });
});

// 添加滚动事件监听器
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});