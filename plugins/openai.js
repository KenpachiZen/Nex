var tiodev = require("node-fetch")
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
    if (!text) throw `Contoh:\n${usedPrefix + command} berikan contoh kode html`

var tiores = await tiodev(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
 hasil = await tiores.json()
 m.reply(`${hasil.result}`.trim())
    };  
handler.command = handler.help = ['ai'];
handler.tags = ['internet'];
module.exports = handler;