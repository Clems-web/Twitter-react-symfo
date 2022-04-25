import './MiddleMenu.scss';
import {PostTweet} from "../PostTweet/PostTweet";

export const MiddleMenu = function () {
    return (
        <div className='MiddleMenuContainer'>
            <PostTweet />
        </div>
    )
}