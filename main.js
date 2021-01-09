const { Client } = require ('discord.js');
const client = new Client();
client.once ('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});
client.on('message', (message)=>{

    if (message.author.tag==='darkman899#6697') {
        message.react('🚮');
    }
   /* else {
        message.react('👍');
    }*/
} );








client.login('Nzk3NDUyNDU2MTE1OTYxODc3.X_mreQ.IDvqQimfXAMgEzb-L4le-0qmkt');
