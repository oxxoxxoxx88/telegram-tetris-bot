const { Telegraf, Markup } = require('telegraf');

// Вставь сюда токен своего бота
const bot = new Telegraf('7525550388:AAHBjuI5R-K-ohMjeg9iRPFIOkxX4FCfqGk');

// Инициализация игрового поля (10x20)
let gameBoard = Array.from({ length: 20 }, () => Array(10).fill('⬜')).map(row => row.join(''));

// Функция для отображения поля
function renderBoard(board) {
  return board.join('\n');
}

// Ответ на команду /start
bot.start((ctx) => {
  ctx.reply('Добро пожаловать в Тетрис! Управляйте фигурами с помощью кнопок.', 
    Markup.inlineKeyboard([
      [Markup.button.callback('⬅️', 'left'), Markup.button.callback('⬇️', 'down'), Markup.button.callback('➡️', 'right')],
      [Markup.button.callback('🔄', 'rotate')]
    ])
  );
  ctx.reply(renderBoard(gameBoard)); // Отображение игрового поля
});

// Обработка нажатий кнопок
bot.action('left', (ctx) => {
  ctx.answerCbQuery(); // Ответ на нажатие кнопки
  ctx.reply('Фигура сдвинута влево.');
});

bot.action('right', (ctx) => {
  ctx.answerCbQuery();
  ctx.reply('Фигура сдвинута вправо.');
});

bot.action('down', (ctx) => {
  ctx.answerCbQuery();
  ctx.reply('Фигура опущена.');
});

bot.action('rotate', (ctx) => {
  ctx.answerCbQuery();
  ctx.reply('Фигура повернута.');
});

// Запуск бота
bot.launch();

console.log('Бот запущен');
