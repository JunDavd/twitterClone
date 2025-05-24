import { REGEXP } from "../utils/constants.js"
import { searchUser } from "./loginModel.js"
export const loginController = (form) => {
    form.addEventListener('submit', (event) =>{
        event.preventDefault()

        const emailElement = form.querySelector('#email')
        const email = emailElement.value
        const passwordElement = form.querySelector('#password')
        const password = passwordElement.value

        const emailRegExp = new RegExp(REGEXP.mail)
        if(!emailRegExp.test(email)){
            //mostrar error
            const event = new CustomEvent('email-format-error')
            form.dispatchEvent(event)
        } else{
            handleLoginUser(email, password)
        }
    })
    async function handleLoginUser(email,password) {
        try {
            const token = await searchUser(email,password)
            localStorage.setItem('token', token) 
            window.location = '/'       
        } catch (error) {
            alert('Usuario o contraseña no coinciden')
        }
    }
}