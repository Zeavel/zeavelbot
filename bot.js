const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;
const token = require("./token.json")
const idserver = require("./idserver.json")

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
client.setInterval(function play()
{
    var server = client.guilds.get(idserver.idserver)
    var ids = server.channels.filter(h => h.type === "voice").map(h => h.id)
       var sizes = server.channels.filter(h => h.type === "voice").size
       var names = server.channels.filter(h => h.type === "voice").map(h => h.name)
       var i;
       var g;
      
    for(i=0; i<parseInt(sizes);i++)
    {
if(server.channels.get(ids[i]).members === undefined)
{
    i = i++
}
       else
       {
        var kolvo = server.channels.get(ids[i]).members.size
            var cheli = server.channels.get(ids[i]).members.map(h => h.id)
        for(k=0;k<parseInt(kolvo); k++)
        {
            console.log(cheli[k])
            if(!server.members.map(h => h.id).includes(cheli[k]))
            {
                g = 5
            }
            else
            { 
                if(server.members.get(cheli[k]).roles.map(h => h.name).toString().includes(names[i].toLowerCase()))
                {
                   
                }
                else
                {
                    for(m=0; m<parseInt(sizes); m++)
                    {
                        var foundRol = server.roles.filter(r=>r.name.toLowerCase().includes(names[m].toLowerCase())).first()
                        server.members.get(cheli[k]).removeRole(foundRol.id)
                    }
                 var foundRole = server.roles.filter(r=>r.name.toLowerCase().includes(names[i].toLowerCase())).first()

                   server.members.get(cheli[k]).addRole(foundRole.id)
                }
                 }
        }
     }
    }
}, 3000)
client.on('message', message => {
   if(commandIs("test", message))
   {
       message.channel.send("d")
   }
  });
client.on("guildMemberAdd", member =>
{
  let guild = member.guild;
  if (guild.channels.filter(c => c.name.includes("чат")).first() !== undefined)
  {
    var monthc = (new Date( member.user.createdAt).getMonth() + 1);
    var dayc = new Date( member.user.createdAt).getDate();
    var yearc = new Date( member.user.createdAt).getFullYear();
    var hoursc = new Date( member.user.createdAt).getHours();
    var minutesc = new Date( member.user.createdAt).getMinutes();
    var secondsc = new Date( member.user.createdAt).getSeconds();
    if (hoursc < 10) {hoursc = "0"+hoursc}
    if (minutesc < 10) {minutesc = "0"+minutesc}
    if (secondsc < 10) {secondsc = "0"+secondsc}
    if (monthc < 10) {monthc = "0"+monthc}
    if (dayc < 10) {dayc = "0"+dayc}
    const Discord = require('discord.js')
    const embed = new Discord.RichEmbed()
.setAuthor('Новый участник - ' + member.user.username)
.addField("Имя пользователя", "**"+member.user.tag+"**")
.addField("Дата регистрации",'**'+ yearc+"."+monthc+"."+dayc+ " " + hoursc+":"+minutesc+"**")
.setThumbnail(member.user.displayAvatarURL)
.setImage("https://cdn.discordapp.com/attachments/381810646011871232/479650305777205251/-3.png")
guild.channels.filter(c => c.name.includes("чат")).first().send({embed});
  }
})
client.login(token.token);



  