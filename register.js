import { registerController } from "./register/registerController.js"
import { notificationsController } from "./notifications/notificationsController.js"

document.addEventListener('DOMContentLoaded', () =>{
    const registerForm = document.querySelector('form')
    const notifications = document.querySelector('.notifications')
    const {showNotification} = notificationsController(notifications)
    registerForm.addEventListener('error-validation', (eventError) => {
        const message = eventError.detail
        showNotification(message)
    })
    
    registerController(registerForm)
})