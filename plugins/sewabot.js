let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = ''
let text = `ββκ₯γ *ππ΄ππ° & πΏππ΄πΌπΈππΌ* γκ₯ββ¬£

ββκ₯γ π·π°ππΆπ° ππ΄ππ° γ
β
ββΎ 15 Κα΄ΚΙͺ 10α΄ / Ι’Κα΄α΄α΄
ββΎ 30 Κα΄ΚΙͺ 20α΄ / Ι’Κα΄α΄α΄
ββΎ 45 Κα΄ΚΙͺ 30α΄ / Ι’Κα΄α΄α΄
ββΎ 60 Κα΄ΚΙͺ 40α΄ / Ι’Κα΄α΄α΄
β
βββκ₯ *${author}* κ₯ββ¬£

ββκ₯γ π·π°ππΆπ° πΏππ΄πΌπΈππΌ γ
β
ββΎ 15 Κα΄ΚΙͺ 10α΄ 
ββΎ 30 Κα΄ΚΙͺ 20α΄ 
ββΎ 45 Κα΄ΚΙͺ 30α΄ 
ββΎ 60 Κα΄ΚΙͺ 40α΄ 
β
βββκ₯ *${author}* κ₯ββ¬£

ββκ₯γ κ°Ιͺα΄α΄Κ 600+ γ
β
ββΎ α΄‘α΄Κα΄α΄α΄α΄
ββΎ α΄Ιͺα΄α΄
ββΎ α΄Ι΄α΄ΙͺΚΙͺΙ΄α΄
ββΎ κ±α΄Ιͺα΄α΄Κ
ββΎ κ±α΄α΄Ι΄α΄
ββΎ α΄Ι΄Ιͺα΄α΄
ββΎ Ι’α΄α΄α΄ Κα΄Ι’
ββΎ α΄ΚΚ
β
βββκ₯ *${author}* κ₯ββ¬£
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: `https://wa.me/6285896226035?text=Hallo admin, saya tertarik untuk menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler