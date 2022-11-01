const Discord = require('discord.js');
module.exports = {
    name: 'ghostPing',
    description: "ghost pings user",
    async execute(channel){
        channel.send('<@KIBBY@here>').then(sentMessage => {
            sentMessage.delete(1);
        });

    }
}