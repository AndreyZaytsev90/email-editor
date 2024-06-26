import styles from './App.module.css'
import {Details} from "./assets/Details.jsx";
import {useCallback, useEffect, useRef, useState} from "react";

const MENU = [
    {name: 'add', link: './'},
    {name: 'delete', link: './'},
]

const isAuth = true

export function App() {
    /*const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [buttonText, setButtonText] = useState('')*/
    const [details, setDetails] = useState({
        isLoading: true,
        title: 'useEffect',
        description: 'Hello, React!',
        buttonText: 'Click'
    })

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDetails(prev => ({...prev, isLoading: false}))
        }, 2000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])


    const imageRef = useRef(null)

    const onClick = () => {
        console.log(imageRef.current)
        if (!imageRef.current) return
        imageRef.current.style.backgroundColor = 'blue'
        imageRef.current.style.borderRadius = '20px'
        imageRef.current.style.boxShadow = '0 3px 6px rgba(0,0,0, .8)'

    }

    const handlerLoading = useCallback(() => {
        setDetails(prev => ({...prev, isLoading: !prev.isLoading}))
    }, [])

    return (
        <>
            <div className={styles.layout}>
                <img ref={imageRef} src="/react.svg" width={300} alt=""/>
                <br/>
                <button onClick={onClick}>Change image</button>
                {details.isLoading && <p>Loading...</p>}

                <Details MENU={MENU}
                         isAuth={isAuth}
                         details={details}
                         setDetails={setDetails}
                         handlerLoading={handlerLoading}
                />

            </div>
        </>
    )
}

