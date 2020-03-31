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
    }
)};

function streamSwitch(i) {
    console.log(i);
    document.getElementById("func-zone").src = srcs[i];
};