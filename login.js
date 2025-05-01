import { loginController } from "./login/loginController.js"

document.addEventListener('DOMContentLoaded', () =>{
    const loginForm = document.querySelector('form')
    // const notifications = document.querySelector('.notifications')
    // const {showNotification} = notificationsController(notifications)
    loginController(loginForm)
})