
export const tweetDetailModel = async (tweetId) => {
   const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}?_expand=user`)

    if(!response.ok){
        throw new Error("Tweet no disponible")
    }

    const tweetDetail = await response.json()

    return tweetDetail
}
export const tokenDetailInfo = async (token) => {
   const response = await fetch(`http://localhost:8000/auth/me`,{
    headers:{
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    }
   })

    if(!response.ok){
        throw new Error("Usuario no existente")
    }

    const tokenDetail = await response.json()

    return tokenDetail
}

export const deleteTweetModel = async (tweetId,token) =>{
    const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}`, {
    method: "DELETE",
    headers: {
        'Content-type': "application/json",
        'Authorization': `Bearer ${token}`
    }
   })
   if(!response.ok){
    throw new Error('No se ha podido borrar el tweet')
   }
}