import { registerController } from "./register/registerController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener('DOMContentLoaded', () =>{
    const registerForm = document.querySelector('form')
    const notifications = document.querySelector('.notifications')
    const {showNotification} = notificationsController(notifications)
    registerForm.addEventListener('error-validation', (event) => {
        const message = event.detail
        showNotification(message)
    })
    registerForm.addEventListener('register-ok', (event) => {
        const message = event.detail.message
        const type = event.detail.type
        showNotification(message,type)
    })    
    registerController(registerForm)
})