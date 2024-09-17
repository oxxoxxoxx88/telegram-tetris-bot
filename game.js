const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Базовые параметры игры
let gameObjects = [];

// Функция для обновления состояния игры
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, 
canvas.height);
    
    // Логика падения объектов
    gameObjects.forEach(obj => {
        obj.y += obj.speed;
        if (obj.y > canvas.height) {
            obj.y = 0;
        }
        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x, obj.y, 
obj.size, obj.size);
    });
    requestAnimationFrame(updateGame);
}

// Добавляем объект в игру
function addObject() {
    gameObjects.push({
        x: Math.random() * canvas.width,
        y: 0,
        size: 20,
        speed: 2 + Math.random() * 3,
        color: 'red'
    });
}

// Запускаем игру
setInterval(addObject, 1000);
updateGame();

