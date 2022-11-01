const { VoiceChannel } = require("discord.js");
const { joinVoiceChannel, getVoiceConnection,  } = require('@discordjs/voice');

module.exports = {
    name: 'joinVoice',
    async execute(oldState, newState){
        const channel = newState.channel
        if (channel !== null){
            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
            });
        }
        else{
            console.log(oldState)
            console.log(oldState.channel.guild.id)
            const connection = getVoiceConnection(oldState.channel.guild.id);
            connection.destroy();
        }
    }
}