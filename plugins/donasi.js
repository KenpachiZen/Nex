import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/0cc0171632f41ec5b29f0.jpg`
    return conn.sendButton(m.chat, 'Qris,Dan E-Wallet,Pm Owner aja \n❏ https://wa.me/6285896226035 ', ' thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/saep.02",
                mediaType: "VIDEO",
                title: 'Donasi To 𝚉𝚊𝚗𝚐𝚎𝚝𝚜𝚞 𝙱𝚘𝚝𝚣 ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler