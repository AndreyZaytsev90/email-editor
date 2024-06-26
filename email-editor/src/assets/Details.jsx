import {useState} from "react";


export function Details({MENU, isAuth}) {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>First component</h1>
            {isAuth ? "Welcome!": "Need auth"}
            {MENU.map((item, index) => {
                return (
                    <p key={index}>
                        {item.name}
                    </p>
                )
            })}
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}