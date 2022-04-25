import './LeftMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBell, faMessage, faBookmark, faUser, faKiwiBird, faHashtag, faBook, faEllipsis } from "@fortawesome/free-solid-svg-icons";

export const LeftMenu = function() {
    return (
        <div className='LeftMenuContainer'>
            <div className='ListContainer'>
                <ul>
                    <li><FontAwesomeIcon icon={faKiwiBird} className='Icon'/></li>
                    <li><FontAwesomeIcon icon={faHouse} className='Icon'/><span>Accueil</span></li>
                    <li><FontAwesomeIcon icon={faHashtag} className='Icon'/>Explorer</li>
                    <li><FontAwesomeIcon icon={faBell} className='Icon'/>Notifications</li>
                    <li><FontAwesomeIcon icon={faMessage} className='Icon'/>Messages</li>
                    <li><FontAwesomeIcon icon={faBookmark} className='Icon'/>Signets</li>
                    <li><FontAwesomeIcon icon={faBook} className='Icon'/>Listes</li>
                    <li><FontAwesomeIcon icon={faUser} className='Icon'/>Profil</li>
                    <li><FontAwesomeIcon icon={faEllipsis} className='Icon DottedDot'/>Plus</li>
                    <li><button>Tweeter</button></li>
                </ul>
            </div>
        </div>
    )
}