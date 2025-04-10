import { getTweets } from "./showTweetsModel.js";
import { buildTweet } from "./showTweetsView.js";

export async function showTweetsController() {
  
  const tweets = await getTweets()

  const container = document.querySelector('.tweets-container')
  container.innerHTML = ''
   //1- recorrer el array de datos
  tweets.forEach(tweet => {
    //2- por cada uno de los tweets, crear una estructura html con sus datos
    const htmlTweet = document.createElement('div')
      htmlTweet.innerHTML = buildTweet(tweet)
    //3- la estructura de tweet que he preparad, lo mando al dom 
    container.appendChild(htmlTweet) 
    console.log(tweet)
  });
  }


