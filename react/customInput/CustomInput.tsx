import React, {FC} from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
    'inputWrapper',
    'customLabel',
    'customInput',
    'labelContainer',
    'inputContainer',
    'errorMessage',
    'errorMessageText'
] as const

interface Props {
    text: string,
    value: string,
    onChange: Function,
    errorMessage: string
}

const CustomInput : FC<Props> = (props: Props) => {
    const handles = useCssHandles(CSS_HANDLES)

    return(
        <div className={`${handles.inputWrapper}`}>
            <div className={`${handles.labelContainer}`}>
                <label className={`${handles.customLabel}`}>{props.text}</label>
            </div>
            <div className={`${handles.inputContainer}`}>
                <input className={`${handles.customInput}`} type="text" value={props.value} 
                    onChange={(event:React.FormEvent<HTMLInputElement>) => props.onChange(event.currentTarget.value)}
                />  
            </div>
            <div className={`${handles.errorMessage}`}>
                <span className={`${handles.errorMessageText}`}>{props.errorMessage}</span>
            </div>
        </div>
    )
}

export default CustomInput