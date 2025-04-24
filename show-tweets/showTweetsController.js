import { getTweets } from "./showTweetsModel.js";
import { buildTweet, buildNoTweetsAdvice } from "./showTweetsView.js";

export async function showTweetsController() {
  const container = document.querySelector('.tweets-container')
  const loader = document.querySelector('.loader')
  try {
    loader.classList.remove('hidden')
    const tweets = await getTweets()
    loader.classList.add('hidden')
    drawTweets(tweets, container)
  } catch (error) {
    loader.classList.add('hidden')
    alert(error.message)
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


