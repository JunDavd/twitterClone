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
  // const twittContainer = document.getElementsByClassName('tweets-container')
  // tweets.forEach(tweet => {
  //   twittContainer.
  // })
  
  //1- recorrer el array de datos
  const container = document.querySelector('.tweets-container')
  tweets.forEach(tweet => {
    //2- por cada uno de los tweets, crear una estructura html con sus datos
    const htmlTweet = document.createElement('div')
     htmlTweet.innerHTML = `
    <p>${tweet.handler}</p>
    <p>${tweet.date}</p>
    <p>${tweet.message}</p>
    <p>${tweet.likes}</p>
    `
    //3- la estructura de tweet que he preparad, lo mando al dom 
    container.appendChild(htmlTweet) 
  });
}

drawTweets()


