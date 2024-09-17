nst canvas = document.getElementById('gameCanvas');
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

console.log('Игра загружается');

// Базовые параметры игры
let gameObjects = [];

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameObjects.forEach(obj => {
        obj.y += obj.speed;
        if (obj.y > canvas.height) {
            obj.y = 0;
        }
        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x, obj.y, obj.size, obj.size);
    });

    console.log('Игра обновляется');
    requestAnimationFrame(updateGame);
}

function addObject() {
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

console.log('Игра загружается');

// Базовые параметры игры
let gameObjects = [];

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameObjects.forEach(obj => {
        obj.y += obj.speed;
        if (obj.y > canvas.height) {
            obj.y = 0;
        }
        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x, obj.y, obj.size, obj.size);
    });

    console.log('Игра обновляется');
    requestAnimationFrame(updateGame);
}

function addObject() {
    gameObjects.push({
        x: Math.random() * canvas.width,
        y: 0,
        size: 20,
        speed: 2 + Math.random() * 3,
        color: 'red'
    });
    console.log('Добавлен новый объект');
}

console.log('Запуск игры');
setInterval(addObject, 1000);
updateGame();

console.log('Игра загружается');

// Базовые параметры игры
let gameObjects = [];

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameObjects.forEach(obj => {
        obj.y += obj.speed;
        if (obj.y > canvas.height) {
            obj.y = 0;
        }
        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x, obj.y, obj.size, obj.size);
    });

    console.log('Игра обновляется');
    requestAnimationFrame(updateGame);
}

function addObject() {
    gameObjects.push({
        x: Math.random() * canvas.width,
        y: 0,
        size: 20,
        speed: 2 + Math.random() * 3,
        color: 'red'
    });
    console.log('Добавлен новый объект');
}

console.log('Запуск игры');
setInterval(addObject, 1000);
updateGame();
    gameObjects.push({
        x: Math.random() * canvas.width,
        y: 0,
        size: 20,
        speed: 2 + Math.random() * 3,
        color: 'red'
    });
    console.log('Добавлен новый объект');
}

console.log('Запуск игры');
setInterval(addObject, 1000);
updateGame();
const ctx = 
canvas.getContext('2d');

console.log('Игра загружается');

// Базовые параметры игры
let gameObjects = [];

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameObjects.forEach(obj => {
        obj.y += obj.speed;
        if (obj.y > canvas.height) {
            obj.y = 0;
        }
        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x, obj.y, obj.size, 
obj.size);
    });

    console.log('Игра обновляется');
    requestAnimationFrame(updateGame);
}

function addObject() {
    gameObjects.push({
        x: Math.random() * canvas.width,
        y: 0,
        size: 20,
        speed: 2 + Math.random() * 3,
        color: 'red'
    });
    console.log('Добавлен новый объект');
}

console.log('Запуск игры');
setInterval(addObject, 1000);
updateGame();
etElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Базовые параметры игры
let gameObjects = [];

// Функция для обновления состояния игры
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Логика падения объектов
    gameObjects.forEach(obj => {
        obj.y += obj.speed;
        if (obj.y > canvas.height) {
            obj.y = 0;
        }
        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x, obj.y, obj.size, obj.size);
    });

    // Вызываем обновление игры снова через requestAnimationFrame
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

// Устанавливаем безопасный интервал для добавления объектов
setInterval(addObject, 1000);

// Запускаем игру
updateGame();
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Базовые параметры игры
let gameObjects = [];

// Функция для обновления состояния игры
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Логика падения объектов
    gameObjects.forEach(obj => {
        obj.y += obj.speed;
        if (obj.y > canvas.height) {
            obj.y = 0;
        }
        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x, obj.y, obj.size, obj.size);
    });

    // Вызываем обновление игры снова через requestAnimationFrame
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

// Устанавливаем безопасный интервал для добавления объектов
setInterval(addObject, 1000);

// Запускаем игру
updateGame();

