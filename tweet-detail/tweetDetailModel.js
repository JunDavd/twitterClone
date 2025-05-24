
export const tweetDetailModel = async (tweetId) => {
    await fetch(`http://localhost:8000/api/tweets/${tweetId}`)

    if(!Response.ok){
        throw new Error("Tweer no disponible")
    }

    const tweetDetail = await Response.json()

    return tweetDetail
}