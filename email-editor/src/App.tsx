import styles from "./App.module.css"
/*import {Details} from "./assets/Details.jsx";*/
import {/*useCallback, */useEffect, useMemo, useRef, useState} from "react";
import {Header} from "./Header.jsx";
import {useAuth} from "./hooks/useAuth.js";
import {Link, useNavigate} from "react-router-dom";
import {TodosItem} from "./types";

/*const MENU = [{name: 'add', link: './'}, {name: 'delete', link: './'},]

const isAuth = true*/

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

 /*   const onClick = () => {
        console.log(imageRef.current)
        if (!imageRef.current) return
        imageRef.current.style.backgroundColor = 'blue'
        imageRef.current.style.borderRadius = '20px'
        imageRef.current.style.boxShadow = '0 3px 6px rgba(0,0,0, .8)'

    }*/

    // Хук useCallback для кэширования и оптимизации отрисовки

  /*  const handlerLoading = useCallback(() => {
        setDetails(prev => ({...prev, isLoading: !prev.isLoading}))
    }, [])*/

    // Хук useMemo для мемоизации сложных вычислений и предотвращения их повторного рендера

    const result = useMemo(() => {
        return count * multi
    }, [count, multi])

    // Хук useContext чтобы не прокидывать пропсы в компоненты каждый раз

    /*const [isLoggedIn, setIsLoggedIn] = useState(false) - // переносим в AuthContext*/
    const {isLoggedIn, setIsLoggedIn} = useAuth() // кастомный хук

    //Запрос на сервер
    const [todos, setTodos] = useState<TodosItem[]>([])

    useEffect(()=> {
       /* fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))*/

        const getFetchData = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data =  await response.json()
            setTodos(data)
        }

        getFetchData()
    })

    // Хук useNavigate для непосредственного перевода пользователя на определенный страницу при загрузке приложения
    const navigate = useNavigate()

    useEffect(()=> {
        navigate('/about-us')
    })


    //Паттерны проектирования frontend-приложений

    //Feature-Sliced Design (FSD): Методология, предназначенная для структурирования фронтенд-проектов по "слоям" и "фичам", что облегчает масштабирование и сопровождение сложных приложений.

    // Feature-Based Structure (FBS): Подход, при котором организация кода ведется вокруг функциональности (фич), а не по типам файлов или слоям, что повышает когерентность и упрощает модульное тестирование.

    // Atomic Design: Методология разработки пользовательского интерфейса, которая использует аналогии с химией для организации компонентной архитектуры, от атомов до шаблонов страниц.

    return (
        <>
            <div className={styles.layout}>
            <img ref={imageRef} src="/react.svg" width={300} alt=""/>
            <br/>
            <div>Результат: {result}</div>
            <button onClick={()=> setCount(count+1)}>Увеличить счетчик</button>
            <button onClick={()=> setMulti(multi+10)}>Увеличить множитель</button>

            <br/>
            <br/>
                {/*function onClick*/}
            <button onClick={()=> {}}>Change image</button>
            {details.isLoading && <p>Loading...</p>}

            {/*<Details MENU={MENU}
                     isAuth={isAuth}
                     details={details}
                     setDetails={setDetails}
                     handlerLoading={handlerLoading}
            />*/}

        </div>
            <div className={styles.loggedIn}>
                <Header/>
                <br/>
                {
                    isLoggedIn
                        ? <button onClick={() => setIsLoggedIn ? setIsLoggedIn(false) : ''}>Выйти из системы</button>
                        : <button onClick={() => setIsLoggedIn ? setIsLoggedIn(true) : ''}>Войти в систему</button>
                }
            </div>
            <button>
                <Link to='/about-us'>Go to about-us</Link>
            </button>
            {todos.map((t)=> {
                return (
                    <ul key={t.id}>
                        {t.id} - {t.title}
                    </ul>
                )
            })}
        </>)
}

