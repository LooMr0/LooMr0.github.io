var ap4 = new APlayer({
    element: document.getElementById('player4'),
    autoplay: true,
    preload: 'auto',
    showlrc: false,
    mutex: true,
    fixed: false,
    theme: '#ad7a86',
    music: [{
            title: '唯一',
            author:'告五人',
            url: './assets/music/wy.mp3',
            pic: './assets/music/wy.jpg'
        },{
            title: '枫',
            author:'周杰伦',
            url: './assets/music/f.m4a',
            pic: './assets/music/wy.jpg'
        },
        {
            title: '海鸥',
            author:'逃跑计划',
            url: 'https://www.hifini.com/get_music.php?key=Rr2cDTuEq3exR1zO3NH2FpJl00y3HTwgIM8j269EGGWo38LkqbFAjPRQSTfpRpOqRL3VpQyeEAHyF+vw0sYMt38',
            pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000021VWbJ0eZuws.jpg'
        }
    ]
});
function initFun(){
    ap4.play()
}
document.body.addEventListener('ontouchstart', function(){
    ap4.play()
}, false);