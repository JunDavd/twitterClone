import { getTweets } from "./showTweetsModel.js";
import { buildTweet, buildNoTweetsAdvice } from "./showTweetsView.js";

export async function showTweetsController(container) {
  try {
    //empiezo a cargar tweets
    const event = new CustomEvent('load-tweets-started')
    container.dispatchEvent(event)
    const tweets = await getTweets()
    drawTweets(tweets, container)
  } catch (error) {
    alert(error.message)
    const event = new CustomEvent('load-tweets-error', {
      detail: error.message
    })
    container.dispatchEvent(event)
  } finally{
    //ya he cargado los tweets
    const event = new CustomEvent('load-tweets-finished')
    container.dispatchEvent(event)
  }
}


function drawTweets(tweets, container){
  container.innerHTML = ''
  if(tweets.length === 0){
    container.innerHTML = buildNoTweetsAdvice()
  }
  // container.innerHTML = ''
    //1- recorrer el array de datos
  tweets.forEach((tweet) => {
    //2- por cada uno de los tweets, crear una estructura html con sus datos
    const htmlTweet = document.createElement('div')
      htmlTweet.innerHTML = buildTweet(tweet)
    //3- la estructura de tweet que he preparad, lo mando al dom 
    container.appendChild(htmlTweet) 
  });
  }


