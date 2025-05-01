import { REGEXP } from "../utils/constants.js"
import { createUser } from "./registerModel.js"

export const registerController = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        //validar formato de email
        const nameElement = form.querySelector('#name')
        const name = nameElement.value
    
        const emailElement = form.querySelector('#email')
        const email = emailElement.value
    
        const passwordElement = form.querySelector('#password')
        const password = passwordElement.value

        const passwordConfirmElement = form.querySelector('#password-confirm')
        const passwordConfirm = passwordConfirmElement.value
    
        const emailRegExp = new RegExp(REGEXP.mail)
        const errors = []
        if(!emailRegExp.test(email)){
            //mostrar error
            errors.push('El formato del email es incorrecto')
        }
        
        if(password !== passwordConfirm){
            //muestro error
            errors.push('Las contraseñas no son iguales')
        }

        if(errors.length === 0){
            //crear usuarip
            handleCreateUser(name,email,password,form)
            
        } else{
            errors.forEach(error => {
                const eventError = new CustomEvent('error-validation',{
                    detail: error
                })
                form.dispatchEvent(eventError)
            });
        }
    })

    const handleCreateUser = async (name,email,password,form) => {
        try {
            await createUser(name,email,password)
            const event = new CustomEvent('register-ok',{
                detail: {
                    message: 'Te has registrado correctamente',
                    type:'success'
                } 
            })
        form.dispatchEvent(event)
            setTimeout(() => {
                window.location = '/'
            }, 5000);
        } catch (error) {
            const event = new CustomEvent('error-validation',{
                detail: error
            })
        form.dispatchEvent(event)
        }
    }
} 