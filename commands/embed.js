const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'embed',
    description: "embed image",
    async execute(message, Discord){
        const newEmbed = new Discord.MessageEmbed()
        if((Math.round((Math.random() *3))) === 2){
            newEmbed.setColor('#DC9226')
            newEmbed.setTitle('soo true I 100 percent agree')
            newEmbed.setImage('https://i.imgur.com/r8k9W91.png')
        }
        else{
            newEmbed.setColor('#DC9226')
            newEmbed.setTitle('please stop :)')
            newEmbed.setImage('https://i.imgur.com/OuKv0tz.png')
        }
        message.channel.send({embeds: [newEmbed]})
    }
}