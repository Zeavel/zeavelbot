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
client.on("ready", r=>{
    function sec() {
       
        
        var cheerio = require('cheerio');
        var request = require('request');
      var urle = "https://squad-servers.com/server/7124/"
        request(urle, function (error, response, body) {
          if (!error) {
              var $ = cheerio.load(body)
              var status = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(3) > td:nth-child(2) > button").text()
              var players = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
              if(status == "Online")
              {
                  client.user.setActivity(players + " players", { type: "PLAYING"})
                 /* client.user.setPresence({ game: { name: players }, status: 'online' })
                  .then(console.log)
                  .catch(console.error);*/
              }
              if(status == "Offline")
              {
                client.user.setPresence({status: 'dnd', activity: {name: "Offline"}})
                
              }
        }})
        }
        
        setInterval(sec, 5000)
   
})

client.on('message', message => {
   if(commandIs("info+", message))
   { 
    
    var cheerio = require('cheerio');
    var request = require('request');
  var urle = "https://squad-servers.com/server/7124/"
    request(urle, function (error, response, body) {
      if (!error) {
          
        var $ = cheerio.load(body)
        var name = $("body > div.content > div > div:nth-child(3) > div > h1").text()
        var status = $("body > div.content > div > div:nth-child(3) > div > div.row > div.col-12.col-md-7 > table > tbody > tr:nth-child(3) > td:nth-child(2) > button").text()
        var playerss = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
        var map = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(8) > td:nth-child(2) > strong").text()
        var regsin = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(9) > td:nth-child(2)").text()
        var mapimg = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-5 > div:nth-child(3) > img").attr("src").replace(/[']/g, "%27").replace(/[ ]/g,"%20")
        var mapimg2= "https://squad-servers.com"+mapimg  
        var players = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(6) > div > div").text().replace(/[,]/g,"\n")
        var location = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(5) > td:nth-child(2) > a").text()
       var color;
       if(status === "Online")
       {
           color = "#00FF00"
       }
       else
       {
           color = "#FF0000"
       }

        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/486990358455123978/523920686570405898/2_2.png")
        .setTitle(name)
        .setImage(mapimg2)
        
        .addField("Players", "**"+playerss+"**")
        .addField("Status", "**"+status+"**")
        .addField("Location", "**"+location+"**")
        .addField("Map", "**"+map+"**")
        .addField("Registered since", "**"+regsin+"**")
        .setColor(color)
        .setFooter(players)
        message.channel.send({embed})
    console.log("test")
    
    
    
  
    }})
   }
  
  });

client.login(process.env.BOT_TOKEN);
