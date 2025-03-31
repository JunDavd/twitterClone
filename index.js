function drawTweets() {
  const tweets = [{
    handler: '@usuario1',
    date: new Date().toISOString(),
    message: 'Eligendi fugiat veniam a neque omnis doloribus sequi porro expedita ullam excepturi.',
    likes: 40,
  },
  {
    handler: '@usuario2',
    date: new Date().toISOString(),
    message: 'Laborum ad animi officia dolore nisi necessitatibus a porro! Odit!',
    likes: 3,
  },
  {
    handler: '@usuario3',
    date: new Date().toISOString(),
    message: 'Ayer estuve en le parque y me lo pasé genial',
    likes: 34,
  },
  {
    handler: '@usuario4',
    date: new Date().toISOString(),
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    likes: 400,
  }];
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
}

drawTweets();
