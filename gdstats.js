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
var preffold = './prefixs/'


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
        setTimeout(function() { client.user.setGame("z!help");  }, 2200)
    }
);
    console.log("Online\nFor test: !z levelstats zeavel 33331057, !z levelstats riot 10565740")
});
client.on('message', message =>
{
    if(!fs.existsSync(preffold + message.guild.id + ".txt"))
    {
        prefix = "z!"
    }
    else
    {
        prefix = fs.readFileSync(preffold + message.guild.id + ".txt", "utf8")
    }

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith(prefix + str);
}
    //if (message.channel.type !== 'text' || message.author.bot) return;
    if(commandIs("help", message))
    {
        const Discord = require('discord.js');
        const embed = new Discord.RichEmbed()
          

          .setAuthor(client.user.username, client.user.displayAvatarURL)
          .setColor(message.member.displayColor)
          .setThumbnail(client.user.displayAvatarURL)
          .addField(`Информация о боте`, "**Привет, " + message.author.username + ".**" + " " + "**Я " + client.user.username + "!\nЯ создан для игроков в Geometry Dash.\nМои команды помогут сократить время игроков и сделать всё для их удобства.**")
          .addField("Команды для GD", "**" + prefix + "userstats** `[Никнейм]` - Статистика игрока\n\n" + "**" + prefix + "levelstats** `[Название]` или `[ID Уровня]` - Статистика уровня\n\n" + "**" +  prefix + "game** `[Любой текст]` - Ваш текст в статусе бота\n\n" + "**" +  prefix + "daily** - Уровень дня\n\n" + "**" +  prefix + "weekly** - Еженедельный демон\n\n" + "`"  + prefix +"top players` - команда в разработке")
          .addField("Команды для привязки", "**" + prefix + "sync** `[Никнейм в игре]` - Привязка аккаунта дискорда к аккаунту в игре. С помощью привязки необязательно вводить свой никнейм в команде **userstats**\n\n" + "**" + prefix + "checksync** - бот проверяет, привязан ли ваш аккаунт\n\n" + "**" + prefix + "checksync** `[Имя пользователя]` - бот проверяет другого участника на наличие привязки")
          .addField("Прочие команды", "**" +  prefix + "idea** `[Название, одно слово]` `[Что вы хотите предложить]` - Идеи для улучшения бота\n\n" + "**" + prefix + "random** `[любые слова, либо числа] - в любом количестве` - Команда рандома")
            message.channel.sendMessage({embed})
        }

if(commandIs("game", message))
    {
    	
                  
               var kolvo = prefix + "game";
               var kolva = kolvo.length;
var game = message.content.substring(kolva + 1);
console.log(game)
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
         client.user.setGame(game + " • " + prefix + "help");

    console.log(message.author.username + " " + game);

}
}


if(commandIs("daily", message))
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
        .setFooter(prefix + 'more' + " | " + datedday)
        .setThumbnail(slozh)
        
        .addField(Creatorname, "**" + playerd + "**")

        console.log("**daily**" + " " + message.author.username)
message.channel.startTyping();
setTimeout(function() { message.channel.sendMessage({ embed })}, 500);
message.channel.stopTyping();

