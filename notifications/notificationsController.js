import { buildNotification } from "./notificationsView.js"

export function notificationsController(notifications){

    const removeNotification = (newNotification) => {
        newNotification.remove()
    }
    const showNotification = (message, type = 'error') => {
        
        //funcion que muestra la notificacion
        const newNotification = document.createElement('div')
        newNotification.classList.add('notification')
        newNotification.classList.add(type)
        newNotification.innerHTML = buildNotification(message)
     
        notifications.appendChild(newNotification)

        const closeButton = newNotification.querySelector('button')
        closeButton.addEventListener('click', () => {
            removeNotification(newNotification)
        })

        setTimeout(() => {
            removeNotification()
        },5000)
    }
    return {
        showNotification
        }
}


//1er problema, mas de una notificacion
//2do problema quiero que desaparezcan a los 5 segundo
//3er problema quiero cerrarlas con un click 