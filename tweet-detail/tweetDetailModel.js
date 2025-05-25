
export const tweetDetailModel = async (tweetId) => {
   const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}?_expand=user`)

    if(!response.ok){
        throw new Error("Tweet no disponible")
    }

    const tweetDetail = await response.json()

    return tweetDetail
}