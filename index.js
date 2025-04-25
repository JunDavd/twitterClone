import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import {showTweetsController} from "./show-tweets/showTweetsController.js";



document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.tweets-container')
    const loader = document.querySelector('.loader')
    const notifications = document.querySelector('.notifications')
    const {show, hide} = loaderController(loader)
    //lo que nos interesan son los metodos de dentro del controlador
    container.addEventListener('load-tweets-started', () => {
        show()
    })
    container.addEventListener('load-tweets-finished', () => {
        hide()
    })
    showTweetsController(container)

    notificationsController(notifications)
})


