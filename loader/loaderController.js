export function loaderController(loader){
    const show = () => {
        //la funcion debe habilitar o mostrar la ruleta
        loader.classList.remove('hidden')
    }
    const hide = () => {
        //la funacion debe ocultar la ruleta 
        loader.classList.add('hidden')
    }

    return {
        show,
        hide
    }
}

