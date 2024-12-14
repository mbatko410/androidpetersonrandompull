document.addEventListener("DOMContentLoaded", () => {
  const tweets = [
    "https://twitter.com/AndroidPeterson/status/1573888217790775298",
    "https://twitter.com/AndroidPeterson/status/1573853773667115009",
    "https://twitter.com/AndroidPeterson/status/1573751486646984706",
    "https://twitter.com/AndroidPeterson/status/1573501284992286721",
    "https://twitter.com/AndroidPeterson/status/1524212189418213378"
  ];

  const displayTweetButton = document.getElementById("displayTweetButton");
  const tweetContainer = document.getElementById("tweetContainer");

  displayTweetButton.addEventListener("click", () => {
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    console.log("Selected Tweet URL:", randomTweet); // Debug

    // Clear previous tweet
    tweetContainer.innerHTML = "";

    // Embed the tweet
    const tweetEmbed = document.createElement("blockquote");
    tweetEmbed.className = "twitter-tweet";
    tweetEmbed.setAttribute("data-theme", "dark");
    tweetEmbed.innerHTML = `<a href="${randomTweet}"></a>`;
    tweetContainer.appendChild(tweetEmbed);

    // Trigger rendering of the tweet
    twttr.widgets.load(); // Ensures new tweets are rendered
  });
});
