document.addEventListener("DOMContentLoaded", () => {
  const tweets = [
    "https://x.com/AndroidPeterson/status/1573888217790775298",
    "https://x.com/AndroidPeterson/status/1573853773667115009",
    "https://x.com/AndroidPeterson/status/1573751486646984706",
    "https://x.com/AndroidPeterson/status/1573501284992286721",
    "https://x.com/AndroidPeterson/status/1524212189418213378"
  ];

  const displayTweetButton = document.getElementById("displayTweetButton");
  const tweetContainer = document.getElementById("tweetContainer");

  displayTweetButton.addEventListener("click", () => {
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    
    // Clear previous tweet
    tweetContainer.innerHTML = "";

    // Embed the tweet
    const tweetEmbed = document.createElement("blockquote");
    tweetEmbed.className = "twitter-tweet";
    tweetEmbed.setAttribute("data-theme", "dark");
    tweetEmbed.innerHTML = `<a href="${randomTweet}"></a>`;
    tweetContainer.appendChild(tweetEmbed);

    // Load Twitter widgets script to render the tweet
    const twitterScript = document.createElement("script");
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.async = true;
    document.body.appendChild(twitterScript);
  });
});
