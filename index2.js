console.log("hello word desde index2.js")
console.log("a: ", a)

const b = 0;

const container = document.querySelector(".tweets-container")

  // 1- recorrer el array de tweets
  tweets.forEach((tweet) => {
    // 2- por cada uno de los tweets, crear una estructura HTML con sus datos.
    const tweetHtml = document.createElement("div");
    tweetHtml.innerHTML = `
      <p>${tweet.handler} - ${tweet.date}</p>
      <p>${tweet.message}</p>
      <p>${tweet.likes}</p>
    `

    // 3- la estructura de tweet que he preparado, la mando al DOM.
    container.appendChild(tweetHtml)
  })

  

drawTweets();