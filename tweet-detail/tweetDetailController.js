import { deleteTweetModel, tokenDetailInfo, tweetDetailModel } from "./tweetDetailModel.js"
import { buildTweetDetailView, buildButtonDeleteTweet} from "./tweetDetailView.js"

export const tweetDetailController =  async(tweetContainer, tweetId) => {
    // dentro - ir a sparrest a recuperar el tweet
    const token = localStorage.getItem('token')
    
    const deleteTweetBtn = async () =>{
        const btnDeleteTweet = buildButtonDeleteTweet()
        tweetContainer.appendChild(btnDeleteTweet)      
        btnDeleteTweet.addEventListener('click', async () =>{
            if(confirm("¿Estás seguro de borrar el tweet?")){
                try {
                    await deleteTweetModel(tweetId,token)
                    window.location = '/'     
                } catch (error) {
                    alert(error.message)
                }
            }
        })  
    }
    try {
        const [tweetDetail, tokenInfo] = await Promise.all([
            tweetDetailModel(tweetId),
            tokenDetailInfo(token)
        ])
        const tweetView = document.createElement('div')
        tweetView.innerHTML = buildTweetDetailView(tweetDetail)
        tweetContainer.appendChild(tweetView)
        if(tokenInfo.id === tweetDetail.user.id){
           deleteTweetBtn()
       }
        
    } catch (error) {
        alert(error.message)
    }
    
    
}


