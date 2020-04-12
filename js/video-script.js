var srcs = ["https://player.twitch.tv/?channel=topleftesports",
            "https://player.twitch.tv/?channel=sicksteen10",
            "https://player.twitch.tv/?channel=tlclassless",
            "https://player.twitch.tv/?channel=condormankini"
];

var playerIco = document.getElementsByClassName("switch-ico");
var i;

for (i = 0; i < playerIco.length; i++) {
    playerIco[i].addEventListener("click",
    function(){
        streamSwitch(this.dataset.ico);
        myFunction();
        this.style.opacity = 1;
})};

function streamSwitch(i) {
    console.log(i);
    document.getElementById("func-zone").src = srcs[i];
};

function myFunction(e) {
    console.log('test');
    for(var i = 0; i < playerIco.length; i++) {
        playerIco[i].style.opacity = 0.6;
    }
}