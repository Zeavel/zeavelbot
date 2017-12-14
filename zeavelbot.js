const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;
var request = require('request');
var cheerio = require('cheerio');
var Commandss = new CC.Commands();
var fs = require("fs");
var g = "http://card.gdprofiles.com/";
var h = ".png";
var preffold = './prefixs'

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("!z" + str);
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
client.on('ready', () => {
    client.user.setGame("Connecting to server" + ".").then((msg) => {
        setTimeout(function() { client.user.setGame("Connecting to server" + "..");  }, 500)
        setTimeout(function() { client.user.setGame("Connecting to server" + "...");  }, 1000)
        setTimeout(function() { client.user.setGame("Successfully");  }, 2000)
        setTimeout(function() { client.user.setGame("!z help");  }, 2200)
    }
);
    console.log("Online\nFor test: !z levelstats zeavel 33331057, !z levelstats riot 10565740")
});
client.on('message', message =>
{
    if (message.channel.type !== 'text' || message.author.bot) return;
    if(commandIs(" help", message))
    {
                message.channel.sendMessage(" ", {
                    embed: {
                      color: message.member.displayColor,
                      author: {
                        name: " GDStats Bot",
                      },
                      title: `Информация о боте`,
                      description: "**Привет, " + message.author.username + ".**" + " " + "**Я GDStats Bot!\nЯ создан для игроков в Geometry Dash.\nМои команды помогут сократить время игроков и сделать всё для их удобства.**\n\n**Помощь ↓**\n!z userstats `[Никнейм]` - Статистика игрока\n!z levelstats `[Название]` или `[ID Уровня]` - Статистика уровня\n!z game `[Любой текст]` - Ваш текст в статусе бота\n!z daily - Уровень дня\n!z weekly - Еженедельный демон\n`!z top players` - команда в разработке\n !z idea `[Название, одно слово]` `[Что вы хотите предложить]` - Идеи для улучшения бота\n !z random `[любые слова, либо числа] - в любом количестве` - Команда рандома\n**Если у вас возникли вопросы по поводу меня, пишите → darudnik#4008** ",
                      timestamp: new Date()
                      
                    }
                  }); 
            }

if(commandIs(" game", message))
    {
    	 if(commandIs(" ", message))
    	 {
                  var game = message.content.split("m");
               
var game = message.content.substring(8);

if(game == '')
{
    message.channel.sendMessage({embed: {
        color: 65793,
        description: ":warning: " + "**Введите название игры**"
        
        }})
}
else{
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
      /*.setTitle("**" + client.user.username + "**" + " теперь играет в:")*/
      .setColor(message.member.displayColor)
      /*.setDescription(game)*/
      .addField("**" + client.user.username + "**" + " теперь играет в:", game)
      message.channel.sendMessage({ embed })
         client.user.setGame(game + " • !z help");

    console.log(message.author.username + " " + game);
}
}
}


if(commandIs(" daily", message))
{
    var url = "https://gdprofiles.com/";
    var cheerio = require('cheerio');
    var request = require('request');
    
    request(url, function (error, response, body) {
      if (!error) {
        
        var $ = cheerio.load(body)
    
        var playerd = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(1) > div > table > tbody > tr > td:nth-child(2) > h3 > a:nth-child(2)').text()
    var leveld = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(1) > div > table > tbody > tr > td:nth-child(2) > h3 > a:nth-child(1)').text()
    var datedday = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(1) > div > ul > li:nth-child(1)').text()
    var dailynum = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(1) > h3').text()
    var slozh = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(1) > div > table > tbody > tr > td:nth-child(1) > img').attr("src")
    const urllvl = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(1) > div > table > tbody > tr > td:nth-child(2) > h3 > a:nth-child(1)').attr("href")
    var den = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(1) > div > ul > li:nth-child(1)').text()[10]
    var den1 = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(1) > div > ul > li:nth-child(1)').text()[9]
    
    
    if(slozh.includes("01")) { colord = 4620980 }
    if(slozh.includes("02")) { colord = 3329330 }
    if(slozh.includes("03")) { colord = 16776960 }
    if(slozh.includes("04")) { colord = 16729344 }
    if(slozh.includes("05")) { colord = 16711935 }
    if(message.guild.region === "russia")
    {
        Namelvl = "Название уровня"
        Creatorname = "Создатель"
    }
    else
    {
        Namelvl = "Level name"
        Creatorname = "Creator"
    }
    var day = parseInt(den1 + den)
      const Discord = require('discord.js');
      const embed = new Discord.RichEmbed()
        .setTitle(Namelvl)
        .setAuthor(dailynum, 'https://gdicon.net/icons/dailyCrown.png')
        
        .setColor(colord)
        .setDescription("**" + leveld + "**")
        .setFooter('!z more' + " | " + datedday)
        .setThumbnail(slozh)
        
        .addField(Creatorname, "**" + playerd + "**")

        console.log("**daily**" + " " + message.author.username)
message.channel.startTyping();
setTimeout(function() { message.channel.sendMessage({ embed })}, 500);
message.channel.stopTyping();

message.channel.awaitMessages(response => response.content === "!z more", {
                max: 1,
                time: 9999999,
                errors: ['time'],
                })
                .then((collected) => {

var user;
user = message.author.id;
var user_token
user_token = message.author.token;
message.delete(user);
console.log(user)


var cheerio = require('cheerio');
var request = require('request')
    console.log(urllvl);
    
request(urllvl, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body)
  
      var content = $('body').text();
      var level = $('h1').text()
      var player = $('h3>a').text()
      var stars = $('body > div.container > div.row > div.col-sm-8 > div > table > tbody > tr:nth-child(2) > td:nth-child(1)').text()
      var coins = $('body > div.container > div.row > div.col-sm-8 > div > table > tbody > tr:nth-child(2) > td:nth-child(2)').text()
      var downloads = $('body > div.container > div.row > div.col-sm-8 > div > table > tbody > tr:nth-child(2) > td:nth-child(3)').text()
      var likes = $('body > div.container > div.row > div.col-sm-8 > div > table > tbody > tr:nth-child(2) > td:nth-child(4)').text()
      var time = $('body > div.container > div.row > div.col-sm-8 > div > table > tbody > tr:nth-child(2) > td:nth-child(5)').text()
      var slozh = $('body > div.container > table > tbody > tr:nth-child(1) > td:nth-child(1) > img').attr("src")
      var soundtrname = $('body > div.container > div.row > div.col-sm-4 > div.well.well-sm.player > table > tbody > tr > td:nth-child(2) > a:nth-child(1)').text()
      var soundtrco = $('body > div.container > div.row > div.col-sm-4 > div.well.well-sm.player > table > tbody > tr > td:nth-child(2) > a:nth-child(3)').text()
      var desc = $('body > div.container > table > tbody > tr:nth-child(2) > td > h3').text()
      
      const Discord = require('discord.js');
      const embed = new Discord.RichEmbed()
        .setAuthor(dailynum, 'https://gdicon.net/icons/dailyCrown.png')
        .addField('Название уровня', "**" + level + "**",true)
        .addField('**Создатель**', "**" + player + "**", true)
        .addField("\u200b", "```" + desc + "```")
        .addField("Статистика", stars + " " + "<:starsgd:366924040021082112>\n" + coins + " " + "<:levelCoinsgd:366924178965790731>\n" + downloads + " " + "<:dwnldsgd:366924290341208064>\n" + likes + " " + "<:Likegd:366924449401798656>\n" + time + " " + "<:Timegd:366924582734659585>", true)
        .addField("Саундтрек ", "**" + soundtrname + "**" + "\n" + "Композитор: " + "**" + soundtrco + "**", true)
        .setFooter(datedday)
        .setColor(colord)

        .setThumbnail(slozh)
        
        
        message.channel.startTyping();
        setTimeout(function() { message.channel.sendMessage({ embed })}, 500);
        message.channel.stopTyping();
     
}
message.channel.awaitMessages(response => response.content === "!z builder", {
    max: 1,
    time: 9999999,
    errors: ['time'],
    })
    .then((collected) => {
var build = g+player+h
message.channel.sendMessage(build)
    })            
});
    })}
      else {
        console.log("We’ve encountered an error: " + error);
      }
    });
      
      
}
if(commandIs(" weekly", message))
{
    var url = "https://gdprofiles.com/";
    var cheerio = require('cheerio');
    var request = require('request');
    
    request(url, function (error, response, body) {
      if (!error) {
        
        var $ = cheerio.load(body)
    
        var playerd = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(2) > h3 > a:nth-child(2)').text()
    var leveld = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(2) > h3 > a:nth-child(1)').text()
    var dated = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(2) > div > ul > li:nth-child(1)').text()
    var wdnum = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(2) > h3').text()
    var slozh = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(1) > img').attr("src")
    const urllvl = $('body > div.container > div.row > div.col-sm-9 > div:nth-child(1) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(2) > h3 > a:nth-child(1)').attr("href")


   
    
         
    if(slozh.includes("05")) { colord = 16711935 }
    if(slozh.includes("06")) { colord = 16711680 }
    if(slozh.includes("07")) { colord = 8388736 }
    if(slozh.includes("08")) { colord = 13047173 }
    if(slozh.includes("09")) { colord = 11674146 }
    if(slozh.includes("10")) { colord = 14423100 }

      const Discord = require('discord.js');
      const embed = new Discord.RichEmbed()
        .setTitle('Название уровня')
        .setAuthor(wdnum, 'https://gdicon.net/icons/weeklyCrown.png')
        
        .setColor(colord)
        .setDescription("**" + leveld + "**")
        .setFooter('!z more' + " | " + dated)
        .setThumbnail(slozh)
        
        .addField('Создатель', "**" + playerd + "**")
        
        console.log("**weekly**" + " " + message.author.username)
message.channel.startTyping();
setTimeout(function() { message.channel.sendMessage({ embed })}, 500);
message.channel.stopTyping();
message.channel.awaitMessages(response => response.content === "!z more", {
                max: 1,
                time: 9999999,
                errors: ['time'],
                })
                .then((collected) => {

var user;
user = message.author.id;
var user_token
user_token = message.author.token;
message.delete(user);
console.log(user)


var cheerio = require('cheerio');
var request = require('request')
    console.log(urllvl);
    
request(urllvl, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body)
  
      var content = $('body').text();
      var level = $('h1').text()
      var player = $('h3>a').text()
      var stars = $('body > div.container > div.row > div.col-sm-8 > div > table > tbody > tr:nth-child(2) > td:nth-child(1)').text()
      var coins = $('body > div.container > div.row > div.col-sm-8 > div > table > tbody > tr:nth-child(2) > td:nth-child(2)').text()
      var downloads = $('body > div.container > div.row > div.col-sm-8 > div > table > tbody > tr:nth-child(2) > td:nth-child(3)').text()
      var likes = $('body > div.container > div.row > div.col-sm-8 > div > table > tbody > tr:nth-child(2) > td:nth-child(4)').text()
      var time = $('body > div.container > div.row > div.col-sm-8 > div > table > tbody > tr:nth-child(2) > td:nth-child(5)').text()
      var slozh = $('body > div.container > table > tbody > tr:nth-child(1) > td:nth-child(1) > img').attr("src")
      var soundtrname = $('body > div.container > div.row > div.col-sm-4 > div.well.well-sm.player > table > tbody > tr > td:nth-child(2) > a:nth-child(1)').text()
      var soundtrco = $('body > div.container > div.row > div.col-sm-4 > div.well.well-sm.player > table > tbody > tr > td:nth-child(2) > a:nth-child(3)').text()
      var desc = $('body > div.container > table > tbody > tr:nth-child(2) > td > h3').text()



      const Discord = require('discord.js');
      const embed = new Discord.RichEmbed()
      .setAuthor(wdnum, 'https://gdicon.net/icons/weeklyCrown.png')
      .addField('Название уровня', "**" + level + "**",true)
      .addField('**Создатель**', "**" + player + "**", true)
      .addField("\u200b", "```" + desc + "```")
      .addField("Статистика", stars + " " + "<:starsgd:366924040021082112>\n" + coins + " " + "<:levelCoinsgd:366924178965790731>\n" + downloads + " " + "<:dwnldsgd:366924290341208064>\n" + likes + " " + "<:Likegd:366924449401798656>\n" + time + " " + "<:Timegd:366924582734659585>", true)
      .addField("Саундтрек ", "**" + soundtrname + "**" + "\n" + "Композитор: " + "**" + soundtrco + "**", true)
      .setFooter(dated)
      .setColor(colord)

      .setThumbnail(slozh)
        
        message.channel.startTyping();
        setTimeout(function() { message.channel.sendMessage({ embed })}, 500);
        message.channel.stopTyping();
   
     
}
            
});
    })}
      else {
        console.log("We’ve encountered an error: " + error);
      }
    });
      
      
}
/*if(commandIs(" daily", message))
{
    message.channel.sendMessage(":warning: Эта команда временно не работает")
}*/

