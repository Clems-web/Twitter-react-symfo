import './PostTweet.scss';
import {useForm} from "react-hook-form";

export const PostTweet = function () {
    
    const {tweet, handleSubmit} = useForm();
    
    function onSubmit(formdata) {
        console.log(formdata);
    }

    return (
        <div className='PostTweetContainer'>
            <h1>Accueil</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type='text' maxLength="144" placeholder="Exprime toi ..."/>
                </div>
                <input type="submit" value="Tweetez" className='PostTweet'/>
            </form>
        </div>
    )
}