message.channel.awaitMessages(response => response.content === prefix + "more", {
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
if(commandIs("weekly", message))
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
        .setFooter(prefix + 'more' + " | " + dated)
        .setThumbnail(slozh)
        
        .addField('Создатель', "**" + playerd + "**")
        
        console.log("**weekly**" + " " + message.author.username)
message.channel.startTyping();
setTimeout(function() { message.channel.sendMessage({ embed })}, 500);
message.channel.stopTyping();
message.channel.awaitMessages(response => response.content === prefix + "more", {
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

if(commandIs("idea", message))
{
	
		 var args = message.content.split(/[ ]+/);
         var koovo = prefix + "idea" + " " + `${args[1]}`;
         var kolvo = prefix + "idea";
               var kolva = kolvo.length
var chel = message.content.toLowerCase().substring(kolva + 1);
var soder = message.content.toLowerCase().substring(koovo.length);
var user;
var otvet = ["Мы вам перезвоним.", "Спасибо, что помогаете развивать бота)", "Возможно мы ее реализуем.", " Она может сделать бота лучше, благодаря вам."]
otvet = otvet[Math.floor(Math.random() * otvet.length)];
user = message.author.id;
message.delete(user);
fs.writeFileSync(`${args[1]}` + ".txt", soder + " : " + "Предложил " + message.author.username)
message.channel.startTyping();
setTimeout(function() { message.channel.sendMessage("Ваша идея " + "**" + `${args[1]}` + "**" + " " + "предложена." + " " + otvet)}, 250);
message.channel.stopTyping();
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
if(commandIs("read", message))
{
    var kolvo = prefix + "read";
    var kolva = kolvo.length
	
		var args = message.content.split(/[ ]+/);
		var chel = message.content.toLowerCase().substring(kolva + 1);
		fs.open(`${args[1]}` + ".txt", 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
         var fileContent = fs.readFileSync(`${args[1]}` + ".txt", "utf8");
         message.channel.sendMessage(fileContent);
        }
    }
		});
		
    }
    if(commandIs("random", message))
    {
        var kolvo = prefix + "random";
               var kolva = kolvo.length
        var args = message.content.substring(kolva).split(" | ");
    ran = args[Math.floor(Math.random() * args.length)];
    message.channel.sendMessage(ran)
        }
if(commandIs("who", message))
{ 
            var kolvo = prefix + "who";
                   var kolva = kolvo.length
                   var res = message.guild.members.map(member => member.user.username.toString())
                   var ree = message.guild.members.map(member => member.user.username)

                   var red = message.guild.members.size
        ran = Math.floor(Math.random() * red);
        who = res[ran]
        message.channel.sendMessage(who)
        console.log(who)
}
	


if(commandIs("write", message))
{
    var kolvo = prefix + "write";
               var kolva = kolvo.length
		 var args = message.content.split(/[ ]+/);
		 var koovo = prefix + "write" + " " + `${args[1]}`;
var chel = message.content.toLowerCase().substring(kolva);
var soder = message.content.toLowerCase().substring(koovo.length);
var user;
user = message.author.id;
message.delete(user);
fs.writeFileSync(`${args[1]}` + ".txt", soder )
message.channel.startTyping();
setTimeout(function() { message.channel.sendMessage("Файл " + "**" + `${args[1]}` + "**" + " " + "создан. Чтобы прочитать его содержимое, введите '" + "!z read " + `${args[2]}` + "'")}, 250);
message.channel.stopTyping();

		
    }
    if(commandIs(" testinddddddddddfo", message))
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
                if(commandIs("say", message))
                {
                    var kolvo = prefix + "say";
                    var kolva = kolvo.length
                    var args = message.content.split(/[ ]+/);
                var chel = message.content.toLowerCase().substring(kolva);
                var request = require('request')
                var url = 'https://discordapp.com/api/v6/channels/351976656786817034/messages'
                request.get(url, function (error, response, body) {
                    if (!error) {
                        console.log(response.request)
                        
            }})
            
                
                message.delete(message.author.id);
                message.channel.startTyping();
                setTimeout(function() { message.channel.sendMessage(chel) }, chel.length * 100);
                message.channel.stopTyping();
                console.log(chel)
                
                }
                if(commandIs("test", message))
                {
                    message.channel.sendMessage("```!z levelstats 33331057```");
                  message.channel.sendMessage("```!z levelstats 10565740```");
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

 
     if(commandIs("send", message))
     {
        
         message.channel.sendFile("gdstats.js")
         
     } 
       

  if(commandIs("uptime", message))
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
if(commandIs("check reg", message))
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

if(commandIs("status", message))
{
    var kolvo = prefix + "status";
               var kolva = kolvo.length
        var args = message.content.split(/[ ]+/);
        var status = message.content.substring(kolva + 1);
        client.user.setStatus(status)
      
        
        
    
    if(status == '') 
    {
    message.channel.sendMessage("Введите правильный тип статуса")  
    }
    
}  
if(commandIs("reverse", message))
{
    var kolvo = prefix + "reverse"
               var kolva = kolvo.length
    var args = message.content.split(/[ ]+/);
var chel = message.content.substring(kolva);
var rvrs = chel.split('').reverse().join('');


message.delete(message.author.id);
message.channel.startTyping();
setTimeout(function() { message.channel.sendMessage(rvrs) }, chel.length * 100);
message.channel.stopTyping();

}
if(commandIs("tst", message))
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
if(commandIs("tesr", message))
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
if(commandIs("userstats", message))
{
    var kolvo = prefix + "userstats";
               var kolva = kolvo.length + 1
    var s = require('datop')
    var cheerio = require('cheerio');
    var request = require('request');
    var express = require('express');
    
    dir = `./accounts/` + message.guild.id + "/" + message.author.id + ".txt"
//var game = message.content.substring(kolva);
        if(fs.existsSync(dir))
        {
         game = fs.readFileSync(dir, "utf8").split(" : ")[0]

        }
        if(message.content.substring(kolva) != '')
        {
            game = message.content.substring(kolva)
        }

  
 

    console.log(game)

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
if (COMMENT !== undefined) {
    if(new Buffer(objectArray2["2"], 'base64') == '')
    {
        test3 = "-"
    }
    if(new Buffer(objectArray2["2"], 'base64') != '')
    {
    test3 = new Buffer(objectArray2["2"], 'base64')
     }
}
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
                        
                       
                        // sends to card generator
                        var request = require('request')
                        var url = 'https://discordapp.com/api/v6/channels/351976656786817034/messages'
                        request.get(url, function (error, response, body) {
                            if (!error) {
                                console.log("s")
                                
                    }}) 
                        
}})
                    };
                });
                 
        };
    });
    
    
    if(!fs.existsSync(dir))
    {
        message.channel.sendMessage("Ваш аккаунт не привязан\nДля привязки введите " + prefix +"sync `[Ник в игре]`")
    }
} 
if(commandIs("levelstats", message))
{
    var kolvo = prefix + "levelstats";
               var kolva = kolvo.length + 1
        var s = require('datop')
        var cheerio = require('cheerio');
        var request = require('request');
        var express = require('express');
        var tracks = require("./tracks.json");
    var game = message.content.substring(kolva);
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
				gameVersion: "21",
				binaryVersion: "35",
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
                let OBJECT = objectArray["45"]

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
                console.log(/*message.author.username + ": Уровень [" + LEVELNAME + "] : ID [" + LEVELID + "]" + " " + */objectArray)
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
                request.post({
                    url: 'http://www.boomlings.com/database/downloadGJLevel22.php',
                    form: {
                        gameVersion: "21",
                        binaryVersion: "35",
                        gjp: "QENQU1sEDwM=",
                        userName: AUTHORNAME,
                        levelID: LEVELID,
                        levelName: LEVELNAME,
                        secret: "Wmfd2893gb7"
                    }
                },
                // returns post data
                function(err2, httpResponse2, body2) {
                    //console.log(body2)
                    if (err2) {
                        console.log(err2 + "\n" + httpResponse2);
        
                    } 
        
                    else if (body2 == "-1") {
                        message.channel.sendMessage("Такого уровня не существует")
                    } else { 
                        if(game == '') {message.channel.sendMessage("Введите название уровня")}
                        else {   
                        let objectArray2 = formatData(body2.split("#")[0].split("|")[0])
                        let create = objectArray2['28'];
                        
                      //  console.log(objectArray2)
                const Discord = require('discord.js');
                const embed = new Discord.RichEmbed()
          
                
                  .setColor(colord)
          
                  .setThumbnail("https://gdicon.net/icons/difficulty_" + diffnew + oje)
                  .setFooter("Created " + create + " ago")
                 
                  .addField(LEVELNAME, "ID: " + LEVELID ,true)
                  .addField('<:creator:393017032766914560>**Создатель**', "**" + AUTHORNAME + "**", true)
                  .addField("\u200b", "```" + LEVELDESC + "```")
                  .addField("<:Info:393018444821430290>Статистика", STARS + " " + "<:starsgd:366924040021082112>\n" + COINS + " " + "<:levelCoinsgd:366924178965790731>\n" + DOWNLOADS + " " + "<:dwnldsgd:366924290341208064>\n" + LIKES + " " + leke + lengthlvl + " " + "<:Timegd:366924582734659585>\n"/* + '<:blocks:393365316475813889>' + OBJECT*/, true)
                  .addField("<:st:393076332281724928>Саундтрек ", "**" + SONGNAME + "**" + "\n" + "Композитор: " + "**" + SONGAUTHOR + "**", true)
                // send to card generator
               // console.log(objectArray2)
                message.channel.sendMessage({embed})  }
                console.log(objectArray)
                    }})
			};
		});
    
}
if (commandIs(" ser", message))
{
    console.log(message.member.permissions)
    
}
if(commandIs("infa ", message))
{
    if(commandIs(" ", message))
    { 
        if (ok === message.author.id) return;
        var chel = message.content.substring(12)
        var che = message.guild.client.users.find("username", chel)
        var res = message.guild.members.map(member => member.user.username)
        if(che !== null) {chr = message.guild.client.users.find("username", chel).id}
        if(che == null) {chr = "Такого пользователя нет"}
        console.log(message.guild.members.map(member => member.user.username) + " " + chr)
    var game = message.content.substring(10);
    var chet = message.content.split("@")
    var ok = game.replace(/[!>]/g,'');
    var month = (new Date(message.guild.members.get(ok).joinedAt).getMonth() + 1);
    var day = new Date(message.guild.members.get(ok).joinedAt).getDate();
    var year = new Date(message.guild.members.get(ok).joinedAt).getFullYear();
    var hours = new Date(message.guild.members.get(ok).joinedAt).getHours();
    var minutes = new Date(message.guild.members.get(ok).joinedAt).getMinutes();
    var seconds = new Date(message.guild.members.get(ok).joinedAt).getSeconds();
    if (hours < 10) {hours = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    if (month < 10) {month = "0"+month}
    if (day < 10) {day = "0"+day}

    var monthc = (new Date(message.guild.client.users.get(ok).createdAt).getMonth() + 1);
    var dayc = new Date(message.guild.client.users.get(ok).createdAt).getDate();
    var yearc = new Date(message.guild.client.users.get(ok).createdAt).getFullYear();
    var hoursc = new Date(message.guild.client.users.get(ok).createdAt).getHours();
    var minutesc = new Date(message.guild.client.users.get(ok).createdAt).getMinutes();
    var secondsc = new Date(message.guild.client.users.get(ok).createdAt).getSeconds();
    if (hoursc < 10) {hoursc = "0"+hoursc}
    if (minutesc < 10) {minutesc = "0"+minutesc}
    if (secondsc < 10) {secondsc = "0"+secondsc}
    if (monthc < 10) {monthc = "0"+monthc}
    if (dayc < 10) {dayc = "0"+dayc}
    var statusgui = message.guild.members.get(ok).presence.status
    var gamegui = message.guild.members.get(ok).presence.game;
    if (statusgui == "online") {statusgui = "В сети"}
    if (statusgui == "idle") {statusgui = "Не активен"}
    if (statusgui == "dnd") {statusgui = "Не беспокоить"}
    if (statusgui == "offline") {statusgui = "Не в сети"}
    if (gamegui !== null) {gemi = message.guild.members.get(ok).presence.game.name}
    if (gamegui == null) {gemi = "-"}

    var tul = parseInt(message.guild.members.get(ok).roles.size) - 1;
    if (tul == 1) { rolet = "Роль"}
    else { rolet = "Ролей"}
    var cge = message.guild.members.get(ok).roles.map(role => role.name)
    var rul = parseInt(message.guild.members.get(ok).roles.size) - 1;
    cge.shift()
    var che = cge.join(", ")
    


    
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .addField("Имя пользователя", message.guild.client.users.get(ok).tag, true)
    .addField("Никнейм", "**" + message.guild.members.get(ok).displayName + "**", true)


    .setColor(message.guild.members.get(ok).displayColor)

    .setFooter("Запрос от " + message.author.username, message.author.displayAvatarURL)
    .setThumbnail(message.guild.client.users.get(ok).avatarURL)
    .addField('Статус', statusgui, true)
    .addField('Играет в', gemi, true)
    
    .addField('Зарегистрирован', yearc + "-"+monthc+"-"+dayc+ " " + hoursc+":"+minutesc+":"+secondsc, true)
    .addField('Присоединился', year + "-"+month+"-"+day+ " " + hours+":"+minutes+":"+seconds, true)
    .addField(rolet + " - " + rul, '`' + che + '`')
    .addField('ID', ok)
    console.log( gemi )
    message.channel.sendMessage({ embed })
    
}}
if(commandIs("serverinfo", message))
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
    var bots = message.guild.members.map(member => member.user.bot).toString()
    bots = bots.replace(/false/g, '')
    bots = bots.replace(/,/g, ' ')
    var cher = bots.split('true')
    var oks = cher.length - 1
    var onl = message.guild.members.map(member => member.presence.status).toString()
    onl = onl.replace(/offline/g, '')
    onl = onl.replace(/,/g, ' ')
    onl = onl.replace(/dnd/g, 'online')
    onl = onl.replace(/idle/g, 'online')
    var arg = onl.split('online')
    var online_user = arg.length - 1
    var chanel = message.guild.channels.map(chanel => chanel.type).toString()
    chanel = chanel.replace(/text/g, '')
    chanel = chanel.replace(/,/g, ' ')
    var argc = chanel.split('voice')
    var chanelkol = argc.length - 1

    
    

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()


    .setColor(message.guild.members.get(message.guild.ownerID).displayColor)
    .setThumbnail(message.guild.iconURL)


    /*.setThumbnail(message.author.avatarURL)*/
    .addField("Название сервера", message.guild.name, true)
    
    .addField("Владелец сервера", message.guild.owner.user.tag, true)
    .addField('ID', message.guild.id, true)

    .addField('Создан', year + "-"+month+"-"+day+ " " + hours+":"+minutes+":"+seconds, true)
    .addField('Регион', message.guild.region, true)
    .addField(rolet,(parseInt(message.guild.roles.size) - 1), true)
    .addField('Участников', message.guild.members.size - oks, true)
    .addField('В сети', online_user,true)
    .addField('Ботов', oks, true)  
    .addField('Каналов', message.guild.channels.size, true )
    .addField('Текстовых каналов', message.guild.channels.size - chanelkol, true)
    .addField('Голосовых каналов', chanelkol, true)
    .setFooter("Для просмотра ролей " + prefix + "roles", 'https://cdn.discordapp.com/attachments/351491707554103297/395563014113329162/-1.gif')
    message.channel.sendMessage({ embed })
    console.log()
}
if(message.content === "re")
{
    var request = require('request')
    var url = 'https://discordapp.com/api/v6/channels/351976656786817034/messages'
    request.get(url, function (error, response, body) {
        if (!error) {
            console.log(response)
}}) }
if(commandIs(" restinfo", message))
{
    if(commandIs(" ", message))
    {
        var chel = message.content.substring(12)
        var che = message.guild.client.users.find("username", chel).toString().toLowerCase()
        var res = message.guild.members.map(member => member.user.username, chel)
        if(che !== null) {chr = message.guild.client.users.find("username", chel).id}
        if(che == null) {chr = "Такого пользователя нет"}
        console.log(message.guild.members.map(member => member.user.username) + " " + chr)
        message.channel.sendMessage(chr)
        
    }
}
if(commandIs("info", message))
{
    var kolvo = prefix + "idea";
               var kolva = kolvo.length

        if (ok === message.author.id) return;
        var chel = message.content.substring(kolva + 1)
console.log("'" + chel + "'")
if(message.content.substring(kolva + 1).includes("<@"))
{
    
    var ids = message.content.substring(kolva + 3)
    ids = ids.toString().replace(/[!>]/g, '')
    founduser = message.guild.members.get(ids)


}
else
{
    founduser = message.guild.members.filter(m => m.user.username.toLowerCase().startsWith(chel.toLowerCase())).first()
}
        
        
        var res = message.guild.members.map(member => member.user.username.toString())
        console.log(message.content.substring(kolva + 1))
        
if(founduser == null) { message.channel.sendMessage( "Такого пользователя не существует")}
else{ 
        //if(che == null) {message.channel.sendMessage("Такого пользователя нет")}
        if(message.content.substring(kolva + 1) == '')
        {
            
            nick = message.author.username
        }

            else
            {
                
   
            nick = founduser.user.username
    
            }

   
            
      
          che = message.guild.client.users.find("username", nick).toString()
            chr = message.guild.client.users.find(nick => che.includes(nick)).id
          
            
        
           
        //console.log(message.guild.members.map(member => member.user.username.toLowerCase() + ": " + chr))
        var usera = message.guild.members.map(member => member.user.username.toLowerCase() + ": " + chr)
        var arcs = usera.toString().split(':')
        var ide = `${arcs[1]}`
    var month = (new Date(message.guild.members.get(chr).joinedAt).getMonth() + 1);
    var day = new Date(message.guild.members.get(chr).joinedAt).getDate();
    var year = new Date(message.guild.members.get(chr).joinedAt).getFullYear();
    var hours = new Date(message.guild.members.get(chr).joinedAt).getHours();
    var minutes = new Date(message.guild.members.get(chr).joinedAt).getMinutes();
    var seconds = new Date(message.guild.members.get(chr).joinedAt).getSeconds();
    if (hours < 10) {hours = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    if (month < 10) {month = "0"+month}
    if (day < 10) {day = "0"+day}
    var dar = ["Darudnik", "4azr", "Blez"]
    var dar2 = dar.toString().toLowerCase()
    var dar3 = dar2.split(',');

  

    var monthc = (new Date(message.guild.client.users.get(chr).createdAt).getMonth() + 1);
    var dayc = new Date(message.guild.client.users.get(chr).createdAt).getDate();
    var yearc = new Date(message.guild.client.users.get(chr).createdAt).getFullYear();
    var hoursc = new Date(message.guild.client.users.get(chr).createdAt).getHours();
    var minutesc = new Date(message.guild.client.users.get(chr).createdAt).getMinutes();
    var secondsc = new Date(message.guild.client.users.get(chr).createdAt).getSeconds();
    if (hoursc < 10) {hoursc = "0"+hoursc}
    if (minutesc < 10) {minutesc = "0"+minutesc}
    if (secondsc < 10) {secondsc = "0"+secondsc}
    if (monthc < 10) {monthc = "0"+monthc}
    if (dayc < 10) {dayc = "0"+dayc}
    var statusgui = message.guild.members.get(chr).presence.status
    var gamegui = message.guild.members.get(chr).presence.game;
    if (statusgui == "online") {statusgui = "В сети"}
    if (statusgui == "idle") {statusgui = "Не активен"}
    if (statusgui == "dnd") {statusgui = "Не беспокоить"}
    if (statusgui == "offline") {statusgui = "Не в сети"}
    if (gamegui !== null) {gemi = message.guild.members.get(chr).presence.game.name}
    if (gamegui == null) {gemi = "-"}

    var tul = parseInt(message.guild.members.get(chr).roles.size) - 1;
    if (tul == 1) { rolet = "Роль"}
    else { rolet = "Ролей"}
    var cge = message.guild.members.get(chr).roles.map(role => role.name)
    var rul = parseInt(message.guild.members.get(chr).roles.size) - 1;
    cge.shift()
    var cheb = cge.join(", ")
    


    
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .addField("Имя пользователя", message.guild.client.users.get(chr).tag, true)
    .addField("Никнейм", "**" + message.guild.members.get(chr).displayName + "**", true)


    .setColor(message.guild.members.get(chr).displayColor)

    .setFooter("Запрос от " + message.author.username, message.author.displayAvatarURL)
    .setThumbnail(message.guild.client.users.get(chr).displayAvatarURL)
    .addField('Статус', statusgui, true)
    .addField('Играет в', gemi, true)
    
    .addField('Зарегистрирован', yearc + "-"+monthc+"-"+dayc+ " " + hoursc+":"+minutesc+":"+secondsc, true)
    .addField('Присоединился', year + "-"+month+"-"+day+ " " + hours+":"+minutes+":"+seconds, true)
    .addField(rolet + " - " + rul, '`' + cheb + '`')
    .addField('ID', chr)
    message.channel.sendMessage({ embed })
    }
    
}
if(commandIs('invite', message))
{
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setAuthor('Приглашение',message.guild.client.users.get('376029630165024769').avatarURL )


    .setColor(message.guild.members.get('376029630165024769').displayColor)

    .setFooter("Запрос от " + message.author.username, message.author.displayAvatarURL)
    .setThumbnail(message.guild.client.users.get('376029630165024769').avatarURL)
    .addField('\u200b', (`[Инвайт](https://discordapp.com/oauth2/authorize?&client_id=376029630165024769&scope=bot&permissions=)`), true)

    message.channel.sendMessage({ embed })

}
if(commandIs('botinfo', message))
{
    var monthc = (new Date(client.user.createdAt).getMonth() + 1);
    var dayc = new Date(client.user.createdAt).getDate();
    var yearc = new Date(client.user.createdAt).getFullYear();
    var hoursc = new Date(client.user.createdAt).getHours();
    var minutesc = new Date(client.user.createdAt).getMinutes();
    var secondsc = new Date(client.user.createdAt).getSeconds();
    if (hoursc < 10) {hoursc = "0"+hoursc}
    if (minutesc < 10) {minutesc = "0"+minutesc}
    if (secondsc < 10) {secondsc = "0"+secondsc}
    if (monthc < 10) {monthc = "0"+monthc}
    if (dayc < 10) {dayc = "0"+dayc}
    var data = yearc + "-"+monthc+"-"+dayc+ " " + hoursc+":"+minutesc+":"+secondsc
    var statusgui = client.user.presence.status
    var gamegui = client.user.presence.game;
    if (statusgui == "online") {statusgui = "В сети"}
    if (statusgui == "idle") {statusgui = "Не активен"}
    if (statusgui == "dnd") {statusgui = "Не беспокоить"}
    if (statusgui == "offline") {statusgui = "Не в сети"}
    if (gamegui !== null) {gemi = client.user.presence.game.name}
    if (gamegui == null) {gemi = "-"}
    var sec_num = parseInt(client.uptime / 1000); // don't forget the second param 
var hours = Math.floor(sec_num / 3600); 
var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
 var seconds = sec_num - (hours * 3600) - (minutes * 60); 
 if (hours < 10) {hours = "0"+hours;} 
 if (minutes < 10) {minutes = "0"+minutes;} 
 if (seconds < 10) {seconds = "0"+seconds;} 
 var time = hours+':'+minutes+':'+seconds;

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL )


    .setColor(message.guild.members.get('376029630165024769').displayColor)

    .setFooter("Создан " + data)
    .setThumbnail(message.guild.client.users.get('376029630165024769').avatarURL)
    .addField('Владелец', 'darudnik#4008', true)
    .addField('Библиотека', 'Discord.js', true)
    .addField("Количество серверов", client.guilds.size, true)
    .addField('Количество участников', client.users.size, true)
    .addField('Статус' , statusgui ,true)
    .addField('Играет в ', gemi, true)
    .addField("Пинг", parseInt(client.ping), true)
    .addField("Время работы", time, true )


    message.channel.sendMessage({ embed })
}
if(commandIs('servers', message))
{


    var serverd = client.guilds.map(name =>  name.id).length
    var usar = client.guilds.map(name =>  name.members.size)
    if(serverd == 1 && usar == 1)
    {
        names = "сервере"
        chel = "Участник"
    }
    else if(serverd % 10 == 1 && serverd != 11 && usar % 10 && usar != 11)
    {
        names = "сервере"
        chel = "Участник"
    }
    else
    {
        names = "серверах"
        chel = "Участников"
    }
    var servers = client.guilds.map(name => "**Название сервера: " + name.name + "**;\n" + "   ID: **" +  name.id + "**;\n" + "   Владелец: **" + name.owner.user.tag + "**;\n" + "   " + chel + ": **" + name.members.size + "**;")
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL )
    .setThumbnail(client.user.displayAvatarURL)

    .setColor(message.guild.members.get(client.user.id).displayColor)
    
    //.setFooter("Создан " + data)
    //.setThumbnail(message.guild.client.users.get('376029630165024769').avatarURL)
    .addField(client.user.username + " присутствует на " + serverd + " " + names + ": ", servers)
 

    message.channel.sendMessage({ embed })



}

