module.exports = {
    name: 'kibbyText',
    description: "kibby text command",
    async execute(message){
        message.channel.send('some message');
    }
}