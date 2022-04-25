import {LeftMenu} from "../../components/LeftMenu/LeftMenu";
import {MiddleMenu} from "../../components/MiddleMenu/MiddleMenu";


export const Home = function () {
    return (
        <div className='MainContainer'>
            <LeftMenu />
            <MiddleMenu />
        </div>
    )
};