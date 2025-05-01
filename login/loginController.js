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
            alert('El formato del email es incorrecto')
        } else{
            handleLoginUser(email, password)
        }
    })
    async function handleLoginUser(email,password) {
        try {
            const token = await searchUser(email,password)
            localStorage.setItem("token",token)
            
        } catch (error) {
            alert(`Contraseña o usuario incorrecto\nDetalles: ${error}`)     
        }
    }
}