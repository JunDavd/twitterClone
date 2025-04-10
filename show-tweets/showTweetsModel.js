// Modelo --> obtencion de datos que necesita nuestra aplicacion
export function getTweets(){
  return fetch('http://localhost:8000/api/tweets')
}