if(commandIs('emojis', message))
{
    var emojis = message.guild.emojis.map(emojis => "<:" + emojis.name + ":" + emojis.id+">").toString().split(',')
    var emo = emojis.join('|')

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL )


    .setColor(message.member.displayColor)
    
    //.setFooter("Создан " + data)
    //.setThumbnail(message.guild.client.users.get('376029630165024769').avatarURL)
    .addField('Эмодзи сервера ' +  message.guild.name, emo, true)
 

    message.channel.sendMessage({ embed })
    

}
if(commandIs("prefix", message))
{
    
        var kolvo = prefix + "prefix"
        var kalvo = kolvo.length + 1
        console.log(kalvo)
        var pref = message.content.substring(kalvo)
        if(message.author.id == '239837213834215434')
        {

        
        message.channel.sendMessage({embed: {
            color: 6604900,
            description: "**Префикс \"" + prefix + "\" успешно изменен на \"" + pref + "\"**"
            
            }})
            fs.writeFileSync("./prefixs/" + message.guild.id + ".txt", pref)
        }
        else if(message.author.id == message.guild.ownerID)
        {

        
        message.channel.sendMessage({embed: {
            color: 6604900,
            description: "**Префикс \"" + prefix +  "\" успешно изменен на \"" + pref + "\"**"
            
            }})
            fs.writeFileSync("./prefixs/" + message.guild.id + ".txt", pref)
        }
        else
        {
            message.channel.sendMessage({embed: {
                color: 65793,
                description: ":warning: " + "**У вас нет доступа к этой команде**"
                
                }})
                
        }
        
        
    
}
if(commandIs("sync", message))
{
    var kolvo = prefix + "syns"
    var kalvo = kolvo.length + 1
    console.log(kalvo)
    var pref = message.content.substring(kalvo)
    dir = `./accounts/` + message.guild.id + `/`; // путь обязан начинаться с точки. Указывать путь до папки с ботом не надо. Пример: `.database/servers`
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    fs.writeFileSync(dir + message.author.id + ".txt", pref + " : " + message.author.id)
    message.channel.sendMessage({embed: {
        color: 6604900,
        description: "**Аккаунт успешно привязан**"
        
        }})
}
if(commandIs("checksync", message))
{
    var kolvo = prefix + "checksyns"
    var kalvo = kolvo.length + 1
    if(message.content.substring(kalvo) == '')
    {dir = `./accounts/` + message.guild.id + `/` + message.author.id + ".txt"
        if(!fs.existsSync(dir))
        {
            message.channel.sendMessage("Ваш аккаунт не привязан\nДля привязки введите " + prefix +"sync `[Ник в игре]`")
        }
        if(fs.existsSync(dir))
        {
        dir = `./accounts/` + message.guild.id + `/` + message.author.id + ".txt"
        chel = fs.readFileSync(dir, "utf8").split(" : ")
        message.channel.sendMessage("Аккаунт привязан. Ваш ник: **" + chel[0] + "**")
         }
    }
    else if(message.content.substring(kalvo) != '')
    {
        var chelik = message.content.substring(kalvo)
        var founduser = message.guild.members.filter(m => m.user.username.toLowerCase().startsWith(chelik.toLowerCase())).first()
        if(founduser == null) { message.channel.sendMessage("Такого пользователя не существует")}
        else{ 
        var ida = founduser.user.id
        dir = `./accounts/` + message.guild.id + `/` + ida + ".txt"
        if(!fs.existsSync(dir))
        {
            message.channel.sendMessage("Аккаунт участника **" + founduser.user.username + "** не привязан")
        }
        else
        {
        chel = fs.readFileSync(dir, "utf8").split(" : ")
        message.channel.sendMessage("Аккаунт участника **" + founduser.user.username + "** привязан. Его ник: **" + chel[0] + "**")
        }
        }
    }
    
    //fs.readFileSync(dir, "utf8")
   
    
}
if(commandIs("vb", message))
{
    pass = "QENQU1sEDwM="
    function decodeGJP(pass) {
        let decode = new Buffer(pass, "base64").toString("utf8");
        let array = decode.split("");
        let xor   = [51,55,53,50,54];
        let key   = 0;
        let k     = 0;
        let cont  = 0;
        let parola= [];
        let temp  = [pass];
        for(let value of array) {
            parola[cont] = value.charCodeAt(0)^xor[k];
            if(k != 4)
                k++;
            else
                k = 0;
            cont++;
        }
        for(k = 0; k < parola.length; k++) {
            temp[k] = String.fromCharCode(parola[k]);
        }
        let lol = temp.join("");
        return lol;
    }
    console.log(decodeGJP(pass))
}
if(commandIs('ds', message))
{
    console.log(message.guild.members.size)
}
if(commandIs("roles", message))
{
    var roles = message.guild.roles.map(role => role.name)
    roles = roles.join(", ")
    roles = roles.toString().replace(/@everyone,/g, '')

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL )
    .setTitle('Ролей ' + (message.guild.roles.size - 1))
    .setDescription(roles)
    .setColor(message.member.displayColor)
    console.log()
    //.setFooter("Создан " + data)
    //.setThumbnail(message.guild.client.users.get('376029630165024769').avatarURL)

    message.channel.sendMessage({ embed })
    
}
if(commandIs("oks", message))
{
    for(i=1; i<43; i++)
    {
        message.channel.sendMessage(i + "@everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! @everyone милиция https://vk.com/cmdmilice !! \n")
    }
}
if(commandIs('avatar', message))
{
    var kolvo = prefix + "avatar";
    var kolva = kolvo.length

if (ok === message.author.id) return;
var chel = message.content.substring(kolva + 1)
console.log("'" + chel + "'")
if(message.content.substring(kolva + 1).includes("<@"))
{

var ids = message.content.substring(kolva + 3)
ids = ids.toString().replace(/[!>]/g, '')
founduser = message.guild.members.get(ids)


}
else
{
founduser = message.guild.members.filter(m => m.user.username.toLowerCase().startsWith(chel.toLowerCase())).first()
}


var res = message.guild.members.map(member => member.user.username.toString())
console.log(message.content.substring(kolva + 1))

if(founduser == null) { message.channel.sendMessage( "Такого пользователя не существует")}
else{ 
//if(che == null) {message.channel.sendMessage("Такого пользователя нет")}
if(message.content.substring(kolva + 1) == '')
{
 
 nick = message.author.tag
 ava = message.author.displayAvatarURL
 id = message.author.id
}

 else
 {
     

 nick = founduser.user.tag
 ava = founduser.user.displayAvatarURL
 id = founduser.user.id

 }

 
 const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setTitle('Аватар ' + nick)
    .setDescription(`[Ссылка на аватар](`+ava +`)`)
    .setColor(message.guild.members.get(id).displayColor)
    .setImage(ava)
    .setFooter("Запрос от " + message.author.username, message.author.displayAvatarURL)
    //.setThumbnail(message.guild.client.users.get('376029630165024769').avatarURL)

    message.channel.sendMessage({ embed })
}
}
if(commandIs("accsync", message))
{
    var test = fs.readdirSync("./accounts/" + message.guild.id + "/")
    var kolvo = test.length
    console.log(kolvo)
    for(i=0; i<kolvo; i++)
    {
    
       var nick = fs.readFileSync("./accounts/" + message.guild.id + "/" + test[i], "utf8")
       var splet = nick.split(" : ")
       var idl = message.guild.members.get(splet[1]).user.tag
       var cheli = "**" + splet[0] + "** - **" + idl + "**\r"
       fs.appendFileSync("./accounts/" + message.guild.id + "/" + "sync.txt", cheli)
       console.log(cheli)
    }
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor(message.guild.members.get(message.guild.ownerID).displayColor)
    .addField("Привязанные аккаунты сервера " + message.guild.name, fs.readFileSync("./accounts/" + message.guild.id + "/" + "sync.txt", "utf8"))
    .setFooter("Запрос от " + message.author.username, message.author.displayAvatarURL)
    //.setThumbnail(message.guild.client.users.get('376029630165024769').avatarURL)

    message.channel.sendMessage({ embed })
    fs.unlinkSync("./accounts/" + message.guild.id + "/" + "sync.txt")

     //test = test.toString().replace(/.txt,/g, ', ')

     //var ch = message.guild.members.get(test).user.username

}
if(commandIs("leaderdwdwdboard", message))
{
    
        var test = fs.readdirSync("./accounts/" + message.guild.id + "/")
        var kolvo = test.length
        console.log(kolvo)
        if(!fs.existsSync("./accounts/" + message.guild.id + "/demons.txt"))
        {

        
        for(i=0; i<kolvo; i++)
        {
        
           var nick = fs.readFileSync("./accounts/" + message.guild.id + "/" + test[i], "utf8")
           var splet = nick.split(" : ")
           var idl = message.guild.members.get(splet[1]).user.tag
           //var cheli = "**" + splet[0] + "** - **" + idl + "**\r"
           //fs.appendFileSync("./accounts/" + message.guild.id + "/" + "sync.txt", cheli)
           //console.log(cheli)
           var s = require('datop')
           var cheerio = require('cheerio');
           var request = require('request');
           var express = require('express');
           
       var nicn = splet[0]
        
       
         
       
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
                   str: nicn,
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
                               //let USERID = objectArray["2"] || "unknown";
                               //let COINS = objectArray["13"] || "0";
                               //let USERCOINS = objectArray["17"] || "0";


                               let STARS = objectArray["3"] || "0";
                               let DEMONS = objectArray["4"] || "0";
                               let CREATORPOINTS = objectArray["8"] || "0";
                              
                               fs.appendFileSync("./accounts/" + message.guild.id + "/demons.txt", DEMONS + " - " + USERNAME + " : ")
                           
                           };
                       });
                       
               };
           });
           //var demoni = fs.readFileSync("./accounts/" + message.guild.id + "/lead.txt", "utf8")
          /// var kolde = demoni.split(":")
           //console.log(splet[0] + " - " + kolde)
           //fs.appendFileSync("./accounts/" + message.guild.id + "/cheli.txt", nicn + ":")
           
       }}
       if(fs.existsSync("./accounts/" + message.guild.id + "/demons.txt"))
       {
          var cheli = fs.readFileSync("./accounts/" + message.guild.id + "/demons.txt", "utf8")
           message.channel.sendMessage(cheli)
           fs.unlinkSync("./accounts/" + message.guild.id + "/demons.txt")

       }


    
        /*var cheliki = fs.readFileSync("./accounts/" + message.guild.id + "/cheli.txt", "utf8")

        var sho = cheliki.split(":")
        var cho = sho.length - 1
        for(i=0; i<cho; i++)
        {
            var chelike = fs.readFileSync("./accounts/" + message.guild.id + "/cheli.txt", "utf8")
            //var demosi = fs.readFileSync("./accounts/" + message.guild.id + "/demons.txt", "utf8")
            var she = cheliki.split(":")
           
           // var vhe = demosi.split(":")
            console.log(she[i])
        }*/
     
        /*const Discord = require('discord.js');
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor(message.guild.members.get(message.guild.ownerID).displayColor)
        .addField("Привязанные аккаунты сервера " + message.guild.name, fs.readFileSync("./accounts/" + message.guild.id + "/" + "sync.txt", "utf8"))
        .setFooter("Запрос от " + message.author.username, message.author.displayAvatarURL)
        //.setThumbnail(message.guild.client.users.get('376029630165024769').avatarURL)
    
        message.channel.sendMessage({ embed })
        fs.unlinkSync("./accounts/" + message.guild.id + "/" + "sync.txt")*/;
    }

});

client.login('Mzc2MDI5NjMwMTY1MDI0NzY5.DN416Q.SJ7yUmoGXlk8sahg1W3R7ah403A');
//"MzM1NDMwMDUxMDg2NTk4MTQ2.DRL2Yw.XtQj1qawsWpS5dyT3DbPMDzbNho"
//"mfa.xqIDb7zwLwCOQJz9OKt8sD-hpahHB-NHXKpJTHMXdu9Gq-Ji9RjXu2ZoH2UYkOhNp5cEdxhAXRtA-d0GEzQJ"






