export const registerController = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        //validar formato de email
        const emailElement = form.querySelector('#email')
        const email = emailElement.value
    
        const passwordElement = form.querySelector('#password')
        const password = passwordElement.value

        const passwordConfirmElement = form.querySelector('#password-confirm')
        const passwordConfirm = passwordConfirmElement.value
    
        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
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
        } else{
            errors.forEach(error => {
                const eventError = new CustomEvent('error-validation',{
                    detail: error
                })
                form.dispatchEvent(eventError)
            });
        }

        console.log(errors)
    })
} 