if(commandIs(" idea", message))
{
	if(commandIs(" ", message))
	{
		 var args = message.content.split(/[ ]+/);
		 var koovo = "!z idea" + " " + `${args[2]}`;
var chel = message.content.toLowerCase().substring(8);
var soder = message.content.toLowerCase().substring(koovo.length);
var user;
var otvet = ["Мы вам перезвоним.", "Спасибо, что помогаете развивать бота)", "Возможно мы ее реализуем.", " Она может сделать бота лучше, благодаря вам."]
otvet = otvet[Math.floor(Math.random() * otvet.length)];
user = message.author.id;
message.delete(user);
fs.writeFileSync(`${args[2]}` + ".txt", soder + " : " + "Предложил " + message.author.username)
message.channel.startTyping();
setTimeout(function() { message.channel.sendMessage("Ваша идея " + "**" + `${args[2]}` + "**" + " " + "предложена." + " " + otvet)}, 250);
message.channel.stopTyping();
    }
		}
	
    
    /*if(commandIs(" usrname", message))
    {
    	 if(commandIs(" ", message))
    	 {
    	 	 	var args = message.content.split(/[ ]+/);
var game = message.content.substring(11);
client.user.setUsername(game)
.then(user => console.log(`My new username is ${user.username}`))
.catch(console.error);
}
}
*/
if(commandIs(" read", message))
{
	if(commandIs(" ", message))
	{
		var args = message.content.split(/[ ]+/);
		var chel = message.content.toLowerCase().substring(8);
		fs.open(`${args[2]}` + ".txt", 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
         var fileContent = fs.readFileSync(`${args[2]}` + ".txt", "utf8");
         message.channel.sendMessage(preffold, `${fs.readFileSync(`${args[2]}` + ".txt", "utf8")}`);
        }
    }
		});
		}
    }
    if(commandIs(" random ", message))
    {
        var args = message.content.substring(9).split(/[ ]+/);
    ran = args[Math.floor(Math.random() * args.length)];
    message.channel.sendMessage(ran)
        }
	

