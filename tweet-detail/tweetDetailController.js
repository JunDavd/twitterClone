import { getTweetDetail } from "./tweetDetailModel.js"

export const tweetDetailController =  async(tweetContainer, tweetId) => {
    // dentro - ir a sparrest a recuperar el tweet

    try {
        const tweetDetail = await getTweetDetail(tweetId)
        console.log(tweetDetail)
    } catch (error) {
        alert(error.message)
    }

    //dentro - pintar datos del tweet 

    //dentro - gestionar id invalido 
}