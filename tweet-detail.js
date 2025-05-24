import { tweetDetailController } from "./tweet-detail/tweetDetailController.js"

document.addEventListener("DOMContentLoaded", () => {
    //fuera del controlado - sacar id de la url
    const searchparams = new URLSearchParams(window.location.search)
    const tweetId = searchparams.get("id")
    if(!tweetId){
        window.location = '/'
    }
    const tweetContainer = document.querySelector('.tweet-container')

    //fuera del controlador - gestionar id inexistente

    // ejecutar controlador
    tweetDetailController(tweetContainer, tweetId)
})