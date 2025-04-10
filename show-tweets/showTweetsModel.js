// Modelo --> obtencion de datos que necesita nuestra aplicacion
export async function getTweets(){
  const response = await fetch('http://localhost:8000/api/tweets')
  const tweets = await response.json()
  return tweets
}

