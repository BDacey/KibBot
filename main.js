const Discord = require('discord.js');


const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] });

const fs = require('fs');

client.commands = new Discord.Collection();

//Targeted User
const isKibby = 150393419959762944

//name of user
const kibbyName = 'George'

const auth = 'AUTHCODEHERE'
//set up commands
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('KibBot Online')
})


client.on('messageCreate', message =>{
    if(message.author.bot) return;
    if(message.author.id == isKibby){
        var number = (Math.round((Math.random() *3)))
        console.log(number)
        if(number == 2){
            client.commands.get('embed').execute(message, Discord)
        }
    }else{
        const command = message.content.toLowerCase().replace(/\s/g, '');
        // console.log(command)
        if(command.includes(kibbyName + 'isgood')|| command.includes( kibbyName +'kibbyisbad')){
           message.channel.send('I 100% agree')
        }
    }
});


client.on('voiceStateUpdate', (oldState, newState) => {
    if (oldState.member.user.id == isKibby){
        client.commands.get('joinVoice').execute(oldState, newState)
    }
    const channel = client.channels.cache.get('326561841730027521')
    const collection = oldState.guild.channels.cache
    var array = [];
    let channels = oldState.guild.channels.cache;
    for (const channel of channels.values()) 
    {

        if(channel.isText()){
            array.push(channel.id);
        }
    }
    if(array.includes('326561841730027521')){
        var number = (Math.round((Math.random() *80)))
        console.log(number)
        if(number == 43){
            client.commands.get('ghostPing').execute(channel)
        }
    }
    else{
        console.log('wrong server')
    }
})


//authenticate
client.login(auth)
