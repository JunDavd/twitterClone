import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import {showTweetsController} from "./show-tweets/showTweetsController.js";
import { sessionController } from "./session/sessionController.js";



document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.tweets-container')
    const loader = document.querySelector('.loader')
    const notifications = document.querySelector('.notifications')
    const session = document.querySelector('.session')
    const {show, hide} = loaderController(loader)
    const {showNotification} = notificationsController(notifications)
    container.addEventListener('load-tweets-started', () => {
        show()
    })
    container.addEventListener('load-tweets-finished', () => {
        hide()
        showNotification('He terminado de cargar los tweets','success')
    })
    container.addEventListener('load-tweets-error', (event) => {
        const errorMessage = event.detail
        showNotification(errorMessage)
    })

    showTweetsController(container)
    sessionController(session)
})

//IMPLEMENTAR UNA NOTIFICACION CUANDO HAY UN ERROR,
 

