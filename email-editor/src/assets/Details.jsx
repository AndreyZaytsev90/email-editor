import {memo, useState} from "react";


function InitialDetails({MENU, isAuth, details, setDetails, handlerLoading}) {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{details.title}</h1>
            {isAuth ? "Welcome!": "Need auth"}
            {MENU.map((item, index) => {
                return (
                    <p key={index}>
                        {item.name}
                    </p>
                )
            })}
            <div>{details.description}</div>
            <button  onClick={()=> setDetails(prev => {
                return {
                    ...prev,
                    title: prev.title + '...'
                }
            })}>{details.buttonText}</button>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

            <button onClick={handlerLoading}>Loading</button>
        </>
    )
}

export const Details = memo(InitialDetails)