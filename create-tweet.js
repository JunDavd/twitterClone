import { createTweetController } from "./createTweets/createTweetController.js";
import { notificationsController } from "./notifications/notificationsController.js";

document.addEventListener('DOMContentLoaded', () =>{
    const token = localStorage.getItem('token')
     if(!token){
        window.location = '/login.html'
     }
     const notifications = document.querySelector('.notifications')
     const {showNotification} = notificationsController(notifications)
     const createTweetForm = document.querySelector('form')
     createTweetForm.addEventListener('create-tweet-error', () =>{
      showNotification('No ha sido posible crear el tweet, vuelve a intentarlo más tarde')
     })
     createTweetController(createTweetForm)
})