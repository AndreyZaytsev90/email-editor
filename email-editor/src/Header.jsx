import {useContext} from "react";
import {AuthContext} from "./AuthContext.jsx";

export const Header = () => {
    const {isLoggedIn} = useContext(AuthContext)
    return (
        <>
            <h2>{isLoggedIn? 'Привет, Андрей!':'Сначала войдите в систему'}</h2>
        </>
    )
}