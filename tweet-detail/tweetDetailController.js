import { deleteTweetModel, tokenDetailInfo, tweetDetailModel } from "./tweetDetailModel.js"
import { buildTweetDetailView} from "./tweetDetailView.js"

export const tweetDetailController =  async(tweetContainer, tweetId) => {
    // dentro - ir a sparrest a recuperar el tweet

    try {
        const token = localStorage.getItem('token')
        const tweetDetail = await tweetDetailModel(tweetId)
        const tokenInfo = await tokenDetailInfo(token)
        const tweetView = document.createElement('div')
        tweetView.innerHTML = buildTweetDetailView(tweetDetail)
        tweetContainer.appendChild(tweetView)
        if(tokenInfo.id === tweetDetail.user.id){
           deleteTweet(tweetContainer,tweetId,token)
       }
        
    } catch (error) {
        alert(error.message)
    }
    
    
}
const deleteTweet = async (tweetContainer,tweetId,token) =>{
    const btnDeleteTweet = document.createElement('button')
    btnDeleteTweet.textContent = 'Delete tweet'
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



//http://localhost:8000/auth/me