import { tweetDetailModel } from "./tweetDetailModel.js"
import { buildTweetDetailView } from "./tweetDetailView.js"

export const tweetDetailController =  async(tweetContainer, tweetId) => {
    // dentro - ir a sparrest a recuperar el tweet

    try {
        const tweetDetail = await tweetDetailModel(tweetId)
        tweetContainer.innerHTML = buildTweetDetailView(tweetDetail)
    } catch (error) {
        //dentro - gestionar id invalido 
        alert(error.message)
    }

}