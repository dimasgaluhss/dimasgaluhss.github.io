let qlaki = ['Udah gausah galau, sini mabar LoL aja.', 'Udah gausah galau, sini mabar Valorant aja.', 'Udah gausah galau, sini mabar Spellbreak aja.', 'Udah gausah galau, sini mabar Lost Saga aja.', 'Percaya ama gua kalo gua bilang masih banyak perempuan diluar sana.', 'Bro, lu cowok, tapi gausah ada pemikiran kalo lu yang harus ngelakuin semuanya pertama. Kita semua manusia disini', 'Bosen ya sendirian terus? Kalo lu muak, coba deh lakuin suatu usaha biar lu narik perhatian seseorang, jangan galau doang. Yuk nge gym bareng.', 'Insecure sama muka? Jangan cuman khawatir doang, nabung buat beli skincare. Sampe umur segini udah paham kan gabakal ada yang nge-mulai sesuatu kecuali lu sendiri?', 'Dia lebih ganteng dari lu? Lah lu bisa aja lebih cocok buat dia. Udah pasti ada orang yang lebih ganteng dari lu, belum tentu ada yang lebih cocok sama dia dibanding lu.', 'Jangan cuman bisa galau doang, lakuin usaha biar lu bisa pede. No one will start anything for you except yourself.', "Hey brother, I care about You right here, don't think no one does.", 'Cari nafkah emang gapernah gampang, gaada cara cepet buat punya banyak duit tanpa usaha yang sebanding.', 'Semuanya beneran bakal berakhir ketika lu memutuskan buat menyerah. Jangan sampe bro, jangan ngelakuin kesalahan yang sama kayak gua.', 'Kalau sekarang dada lu kerasa sakit, jangan ngehindar apa yang bikin lu sakit hati. Terima, hadapin, dan nangis sepuasnya. Besoknya jangan lupa untuk terus semangat dan jangan menyerah!!!', 'Udah gausah galau, sini mabar Monster Hunter aja.' ]


let qlbutton = document.getElementById('quotesl')
let displayedq = document.getElementById('quotes')

qlbutton.addEventListener('click', function(){
    let randomQuotesl = Math.floor(Math.random() * qlaki.length)
    displayedq.innerText = qlaki[randomQuotesl]
})