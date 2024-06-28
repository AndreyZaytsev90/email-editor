import {useAuth} from "./hooks/useAuth.js";

export const Header = () => {
    const {isLoggedIn} = useAuth()
    return (
        <>
            <h2>{isLoggedIn? 'Привет, Андрей!':'Сначала войдите в систему'}</h2>
        </>
    )
}