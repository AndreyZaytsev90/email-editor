

import styles from './App.module.css'
import {Details} from "./assets/Details.jsx";

const MENU = [
    {name: 'add', link: './'},
    {name: 'delete', link: './'},
]

const isAuth = true

export function App() {
    return (
        <>
            <div className={styles.layout}>
                <img src="/react.svg" width={300} alt=""/>
             <Details MENU={MENU} isAuth={isAuth}/>
            </div>
        </>
    )
}

