import {memo, useState} from "react";
import {DetailsItem, MenuItem} from "../types";

interface DetailsPropsType {
    MENU: MenuItem[],
    isAuth: boolean,
    details: DetailsItem,
    handlerLoading: () => void,
    setDetails: (updateFunc: (prevState: DetailsItem) => DetailsItem) => void
}


function InitialDetails({MENU, isAuth, details, setDetails, handlerLoading}: DetailsPropsType) {
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