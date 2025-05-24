import { loginController } from "./login/loginController.js"

import { notificationsController } from "./notifications/notificationsController.js"


document.addEventListener('DOMContentLoaded', () =>{
    const loginForm = document.querySelector('form')
    const notifications = document.querySelector('.notifications')
    const {showNotification} = notificationsController(notifications)
    loginForm.addEventListener('email-format-error', () =>{
        showNotification('Formato de email invalido')
    })
    loginController(loginForm)
})