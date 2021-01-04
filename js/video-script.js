import("https://embed.twitch.tv/embed/v1.js");

var twitchEmbed = new Twitch.Embed("twitch-embed", {
  width: "100%",
  height: "100%",
  channel: "topleftesports",

  parent: ["topleftesports.com"],
});

console.log(twitchEmbed._iframe.attributes[0].nodeValue);

var srcs = [
  "https://embed.twitch.tv/?channel=topleftesports&height=100%25&migration=true&parent=topleftesports.com&referrer=http%3A%2F%topleftesports.com%3A5500%2F&width=100%25",
  "https://embed.twitch.tv/?channel=sicksteen10&height=100%25&migration=true&parent=topleftesports.com&referrer=http%3A%2F%topleftesports.com%3A5500%2F&width=100%25",
  "https://embed.twitch.tv/?channel=tlclassless&height=100%25&migration=true&parent=topleftesports.com&referrer=http%3A%2F%topleftesports.com%3A5500%2F&width=100%25",
  "https://embed.twitch.tv/?channel=condormankini&height=100%25&migration=true&parent=topleftesports.com&referrer=http%3A%2F%topleftesports.com%3A5500%2F&width=100%25",
];

var playerIco = document.getElementsByClassName("switch-ico");
var i;

for (i = 0; i < playerIco.length; i++) {
  playerIco[i].addEventListener("click", function () {
    streamSwitch(this.dataset.ico);
    myFunction();
    this.style.opacity = 1;
  });
}

function streamSwitch(i) {
  console.log(i);
  twitchEmbed._iframe.attributes[0].nodeValue = srcs[i];
}

function myFunction(e) {
  for (var i = 0; i < playerIco.length; i++) {
    playerIco[i].style.opacity = 0.6;
  }
}
