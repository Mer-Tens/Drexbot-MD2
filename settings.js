//base by Devil Drex
//re-upload? recode? copy code? give credit ya :)
//YouTube: @drexmose
//Instagram: drex_mose
//Telegram: t.me/dark_intent
//GitHub: @drexmose
//WhatsApp: +254102074064
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@drexmose

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: drexmose" //ur yt chanel name
global.socialm = "GitHub: drexmose" //ur github or insta name
global.location = "Africa, Kenya, Nairobi" //ur location

//new
global.botname = '𝐃𝐑𝐄𝐗 𝐁𝐎𝐓 𝐌𝐃 𝐕2' //ur bot name
global.ownernumber = '254102074064' //ur owner number
global.ownername = '𝐃𝐄𝐕𝐈𝐋 𝐃𝐑𝐄𝐗' //ur owner name
global.websitex = "https://youtu.be/drexmose"
global.wagc = "https://chat.whatsapp.com/LqYfmGAmfbnHhtSWSsXP1v"
global.themeemoji = '🗿'
global.wm = "Drex Bot Inc."
global.botscript = 'https://github.com/drexmose/Drexbot-MD2' //script link
global.packname = "𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐁𝐘"
global.author = "𝐘𝐎𝐔𝐑 𝐏𝐀𝐏𝐀 𝐃𝐑𝐄𝐗\n\n+254102074064"
global.creator = "254102074064@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254102074064"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
