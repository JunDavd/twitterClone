// Modelo --> obtencion de datos que necesita nuestra aplicacion
export async function getTweets(){
  const tweets = await fetch('http://localhost:8000/api/tweets')
}

