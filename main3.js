let ffact = ['Kamu tau ngga? kalo manusia adalah satu satunya makhluk yang bisa tersipu malu?', 'Kamu tau ngga? kalo tubuh manusia itu beneran bersinar?', 'Kamu tau ngga? kalo gajah itu mandang manusia sama kayak manusia mandang kucing? Bersenanglah karena gajah menganggap kamu itu imut!', 'Kamu tau ngga? kalo keringat kamu itu tidak bau? Bakteri yang nempel di kulit lalu tercampur dengan keringat kamu yang membuat kita bau badan.', 'Kamu tau ngga? kalo burung gagak itu bisa membawa dendam? Burung aja bawa dendam sampe mati, apalagi mantan yang tersakiti :)', "Kamu tau ngga? Kalau setiap hari, nama kamu di ucap dalam do'a seseorang?", 'Kamu tau ngga, kalau kamu itu tanpa disadari, dicintai sama banyak orang?', 'Kamu tau ngga? kalau muka kamu itu udah terbaik yang dikasih oleh tuhan? Kalau belum puas sama diri sendiri, do your best to improve it!!!', 'Kamu tau ngga? Kalo kemanisan seratus gula kubus itu setatra dengan kemanisan senyum kamu?', 'Anda tau tidak? Saya mendukung anda. Semangat!!! ^^']



let ffbutton = document.getElementById('funf')
let displayedq = document.getElementById('fact')


ffbutton.addEventListener('click', function(){
    let randomfunf = Math.floor(Math.random() * ffact.length)
    displayedq.innerText = ffact[randomfunf]
})