if(commandIs(" my info", message))
{
    var month = (new Date(message.member.joinedAt).getMonth() + 1);
    var day = new Date(message.member.joinedAt).getDate();
    var year = new Date(message.member.joinedAt).getFullYear();
    var hours = new Date(message.member.joinedAt).getHours();
    var minutes = new Date(message.member.joinedAt).getMinutes();
    var seconds = new Date(message.member.joinedAt).getSeconds();
    if (hours < 10) {hours = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    if (month < 10) {month = "0"+month}
    if (day < 10) {day = "0"+day}

    var monthc = (new Date(message.author.createdAt).getMonth() + 1);
    var dayc = new Date(message.author.createdAt).getDate();
    var yearc = new Date(message.author.createdAt).getFullYear();
    var hoursc = new Date(message.author.createdAt).getHours();
    var minutesc = new Date(message.author.createdAt).getMinutes();
    var secondsc = new Date(message.author.createdAt).getSeconds();
    if (hoursc < 10) {hoursc = "0"+hoursc}
    if (minutesc < 10) {minutesc = "0"+minutesc}
    if (secondsc < 10) {secondsc = "0"+secondsc}
    if (monthc < 10) {monthc = "0"+monthc}
    if (dayc < 10) {dayc = "0"+dayc}
    
    
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setTitle("Username")
    .setDescription(message.author.tag)
    .setColor(0x00AE86)

    .setFooter(")")
    .setThumbnail(message.author.avatarURL)
    
    .addField('ID', message.author.id)
    .addField('Status', message.author.id)
    .addField('Create', yearc + "-"+monthc+"-"+dayc+ " " + hoursc+":"+minutesc+":"+secondsc)
    .addField('Join', year + "-"+month+"-"+day+ " " + hours+":"+minutes+":"+seconds)

    message.channel.sendMessage({ embed })
}
if(commandIs(" write", message))
{
	if(commandIs(" ", message))
	{
		 var args = message.content.split(/[ ]+/);
		 var koovo = "!z write" + " " + `${args[2]}`;
var chel = message.content.toLowerCase().substring(9);
var soder = message.content.toLowerCase().substring(koovo.length);
var user;
user = message.author.id;
message.delete(user);
fs.writeFileSync(`${args[2]}` + ".txt", soder )
message.channel.startTyping();
setTimeout(function() { message.channel.sendMessage("Файл " + "**" + `${args[2]}` + "**" + " " + "создан. Чтобы прочитать его содержимое, введите '" + "!z read " + `${args[2]}` + "'")}, 250);
message.channel.stopTyping();

		}
    }
    if(commandIs(" testinfo", message))
    {
        if(commandIs(" ", message))
        {
            var args = message.content.split(/_+/);
            var chel = message.content.toLowerCase().substring(13);
            var user;
            user = message.author.id;
            message.delete(user);
            
            
            var cheerio = require('cheerio');
            var request = require('request');
            var url = `http://ru.geometry-dash.wikia.com/wiki/Stereo_Madness`;
                console.log(url);
                request(url, function (error, response, body) {
                    if (!error) {
                      var $ = cheerio.load(body)
                  
                      var content = $('body').text();
                      var opisanie = $('#mw-content-text > p:nth-child(4) > b').text()
                      var opisanie2 = $('#mw-content-text > p:nth-child(7)').text()
                      var fakti = $('#mw-content-text > ul').text()
                      var creator = $('#mw-content-text > aside > section:nth-child(3) > table > tr > td:nth-child(1) > a').text()
                      var id = $('#mw-content-text > aside > section:nth-child(3) > table > tr > td:nth-child(2)').text()
                      var stars = $('#mw-content-text > aside > section:nth-child(4) > table > tr > td:nth-child(1)').text()
                      var mana = $('#mw-content-text > aside > section:nth-child(4) > table > tr > td:nth-child(2)').text()
                      var portals = $('#mw-content-text > aside > div:nth-child(5) > div').text()
                      var forms = $('#mw-content-text > aside > div:nth-child(6) > div').text()
                      var soundtr = $('#mw-content-text > aside > div:nth-child(7) > div').text()
                      var comp = $('#mw-content-text > aside > div:nth-child(8) > div').text()
                      var idmusic = $('#mw-content-text > aside > div:nth-child(9) > div').text()
                      var lvltitle = $('#PageHeader > div.page-header__main > h1').text()
                      var slozh = $('#mw-content-text > aside > section:nth-child(3) > table > tr > td:nth-child(3) > a > img').attr('src')
                
                
                      const Discord = require('discord.js');
                      const embed = new Discord.RichEmbed()
                        .setTitle(lvltitle)
                        .setColor(0x00AE86)
                        .setDescription(opisanie)
                        .setFooter(':)')
                        .setThumbnail(slozh)
                        .setTimestamp()
                        .addField("Описание", opisanie2)
                        .addField("Интересные факты", fakti)
                        .addField("Создатель", creator)
                        .addField("ID Уровня", id)
                        .addField("Звезды", stars)
                        .addField("Сферы маны", mana)
                        .addField("Порталы", portals)
                        .addField("Формы", forms)
                        .addField("Название саундтрека", soundtr)
                        .addField("Композитор", comp)
                        .addField("ID саундтрека", idmusic)               
                      console.log(message.author.username + url)
                      message.channel.startTyping();
                      setTimeout(function() { message.channel.sendMessage({ embed })}, 500);
                      message.channel.stopTyping();
                
                    }
                    else {
                console.log("We’ve encountered an error: " + error)
                    }
                  });
                }
                }
      
                if(commandIs(" rgb to int", message))
                {
                    if(commandIs(" ", message))
                    {
                        var args = message.content.split(/[ ]+/);
                        var game = message.content.substring(14);
                        var rgbToInt = require('rgb-to-int');
                        var red1 = parseInt(`${args[4]}`)
                        var green1 = parseInt(`${args[5]}`)
                        var blue1 = parseInt(`${args[6]}`)
                        var int = rgbToInt({
                          red: red1,
                          green: green1,
                          blue: blue1
                        
                        });
                        
                        const Discord = require('discord.js');
                        const embed = new Discord.RichEmbed()
                         
                          .setColor(int)
                      
                          .addField("Int: ", int, true)
                          .addField("RGB: ", game, true)
                         
                          
                          message.channel.sendMessage({ embed })
                       
                    }
                  else if((red1 > 255) || (green1 > 255)) { 
                    mesage.channel.sendMessage("d")
                  }
                }
                if(commandIs(" test 1", message))
                { 
                const Discord = require('discord.js');
                const embed = new Discord.RichEmbed()
                
               
                  /*
                   * Inline fields may not display as inline if the thumbnail and/or image is too big.
                   */
                  .addField('Inline Field', 'Hmm 🤔', true)
                  /*
                   * Blank field, useful to create some space.
                   */
                  .addField('\u200b', '\u200b', true)
                  .addField('Second (3rd place) Inline Field', 'I\'m in the ZOONE', true);
                
                /*
                 *  You can only use the shorthand "{ embed }" when your embed variable is also called embed.
                 *  If it's not called embed, use "{ embed: variableName }" instead.
                 */ 
                message.channel.sendMessage({ embed });
                }
                if(commandIs(" discrim", message))
                {
                if(commandIs(" ", message))
                {
                    var args = message.content.split(/[ ]+/);
                var chel = message.content.toLowerCase().substring(11);
                var one_koef = parseInt(`${args[2]}`);
                var two_koef = parseInt(`${args[3]}`);
                var three_koef = parseInt(`${args[4]}`);
                var d = two_koef * two_koef - 4 * one_koef * three_koef;
                if(d > 1)
                {
                    var dsqrt = parseFloat(math.sqrt(d))
                    var x1 = (-two_koef + dsqrt) / (2 * one_koef)
                    var x2 = (-two_koef - dsqrt) / (2 * one_koef)
                    
                    }
                    }
                }
                if(commandIs(" say", message))
                {
                    if(commandIs(" ", message))
                    {
                    var args = message.content.split(/[ ]+/);
                var chel = message.content.toLowerCase().substring(7);

                
                
                message.delete(message.author.id);
                message.channel.startTyping();
                setTimeout(function() { message.channel.sendMessage(chel) }, chel.length * 100);
                message.channel.stopTyping();
                console.log(chel)
                }
                }
                if(commandIs(" test", message))
                {
                    message.channel.sendMessage("```!z levelstats zeavel 33331057```");
                  message.channel.sendMessage("```!z levelstats riot 10565740```");
                  message.channel.sendMessage("```!z random test test2 test3```");
                  message.channel.sendMessage("```!z rgb to int 100 200 100```");
                  message.channel.sendMessage("```!z userstats zeavel```");
                }
    if(commandIs(" embed", message))
    {
        if(commandIs(" ", message))
        {
            var args = message.content.split(/[ ]+/);
            var chel = message.content.toLowerCase().substring(9);
            const Discord = require('discord.js');
            const embed = new Discord.RichEmbed()
              .setTitle(`${args[2]}`)
              .setAuthor(message.author.username, message.author.avatarURL)
              /*
               * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
               */
              .setColor(message.member.displayHexColor)
              .setDescription(`${args[3]}`)
              .setFooter(`${args[8]}`)
            
            
              /*
               * Takes a Date object, defaults to current date.
               */
              .setTimestamp()
       
              .addField(`${args[4]}`, `${args[5]}`)
              /*
               * Inline fields may not display as inline if the thumbnail and/or image is too big.
               */
              .addField(`${args[6]}`, `${args[7]}`)
              /*
               * Blank field, useful to create some space.
               */
              
            
            /*
             *  You can only use the shorthand "{ embed }" when your embed variable is also called embed.
             *  If it's not called embed, use "{ embed: variableName }" instead.
             */ 
            message.channel.sendMessage({ embed }); 
        }
    }

 
     if(commandIs(" send", message))
     {
        
         message.channel.sendFile("zeavelbot.js")
         
     } 
       

  if(commandIs(" uptime", message))
{
var sec_num = parseInt(client.uptime / 1000); // don't forget the second param 
var hours = Math.floor(sec_num / 3600); 
var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
 var seconds = sec_num - (hours * 3600) - (minutes * 60); 
 if (hours < 10) {hours = "0"+hours;} 
 if (minutes < 10) {minutes = "0"+minutes;} 
 if (seconds < 10) {seconds = "0"+seconds;} 
 var time = hours+':'+minutes+':'+seconds; 
 
 message.channel.sendMessage({embed: {
            color: 3447003,
            author: {
              icon_url: client.user.avatarURL
            },
            description:  "**" + client.user.username + "**" + " " + "** в сети уже " + time + "**"       }})
}
if(commandIs(" check reg", message))
{
    if(message.guild.region === "russia")
    {
        cou = " [RU]"
    }
    if(message.guild.region === "brazil")
    {
        cou = " [BR]"
    }
    if(message.guild.region === "eu-central")
    {
        cou = " [EU-Central]"
    }
    if(message.guild.region === "hongkong")
    {
        cou = " [HK]"
    }
    if(message.guild.region === "singapore")
    {
        cou = " [SG]"
    }
    if(message.guild.region === "sydney")
    {
        cou = " [AU]"
    }
    if(message.guild.region === "us-central")
    {
        cou = " [US-Central]"
    }
    if(message.guild.region === "us-east")
    {
        cou = " [US-East]"
    }
    if(message.guild.region === "us-south")
    {
        cou = " [US-South]"
    }
    if(message.guild.region === "us-west")
    {
        cou = " [US-West]"
    }
    if(message.guild.region === "eu-west")
    {
        cou = " [EU-West]"
    }
    client.user.setUsername("GD Stats" + cou)
}  

if(commandIs(" status", message))
{
    if(commandIs(" ", message))
    {
        var args = message.content.split(/[ ]+/);
        var status = message.content.substring(10);
        client.user.setStatus(status)
      
        
        
    }
    else 
    {
    message.channel.sendMessage("Введите правильный тип статуса")  
    }
    
}  
if(commandIs(" reverse", message))
{
    if(commandIs(" ", message))
    {
    var args = message.content.split(/[ ]+/);
var chel = message.content.substring(11);
var rvrs = chel.split('').reverse().join('');


message.delete(message.author.id);
message.channel.startTyping();
setTimeout(function() { message.channel.sendMessage(rvrs) }, chel.length * 100);
message.channel.stopTyping();
}
}
if(commandIs(" tst", message))
{
    if(commandIs(" ", message))
    {
    var convert = require("convert-string");
    var urlopen = require("openurl")
    var urllib = require("urllib")
    var args = message.content.split(/[ ]+/);
    var chel = message.content.substring(7);
    
    var urlp = "http://boomlings.com/database/getGJUsers20.php"
    var p = convert.stringToBytes("gameVersion=20&binaryVersion=29&str=" + chel + "&total=0&page=0&secret=Wmfd2893gb7")
    var data = convert.bytesToString(urllib(urlp, function (err, p, res){
        console.log(p);
    }))
    message.channel.sendMessage(data)

    console.log(data)

    }
}
if(commandIs(" tesr", message))
{
var convert = require("convert-string")
var urlp = "http://boomlings.com/database/getGJUsers20.php?"
var ssil = convert.stringToBytes("gameVersion=20&binaryVersion=29&str=Zeavel&total=0&page=0&secret=Wmfd2893gb7")
var cheerio = require('cheerio');
var request = require('request');
var express = require('express');
    function getUserStats(GD_user, mseg) {
        /*
        if(mseg.mentions.length > 0) {
            let l = gdlinks[mseg.mentions[0].id];
            if(!l) errorOut(8, mseg);
            if(l.waiting===true) errorOut(9, mseg);
            GD_user = l.account.id;
        }
        */
    
        //////////// FIRST REQUEST
        // post request to the boomlings server
        request.post({
                url: 'http://www.boomlings.com/database/getGJUsers20.php',
                form: {
                    gameVersion: "20",
                    binaryVersion: "30",
                    str: GD_user,
                    total: "0",
                    page: "0",
                    secret: "Wmfd2893gb7"
                }
            },
            // returns post data
            function(err, httpResponse, body) {
                // parses response data
                if (err) {
                    console.log(err + "\n" + httpResponse);
                    errorOut(1, mseg);
                } else if (body == "-1") {
                    errorOut(0, mseg);
                } else {
    
                    let objectArray = formatData(body.split("|")[0]);
    
                    // Use the ID to get account info
                    //////////// SECOND REQUEST
                    // post request to the boomlings server
                    request.post({
                            url: 'http://www.boomlings.com/database/getGJUserInfo20.php',
                            form: {
                                gameVersion: "20",
                                binaryVersion: "30",
                                targetAccountID: objectArray["16"],
                                secret: "Wmfd2893gb7"
                            }
                        },
                        // returns post data
                        function(err2, httpResponse2, body2) {
                            // parses response data
                            if (!err2) {
                                console.log(err2 + "\n" + httpResponse2);
                                errorOut(1, mseg);
                            } else if (body2 == "-1") {
                                errorOut(0, mseg);
                            } else {
    
                                let objectArray = formatData(body2.split("|")[0]);
    
                                // bind data values to variables
                                let USERNAME = objectArray["1"] || "unknown";
                                let USERID = objectArray["2"] || "unknown";
                                let COINS = objectArray["13"] || "0";
                                let USERCOINS = objectArray["17"] || "0";
                                let COLOR1 = objectArray["10"] || "0";
                                let COLOR2 = objectArray["11"] || "3";
                                let STARS = objectArray["3"] || "0";
                                let DEMONS = objectArray["4"] || "0";
                                let CREATORPOINTS = objectArray["8"] || "0";
                                let ACCOUNTID = objectArray["16"] || "unknown";
                                let YOUTUBE = objectArray["20"] || "";
                                let ICON = objectArray["21"] || "1";
                                let SHIP = objectArray["22"] || "1";
                                let BALL = objectArray["23"] || "1";
                                let UFO = objectArray["24"] || "1";
                                let DART = objectArray["25"] || "1";
                                let ROBOT = objectArray["26"] || "1";
                                let GLOW = objectArray["28"] || "0";
                                let SPIDER = objectArray["43"] || "1";
                                let DIAMONDS = objectArray["46"] || "0";
    
                                
                                
    
                                // sends to card generator
                                
                                 
                            };
                        });
                };
            });
    };
    console.log(getUserStats('Zeavel'))
}
if(commandIs(" userstats", message))
{
    if(commandIs(" ", message))
    {
    var s = require('datop')
    var cheerio = require('cheerio');
    var request = require('request');
    var express = require('express');
    var game = message.content.split("m"); 
var game = message.content.substring(13);


function formatData(data) {
	// Generate object from request
	let array = data.split(":") // split body into array
	let objectArray = {} // blank object
	// iterate through array and add to object
	for (let i = 0; i < array.length; i = i + 2) {
		objectArray[array[i]] = array[i + 1]
	}
	return objectArray
}
function dormatData(data) {
	// Generate object from request
	let array = data.split("~") // split body into array
	let objectArray = {} // blank object
	// iterate through array and add to object
	for (let i = 0; i < array.length; i = i + 2) {
		objectArray[array[i]] = array[i + 1]
	}
	return objectArray
}
    request.post({
        url: 'http://www.boomlings.com/database/getGJUsers20.php',
        form: {
            gameVersion: "21",
            binaryVersion: "30",
            str: game,
            total: "0",
            page: "0",
            secret: "Wmfd2893gb7"
        }
    },
    // returns post data
    function(err, httpResponse, body) {
        // parses response data
        if (err) {
            console.log(err + "\n" + httpResponse);
            message.channel.sendMessage("/shrug")
        } else if (body == "-1") {
            message.channel.sendMessage("Пользователя с никнеймом " + "**" + game + "**" + " не существует")
        } else {
            
            
            let objectArray = formatData(body.split("|")[0]);

            // Use the ID to get account info
            //////////// SECOND REQUEST
            // post request to the boomlings server
            request.post({
                    url: 'http://www.boomlings.com/database/getGJUserInfo20.php',
                    form: {
                        gameVersion: "21",
                        binaryVersion: "30",
                        targetAccountID: objectArray["16"],
                        secret: "Wmfd2893gb7"
                    }
                },
                // returns post data
                function(err2, httpResponse2, body2) {
                    // parses response data
                    if (err2) {
                        message.channel.sendMessage("a")
                    } else if (body2 == "-1") {
                        message.channel.sendMessage("Пользователя с никнеймом " + "**" + game + "**" + " не существует")
                    } else {
                        
                        

                        let objectArray = formatData(body2.split("|")[0]);

                        // bind data values to variables
                        let USERNAME = objectArray["1"] || "unknown";
                        let USERID = objectArray["2"] || "unknown";
                        let COINS = objectArray["13"] || "0";
                        let USERCOINS = objectArray["17"] || "0";
                        let COLOR1 = objectArray["10"] || "0";
                        let COLOR2 = objectArray["11"] || "3";
                        let STARS = objectArray["3"] || "0";
                        let DEMONS = objectArray["4"] || "0";
                        let CREATORPOINTS = objectArray["8"] || "0";
                        let ACCOUNTID = objectArray["16"] || "unknown";
                        let YOUTUBE = objectArray["20"] || "";
                        let ICON = objectArray["21"] || "1";
                        let SHIP = objectArray["22"] || "1";
                        let BALL = objectArray["23"] || "1";
                        let UFO = objectArray["24"] || "1";
                        let DART = objectArray["25"] || "1";
                        let ROBOT = objectArray["26"] || "1";
                        let GLOW = objectArray["28"] || "0";
                        let SPIDER = objectArray["43"] || "1";
                        let DIAMONDS = objectArray["46"] || "0";
                        let GLOBALRK = objectArray["30"] || "0";
                        let MODER = objectArray["49"];
                        let TWIT = objectArray["44"];
                        let TWICH = objectArray["45"];
var slozh = {
	"count": 41,
	"0": [125, 255, 0],
	"1": [0, 255, 0],
	"2": [0, 255, 125],
	"3": [0, 255, 255],
	"4": [0, 125, 255],
	"5": [0, 0, 255],
	"6": [125, 0, 255],
	"7": [255, 0, 255],
	"8": [255, 0, 125],
	"9": [255, 0, 0],
	"10": [255, 125, 0],
	"11": [255, 255, 0],
	"12": [255, 255, 255],
	"13": [185, 0, 255],
	"14": [255, 185, 0],
	"15": [1, 1, 1],
	"16": [0, 200, 255],
	"17": [175, 175, 175],
	"18": [90, 90, 90],
	"19": [255, 125, 125],
	"20": [0, 175, 75],
	"21": [0, 125, 125],
	"22": [0, 75, 175],
	"23": [75, 0, 175],
	"24": [125, 0, 125],
	"25": [175, 0, 75],
	"26": [175, 75, 0],
	"27": [125, 125, 0],
	"28": [75, 175, 0],
	"29": [255, 75, 0],
	"30": [150, 50, 0],
	"31": [150, 100, 0],
	"32": [100, 150, 0],
	"33": [0, 150, 100],
	"34": [0, 100, 150],
	"35": [100, 0, 150],
	"36": [150, 0, 100],
	"37": [150, 0, 0],
	"38": [0, 150, 0],
	"39": [0, 0, 150],
	"40": [125, 255, 175],
	"41": [125, 125, 255]
}
var stry = parseInt(COLOR1)
if (MODER == "1") { tipo = '\n<:rankGd:385662021284134913>'  + "**" + GLOBALRK + "**" + '\n<:m1gd:385794855319896066>' + "Модератор"}
if (MODER == "2") { tipo = '\n<:rankGd:385662021284134913>'  + "**" + GLOBALRK + "**" + '\n<:m2gd:385794530001158144>' + "Модератор"}
if (MODER == "0") { tipo = '\n<:rankGd:385662021284134913>'  + "**" + GLOBALRK + "**"}

if (TWIT == '') { integtwt = '\n<:twGd:385995245453705226> '} else if (TWIT !== '') {integtwt = '\n<:twGd:385995245453705226> ' + `[`+TWIT+`](https://twitter.com/`+TWIT+`)`}
if (YOUTUBE == '') { integyt = '<:YtGd:385995217494474762> '} else if (YOUTUBE !== '') {integyt = '<:YtGd:385995217494474762> ' + `[`+USERNAME+`](https://www.youtube.com/channel/`+YOUTUBE+`)`}
if (TWICH == '') { integtwch = '\n<:twitch:385995231792988160> '} else if (TWICH !== '') {integtwch = '\n<:twitch:385995231792988160> ' + `[`+TWICH+`](https://www.twitch.tv/`+TWICH+`)`}

/*
if (TWIT == '') { intebez = '<:YtGd:385995217494474762> ' + `[`+USERNAME+`](https://www.youtube.com/channel/`+YOUTUBE+`)` + '\n<:twitch:385995231792988160> ' + `[`+TWICH+`](https://www.twitch.tv/`+TWICH+`)`} 
if (TWIT == '' && YOUTUBE == '' && TWICH !== '') { intebez = '<:twitch:385995231792988160> ' + `[`+TWICH+`](https://www.twitch.tv/`+TWICH+`)`} 
if (TWIT == '' && YOUTUBE !== '' && TWICH == '') { intebez = '<:YtGd:385995217494474762> ' + `[`+USERNAME+`](https://www.youtube.com/channel/`+YOUTUBE+`)`} 
if (YOUTUBE == '') { intebez = '\n<:twGd:385995245453705226> ' + `[`+TWIT+`](https://twitter.com/`+TWIT+`)` + '\n<:twitch:385995231792988160> ' + `[`+TWICH+`](https://www.twitch.tv/`+TWICH+`)`} 
if (YOUTUBE == '' && TWIT == '' && TWICH !== '') { intebez = '\n<:twGd:385995245453705226> ' + `[`+TWIT+`](https://twitter.com/`+TWIT+`)` + '\n<:twitch:385995231792988160> ' + `[`+TWICH+`](https://www.twitch.tv/`+TWICH+`)`} 
if (YOUTUBE == '') { intebez = '\n<:twGd:385995245453705226> ' + `[`+TWIT+`](https://twitter.com/`+TWIT+`)` + '\n<:twitch:385995231792988160> ' + `[`+TWICH+`](https://www.twitch.tv/`+TWICH+`)`} 
if (TWICH == '') { intebez = '<:YtGd:385995217494474762> ' + `[`+USERNAME+`](https://www.youtube.com/channel/`+YOUTUBE+`)` + '\n<:twGd:385995245453705226> ' + `[`+TWIT+`](https://twitter.com/`+TWIT+`)`} 
*/
var colorx = slozh[stry]
request.post({
    url: 'http://www.boomlings.com/database/getGJAccountComments20.php',
    form: {
        gameVersion: "21",
        binaryVersion: "35",
        gdw: "0",
        accountID: objectArray["16"],
        page: "0",
        total: "0",
        secret: "Wmfd2893gb7",
        
    }
},
function(err3, httpResponse3, body3) {
    // parses response data
    if (err3) {
        message.channel.sendMessage("a")
    } else if (body3 == "-1") {
        message.channel.sendMessage("b")
    } else {let objectArray2 = dormatData(body3.split("|")[0]);  
let COMMENT = objectArray2["2"];
let LIKESCOM = objectArray2["4"] || "0";
let DATECOM = objectArray2["9"] || "0 days";
if (COMMENT == undefined) {test3 = "Не найдено комментариев"}
if (COMMENT !== undefined) {test3 = new Buffer(objectArray2["2"], 'base64')}
if (parseInt(LIKESCOM) < 0) { likeemo = '\n<:ZLike1:252376313396985867>'}
if (parseInt(LIKESCOM) >= 0) { likeemo = '\n<:Likegd:366924449401798656>'}
/*if (test3 == '') {test3 = "No"}*/

                        // log
                    
                        const Discord = require('discord.js');
                        const embed = new Discord.RichEmbed()
                        .addField("*" + USERNAME + "*", "**Статистика**" + '\n<:starsgd:366924040021082112>'  + "**" + STARS + "**" + '\n<:diamondGd:385661131844222978>'  + "**" + DIAMONDS + "**" + '\n<:coinsGd:385661035073372190>' + "**" + COINS + "**" + '\n<:levelCoinsgd:366924178965790731>'  + "**"  + USERCOINS + "**" + '\n<:demonGd:385661081571295242>' + "**" + DEMONS + "**" + '\n<:cpGd:385665477654872066>' + "**" + CREATORPOINTS + "**" + tipo, true)
                        .addField("Интеграции", integyt + integtwt + integtwch , true)
                        .addField("**Последний комментарий**", "`" + test3 + "`" + " - **`" + DATECOM + " ago`** " + likeemo + LIKESCOM)
                        .setColor(colorx)
                    
                        /*.setFooter(")")*/
                        
                        
                        /*.addField("**Stats**",'<:starsgd:366924040021082112>' + " - " + "**" + STARS + "**" + '\n<:diamondGd:385661131844222978>' + " - " + "**" + DIAMONDS + "**" + '\n<:coinsGd:385661035073372190>' + " - " + "**" + COINS + "**" + '\n<:levelCoinsgd:366924178965790731>' + " - " + "**"  + USERCOINS + "**" + '\n<:demonGd:385661081571295242>' + " - " + "**" + DEMONS + "**" + '\n<:cpGd:385665477654872066>' + " - " + "**" + CREATORPOINTS + "**")*/
                        .addField("\u200b", "**UserID**" + ": " + "**" + USERID + "**")
                        /*.addField("**Global rank**", '<:demonGd:385661081571295242>' + " " + DEMONS)*/
                    
                        message.channel.sendMessage({ embed })
                        
                        console.log(objectArray2)
                        // sends to card generator
                        
}})
                    };
                });
                 
        };
    });
} }
if(commandIs(" levelstats", message))
{
    if(commandIs(" ", message))
    {
        var s = require('datop')
        var cheerio = require('cheerio');
        var request = require('request');
        var express = require('express');
        var tracks = require("./tracks.json");
    var game = message.content.substring(14);
    var ids = parseInt(game)
    function formatData(data) {
        // Generate object from request
        let array = data.split(":") // split body into array
        let objectArray = {} // blank object
        // iterate through array and add to object
        for (let i = 0; i < array.length; i = i + 2) {
            objectArray[array[i]] = array[i + 1]
        }
        return objectArray
    }
        request.post({
			url: 'http://www.boomlings.com/database/getGJLevels21.php',
			form: {
				gameVersion: "20",
				binaryVersion: "30",
				str: game,
				total: "0",
				page: "0",
				len: "-",
				type: "0",
				secret: "Wmfd2893gb7"
			}
		},
		// returns post data
		function(err, httpResponse, body) {
			// parses response data
			if (err) {
				console.log(err + "\n" + httpResponse);

            } 

            else if (body == "-1") {
				message.channel.sendMessage("Такого уровня не существует")
			} else {

                let objectArray = formatData(body.split("#")[0].split("|")[0])
                let objectArray2 = formatData(body.split("#")[0].split("|")[0])

				// objectArray binds
				let LEVELID = objectArray["1"]
				let LEVELNAME = objectArray["2"]
				let AUTHORID = objectArray["6"]
				let DIFFICULTY = objectArray["9"]
				let DEMONDIFF = objectArray["43"]
				let DOWNLOADS = objectArray["10"]
				let TRACKID = objectArray["12"]
				let LIKES = objectArray["14"]
				let DEMON = objectArray["17"]
				let AUTO = objectArray["25"]
				let STARS = objectArray["18"]
				let FEATURED = objectArray["19"]
				let EPIC = objectArray["42"]
				let z = new Buffer(objectArray["3"], 'base64')
				let LEVELDESC = z.toString()
				let LENGTH = objectArray["15"]
				let COINS = objectArray["37"]
				let SONGID = objectArray["35"]
				let FEATUREDCOINS = objectArray["38"]

				let AUTHORNAME = "(unknown)" // binds authorname to unknown in case nothing is returned
				let AUTHORARRAY = body.split("#")[1].split("|") // splits authors into an array

				// iterate through authors and search for a matching userID
				for (let i = 0; i < AUTHORARRAY.length; i++) {
					if (AUTHORARRAY[i].split(":")[0] == AUTHORID) {
						AUTHORNAME = AUTHORARRAY[i].split(":")[1]
						break;
					};
				};

				let SONGNAME = "(unknown)" // binds songname as unknown in case nothing returned
				let SONGAUTHOR = "(unknown)" // binds songauthor as unknown in case nothing is returned

				// check if official song. SONGID = 0. Else grab Newgrounds song
				if (SONGID == "0") {
					SONGNAME = tracks[TRACKID][0]
					SONGAUTHOR = tracks[TRACKID][1]

					if(parseInt(TRACKID) > 34) {
						SONGNAME = tracks["+"][0]
						SONGAUTHOR = tracks["+"][1];
					}
				} else {
					let SONGARRAY = body.split("#")[2].split(":") // splits songs into array for later use
					// iterate through songs and search for a matching songID
					for (let i = 0; i < SONGARRAY.length; i++) {
						if (SONGARRAY[i].split("~|~")[1] == SONGID) {
							SONGNAME = SONGARRAY[i].split("~|~")[3]
							SONGAUTHOR = SONGARRAY[i].split("~|~")[7]
							break; // break the loop if match
						};
					};
				};
                var levelLengths = ["Tiny", "Short", "Medium", "Long", "XL"]
                if (LEVELDESC == '') LEVELDESC = '(No description provided)'
                if(LENGTH == "0") {lengthlvl = "Tiny"}
                if(LENGTH == "1") {lengthlvl = "Short"}
                if(LENGTH == "2") {lengthlvl = "Medium"}
                if(LENGTH == "3") {lengthlvl = "Long"}
                if(LENGTH == "4") {lengthlvl = "XL"}
                console.log(message.author.username + ": Уровень [" + LEVELNAME + "] : ID [" + LEVELID + "]")
                if(AUTO !== "0") {DIFFICULTY == '', colord = 16426247, diffnew = "auto"  }
                if(DIFFICULTY == "0" && DEMON == '' && AUTO == '') {DEMONDIFF = '', colord = 0, diffnew = "00"  }
                if(DIFFICULTY == "10" && DEMON == '' && AUTO == '') {DEMONDIFF = '', colord = 4620980, diffnew = "01"  }
                if(DIFFICULTY == "20" && DEMON == '' && AUTO == '') {DEMONDIFF = '',  colord = 3329330, diffnew = "02" }

                if(DIFFICULTY == "30" && DEMON == '' && AUTO == '') {DEMONDIFF = '',  colord = 16776960, diffnew = "03"  }

                if(DIFFICULTY == "40" && DEMON == '' && AUTO == '') {DEMONDIFF = '',  colord = 16729344, diffnew = "04" }
                if(DIFFICULTY == "50" && DEMON == '' && AUTO == '') {DEMONDIFF = '',  colord = 16711935, diffnew = "05"  }

                if(DEMONDIFF == "0" && AUTO == '') {DIFFICULTY = '', colord = 16711680, diffnew = "06"  }
                if(DEMONDIFF == "3" && AUTO == '') {DIFFICULTY = '', colord = 8388736, diffnew = "07"  }
                if(DEMONDIFF == "4" && AUTO == '') {DIFFICULTY = '', colord = 13047173, diffnew = "08"}
                if(DEMONDIFF == "5" && AUTO == '') {DIFFICULTY = '', colord = 11674146, diffnew = "09"  }
                if(DEMONDIFF == "6" && AUTO == '') {DIFFICULTY = '', colord = 14423100, diffnew = "10" }
                var simp = ".png"
                var feat = "_featured.png"
                var epic = "_epic.png"
                
                
                if(FEATURED !== "0" && EPIC == "0") {oje = "_featured.png"}
                if(EPIC == "1" && FEATURED !== "0") { oje = "_epic.png"}
                if(FEATURED == "0" && EPIC == "0") { oje = ".png" }
                if(parseInt(LIKES) < 0) { leke = '<:ZLike1:252376313396985867>\n'}
                if(parseInt(LIKES) >= 0) { leke = '<:Likegd:366924449401798656>\n'}
                const Discord = require('discord.js');
                const embed = new Discord.RichEmbed()
          
                
                  .setColor(colord)
          
                  .setThumbnail("https://gdicon.net/icons/difficulty_" + diffnew + oje)
                
                 
                  .addField(LEVELNAME, "ID: " + LEVELID ,true)
                  .addField('**Создатель**', "**" + AUTHORNAME + "**", true)
                  .addField("\u200b", "```" + LEVELDESC + "```")
                  .addField("Статистика", STARS + " " + "<:starsgd:366924040021082112>\n" + COINS + " " + "<:levelCoinsgd:366924178965790731>\n" + DOWNLOADS + " " + "<:dwnldsgd:366924290341208064>\n" + LIKES + " " + leke + lengthlvl + " " + "<:Timegd:366924582734659585>", true)
                  .addField("Саундтрек ", "**" + SONGNAME + "**" + "\n" + "Композитор: " + "**" + SONGAUTHOR + "**", true)
                // send to card generator
                
                message.channel.sendMessage({embed})
request.get
			};
		});
    }
}
if (commandIs(" ser", message))
{
    console.log(message.member.permissions)
    
}
if(commandIs(" info ", message))
{
    if(commandIs(" ", message))
    { 

    var game = message.content.substring(10);
    var chet = message.content.split("@")
    var ok = game.replace(/[!>]/g,'');
    var month = (new Date(message.member.joinedAt).getMonth() + 1);
    var day = new Date(message.member.joinedAt).getDate();
    var year = new Date(message.member.joinedAt).getFullYear();
    var hours = new Date(message.member.joinedAt).getHours();
    var minutes = new Date(message.member.joinedAt).getMinutes();
    var seconds = new Date(message.member.joinedAt).getSeconds();
    if (hours < 10) {hours = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    if (month < 10) {month = "0"+month}
    if (day < 10) {day = "0"+day}

    var monthc = (new Date(message.author.createdAt).getMonth() + 1);
    var dayc = new Date(message.author.createdAt).getDate();
    var yearc = new Date(message.author.createdAt).getFullYear();
    var hoursc = new Date(message.author.createdAt).getHours();
    var minutesc = new Date(message.author.createdAt).getMinutes();
    var secondsc = new Date(message.author.createdAt).getSeconds();
    if (hoursc < 10) {hoursc = "0"+hoursc}
    if (minutesc < 10) {minutesc = "0"+minutesc}
    if (secondsc < 10) {secondsc = "0"+secondsc}
    if (monthc < 10) {monthc = "0"+monthc}
    if (dayc < 10) {dayc = "0"+dayc}
    
    
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setTitle("Username")
    .setDescription(ok.user.username)
    .setColor(0x00AE86)

    .setFooter(")")
    /*.setThumbnail(message.author.avatarURL)*/
    
    .addField('ID', ok)
    .addField('Status', ok)
    .addField('Create', yearc + "-"+monthc+"-"+dayc+ " " + hoursc+":"+minutesc+":"+secondsc)
    .addField('Join', year + "-"+month+"-"+day+ " " + hours+":"+minutes+":"+seconds)
    console.log(ok)
    message.channel.sendMessage({ embed })
}}
if(commandIs(" serverinfo", message))
{
    var month = (new Date(message.guild.createdAt).getMonth() + 1);
    var day = new Date(message.guild.createdAt).getDate();
    var year = new Date(message.guild.createdAt).getFullYear();
    var hours = new Date(message.guild.createdAt).getHours();
    var minutes = new Date(message.guild.createdAt).getMinutes();
    var seconds = new Date(message.guild.createdAt).getSeconds();
    if (hours < 10) {hours = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    if (month < 10) {month = "0"+month}
    if (day < 10) {day = "0"+day}
    if (message.guild.roles.size = 1) { rolet = "Роль"}
    if (message.guild.roles.size >= 1) { rolet = "Ролей"}
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()

    .setColor(0x00AE86)
    .setThumbnail(message.guild.iconURL)

    .setFooter(")")
    /*.setThumbnail(message.author.avatarURL)*/
    .addField("Название сервера", message.guild.name, true)
    
    .addField("Владелец сервера", message.guild.owner.user.tag, true)
    .addField('ID', message.guild.id, true)

    .addField('Создан', year + "-"+month+"-"+day+ " " + hours+":"+minutes+":"+seconds, true)
    .addField('Регион', message.guild.region, true)
    .addField(rolet,(parseInt(message.guild.roles.size) - 1), true)
    .addField('Участников', message.guild.members.size, true)
    .addField('Каналов', message.guild.channels.size, true )
    message.channel.sendMessage({ embed })
    console.log(message.guild.channels)
}
});

client.login(process.env.BOT_TOKEN);
