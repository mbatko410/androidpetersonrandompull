document.addEventListener("DOMContentLoaded", () => {
  const tweets = [
    "https://twitter.com/AndroidPeterson/status/1573888217790775298",
    "https://twitter.com/AndroidPeterson/status/1573853773667115009",
    "https://twitter.com/AndroidPeterson/status/1573751486646984706",
    "https://twitter.com/AndroidPeterson/status/1573501284992286721",
    "https://twitter.com/AndroidPeterson/status/1524212189418213378",
    "https://twitter.com/AndroidPeterson/status/1524208847979786240",
    "https://twitter.com/AndroidPeterson/status/1524182884982173696",
    "https://twitter.com/AndroidPeterson/status/1524171800132915200",
    "https://twitter.com/AndroidPeterson/status/1523499503315267585",
    "https://twitter.com/AndroidPeterson/status/1523498428487061510",
    "https://twitter.com/AndroidPeterson/status/1523483428284669957",
    "https://twitter.com/AndroidPeterson/status/1523480780273446913",
    "https://twitter.com/AndroidPeterson/status/1458603419141345280",
    "https://twitter.com/AndroidPeterson/status/1443339733611028480",
    "https://twitter.com/AndroidPeterson/status/1434675907873099777",
    "https://twitter.com/AndroidPeterson/status/1252228426158792710",
    "https://twitter.com/AndroidPeterson/status/1252228307434835970",
    "https://twitter.com/AndroidPeterson/status/1248709972596338691",
    "https://twitter.com/AndroidPeterson/status/1243594826731438081",
    "https://twitter.com/AndroidPeterson/status/1158797275700879362",
    "https://twitter.com/AndroidPeterson/status/1158797167156486146",
    "https://twitter.com/AndroidPeterson/status/1138888354383171585",
    "https://twitter.com/AndroidPeterson/status/1137391517612425217",
    "https://twitter.com/AndroidPeterson/status/1125135488891772928",
    "https://twitter.com/AndroidPeterson/status/1085020213760806913",
    "https://twitter.com/AndroidPeterson/status/1085000159325351936",
    "https://twitter.com/AndroidPeterson/status/1081007993066528769",
    "https://twitter.com/AndroidPeterson/status/1058885097586388993",
    "https://twitter.com/AndroidPeterson/status/1048583876145233922",
    "https://twitter.com/AndroidPeterson/status/1018605333038665728",
    "https://twitter.com/AndroidPeterson/status/1010299558293917697",
    "https://twitter.com/AndroidPeterson/status/1008146734869045249",
    "https://twitter.com/AndroidPeterson/status/997284269633474565",
    "https://twitter.com/AndroidPeterson/status/959631892805976065",
    "https://twitter.com/AndroidPeterson/status/959625710028632064",
    "https://twitter.com/AndroidPeterson/status/932790699812184066",
    "https://twitter.com/AndroidPeterson/status/932789098997256193",
    "https://twitter.com/AndroidPeterson/status/932784333945016322",
    "https://twitter.com/AndroidPeterson/status/932781245129510912",
    "https://twitter.com/AndroidPeterson/status/909971431508897798",
    "https://twitter.com/AndroidPeterson/status/896795507737202688",
    "https://twitter.com/AndroidPeterson/status/895330068200792064",
    "https://twitter.com/AndroidPeterson/status/888181512901885954",
    "https://twitter.com/AndroidPeterson/status/881354810880126977",
    "https://twitter.com/AndroidPeterson/status/881255027314233345",
    "https://twitter.com/AndroidPeterson/status/881249292572397569",
    "https://twitter.com/AndroidPeterson/status/880690105505153026",
    "https://twitter.com/AndroidPeterson/status/880689693653950464",
    "https://twitter.com/AndroidPeterson/status/878863162627551233",
    "https://twitter.com/AndroidPeterson/status/878860861426860032",
    "https://twitter.com/AndroidPeterson/status/878854641521500161",
    "https://twitter.com/AndroidPeterson/status/878837990759510016",
    "https://twitter.com/AndroidPeterson/status/878834901801467904",
    "https://twitter.com/AndroidPeterson/status/878824584774123520"
  ];

  const displayTweetButton = document.getElementById("displayTweetButton");
  const tweetContainer = document.getElementById("tweetContainer");

  displayTweetButton.addEventListener("click", () => {
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    console.log("Selected Tweet URL:", randomTweet);

    // Clear previous tweet
    tweetContainer.innerHTML = "";

    // Embed the tweet
    const tweetEmbed = document.createElement("blockquote");
    tweetEmbed.className = "twitter-tweet";
    tweetEmbed.setAttribute("data-theme", "dark");
    tweetEmbed.innerHTML = `<a href="${randomTweet}"></a>`;
    tweetContainer.appendChild(tweetEmbed);

    // Render the tweet
    if (window.twttr && window.twttr.widgets) {
      twttr.widgets.load(tweetContainer);
    } else {
      console.error("Twitter widgets script not loaded.");
    }
  });
});
