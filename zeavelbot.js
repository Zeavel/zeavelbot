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


client.on('message', message => {
   if(commandIs("info", message))
   { 
    
    var cheerio = require('cheerio');
    var request = require('request');
  var urle = "https://squad-servers.com/server/7124/"
    request(urle, function (error, response, body) {
      if (!error) {
          
        var $ = cheerio.load(body)
        var name = $("body > div.content > div > div:nth-child(3) > div > h1").text()
        var status = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(3) > td:nth-child(2) > button").text()
        var playerss = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
        var map = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(8) > td:nth-child(2) > strong").text()
        var regsin = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(9) > td:nth-child(2)").text()
        var mapimg = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-5 > div:nth-child(3) > img").attr("src").replace(/[']/g, "%27").replace(/[ ]/g,"%20")
        var mapimg2= "https://squad-servers.com"+mapimg  
       
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
        const embed = new Discord.RichEmbed()
        .setTitle(name)
        .setImage(mapimg2)
        .addField("Players", "**"+playerss+"**")
        .addField("Status", "**"+status+"**")
        .addField("Location", "**"+location+"**")
        .addField("Map", "**"+map+"**")
        .addField("Registered since", "**"+regsin+"**")
        .setColor(color)
        .setThumbnail("https://cdn.discordapp.com/attachments/486990358455123978/487204547123740682/image0.jpg")
        message.channel.send({embed})
    
    
    
    
  
    }})
   }
   if(commandIs("players", message))
   {
    var cheerio = require('cheerio');
    var request = require('request');
  var urle = "https://squad-servers.com/server/7124/"
  request(urle, function (error, response, body) {
    if (!error) {
        
      var $ = cheerio.load(body)
      var count = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(5) > div > h3").text()
      var players = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(6) > div > div").text().replace(/[,]/g,"\n")
      if(count === "")
      {
        const Discord = require('discord.js')
        const embed = new Discord.RichEmbed()
        .setTitle("0 players online")
        .setColor("#FF0000")
  .setThumbnail("https://cdn.discordapp.com/attachments/486990358455123978/487204547123740682/image0.jpg")
        message.channel.send({embed})
      }
      else
      {
        const Discord = require('discord.js')
        const embed = new Discord.RichEmbed()
        .setTitle(count)
        .setDescription("**"+ players+"**")
        .setColor("#00FF00")
        .setThumbnail("https://cdn.discordapp.com/attachments/486990358455123978/487204547123740682/image0.jpg")
        message.channel.send({embed})
      }
      console.log("d"+count+"d")
   
     
    }})
   }
  });

client.login(process.env.BOT_TOKEN);



