import styles from "./EmailBuilder.module.scss"
import {Bold, Eraser, Italic, Underline} from "lucide-react";
import parse from 'html-react-parser'
import {useEditor} from "../../hooks/useEditor";
import React from "react";


export function EmailBuilder() {

    const {text, setText, textRef, mutate, isPending, updateSelection, applyFormat} = useEditor()

    const buttons = [
        {action: () => setText(''), icon: <Eraser size={17}/>},
        {action: () => applyFormat("bold"), icon: <Bold size={17}/>},
        {action: () => applyFormat("italic"), icon: <Italic size={17}/>},
        {action: () => applyFormat("underline"), icon: <Underline size={17}/>},
    ]

    function OnChangeHandler(setText: (value: (((prevState: string) => string) | string)) => void) {
        return (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);
    }

    return (
        <div>
            <h1>Email builder</h1>
            {text
                ? <div className={styles.preview}>{parse(text)}</div>
                : ''
            }
            <div className={styles.card}>
          <textarea
              ref={textRef}
              className={styles.editor}
              onSelect={updateSelection}
              value={text}
              onChange={OnChangeHandler(setText)}
          >
              {text}
          </textarea>
                <div className={styles.actions}>
                    <div className={styles.tools}>
                        {buttons.map((button, index) => (
                            <button key={index} onClick={button.action}>
                                {button.icon}
                            </button>
                        ))}
                    </div>
                    <button disabled={isPending} onClick={() => mutate()}>Send now</button>
                </div>

            </div>

        </div>
    )
}

