import { buildNotification } from "./notificationsView"

export function notificationsController(notifications){

    const showNotification = (message) => {
        //funcion que muestra la notificacion
        const newNotification = document.createElement('div')
        newNotification.innerHTML = buildNotification(message)
        notifications.appendChild(newNotification)
    }

    // const hideNotification = () => {
    //     //funcion que oculta la notificacion
    //     notifications.classList.remove('hidden')
    // }

    return{
        showNotification
    }
}

//1er problema, mas de una notificacion
//2do problema quiero que desaparezcan a los 5 segundo
//3er problema quiero cerrarlas con un click ¿