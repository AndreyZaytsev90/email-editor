import styles from './App.module.css'
import {Details} from "./assets/Details.jsx";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {Header} from "./Header.jsx";
import {AuthContext} from "./AuthContext.jsx";

const MENU = [{name: 'add', link: './'}, {name: 'delete', link: './'},]

const isAuth = true

export function App() {
    /*const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [buttonText, setButtonText] = useState('')*/
    // Хук useState для локального отслеживания и изменения состояния
    const [details, setDetails] = useState({
        isLoading: true, title: 'useEffect', description: 'Hello, React!', buttonText: 'Click'
    })

    const [count, setCount] = useState(0)
    const [multi, setMulti] = useState(10)

    // Хук useEffect для мгновенной загрузки чего-либо во время рендеринга приложения (можно прицепить зависимость для повторной загрузки)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDetails(prev => ({...prev, isLoading: false}))
        }, 2000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    // Хук useRef для привязки в любому элементу дом-дерева и последующего взаимодействия с ним
    const imageRef = useRef(null)

    const onClick = () => {
        console.log(imageRef.current)
        if (!imageRef.current) return
        imageRef.current.style.backgroundColor = 'blue'
        imageRef.current.style.borderRadius = '20px'
        imageRef.current.style.boxShadow = '0 3px 6px rgba(0,0,0, .8)'

    }

    // Хук useCallback для кэширования и оптимизации отрисовки

    const handlerLoading = useCallback(() => {
        setDetails(prev => ({...prev, isLoading: !prev.isLoading}))
    }, [])

    // Хук useMemo для мемоизации сложных вычислений и предотвращения их повторного рендера
    const result = useMemo(() => {
        return count * multi
    }, [count, multi])

    //Хук useContext чтобы не прокидывать пропсы в компоненты каждый раз

    /*const [isLoggedIn, setIsLoggedIn] = useState(false) - // переносим в AuthContext*/
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

    return (
        <>
            {/*<div className={styles.layout}>
            <img ref={imageRef} src="/react.svg" width={300} alt=""/>
            <br/>
            <div>Результат: {result}</div>
            <button onClick={()=> setCount(count+1)}>Увеличить счетчик</button>
            <button onClick={()=> setMulti(multi+10)}>Увеличить множитель</button>

            <br/>
            <br/>
            <button onClick={onClick}>Change image</button>
            {details.isLoading && <p>Loading...</p>}

            <Details MENU={MENU}
                     isAuth={isAuth}
                     details={details}
                     setDetails={setDetails}
                     handlerLoading={handlerLoading}
            />

        </div>*/}
            <div className={styles.loggedIn}>
                <Header/>
                <br/>
                {
                    isLoggedIn
                        ? <button onClick={() => setIsLoggedIn(false)}>Выйти из системы</button>
                        : <button onClick={() => setIsLoggedIn(true)}>Войти в систему</button>
                }
            </div>

        </>)
}

