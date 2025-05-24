
export const buildAuthorizedSession = () => {
    return `
    <a href="./create-tweet.html">Crear tweet</a>
    <button class="logout">Cerrar sesión</button>
    `
}
export const buildUnAuthorizedSession = () => {
    return `
    <a href="./login.html">Login</a>
    <a href="./register.html">Registro</a>
    `
}