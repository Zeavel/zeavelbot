const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;



var Commandss = new CC.Commands();
var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("." + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}
var vole = 1;

client.setInterval(function play()
{
    var server = client.guilds.get("351491707554103296")
    var channel;
    if(client.guilds.get("351491707554103296").channels != undefined)
    {
       channel = client.guilds.get("351491707554103296").channels.get("488281152868843520")
        if(channel.members.size > 0 && !channel.members.map(h=>h.id).includes("399601970685673473"))
        {
            client.voice.joinChannel(client.guilds.get("351491707554103296").channels.get("488281152868843520"))
            .then(connection => {
        
             dispatcher =  connection.playArbitraryInput('http://wargaming.fm/1');
                 dispatcher.on("start", dw => {

                 })
              dispatcher.setVolume(vole)
                })
                .catch(console.log);
        }
        if(channel.members.size == 1 && channel.members.map(h=>h.id).includes("399601970685673473"))
        {
           client.guilds.get("351491707554103296").channels.get("488281152868843520").leave()
        }
      
    }
    
}, 3000)
client.on('message', message => {
    if(commandIs("vol", message))
    {
        var volme = parseInt(message.content.substring(5))
        console.log(volme)
        var volume;
        if(volme>0 && volme <=200)
        {
            volume = volme/100
            client.voiceConnections.map(g=>g.dispatcher.setVolume(volume))

        }
       
        
//
    }
   
  });



client.login(process.env.BOT_TOKEN);



