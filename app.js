const Discord = require('discord.js');

const client = new Discord.Client();

var locations = ['Haunted Hills', 'Junk Junction', 'The Block', 'Loot Lake', 'Pleasant Park', 'Snobby Shores', 'Tilted Towers', 'Happy Hamlet', 'Polar Peak', 'Frosty Flights', 'Lucky Landing', 'Shifty Shafts', 'Fatal Fields', 'Paradise Palms', 'Retail Row', 'Salty Springs', 'Dusty Divot', 'Lazy Lagoon', 'Lonely Lodge', 'Sunny Steps'];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



client.on('ready', () => {
    console.log('I am ready!');
});



client.on('message', message => {
    if (message.content === '!drop') {
        randomNum = getRandomInt(1, 20);
        message.reply('You should land '+locations[randomNum]+' this time.\nGood Luck.Have Fun!');
    }
});


client.login(process.env.BOT_TOKEN);
